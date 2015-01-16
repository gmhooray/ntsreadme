/**
 * Module dependencies.
 */

module.exports = {
    /* http://nodejs.org/api : Powered by node.js */
    fs: require('fs'),
    os: require('os'),
    util: require('util'),
    path: require('path'),
    rl: require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    })
}
