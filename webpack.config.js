module.exports = {
  entry: './src/main.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015'],
      },
    }],
  },
}