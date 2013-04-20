class AudioBoss

  effectSlots: [null,null]

  scales: 
    'aMinor': [33, 35, 36, 38, 40, 41, 43]

  initialize: ->
    @context = new webkitAudioContext()
    
    @osc1 = @context.createOscillator()
    @osc1.type = 0
    @osc1.frequency.value = 0
    @osc1.connect(@context.destination)
    @osc1.noteOn(0)

    @osc2 = @context.createOscillator()
    @osc2.type = 1
    @osc2.frequency.value = 0
    @osc2.connect(@context.destination)
    @osc2.noteOn(0)

    @tuna = new Tuna(@context)

    @initExtendedScale('aMinor')
    
    @initEvents()

  initEvents: ->
    $(window).on 'audio_gen_note_on', (e, data) =>
      freq = @floatToFreq(data['x'])
      console.log(freq)
      @setOscFrequencies(freq)
    
    $(window).on 'audio_gen_note_off', (e) =>
      console.log('note off')
      @setOscFrequencies(0)

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

  setEffect: (slot, effectName, amount) ->

    if not effectName
      # Disconnect existing effect at slot n
    else

      # Disconnect old effect
      # if effectSlots[slot]
      #   @source.connect(effectSlots[slot])
      #   effectSlots[slot](@context)

      if effectName is 'overdrive'
        effectSlots[slot] = new @tuna.Overdrive(
          outputGain: 0.6
          drive: amount
          curveAmount: 0.4
          algorithmIndex: 2
        )

      else if effectName is 'delay'
        effectSlots[slot] = new @tuna.Delay(
          feedback: amount,
          delayTime: 250,
          wetLevel: 0.5,
          dryLevel: 0.5
        )

      # Connect them
      # @source.connect(effect)
      # effect(@context)

window.AudioBoss = new AudioBoss()