
class Jabuticaba.Views.Home extends Backbone.View

  template: JST['home']

  # Define main element to attach to
  el: "body"

  initialize: ->
    console.debug('initialize')
    @nodeList = new Jabuticaba.Views.NodeList()
    @audioInterface = new Jabuticaba.Views.AudioInterface()
    # @initAudioInterface()
    # @initNodeList()


  # initNodeList: ->

  render: ->
    @$el.find('#container').append(@template())



