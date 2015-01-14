module.exports = Prompt;

function Prompt() {
    var common = require('./common.js');

    common.prompt.question("What do you think of node.js? ", function (answer) {
        console.log("Thank you for your valuable feedback:", answer);
        prompt.close();
    });
}