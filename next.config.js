module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))

    if (dev) {
      config.module.rules.push({
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      })
    }

    return config
  }
}
