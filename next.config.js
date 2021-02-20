// module.exports = {
//   webpack: (config, options) => {
//     const isServer = options.isServer
//     config.module.rules.push({
//       test: /\.(png|jpg|jpeg|gif|svg)$/,
//       use: [
//         {
//           loader: 'file-loader',
//           options: {
//             name: '[name].[contenthash].[ext]', // 文件名 + 哈希
//             outputPath: 'static', // 硬盘路径
//             publicPath: '_next/static'  // 网站路径
//           }
//         },
//       ],
//     })

//     return config
//   },
// }

const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config
  }
})