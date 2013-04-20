// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Jabuticaba.Views.AudioInterface = (function(_super) {

    __extends(AudioInterface, _super);

    function AudioInterface() {
      return AudioInterface.__super__.constructor.apply(this, arguments);
    }

    AudioInterface.prototype.template = JST['audio_interface/wrap'];

    AudioInterface.prototype.el = "#audio-interface";

    AudioInterface.prototype.events = {
      "mousedown #audio-generator": "noteOn",
      "mouseup #audio-generator": "noteOff"
    };

    AudioInterface.prototype.initialize = function() {
      console.debug('init audio interface');
      return this.render();
    };

    AudioInterface.prototype.render = function() {
      return this.$el.append(this.template());
    };

    AudioInterface.prototype.noteOn = function(e) {
      var coord, eX, eY, elH, elW;
      elW = e.currentTarget.clientWidth;
      elH = e.currentTarget.clientHeight;
      eX = e.offsetX;
      eY = e.offsetY;
      coord = {
        x: eX / elW,
        y: eY / elH
      };
      console.log(coord);
      $(window).trigger('audio_gen_note_on', coord);
      return this.$(e.currentTarget).find('.audio_module_point').css({
        top: (coord.y * 100) + "%",
        left: (coord.x * 100) + "%"
      });
    };

    AudioInterface.prototype.noteOff = function(e) {
      return $(window).trigger('audio_gen_note_off');
    };

    return AudioInterface;

  })(Backbone.View);

}).call(this);
