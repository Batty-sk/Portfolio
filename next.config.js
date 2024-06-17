// next.config.js
module.exports = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(mp3|wav)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      });
  
      return config;
    },
  };
  