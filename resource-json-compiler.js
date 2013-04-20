#!/usr/bin/env node

require("jsonminify")
fs = require('fs')

function precompile(files, goal_path) {
  var new_content = new Array()
  
  for(i in files){

    var content = fs.readFileSync(files[i], "utf-8");
    lala = JSON.parse(content)
    new_content.push.apply(new_content, lala);

  }

  new_content = JSON.minify(JSON.stringify(new_content))

  fs.writeFile(goal_path, new_content, function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("JSON resource " + goal_path + ' written.');
    }
  });
}

function watchDir(path, goal_path) {
  var files = walkdir(path)
  
  precompile(files, goal_path);

  for(var i in files){
    console.log("watching " + files[i]);
    fs.watchFile(files[i], function(stats, prevStats) {
      if(stats.size !== prevStats.size || stats.mtime.getTime() !== prevStats.mtime.getTime()) {
        console.log("change " + files[i]);
        precompile(files, goal_path);
      }
    });
  }
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


watchDir('data/', "public/resources.json")