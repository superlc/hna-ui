var path = require('path');

module.exports = {
    entry: {
        'test-hna-password' : './js/test-hna-password.js',
        'test-hna-alert' : './js/test-hna-alert.js',
        'test-hna-telephone' : './js/test-hna-telephone.js',
        'test-hna-toast' : './js/test-hna-toast.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
};