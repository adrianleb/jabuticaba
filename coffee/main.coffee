window.Jabuticaba =
  Models: {}
  Collections: {}
  Views: {}
  Routers: {}

  init: ->
    # Initialize Routers
    @Routers.main = new Jabuticaba.Routers.Main()
    Backbone.history.start()

$ ->
  Jabuticaba.init()
