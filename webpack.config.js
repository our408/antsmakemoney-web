const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: ['./src/index.tsx'],
  },
  output: {
    publicPath: '/',
    filename: 'bundle.js',
    path: path.resolve(__dirname + '/build'),
  },
  mode: 'development',
  resolve: {
    alias: {
      '@data': path.join(__dirname, 'src/data'),
      '@domain': path.join(__dirname, 'src/domain'),
      '@components': path.join(__dirname, 'src/components'),
      '@pages': path.join(__dirname, 'src/pages'),
      '@resources': path.join(__dirname, 'src/resources'),
      '@utils': path.join(__dirname, 'src/utils'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g)$/i,
        exclude: /node_modules/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              pngquant: {
                quality: [0.9, 1],
                dithering: 0,
                speed: 4,
              },
            },
          },
        ],
      },
      {
        // write files under 10k to inline or copy files over 10k
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader',
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      favicon: './src/resources/img/logo.ico',
      filename: 'index.html',
    }),
  ],
}
