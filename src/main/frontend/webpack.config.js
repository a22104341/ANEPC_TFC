const path = require('path');
const pkg = require('./package.json');

module.exports = {
    entry: pkg.source,

    output: {
        path: path.resolve(__dirname + '/../resources/static/'),
        filename: pkg.main,
        library: {
            name: 'components', // window.components.<component-name>
            type: 'umd',
            umdNamedDefine: true
        },
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },

    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
};