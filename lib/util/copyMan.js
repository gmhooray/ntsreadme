#!/env node
var common = require('./common.js');

console.log(' *** System Info *** ');
console.log(' os : ' + common.os.platform());
//var rl = common.prompt.createInterface({
//    input: process.stdin,
//    output: process.stdout
//})
module.exports.copyFile = function (source, target, cb) {
    var cbCalled = false;

    var fis = common.fs.createReadStream(source);
    fis.on("error", function (err) {
        done(err);
    });

    var fos = common.fs.createWriteStream(target);

    fos.on("error", function (err) {
        done(err);
    }).on("close", function () {
        done();
    }).on("pipe", function (src) {
        console.log('write: pipe' + src)
    });

    function done(err) {
        if (!cbCalled) {
            cb(err);
            cbCalled = true;
        }
    }

    fis.pipe(fos);
}
