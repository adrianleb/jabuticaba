
class Jabuticaba.Views.NodeList extends Backbone.View

  template: JST['node_list/wrap']

  # Define main element to attach to
  el: "#node-list"

  initialize: ->
    console.debug('initialize nodes wrap')
    @render()

  render: ->
    @$el.append(@template())



