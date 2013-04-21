// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Jabuticaba.Views.Marcel = (function(_super) {

    __extends(Marcel, _super);

    function Marcel() {
      return Marcel.__super__.constructor.apply(this, arguments);
    }

    Marcel.prototype.template = JST['marcel'];

    Marcel.prototype.el = "body";

    Marcel.prototype.events = {
      'click #send': 'send',
      'click #open-room': 'openRoom',
      'click #join-room': 'joinRoom',
      'click #generate-sound': 'generateSound'
    };

    Marcel.prototype.roomName = 'room-15';

    Marcel.prototype.initialize = function() {
      var _this = this;
      this.incommingContext = new webkitAudioContext();
      this.outputContext = new webkitAudioContext();
      window.marcel = this;
      console.debug('init marcelzz');
      console.log('hai');
      this.room = new DataChannel();
      this.room.onopen = function(user_id) {
        return console.log('onopen: ' + user_id);
      };
      this.room.onUserLeft = function(user_id) {
        return console.log('onUserLeft: ' + user_id);
      };
      this.incommingBuffer = this.incommingContext.createBufferSource();
      this.incommingBuffer.connect(this.outputContext.destination);
      this.incommingBuffer.buffer = this.incommingBuffer.start(0);
      this.incommingContext.decodeAudioData(this.incommingBuffer, (function(buffer) {
        return console.log('income', buffer);
      }), function(err) {
        return console.log(err, 'ERRORRRRR');
      });
      this.room.onmessage = function(msg) {
        var d;
        console.log('msg', msg);
        _this.$('#messages').append(msg);
        d = Base64Binary.decodeArrayBuffer(msg);
        return console.log('hai', d);
      };
      this.render();
      return this.incommingBuffer = null;
    };

    Marcel.prototype.render = function() {
      return this.$el.html(this.template());
    };

    Marcel.prototype.send = function(e) {
      nop(e);
      console.log(sound);
      cl('sending: ' + $('#msg').val());
      return this.room.send($('#msg').val());
    };

    Marcel.prototype.openRoom = function(e) {
      nop(e);
      return this.room.open(this.roomName);
    };

    Marcel.prototype.joinRoom = function(e) {
      nop(e);
      return this.room.connect(this.roomName);
    };

    Marcel.prototype.generateSound = function(e) {
      nop(e);
      cl('nonono: 99999');
      this.o = this.outputContext.createOscillator();
      console.log('pa');
      this.g = this.outputContext.createGainNode();
      this.g.gain = 0;
      console.log('ra');
      this.peer = this.outputContext.createMediaStreamDestination();
      console.log('ti');
      this.o.connect(this.g);
      this.g.connect(this.peer);
      peerConnection.addStream(this.peer.stream);
      console.log('yolo', peerConnection);
      return this.o.start(0);
    };

    return Marcel;

  })(Backbone.View);

}).call(this);
