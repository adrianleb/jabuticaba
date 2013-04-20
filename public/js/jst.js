window.JST = {};
<<<<<<< HEAD
JST['audio_interface/wrap'] = function(__obj) {
=======
JST['descriptions/artists/list'] = function(__obj) {
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
      __out.push('<p>List all artists on Shuffler.fm.</p>');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
JST['descriptions/artists/search'] = function(__obj) {
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
      __out.push('<p>Search for an artist on Shuffler.fm.</p>');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
JST['descriptions/artists/single'] = function(__obj) {
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
      __out.push('<p>Fetch a single artist by ID on Shuffler.fm.</p>');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
JST['descriptions/authorizations/auth'] = function(__obj) {
>>>>>>> e843e7adb86a15df48c21f4cd2db30dfbbeb3eaa
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
<<<<<<< HEAD
      __out.push('<p>IM AN AUDIO INTERFACE, LOOK AT ME IM SO SEXY</p>');
=======
      __out.push('<p>This is the first step in the authorization process. You ask the Shuffler.fm user to authorize you to access data on user\'s behalf.</p>\n\n<p>If the user is not logged in, he is redirect to a login page. Otherwise we ask him for permission.</p>\n\n<p class="watch_out">Please note that this request\'s base URL is https://shuffler.fm (without the api subdomain).</p>');
>>>>>>> e843e7adb86a15df48c21f4cd2db30dfbbeb3eaa
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
<<<<<<< HEAD
JST['home'] = function(__obj) {
=======
JST['descriptions/authorizations/description'] = function(__obj) {
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
      __out.push('<p>For requests where you need user information or want to manage users\' data, the permission of the user is needed. On this API authorizations are managed via Shuffler-flavoured, three-legged OAuth 2.0. A nice short description of how OAuth 2.0 works: <a href=\'https://github.com/Mashape/mashape-oauth/blob/master/FLOWS.md#oauth-2-three-legged\'>https://github.com/Mashape/mashape-oauth/blob/master/FLOWS.md#oauth-2-three-legged</a>.</p>\n\n<h2>Scopes</h2>\n<p>Scopes define which part of the user\'s data may be accessed by the app and what the app may do with it (read/write). The Shuffler.fm API v2 defines five scopes:</p>\n<ul>\n  <li><b>users.r</b>: Read user\'s profile info.</li>\n  <li><b>users.favorites.r</b>: Read user\'s favorites.</li>\n  <li><b>users.favorites.m</b>: Manage user\'s favorites.</li>\n  <li><b>users.subscriptions.r</b>: Read user\'s subscriptions.</li>\n  <li><b>users.subscriptions.m</b>: Manage user\'s subscriptions.</li>\n</ul>\n');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
JST['descriptions/authorizations/token'] = function(__obj) {
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
      __out.push('<p>Once the user authorized your app, his browser sends you a <i>code</i> via a redirect. This code lives for one minute and can be exchanged for a non-expiring access_token in this request.</p>\n\n<p>This request should be done from your server, as your <b>app_secret</b> is supposed to be kept secret.</p>\n\n<p class="watch_out">Please note that this request\'s base URL is https://shuffler.fm (without the api subdomain).</p>');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
JST['descriptions/channels/by_key'] = function(__obj) {
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
      __out.push('<p>Getting a list of tracks from a channel.</p>\n\n<p>Many requests from the API work with channel keys. They are channel identifiers. You should always escape them.</p>');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
JST['descriptions/tracks/stream'] = function(__obj) {
>>>>>>> e843e7adb86a15df48c21f4cd2db30dfbbeb3eaa
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
<<<<<<< HEAD
      __out.push('  <section id="roll" class="roll"></section>\n');
=======
      __out.push('<p>Get a redirect to the track\'s streaming URL. This is only possible if the track is an MP3 and you have streaming access.</p>\n<p>For more info on getting streaming access, see <a href="#streaming_access">Streaming URLs</a></p>');
>>>>>>> e843e7adb86a15df48c21f4cd2db30dfbbeb3eaa
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
<<<<<<< HEAD
JST['menu'] = function(__obj) {
=======
JST['home'] = function(__obj) {
>>>>>>> e843e7adb86a15df48c21f4cd2db30dfbbeb3eaa
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
<<<<<<< HEAD
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
=======
    
      __out.push('  <section id="roll" class="roll"></section>\n');
>>>>>>> e843e7adb86a15df48c21f4cd2db30dfbbeb3eaa
    
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
      __out.push('<p>IM A LIST OF USER NODES OK?</p>');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
