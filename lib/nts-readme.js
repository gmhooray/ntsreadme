module.exports = {
    exec: function (module, sPath) {
        var copyMan = require(module.path.join(sPath + '/lib/util/copyMan.js'));
        copyMan.copyFile(module.path.join(sPath, "/templates/sample.md"), 'README.md', module, function () {
            console.log('done');
            process.exit(0);
        })
    }
}