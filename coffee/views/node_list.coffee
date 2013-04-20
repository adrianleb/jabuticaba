
class Jabuticaba.Views.NodeList extends Backbone.View

  template: JST['node_list/wrap']

  # Define main element to attach to
  el: "#node-list"


  # fake data...
  activeNodes: [
    {
      id:'1'
      alias: 'ur mom'
    },
    {
      id:'1'
      alias: 'ur mom'
    },
    {
      id:'1'
      alias: 'ur mom'
    }
  ]
  initialize: ->
    console.debug('initialize nodes wrap')
    @render()

  render: ->
    @$el.append(@template(activeNodes:@activeNodes))



