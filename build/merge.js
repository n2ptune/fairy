/** @typedef {import('webpack').Configuration} Configuration */

function arrMerge(a, b) {
  const result = []

  if (a.length) result.push(...a)
  if (b.length) result.push(...b)

  return result
}

module.exports = /** @type {(a: Configuration, b: Configuration) => void} */ function (
  commonOptions,
  customOptions
) {
  return {
    ...commonOptions,
    ...customOptions,
    plugins: arrMerge(commonOptions.plugins || [], customOptions.plugins || [])
  }
}
