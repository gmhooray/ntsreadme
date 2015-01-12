var common = require('./common.js');

var fs = common.fs;

function copyFile(source, target, cb) {
    var cbCalled = false;

    var rs = fs.createReadStream(source);
    rs.on("error", function(err) { done(err) });


    var ws = fs.createWriteStream(target);
    ws.on("error", function(err) {
        done(err);
    }).on("close", function() {
        done();
    }).on("pipe", function(src){ console.log('write: pipe' + src) });

    function done(err) {
        if (!cbCalled) {
            cb(err);
            cbCalled = true;
        }
    }

    rs.pipe(ws);
}

copyFile("templates/sample.md","README1.md",function(){console.log('done')});