// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Jabuticaba.Routers.Main = (function(_super) {

    __extends(Main, _super);

    function Main() {
      return Main.__super__.constructor.apply(this, arguments);
    }

    Main.prototype.view = null;

    Main.prototype.routes = {
      '': 'home',
      'marcel': 'marcel',
      '*other': 'home'
    };

    Main.prototype.home = function() {
      if (!(this.view instanceof Jabuticaba.Views.Home)) {
        return this.view = new Jabuticaba.Views.Home();
      }
    };

    Main.prototype.marcel = function() {
      return this.view = new Jabuticaba.Views.Marcel();
    };

    return Main;

  })(Backbone.Router);

}).call(this);
