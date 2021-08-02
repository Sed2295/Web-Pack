//Archivo de configuración de webpack
const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
    //archivo de entrada
    entry: './src/app.js',
    //Archivo y ruta de salida, nosotros lo especificamos
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    devServer: {
        port: 8000
    },
    module: {
        rules: [
            {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"],
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html'
        })
    ]

}