Title: Be environment aware!
Excerpt: Every once in a while, I see or hear someone complaining that a basic React application ran through Webpack ends up being 700 kB or more. I think it’s important to take a look at why this is happening – cause it’s usually all about the environment.
Author: Espen Hovlandsdal
Categories:
- React
- Webpack
------------------

Every once in a while, I see or hear someone complaining that a basic React application ran through Webpack ends up being 700 kB or more. I think it’s important to take a look at why this is happening – cause it’s usually **all about the environment**.

When you’re in *development*, what you want is:

- Quick builds
- Being able to trace an error back to the correct line number
- Warnings if you’re doing something wrong

When you’re in *production*, what you want is:

- Smallest bundle size
- Fastest execution

React is in great in this regard. React will give you warnings in a development environment if you use `class` instead of `className` for DOM-elements, if your input doesn’t match the `propTypes` defined for a component and similar. In production, these checks are removed in order to speed up execution and minimize the application size.

How does this work? It simply checks if `process.env.NODE_ENV` is set to `production`. Obviously, Facebook also provides pre-built bundles for development and production that you can use, but many people would rather include React in their bundle.

How do you make sure that Webpack builds React in “production mode”? Use DefinePlugin (ships with Webpack, as `webpack.DefinePlugin`). It allows you to inject defined values into the modules it bundles. When you run the generated bundle through an uglifier, the uglifier is smart enough to see that there are checks that can be simplified. For instance, a check such as: `if (process.env.NODE_ENV !== 'production')` can be resolved to `false`, since `NODE_ENV` has been defined to be `production`. An `if`-statement for false will never be run, and is considered “dead code”, and a smart uglifier is able to remove this whole block.

An additional step to check is what your `devtool`-setting is defined to be. Many people use `eval` as their `devtool` setting, which allows really rapid reloads and things like hot reloading. This is great for development, but almost impossible to optimize for production. Adding a check to your webpack configuration that switches the `devtool` setting to something more production-friendly (or don’t use a `devtool` setting at all for production) can easily save even more bytes.

## Some numbers

- Devtool: eval, NODE_ENV: undefined, uglifying: off  – **711kB**
- Devtool: none, NODE_ENV: undefined, uglifying: off  – **676kB**
- Devtool: none, NODE_ENV: production, uglifying: off – **643kB**
- Devtool: none, NODE_ENV: production, uglifying: on  – **131kB**
- Devtool: none, NODE_ENV: production, uglifying: on, gziped: – **36kB**

A pretty significant improvement, yes?

Below is the basic, optimized configuration I used for these tests. Run webpack as `NODE_ENV=production webpack -p` to generate a production bundle.

```js
var webpack = require('webpack');
var path = require('path');
var isProd = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: !isProd && 'eval',
  entry: './app.js',
  output: {
    path: __dirname,
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
};
```

To summarize: Know which environment you want to build for, and optimize for it.
