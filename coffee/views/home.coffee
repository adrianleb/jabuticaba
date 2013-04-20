
class ShufflerDoc.Views.Home extends Backbone.View

  template: JST['home']

  # Define main element to attach to
  el: "body"



  initialize: (key) ->
    @initialKey = key
    @resources = new ShufflerDoc.Collections.Resources()
    @render()

    @resources.fetch( 
      success: =>
        @loadResources()
    )


  render: ->
    @$el.find('#container').append(@template())


  loadResources: ->
    for resource in @resources.models
      do (resource) =>
        vi = new ShufflerDoc.Views.Resource(resource:resource)
        @$('#roll').append vi.el

    # load menu...
    menuVi = new ShufflerDoc.Views.ResourcesMenu(resources:@resources)
    @$('#nav').append menuVi.el

    @checkHash()

  checkHash: ->
    if window.location.hash.length
      active = window.location.hash
      screenDistance = $(active).offset().top
      $('body').animate({scrollTop: screenDistance},250)






