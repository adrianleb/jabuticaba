class AudioBoss

  effects: {}

  scales: 
    'aMinor': [33, 35, 36, 38, 40, 41, 43]

  initialize: ->
    @context = new webkitAudioContext()
    
    @initGenerators()
    #@initEffects()

    @initExtendedScale('aMinor')
    
    @initEvents()

  initGenerators: ->

    @oscGain = @context.createGainNode()
    @oscGain.gain.value = 0
    @oscGain.connect(@context.destination)

    @osc1 = @context.createOscillator()
    @osc1.type = 0
    @osc1.connect(@oscGain)
    @osc1.noteOn(0)

    @osc2 = @context.createOscillator()
    @osc2.type = 3
    @osc2.connect(@oscGain)
    @osc2.noteOn(0)

  initEvents: ->
    $(window).on 'audio_gen_note_on', (e, data) =>
      freq = @floatToFreq(data['x'])
      @setOscFrequencies(freq)
      @ramp(0.5-data['y']/2, 0.2)
    
    $(window).on 'audio_gen_note_off', (e) =>
      @ramp(0, 0.5)

  ramp: (value, length) ->
    now = @context.currentTime
    @oscGain.gain.cancelScheduledValues(now)
    @oscGain.gain.setValueAtTime(@oscGain.gain.value, now)
    @oscGain.gain.linearRampToValueAtTime(value, now + length)

  setOscFrequencies: (freq) ->
    @osc1.frequency.value = freq
    @osc2.frequency.value = freq

  # Transform a float into a frequency from scale
  floatToFreq: (f, scale='aMinor') ->
    
    #return Math.min(0, Math.max(@scales[scale][Math.round((f*(@scales[scale].length-1)))], @scales[scale].length-1)
    return @scales[scale][Math.round((f*(@scales[scale].length-1)))]

  # This function takes a low-pitch, array 
  # of numbered notes and transforms them into 
  # a longer array of frequencies.
  initExtendedScale: (scale) ->
    l = @scales[scale].length
    for v, i in @scales[scale]
      for j in [0..5]
        @scales[scale][i+(j*l)] = Math.pow(2, ((v + (12*j))-69)/12) * 440

  initEffects: ->

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
      wetLevel: 0.5
      dryLevel: 0.5
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
      effect.connect(@context.destination)

  silenceEffects: ->

    for effect in @effects
      effect.bypass = true

  setEffect: (effectName, v1, v2) ->
    
    if effectName is 'overdrive'
      @effects[effectName].bypass = false
      @effects[effectName].drive = v1
      @effects[effectName].curveAmount = v2

    if effectName is 'overdrive'
      @effects[effectName].bypass = false
      @effects[effectName].feedback = v1
      @effects[effectName].delayTime = v2

    if effectName is 'chorus'
      @effects[effectName].bypass = false
      @effects[effectName].rate = v1*20
      @effects[effectName].feedback = v2

    if effectName is 'tremolo'
      @effects[effectName].bypass = false
      @effects[effectName].rate = v1*8
      @effects[effectName].intensity = v2

window.AudioBoss = new AudioBoss()