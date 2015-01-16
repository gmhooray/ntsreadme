module.exports = {
    exec: function (common, sPath) {
        console.log(sPath);
//        var common = require(sPath + '/lib/util/common.js');
//        var util = require(sPath + '/lib/util/copyMan.js');

        console.log(' *** System Info *** ');
//        console.log(' os : ' + common.os.platform());
//        this.isFileExisted('readme');
//        파일이 있는지 없는지 체크한다.
//        파일이 있으면 overwrite 할 것인지 NO -> return false;
//        if(){
//            util.prompt.askOverwriteFile();
//        }

//        util.copyFile(common, sPath + "/templates/sample.md", "README1.md", function(){
//            console.log('done')
//        })
    }
//    isFileExisted: function(){
//        common.fs.exists('readme.md', function (exists) {
//            console.log(exists);
//            if(exists){
//                console.log('existed');
//            }else{
//                console.log('no')
//            }
//        });
//        return false;
//    }
}