// /* eslint-disable */
// const withLess = require('@zeit/next-less')
// const lessToJS = require('less-vars-to-js')
// const fs = require('fs')
// const path = require('path')
// const withImages = require('next-images')

// // Where your antd-custom.less file lives
// const themeVariables = lessToJS(
//   fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8')
// )

// // module.exports = withLess({
// //   lessLoaderOptions: {
// //     javascriptEnabled: true,
// //     modifyVars: themeVariables, // make your antd custom effective
// //   },
// //   webpack: (config, { isServer }) => {
// //     if (isServer) {
// //       const antStyles = /antd\/.*?\/style.*?/
// //       const origExternals = [...config.externals]
// //       config.externals = [
// //         (context, request, callback) => {
// //           if (request.match(antStyles)) return callback()
// //           if (typeof origExternals[0] === 'function') {
// //             origExternals[0](context, request, callback)
// //           } else {
// //             callback()
// //           }
// //         },
// //         ...(typeof origExternals[0] === 'function' ? [] : origExternals),
// //       ]

// //       config.module.rules.unshift({
// //         test: antStyles,
// //         use: 'null-loader',
// //       })
// //     }
// //     return config
// //   },
// // })

// module.exports = withImages({})

const withCss = require('@zeit/next-css')
// module.exports = withCSS()
const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config
  }
})


module.exports = withCss({
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style\/css.*?/;
      const origExternals = [...config.externals];
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback();
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals)
      ];

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader'
      });
    } else {
      config.module.rules.push({
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            name: '[name].[ext]'
          }
        }
      });
    }

    return config;
  }
});






// module.exports = withCSS({
//   webpack: (config, { isServer }) => {
//     if (isServer) {
//       const antStyles = /antd\/.*?\/style\/css.*?/
//       const origExternals = [...config.externals]
//       config.externals = [
//         (context, request, callback) => {
//           if (request.match(antStyles)) return callback()
//           if (typeof origExternals[0] === 'function') {
//             origExternals[0](context, request, callback)
//           } else {
//             callback()
//           }
//         },
//         ...(typeof origExternals[0] === 'function' ? [] : origExternals),
//       ]

//       config.module.rules.unshift({
//         test: antStyles,
//         use: 'null-loader',
//       })
//     }
//     return config
//   },
// })

// module.exports = withCSS({
//   webpack: function (config) {
//     config.module.rules.push({
//       test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
//       use: {
//         loader: 'url-loader',
//         options: {
//           limit: 100000,
//           name: '[name].[ext]'
//         }
//       }
//     })
//     return config
//   }
// })
