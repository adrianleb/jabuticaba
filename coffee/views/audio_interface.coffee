
class Jabuticaba.Views.AudioInterface extends Backbone.View

  template: JST['audio_interface/wrap']

  # Define main element to attach to
  el: "#audio-interface"

  initialize: ->
    console.debug('init audio interface')
    @render()

  render: ->
    @$el.append(@template())



