class AudioBoss

  dsp: null

  initialize: ->

    @dsp = audioLib.Sink((sampleBuffer) ->
        # Fill the buffer here.
        console.log('audioLib started')
    );