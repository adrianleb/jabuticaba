window.ShufflerDoc =
  Models: {}
  Collections: {}
  Views: {}
  Routers: {}

  init: ->
    # Initialize Routers
    @Routers.main = new ShufflerDoc.Routers.Main()
    Backbone.history.start()

$ ->
  ShufflerDoc.init()