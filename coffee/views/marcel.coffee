
class Jabuticaba.Views.Marcel extends Backbone.View

  template: JST['marcel']

  # Define main element to attach to
  el: "body"

  events:
    'click #send': 'send'
    'click #open-room': 'openRoom'
    'click #join-room': 'joinRoom'
    'click #generate-sound': 'generateSound'

  roomName: 'room-9'

  initialize: ->
    console.debug('init marcelzz')
    @room = new DataChannel()

    @room.onopen = (user_id) =>
      console.log('onopen: ' + user_id)

    @room.onUserLeft = (user_id) =>
      console.log('onUserLeft: ' + user_id)

    @room.onmessage = (msg) =>
      # @$('#messages').append(msg + "<br/>")
      @$('#messages').append(msg)

      # https://github.com/danguer/blog-examples/blob/master/js/base64-binary.js 
      d = Base64Binary.decodeArrayBuffer(msg)
      @incommingContext.decodeAudioData msg, (buffer) ->
        @incommingBuffer = buffer

    @render()

    @incommingContext = new webkitAudioContext()
    @outputContext = new webkitAudioContext()

    @incommingBuffer = null

  render: ->
    @$el.append(@template())

  send: (e) ->
    nop e
    cl('sending: ' + $('#msg').val())
    @room.send($('#msg').val())
  
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
    @o = @outputContext.createOscillator()
    @js = @outputContext.createScriptProcessor(256, 1, 1) # (bufferSize, numberOfInputChannels, numberOfOutputChannels)
    @o.frequency.value = 440
    @o.connect(@js)

    @js.onaudioprocess = (e) =>
      cl('onaudioprocess')
      # https://gist.github.com/jonleighton/958841
      # getChannelData(0) is a Float32Array
      msg = base64ArrayBuffer(e.inputBuffer.getChannelData(0).buffer)

      cl('sending: ' + msg)
      # send through the tubes
      @room.send(msg)

    @o.start(0)
    
    # we need to send it somewhere or else nothing runs.
    @g = @outputContext.createGainNode()
    @js.connect(@g)
    @g.gain = 0 # !!!!
    @g.connect(@outputContext.destination)



