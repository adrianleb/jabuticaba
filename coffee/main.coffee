window.Jabuticaba =
  Models: {}
  Collections: {}
  Views: {}
  Routers: {}

  init: ->
    # Initialize Routers
    @Routers.main = new Jabuticaba.Routers.Main()
    Backbone.history.start()
    AudioBoss.initialize() # Break conventions for the heck of it

$ ->
  Jabuticaba.init()
