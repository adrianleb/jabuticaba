window.JST = {};
JST['home'] = function(__obj) {
  if (!__obj) __obj = {};
  var __out = [], __capture = function(callback) {
    var out = __out, result;
    __out = [];
    callback.call(this);
    result = __out.join('');
    __out = out;
    return __safe(result);
  }, __sanitize = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else if (typeof value !== 'undefined' && value != null) {
      return __escape(value);
    } else {
      return '';
    }
  }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
  __safe = __obj.safe = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else {
      if (!(typeof value !== 'undefined' && value != null)) value = '';
      var result = new String(value);
      result.ecoSafe = true;
      return result;
    }
  };
  if (!__escape) {
    __escape = __obj.escape = function(value) {
      return ('' + value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };
  }
  (function() {
    (function() {
    
      __out.push('  <section id="roll" class="roll"></section>\n');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
JST['node_list/wrap'] = function(__obj) {
  if (!__obj) __obj = {};
  var __out = [], __capture = function(callback) {
    var out = __out, result;
    __out = [];
    callback.call(this);
    result = __out.join('');
    __out = out;
    return __safe(result);
  }, __sanitize = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else if (typeof value !== 'undefined' && value != null) {
      return __escape(value);
    } else {
      return '';
    }
  }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
  __safe = __obj.safe = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else {
      if (!(typeof value !== 'undefined' && value != null)) value = '';
      var result = new String(value);
      result.ecoSafe = true;
      return result;
    }
  };
  if (!__escape) {
    __escape = __obj.escape = function(value) {
      return ('' + value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };
  }
  (function() {
    (function() {
      var node, _i, _len, _ref;
    
      __out.push('<div class="nodes">\n  ');
    
      console.log(this.activeNodes);
    
      __out.push('\n  ');
    
      _ref = this.activeNodes;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        node = _ref[_i];
        __out.push('\n    ');
        console.log(node);
        __out.push('\n    <div class="node" data-id="');
        __out.push(__sanitize(node.id));
        __out.push('">\n      <p class="node_alias">');
        __out.push(__sanitize(node.alias));
        __out.push('</p>\n    </div>\n  ');
      }
    
      __out.push('\n</div>');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
JST['audio_interface/wrap'] = function(__obj) {
  if (!__obj) __obj = {};
  var __out = [], __capture = function(callback) {
    var out = __out, result;
    __out = [];
    callback.call(this);
    result = __out.join('');
    __out = out;
    return __safe(result);
  }, __sanitize = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else if (typeof value !== 'undefined' && value != null) {
      return __escape(value);
    } else {
      return '';
    }
  }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
  __safe = __obj.safe = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else {
      if (!(typeof value !== 'undefined' && value != null)) value = '';
      var result = new String(value);
      result.ecoSafe = true;
      return result;
    }
  };
  if (!__escape) {
    __escape = __obj.escape = function(value) {
      return ('' + value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };
  }
  (function() {
    (function() {
    
      __out.push('<div class="audio_source"></div>\n<div id="audio-modulator" class="audio_module audio_modulator">\n  <span class="audio_module_point"></span>\n</div>\n<div id="audio-generator" class="audio_module audio_generator">\n  <span class="audio_module_point"></span>\n</div>\n\n<div class="audio_output"></div>');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
JST['marcel'] = function(__obj) {
  if (!__obj) __obj = {};
  var __out = [], __capture = function(callback) {
    var out = __out, result;
    __out = [];
    callback.call(this);
    result = __out.join('');
    __out = out;
    return __safe(result);
  }, __sanitize = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else if (typeof value !== 'undefined' && value != null) {
      return __escape(value);
    } else {
      return '';
    }
  }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
  __safe = __obj.safe = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else {
      if (!(typeof value !== 'undefined' && value != null)) value = '';
      var result = new String(value);
      result.ecoSafe = true;
      return result;
    }
  };
  if (!__escape) {
    __escape = __obj.escape = function(value) {
      return ('' + value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };
  }
  (function() {
    (function() {
    
      __out.push('\n<h1>Marcel</h1>\n\n<a id="open-room" href="#">Open Room</a> === \n<a id="join-room" href="#">Join Room</a>\n<br/>\n\n<a id="generate-sound" href="#">Generate sound</a>\n<br/>\n\nNew message:<br>\n<input type="text" id="msg" value="braca"></input><a id="send" href="#">Send</a>\n<br/>\n\nMessages:<br>\n<div id="messages">\n</div>\n\n\n');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
JST['menu'] = function(__obj) {
  if (!__obj) __obj = {};
  var __out = [], __capture = function(callback) {
    var out = __out, result;
    __out = [];
    callback.call(this);
    result = __out.join('');
    __out = out;
    return __safe(result);
  }, __sanitize = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else if (typeof value !== 'undefined' && value != null) {
      return __escape(value);
    } else {
      return '';
    }
  }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
  __safe = __obj.safe = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else {
      if (!(typeof value !== 'undefined' && value != null)) value = '';
      var result = new String(value);
      result.ecoSafe = true;
      return result;
    }
  };
  if (!__escape) {
    __escape = __obj.escape = function(value) {
      return ('' + value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };
  }
  (function() {
    (function() {
      var h2, resource, _i, _j, _len, _len1, _ref, _ref1;
    
      __out.push('<h1 class="menu_title">Shuffler.fm API v2</h1>\n<h3 class="menu_subtitle">Table of content</h3>\n<br/>\n<br/>\n<ul>\n  <li><a href="#general_notes">General notes</a></li>\n  <ul>\n  ');
    
      _ref = ["app_key", "wrappers", "example", "responses", "pagination", "rate_limiting", "streaming_access", "linking_back"];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        h2 = _ref[_i];
        __out.push('\n    <li><a href="#');
        __out.push(__sanitize(h2));
        __out.push('">');
        __out.push(__sanitize(h2.replace('_', ' ')));
        __out.push('</a></li>\n  ');
      }
    
      __out.push('\n  </ul>\n</ul>\n<ul>\n  <li><a href="#resources">Resources</a></li>\n  <ul>\n  ');
    
      _ref1 = this.resources.models;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        resource = _ref1[_j];
        __out.push('\n    <li><a href="#');
        __out.push(__sanitize(resource.get('name').toLowerCase()));
        __out.push('">');
        __out.push(__sanitize(resource.get('name')));
        __out.push('</a></li>\n  ');
      }
    
      __out.push('\n  </ul>\n</ul>\n\n<ul>\n  <li><a href="#">More</a></li>\n  <ul>\n    <li><a href="http://shuffler.fm/developers/api-ua">Usage agreement</a> →</li>\n    <li><a href="http://shuffler.fm/developers">Developers</a> →</li>\n    <li><a href="/v1">API v1 docs</a> →</li>\n    <li><a href="#changelog">Change log</a> →</li>\n  </ul>\n</ul>\n\n<!-- <ul id="tools">\n  <li id="expand_all">+ expand all</li>\n  <li id="collapse_all">- collapse all</li>\n  <li id="go_up">↑ go up</li>\n</ul> -->');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
