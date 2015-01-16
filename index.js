#!/usr/bin/env node
'use strict';

var oThread = function(){this.initialize.apply(this,arguments)};

oThread.prototype = {
    initialize: function(){
        this.module = require('./lib/module.js');
        this.runnable = require('./lib/nts-readme.js');
        var read =  this.module.rl;
        read.setPrompt('nts-readme > ');
        read.prompt();

        read.on('line', function(line) {
            switch(line.trim()) {
                case 'hello':
                    this.runnable.exec(this.module, __dirname);
                    break;
                default:
                    console.log('Say what? I might have heard `' + line.trim() + '`');
                    break;
            }
            read.prompt();
        }).on('close', function() {
            console.log('Have a great day!');
            process.exit(0);
        });

//        if(this.isFileOverwrite(this.module.rl)){
//            console.log('finish');node
//            this.runnable.exec(this.module, __dirname);
//        }
    },
    isFileOverwrite: function(rl){
        rl.question("Do you want Overwrite? (y/n)", function(answer){
            if(answer.toLowerCase().indexOf('y') >= 0){
                return true;
            }
        })
        return false;
    }
}

new oThread();