window.JST = {};
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
      __out.push('<p>This is the first step in the authorization process. You ask the Shuffler.fm user to authorize you to access data on user\'s behalf.</p>\n\n<p>If the user is not logged in, he is redirect to a login page. Otherwise we ask him for permission.</p>\n\n<p class="watch_out">Please note that this request\'s base URL is https://shuffler.fm (without the api subdomain).</p>');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
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
JST['descriptions/channels/resource'] = function(__obj) {
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
      __out.push('<p>Channel responses follow the Activity Streams JSON specification (http://activitystrea.ms/specs/json/1.0/).\n<br/>\nIn its simplest form, an activity consists of an actor, a verb, an object and a target. \n<ul>\n  <li>on genre channels the actor is “site”, the verb is “post”, the object is “track” and the target is implicit.</li>\n  <li>on site channels, the actor will always be the same.</li>\n</p>\n\n<h2>List of channel keys</h2>\n<ul>\n  <li>\n    <h3>Genre channels</h3>\n    <ul>\n      <li>/channels/idm</li>\n      <li>/channels/uk+garage</li>\n    </ul>\n  </li>\n  <li>\n    <h3>Media channels</h3>\n    <ul>\n      <li>\n        <b>MP3 tracks:</b> /channels/media:mp3\n      </li>\n      <li><b>YouTube tracks:</b> /channels/media:youtube</li>\n      <li><b>Vimeo tracks:</b> /channels/media:vimeo</li>\n      <li><b>SoundCloud tracks:</b> /channels/media:soundcloud</li>\n      <li><b>Official.fm tracks:</b> /channels/media:officialfm</li>\n    </ul>\n  </li>\n  <li>\n    <h3>Site channels</h3>\n    <ul>\n      <li>/channels/site:37</li>\n    </ul>\n  </li>\n  <li>\n    <h3>Artist channels</h3>\n    <ul>\n      <li>/channels/artist:419</li>\n    </ul>\n  </li>\n</ul>');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
JST['descriptions/tracks/stream'] = function(__obj) {
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
      __out.push('<p>Get a redirect to the track\'s streaming URL. This is only possible if the track is an MP3 and you have streaming access.</p>\n<p>For more info on getting streaming access, see <a href="#streaming_access">Streaming URLs</a></p>');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
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
JST['resource'] = function(__obj) {
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
      var method, method_desc, resource_desc, _i, _len, _ref;
    
      __out.push('<section class="resource" id="');
    
      __out.push(__sanitize(this.resource.get('name').toLowerCase()));
    
      __out.push('">\n  <h2 class="resource_name">\n    ');
    
      __out.push(__sanitize(this.resource.get('name')));
    
      __out.push('\n  </h2>\n  <div class="resource_description">\n    ');
    
      if (this.resource.get('description') != null) {
        __out.push('\n      ');
        if (this.resource.get('description').indexOf('template:') === 0) {
          __out.push('\n        ');
          resource_desc = "descriptions/" + this.resource.get('description').replace('template:', '').replace(':', '/');
          __out.push('\n        ');
          __out.push(JST[resource_desc] != null ? JST[resource_desc]() : void 0);
          __out.push('\n      ');
        }
        __out.push('\n    ');
      }
    
      __out.push('\n  </div>\n  ');
    
      _ref = this.resource.get('methods');
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        method = _ref[_i];
        __out.push('\n  <div class="method">\n    <h2 class="method_info">\n      <span class="method_method ');
        __out.push(__sanitize(method.method.toLowerCase()));
        __out.push('">');
        __out.push(__sanitize(method.method));
        __out.push('</span> \n      <span class="method_name">');
        __out.push(method.name.replace(/{(.+?)}/g, '<span class="method_name_param">{$1}</span>'));
        __out.push('</span> \n      <span class="method_return">');
        __out.push(__sanitize(method.returns));
        __out.push('</span> </h2>\n    <div class="method_more">\n      ');
        __out.push('\n      <div class="method_description">\n        ');
        if (method.description != null) {
          __out.push('\n          ');
          if (method.description.indexOf('template:') === 0) {
            __out.push('\n            ');
            method_desc = "descriptions/" + method.description.replace('template:', '').replace(':', '/');
            __out.push('\n            ');
            __out.push(JST[method_desc] ? JST[method_desc]() : void 0);
            __out.push('\n            ');
          } else {
            __out.push('\n            <p>');
            __out.push(__sanitize(method.description));
            __out.push('</p>\n            ');
          }
          __out.push('\n        ');
        }
        __out.push('\n      </div>\n      ');
        __out.push('\n      ');
        if (method.parameters != null) {
          __out.push('\n        <h3 class="example_lined">Parameters </h3>\n        <ul class="method_params">\n          ');
          _.each(method.parameters, function(value, key) {
            __out.push('\n            <li><b>');
            __out.push(__sanitize(key));
            __out.push('</b>: ');
            __out.push(__sanitize(value));
            return __out.push('</li>\n          ');
          });
          __out.push('\n        </ul>\n      ');
        }
        __out.push('\n      ');
        __out.push('\n      ');
        if ((method.authorization_required != null) && method.authorization_required) {
          __out.push('\n        <div class="example auth_example gapafter_x2 gapbefore">\n          <h3 class="auth_req">authorization required</h3>\n          ');
          if (method.scope != null) {
            __out.push('\n            <h3 class="scope">Scope: <b>');
            __out.push(__sanitize(method.scope));
            __out.push('</b></h3>\n          ');
          }
          __out.push('\n        </div>\n      ');
        }
        __out.push('\n      ');
        __out.push('\n      <h3 class="example">Example</h3>\n      <pre>$ curl "');
        __out.push(__sanitize(method.example_url));
        __out.push('"</pre>\n      ');
        if (method.example_result_type === 'JSON') {
          __out.push('\n        <h3 class="example">Result</h3>\n        <pre class="code_example">');
          __out.push(prettyJson(method.example_result));
          __out.push('</pre>\n      ');
        } else if (method.example_result != null) {
          __out.push('\n        <h3 class="example">Result</h3>\n        <pre class="code_example">');
          __out.push(__sanitize(method.example_result.replace('"', '')));
          __out.push('</pre>\n      ');
        }
        __out.push('\n    </div>\n  </div>\n  ');
      }
    
      __out.push('\n\n</section>\n\n\n\n');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};
