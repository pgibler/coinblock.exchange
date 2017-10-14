
module.exports = {
  entry: './client/index.js',
  output: { path: `${__dirname}/public/javascripts`, filename: 'bundle.js' },
  module: {
    loaders: [],
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json'] 
  },
  node: {
    fs: "empty",
    net: "empty"
  }
};