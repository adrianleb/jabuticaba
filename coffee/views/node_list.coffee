
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
      id:'2'
      alias: 'ur dad'
    },
    {
      id:'3'
      alias: 'ur uncle'
    }
  ]
  initialize: ->
    console.debug('initialize nodes wrap')
    @render()

  render: ->
    @$el.append(@template(activeNodes:@activeNodes))



