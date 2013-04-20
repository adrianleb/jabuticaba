
class Jabuticaba.Views.AudioInterface extends Backbone.View

  template: JST['audio_interface/wrap']

  # Define main element to attach to
  el: "#audio-interface"

  events:
    "mousedown #audio-generator" : "noteOn"
    "mouseup #audio-generator" : "noteOff"

    "mousemove #audio-modulator" : "modulatorDragger"
    "mousedown #audio-modulator" : "modulatorDragger"

    "change #instrument-picker" : "pickInstrument" 
    "change #octave-picker" : "pickOctave" 
    
  initialize: ->
    console.debug('init audio interface')
    @render()
    @heroicOn('#audio-generator', 'red', 50, 300)
    @heroicOn('.audio_source', 'green', 40, 310)
    @heroicOn('.audio_output', 'green', 51, 289)

  heroicOn: (el, cls, t1, t2) ->
    $(el).addClass(cls)
    setTimeout((=>
      @heroicOff(el, cls, t1, t2)
    ), t1)

  heroicOff: (el, cls, t1, t2) ->
    $(el).removeClass(cls)
    setTimeout((=>
      @heroicOn(el, cls, t1, t2)
    ), t2)

  render: ->
    @$el.append(@template())

  pickInstrument: (e) ->
    $(window).trigger 'instrument', {instrument: e.currentTarget.value}
    console.log 'happy pickinst coord callback'

  pickOctave: (e) ->
    $(window).trigger 'octave', {octave: e.currentTarget.value}
    console.log 'happy octave coord callback'


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
    unless $(e.target).is '.audio_module_point'
      elW =  e.currentTarget.clientWidth
      elH = e.currentTarget.clientHeight
      eX = e.offsetX
      eY = e.offsetY
      console.log elW, elH, eX, eY
      coord = {x: eX / elW, y: eY / elH }
      if coord.x <= 1 and coord.y <= 1
        @$(e.currentTarget).find('.audio_module_point').css({top:(coord.y * 100)+ "%", left:(coord.x * 100) + "%"})
        if callback?
          callback coord



