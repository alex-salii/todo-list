const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackDevServer = require('webpack-dev-server');
const { webpack } = require('webpack');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const config = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js'
    },
    module: {
      rules:[
        {
          test: /.js$/,
          use: ['babel-loader']
        },
      {
        test: /.s?css$/,
        use: [
          isProduction 
            ? MiniCssExtractPlugin.loader 
            : 'style-loader', 
          'css-loader', 
          'sass-loader',
        ]
      },
      {
        test: /.(jpg|png)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[ext]',
              outputPath: 'images',
              },

            }
          ],
        }
      ],
    },
   plugins: [
     new HtmlWebpackPlugin ({
       template: './src/index.html'
     }),
     new MiniCssExtractPlugin ({
        filename: '[name].css'
     })
   ]
  };

  if (isProduction) {
    config.plugins.push(new MiniCssExtractPlugin({
      filename: '[name].css',
    }));
  }

  return config;
};