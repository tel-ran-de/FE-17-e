const path = require('path')

module.exports = {
    entry: './src/js/index.js',
    mode: 'development',
    output: {
        filename: 'app.js',
        
        path: path.resolve(__dirname, 'dist/js')
    }
}