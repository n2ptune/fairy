function init() {
  const _elContainerName = 'fairy-app-container'
  const _elRootName = 'fairy-app'

  const container = document.createElement('div')
  const root = document.createElement('div')

  container.id = _elContainerName
  root.id = _elRootName

  document.body.appendChild(container)
  container.attachShadow({ mode: 'open' }).appendChild(root)

  return {
    root,
    container
  }
}

export { init }
