const init = () => {
  const el = {
    containerName: 'fairy-app-container',
    rootName: 'fairy-app'
  }

  if (document.getElementById(el.containerName)) return

  const container = document.createElement('div')
  const root = document.createElement('div')
  const __el__ = {}

  __el__.container = container
  __el__.root = root

  __el__.container.id = el.containerName
  __el__.root.id = el.rootName

  document.body.appendChild(__el__.container)

  __el__.container.attachShadow({ mode: 'open' }).appendChild(__el__.root)

  return __el__
}

const element = init()

export default element
