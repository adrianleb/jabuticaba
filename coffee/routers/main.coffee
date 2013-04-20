class ShufflerDoc.Routers.Main extends Backbone.Router

  view: null

  routes:
    '': 'home'
    '*other': 'home'



  home: (key) ->
    unless @view instanceof ShufflerDoc.Views.Home
      @view = new ShufflerDoc.Views.Home(key)

