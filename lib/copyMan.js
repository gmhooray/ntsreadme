var fs = require('fs');

fs.createReadStream("../template/sample.md").pipe(fs.createWriteStream("../../README.md"));