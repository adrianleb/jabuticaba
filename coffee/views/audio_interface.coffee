
class Jabuticaba.Views.AudioInterface extends Backbone.View

  template: JST['audio_interface/wrap']

  # Define main element to attach to
  el: "#audio-interface"

  events:
    "mousedown #audio-generator" : "noteOn"
    "mouseup #audio-generator" : "noteOff"

    "mousemove #audio-modulator" : "modulatorDragger"
    "mousedown #audio-modulator" : "modulatorDragger"

    
  initialize: ->
    console.debug('init audio interface')
    @render()

  render: ->
    @$el.append(@template())


  # SOUND GENERATOR
  noteOn: (e) ->
    @setModulePointCoord e, (coord) =>
      unless (coord.x is 0) and (coord.y is 0)
        $(window).trigger 'audio_gen_note_on', coord
        console.log 'happy gen coord callback', coord


    
  noteOff: (e) ->
    $(window).trigger 'audio_gen_note_off'


  # SOUND Modulator
  # can be less duplicated code...one day maybe
  modulatorDragger: (e) ->
    if e.which is 1
      console.log 'goferit'
      @setModulePointCoord e, (coord) =>
        unless (coord.x is 0) and (coord.y is 0)
          $(window).trigger 'audio_mod', coord
          console.log 'happy mod coord callback', coord



  setModulePointCoord: (e, callback) ->
    elW =  e.currentTarget.clientWidth
    elH = e.currentTarget.clientHeight
    eX = e.offsetX
    eY = e.offsetY
    coord = {x: eX / elW, y: eY / elH }
    if coord.x <= 1 and coord.y <= 1
      @$(e.currentTarget).find('.audio_module_point').css({top:(coord.y * 100)+ "%", left:(coord.x * 100) + "%"})
      if callback?
        callback coord



