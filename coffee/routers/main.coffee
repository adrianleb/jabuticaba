class Jabuticaba.Routers.Main extends Backbone.Router

  view: null

  routes:
    '': 'home'
    '*other': 'home'

  home: ->
    unless @view instanceof Jabuticaba.Views.Home
      @view = new Jabuticaba.Views.Home()

