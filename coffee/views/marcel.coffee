
class Jabuticaba.Views.Marcel extends Backbone.View

  template: JST['marcel']

  # Define main element to attach to
  el: "body"

  events:
    'click #send': 'send'
    'click #open-room': 'openRoom'
    'click #join-room': 'joinRoom'


  initialize: ->
    console.debug('init marcelzz')
    @room = new DataChannel('room')

    @room.onopen = (user_id) =>
      console.log('onopen: ' + user_id)

    @room.onUserLeft = (user_id) =>
      console.log('onUserLeft: ' + user_id)

    @room.onmessage = (msg) =>
      @$('#messages').append(msg + "<br/>")


    @render()


  render: ->
    @$el.append(@template())

  send: (e) ->
    nop e
    cl('sending: ' + $('#msg').val())
    @room.send($('#msg').val())
  
  openRoom: (e) ->
    nop e
    # create the room
    @room.open('room')

  joinRoom: (e) ->
    nop e
    @room.connect('room')


