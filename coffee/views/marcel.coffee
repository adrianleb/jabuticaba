
class Jabuticaba.Views.Marcel extends Backbone.View

  template: JST['marcel']

  # Define main element to attach to
  el: "body"

  events:
    '#send click': 'send'
    '#open-room': 'openRoom'
    '#join-room': 'joinRoom'


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
    @$el.find('#container').append(@template())


  send: ->
    @room.send(@$('#msg').val())

  
  openRoom: ->
    # create the room
    @room.open('room')

  joinRoom: ->
    @room.connect('room')


