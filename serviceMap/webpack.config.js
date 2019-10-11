//importing node-externals so that webpack doesn't compile the node_modules when bundling the server
var nodeExternals = require('webpack-node-externals');

var path = require('path');
var SRC_DIR = path.join(__dirname, 'client');
var SERVER_DIR = path.join(__dirname, 'server');
var DIST_DIR = path.join(__dirname, 'public');

module.exports = [{ 
  mode: 'development',
  target: 'web', 
  entry: `${SRC_DIR}/app.jsx`,
  output: {
    filename: 'client-bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-env','@babel/preset-react']            
          }          
        }
      },
          {
            test: /\.html$/,
            exclude: /node_modules/,
            loader: 'html-loader'
        },
        {
           test: /\.(png|jpg)$/,
           exclude: /node_modules/,
           loader: 'url-loader?limit=8192' 
          }
    ]
  }
// },
//  {
//   mode: 'development',
//   target: 'node',
//   node: {
//     __dirname: false
//   },
//   externals: [nodeExternals()],
//   entry: `${SERVER_DIR}/index.js`,
//   output: {
//     filename: 'bundle-server.js',
//     path: DIST_DIR
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           query: {
//             presets: ['@babel/preset-env','@babel/preset-react'],
//             plugins: ["@babel/transform-runtime"]                           
//           }          
//         }
//       }
//     ]
//   }
}];