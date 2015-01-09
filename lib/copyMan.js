var fs = require('fs');



function copyFile(source, target, cb) {
    var cbCalled = false;

    var promise = fs.createReadStream(source);
    promise.then(console.log, console.error);

    rd.on("error", function(err) {
        done(err);
    });

    var wr = fs.createWriteStream(target);

    wr.on("error", function(err) {
        done(err);
    });

    wr.on("close", function(ex) {
        done();
    });

    rd.pipe(wr);

    function done(err) {
        if (!cbCalled) {
            cb(err);
            cbCalled = true;
        }
    }
}

copyFile("../template/sample.md","../../SOS.md");
//fs.readFile("../template/sample.md", "utf8", function(error, data) {
//    console.log(data);
//});
