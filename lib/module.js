/**
 * Module dependencies.
 */

module.exports = {
    fs: require('fs'),
    os: require('os'),
    util: require('util'),
    path: require('path'),
    rl: require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })
    /* http://nodejs.org/api : Powered by node.js */
}
