
class Jabuticaba.Views.Home extends Backbone.View

  template: JST['home']

  # Define main element to attach to
  el: "body"

  initialize: ->
    console.debug('initialize')

  render: ->
    @$el.find('#container').append(@template())


