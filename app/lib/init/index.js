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

const getClientID = () => {
  if (process.env.NODE_ENV === 'production' && document) {
    const fairyClient = document.querySelector('script[data-fairy-client-app]')
    const fairyClientID = fairyClient.dataset.fairyClientID

    return fairyClientID
  }
  return 'development-mode'
}

const clientID = getClientID()
const element = init()

export { clientID }

export default element
