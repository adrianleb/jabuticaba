class AudioBoss

  effects: {}

  rootScales: 
    'aMinor': [21, 23, 24, 26, 28, 29, 31]

  scale: []

  source: false

  initialize: ->
    @context = new webkitAudioContext()
    
    @initOutput() # Connect the output
    @initInput() # Connect the source

    @initGenerators() # Init and connect the generators
    @initEffects() # Init and connect the effects

    @initExtendedScale('aMinor')
    
    @initEvents() # Listen!

  initOutput: ->
    @outGainNode = @context.createGainNode()
    @outGainNode.gain.value = 0.7
    @outGainNode.connect(@context.destination)

  initInput: ->
    @sourcePanner = @context.createPanner()
    @sourcePanner.setPosition(0.7, 0, 0)
    @sourcePanner.connect(@outGainNode)

    @sourceGainNode = @context.createGainNode()
    @sourceGainNode.gain.value = 0.5
    @sourceGainNode.connect(@sourcePanner)

  initGenerators: ->

    @oscPanner = @context.createPanner()
    @oscPanner.setPosition(-0.7,0,0)

    @oscGain = @context.createGainNode()
    @oscGain.gain.value = 0
    @oscGain.connect(@oscPanner)

    @oscPanner.connect(@outGainNode)

    @osc1 = @context.createOscillator()
    @osc1.type = 0
    @osc1.connect(@oscGain)
    @osc1.noteOn(0)

    @osc2 = @context.createOscillator()
    @osc2.type = 2
    @osc2.connect(@oscGain)
    @osc2.noteOn(0)

    @oscOsc = @context.createOscillator()
    @oscOsc.type = 0
    @oscOsc.frequency.value = 0.25
    @oscOsc.noteOn(0)

    @oscOscGain = @context.createGainNode()
    @oscOscGain.gain.value = 0.5
    @oscOsc.connect(@oscOscGain)

    @oscOscGain.connect(@osc1.frequency)

  initEvents: ->
    $(window).on 'audio_gen_note_on', (e, data) =>
      freq = @floatToFreq(data['x'])
      @setOscFrequencies(freq)
      @ramp(0.5-data['y']/2, 0.2)
    
    $(window).on 'audio_gen_note_off', (e) =>
      @ramp(0, 0.5)

    $(window).on 'octave', (e, data) =>
      @initExtendedScale('aMinor', data['octave'])

    $(window).on 'audio_mod', (e, data) =>
      @setEffect(data['mod_type'], data['x'], data['y'])

  ramp: (value, length) ->
    now = @context.currentTime
    @oscGain.gain.cancelScheduledValues(now)
    @oscGain.gain.setValueAtTime(@oscGain.gain.value, now)
    @oscGain.gain.linearRampToValueAtTime(value, now + length)

  setOscFrequencies: (freq) ->
    @osc1.frequency.value = freq
    @osc2.frequency.value = freq

  # Transform a float into a frequency from scale
  floatToFreq: (f) ->
    
    #return Math.min(0, Math.max(@scales[scale][Math.round((f*(@scales[scale].length-1)))], @scales[scale].length-1)
    return @scale[Math.round((f*(@scale.length-1)))]

  # This function takes a low-pitch, array 
  # of numbered notes and transforms them into 
  # a longer array of frequencies.
  initExtendedScale: (scale, octave=3) ->
    l = @rootScales[scale].length
    
    @scale=[]
    for v, i in @rootScales[scale]
      for j in [0..2]
        @scale[i+(j*l)] = Math.pow(2, ((v + (12*(j+octave)))-69)/12) * 440

  initEffects: ->

    if not @source
      return "Oh no!"

    @tuna = new Tuna(@context)

    @effects['overdrive'] = new @tuna.Overdrive(
      outputGain: 0.3
      drive: 0.5
      curveAmount: 0.4
      algorithmIndex: 2
      bypass: true
    )

    @effects['delay'] = new @tuna.Delay(
      feedback: 0
      delayTime: 250
      wetLevel: 1
      dryLevel: 1
      bypass: true
    )

    @effects['chorus'] = new @tuna.Chorus(
      feedback: 0.5
      rate: 1.5
      delay: 0.005
      bypass: true
    )

    @effects['tremolo'] = new @tuna.Tremolo(
        intensity: 0.3    # 0 to 1
        rate: 0.1         # 0.001 to 8
        stereoPhase: 0    # 0 to 180
        bypass: false
    )

    _.each @effects, (effect) =>
      @source.connect(effect.input)
      effect.connect(@sourceGainNode)

  silenceEffects: ->

    for effect in @effects
      effect.bypass = true

  setEffect: (effectName, v1, v2) ->
    
    @silenceEffects()

    if effectName is 'overdrive'
      @effects[effectName].bypass = false
      @effects[effectName].drive = v1
      @effects[effectName].curveAmount = v2

    if effectName is 'delay'
      @effects[effectName].bypass = false
      @effects[effectName].feedback = v1
      @effects[effectName].delayTime = v2*1000

    if effectName is 'chorus'
      @effects[effectName].bypass = false
      @effects[effectName].rate = v1*20
      @effects[effectName].feedback = Math.min(v2, 0.95)

    if effectName is 'tremolo'
      @effects[effectName].bypass = false
      @effects[effectName].rate = v1*8
      @effects[effectName].intensity = v2

window.AudioBoss = new AudioBoss()