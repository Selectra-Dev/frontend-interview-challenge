const
  CopyPlugin = require( 'copy-webpack-plugin' ),
  MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

module.exports = {
  entry: {
    form: './src/js/form.js',
    landing: './src/js/landing.js'
  },
  module: {
    rules:[
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => ([
                require( 'autoprefixer' ),
              ]),
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require( 'dart-sass' ),
            }
          }
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-env' ],
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/*.html',
          to: '',
          flatten: true,
        },
      ],
    }),
  ],
};
