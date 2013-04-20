
class Jabuticaba.Views.Marcel extends Backbone.View

  template: JST['marcel']

  # Define main element to attach to
  el: "body"

  events:
    'click #send': 'send'
    'click #open-room': 'openRoom'
    'click #join-room': 'joinRoom'
    'click #generate-sound': 'generateSound'

  roomName: 'room-15'

  initialize: ->
    @incommingContext = new webkitAudioContext()
    @outputContext = new webkitAudioContext()
    window.marcel = @
    console.debug('init marcelzz')
    console.log 'hai'
    @room = new DataChannel()

    @room.onopen = (user_id) =>
      console.log('onopen: ' + user_id)

    @room.onUserLeft = (user_id) =>
      console.log('onUserLeft: ' + user_id)


    @incommingBuffer = @incommingContext.createBufferSource()
    @incommingBuffer.connect(@outputContext.destination)
    @incommingBuffer.buffer = 
    @incommingBuffer.start(0)


    @incommingContext.decodeAudioData @incommingBuffer, ((buffer) =>
      console.log 'income', buffer
    ), (err) =>
      console.log err, 'ERRORRRRR'

    
    @room.onmessage = (msg) =>
      console.log 'msg', msg
      # @$('#messages').append(msg + "<br/>")
      @$('#messages').append(msg)

      # https://github.com/danguer/blog-examples/blob/master/js/base64-binary.js 
      d = Base64Binary.decodeArrayBuffer(msg)
      console.log 'hai', d
      # @callMe(d)




      

    @render()

    @incommingBuffer = null

  render: ->
    @$el.html(@template())

  send: (e) ->
    nop e
    console.log sound
    cl('sending: ' + $('#msg').val())
    @room.send($('#msg').val())
    # @room.send sound
  
  openRoom: (e) ->
    nop e
    # create the room
    @room.open(@roomName)

  joinRoom: (e) ->
    nop e
    @room.connect(@roomName)

  generateSound: (e) ->
    nop e
    cl('nonono: 99999')
    # create osc...
    @o = @outputContext.createOscillator()
    console.log 'pa'
    # create gain
    @g = @outputContext.createGainNode()
    @g.gain = 0 # !!!!
    console.log 'ra'
    # create context.createMediaStreamDestination()
    @peer = @outputContext.createMediaStreamDestination()
    console.log 'ti'
    #plug 
    @o.connect(@g)
    @g.connect @peer
    peerConnection.addStream(@peer.stream)
    # @g.connect(@outputContext.destination)
    console.log 'yolo', peerConnection
    @o.start(0)
    # @js = @outputContext.createScriptProcessor(256, 1, 1) # (bufferSize, numberOfInputChannels, numberOfOutputChannels)
    # @o.frequency.value = 440


    # @js.onaudioprocess = (e) =>
    #   cl('onaudioprocess')
    #   # https://gist.github.com/jonleighton/958841
    #   # getChannelData(0) is a Float32Array
    #   msg = base64ArrayBuffer(e.inputBuffer.getChannelData(0).buffer)

    #   cl('sending: ' + msg)

    #   # send through the tubes
    #   @room.send(msg)

    #   # just copy the data to the js node output
    #   e.outputBuffer.getChannelData(0).set(e.inputBuffer.getChannelData(0))




    
    # we need to send it somewhere or else nothing runs.

    # @js.connect(@g)



