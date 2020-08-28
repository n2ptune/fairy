module.exports = {
  presets: [
    [
      '@vue/cli-plugin-babel/preset',
      {
        targets: {
          ie: 11
        }
      }
    ]
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}
