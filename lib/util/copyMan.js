module.exports.copyFile = function (source, target, module, cb) {
    var cbCalled = false;

    var fis = module.fs.createReadStream(source);

    fis.on("error", function (err) {
        done(err);
    });

    var fos = module.fs.createWriteStream(target);

    fos.on("error", function (err) {
        done(err);
    }).on("close", function () {
        done();
    }).on("pipe", function () {
        console.log('write: pipe');
    });

    function done(err) {
        if (!cbCalled) {
            cb(err);
            cbCalled = true;
        }
    }

    fis.pipe(fos);
}
