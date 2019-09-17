
const path = require('path');

module.exports ={
    entry: './src/app.js',
    output: {
        path:path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /.\js$/,
        exclude: /node_module/        
         },{
             //  $ - make sure files ends with css
            test: /\.s?css$/,
            //use  permits to provide an array of loaders
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer:{
        contentBase: path.join(__dirname, 'public'),
        //this is for react router.  we are handaling routing via client side code
        historyApiFallback: true
    }

};