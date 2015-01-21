#!/usr/bin/env node
'use strict';

var oThread = function(){this.initialize.apply(this,arguments)};

oThread.prototype = {
    initialize: function(){
        this.module = require('./lib/module.js');
        this.runnable = require('./lib/nts-readme.js');
    },
    run: function(){
        if(this.module.fs.existsSync('readme.md')){
            this.isFileOverwrite(this.module.rl);
        }else{
            this.runnable.exec(this.module, __dirname);
        }
    },
    isFileOverwrite: function(rl){
        console.log("Do you want to overwrite Readme.md ? ( y / n ) : ");
        rl.on('line',function(answer){
            if(answer.match(/^y(es)?$/i)){
                this.runnable.exec(this.module, __dirname);
            }else{
                process.exit(0);
            }
        }.bind(this));
    }
}

new oThread().run();