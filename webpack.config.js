var path = require('path');

module.exports = {
    entry: './js/test-hna-password.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};