const module1 = require('./module1');

module.exports = function () {
    module1(JSON.stringify(['IIFE', arguments]));
};