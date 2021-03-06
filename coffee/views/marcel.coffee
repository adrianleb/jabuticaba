
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
    @peerCon2()

    @room.onopen = (user_id) =>
      console.log('onopen: ' + user_id)

    @room.onUserLeft = (user_id) =>
      console.log('onUserLeft: ' + user_id)


    # @incommingBuffer = @incommingContext.createBufferSource()
    # @incommingBuffer.connect(@outputContext.destination)
    # @incommingBuffer.buffer = 
    # @incommingBuffer.start(0)


    # @incommingContext.decodeAudioData @incommingBuffer, ((buffer) =>
    #   console.log 'income', buffer
    # ), (err) =>
    #   console.log err, 'ERRORRRRR'

    
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
    @g.gain = 1 # !!!!
    console.log 'ra'
    # create context.createMediaStreamDestination()
    @peer = @outputContext.createMediaStreamDestination()
    console.log 'ti'
    #plug 
    @o.connect(@g)
    @g.connect @peer
    @g.connect @outputContext.destination
    window.pc1.addStream @peer.stream
    @o.noteOn(0)

    # @createPeerConnection()
    # peerConnection.addStream(@peer.stream)
    # @g.connect(@outputContext.destination)
    console.log 'yolo', window.pc1
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


  createPeerConnection: ->
    @pc1 = new webkitRTCPeerConnection(iceServers: [url: "stun:stun.l.google.com:19302"])
    @pc1.onicecandidate = (e) ->
      if !window.pc1 or !e or !e.candidate
        return false
      console.debug "onicecandidate"

      candidate = e.candidate
      window.pc1.addIceCandidate new RTCIceCandidate(
        sdpMLineIndex: candidate.sdpMLineIndex
        candidate: candidate.candidate
      )

    @pc1.onaddstream = ->
      console.debug "onaddstream"
      
    gotDescription1 = (desc) =>
      console.log 'hai description', desc
      @pc1.setLocalDescription desc
      @offer = desc

      # trace "Offer from pc1 \n" + desc.sdp
    @pc1.createOffer gotDescription1, null, { 'mandatory': { 'OfferToReceiveAudio': true, 'OfferToReceiveVideo': true } }
    console.log @offer, 'offer'

  connectToPeerConnection: ->
    console.log @offer
    desc = new RTCSessionDescription @offer
    gotDescription2 = (desc) =>
      # @pc1.setLocalDescription desc
      @pc1.setRemoteDescription desc
    @pc1.createAnswer gotDescription2, null, { 'mandatory': { 'OfferToReceiveAudio': true, 'OfferToReceiveVideo': true }}



  peerCon2: ->
window.rtcOnError = (err) ->
  window.alert err.message


window.pc1 = new webkitRTCPeerConnection(iceServers: [url: "stun:stun.l.google.com:19302"])
window.pc2 = new webkitRTCPeerConnection(iceServers: [url: "stun:stun.l.google.com:19302"])

window.onOfferCreated = (description) ->
  console.log 'desc?', description
  window.offer = description
  window.pc1.setLocalDescription window.offer, onPc1LocalDescriptionSet, rtcOnError


window.pc2.onaddstream = ->
  console.debug "onaddstream"

window.pc1.onaddstream = ->
  console.debug "onaddstream 1"


window.pc1.onicecandidate = (candidate) =>
  console.log candidate, 'cand?'
  cand = new RTCIceCandidate(candidate)
  console.log cand, 'CAND', cand.candidate
  if cand.candidate?
    window.pc2.addIceCandidate( cand )


window.pc2.onicecandidate = (candidate) =>
  console.log candidate, 'cand2?'
  cand = new RTCIceCandidate(candidate)
  if cand.candidate?
    window.pc1.addIceCandidate( cand )

window.pc1.onconnecting = (e) => cl 'CONNECTION'

window.pc1.createOffer(onOfferCreated, rtcOnError)

window.onPc1RemoteDescriptionSet = () ->
  cl('Yay, we finished signaling offers and answers')

window.onPc2LocalDescriptionSet = () ->
# // after this function returns, you'll start getting icecandidate events on pc2
  window.pc1.setRemoteDescription(window.answer, onPc1RemoteDescriptionSet, rtcOnError);


window.onAnswerCreated = (description) ->
  window.answer = description
  window.pc2.setLocalDescription(window.answer, onPc2LocalDescriptionSet, rtcOnError);

window.onPc2RemoteDescriptionSet = () ->
  window.pc2.createAnswer(onAnswerCreated, rtcOnError)


window.onPc1LocalDescriptionSet = ->
  # after this function returns, pc1 will start firing icecandidate events
  window.pc2.setRemoteDescription window.offer, onPc2RemoteDescriptionSet, rtcOnError




