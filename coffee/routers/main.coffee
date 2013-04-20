class Jabuticaba.Routers.Main extends Backbone.Router

  view: null

  routes:
    '': 'home'
    'marcel': 'marcel'
    '*other': 'home'

  home: ->
    unless @view instanceof Jabuticaba.Views.Home
      @view = new Jabuticaba.Views.Home()

  marcel: ->
    @view = new Jabuticaba.Views.Marcel()
