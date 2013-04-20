
class Jabuticaba.Views.AudioInterface extends Backbone.View

  template: JST['audio_interface/wrap']

  # Define main element to attach to
  el: "#audio-interface"

  events:
    "mousedown #audio-generator" : "noteOn"
    "mouseup #audio-generator" : "noteOff"
  initialize: ->
    console.debug('init audio interface')
    @render()

  render: ->
    @$el.append(@template())


  # SOUND GENERATOR
  noteOn: (e) ->
    elW =  e.currentTarget.clientWidth
    elH = e.currentTarget.clientHeight
    eX = e.offsetX
    eY = e.offsetY
    coord = {x: eX / elW, y: eY / elH }
    console.log coord
    $(window).trigger 'audio_gen_note_on', coord
    @$(e.currentTarget).find('.audio_module_point').css({top:(coord.y * 100)+ "%", left:(coord.x * 100) + "%"})

  noteOff: (e) ->
    $(window).trigger 'audio_gen_note_off'



