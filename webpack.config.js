const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    // mode:'development',
    entry:'./src/index.ts',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        environment:{
            arrowFunction:false
        }
    },
    module:{
        rules:[
            {
                test: /\.ts$/,
                use: [
                    {
                        loader:'babel-loader',
                        options:{
                            presets:[
                                [
                                    "@babel/preset-env",
                                    {
                                        targets:{
                                            "chrome":"58",
                                            "ie":11
                                        },
                                        "corejs":"3",
                                        "useBuiltIns":"usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                exclude: /node_moduls/
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title:'mine',
            template:'./index.html'
        })
        
    ],
    resolve:{
        extensions:['.ts','.js']
    }
}