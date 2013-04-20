#!/usr/bin/env node

// inspired by https://github.com/sstephenson/eco/pull/33/files use it when it's merged instead of this.

eco = require("eco")
fs = require("fs")

function precompile(file, rebuild) {
  fs.readFile(file, "utf-8", function(err, inEco) {
    inJst = eco.precompile(inEco);
    var newName = file.replace('.eco', '.jst').replace('eco/', 'templates/')
    fs.writeFile(newName, inJst, function(err) {
      if(err) {
        console.log(err);
      } else {
        console.log("... " + newName + ' written');
        
        if(rebuild) {
          rebuildJST("templates/");
        }
      }
    });
  });
}

function watchFile(file) {
  console.log("watching " + file);
  fs.watchFile(file, function(stats, prevStats) {
    if(stats.size !== prevStats.size || stats.mtime.getTime() !== prevStats.mtime.getTime()) {
      console.log("change " + file);
      precompile(file, true);
    }
  });
}

function watchDir(dir) {
  fs.readdir(dir, function(err, files) {
    var ecos = [];
    for(i in files) {
      
      // If this is a folder, recurse like a mofo.
      nf = dir+files[i]+"/"
      if(fs.existsSync(nf)){
        x = fs.lstatSync(nf)
        if(x.isDirectory()){
          watchDir(nf)
        }
      }

      var file = files[i];
      if(file.match(/\.eco$/g)) {
        ecos.push(file);
      }
    }
    for(i in ecos) {
      var file = ecos[i];
      var path = dir + file;
      watchFile(path);
      precompile(path, i == (ecos.length - 1));
    }
  });
}

function walkdir(dir) {
  
  var results = []
  var files = fs.readdirSync(dir);
  
  for(i in files) {
    
    next_file = dir+files[i]

    // If it exists, check folder/file?
    if(fs.existsSync(next_file)){
      
      fstat = fs.statSync(next_file)

      // If it's a file, add it
      if(fstat.isFile())
        results.push(next_file)

      // Otherwise go to the next level
      if(fstat.isDirectory())
        results.push.apply(results, walkdir(next_file+"/"));

    }

  }

  return results

}

function rebuildJST(dir) {
  files = walkdir(dir)
  
  var compiled = 'public/js/jst.js';
  fs.open(compiled, 'w+', 0666, function(err, fdw) {

    var bytesRead, fdr, fdw, pos;
    var BUF_LENGTH = 64 * 1024;
    var buff = new Buffer(BUF_LENGTH);

    var s = "window.JST = {};\n";
    buff.write(s)
    fs.writeSync(fdw, buff, 0, s.length, null);

    for(i in files) {
      var file = files[i];
      if(file.match(/\.jst$/g)) {
        var path = file;

        var s = "JST['" + file.replace('.jst', '').replace(dir, '') + "'] = ";
        buff.write(s);
        fs.writeSync(fdw, buff, 0, s.length);
        console.log(path)
        fdr = fs.openSync(path, 'r');
        bytesRead = 1;
        pos = 0;
        while (bytesRead > 0) {
          bytesRead = fs.readSync(fdr, buff, 0, BUF_LENGTH, pos);
          fs.writeSync(fdw, buff, 0, bytesRead);
          pos += bytesRead;
        }
        fs.closeSync(fdr);

        buff.write(";\n");
        fs.writeSync(fdw, buff, 0, 2);
      }
    }
    console.log("... " + compiled + ' written');
  });

}

watchDir("eco/")

