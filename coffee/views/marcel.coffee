
class Jabuticaba.Views.Marcel extends Backbone.View

  template: JST['marcel']

  # Define main element to attach to
  el: "body"

  initialize: ->
    console.debug('initialize marcel')

  render: ->
    @$el.find('#container').append(@template())



