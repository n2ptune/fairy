class Fairy {
  constructor(id) {
    this.id = id
    this.el = {
      containerName: 'fairy-app-container',
      rootName: 'fairy-app'
    }

    this.init()
  }

  init() {
    if (document.getElementById(this.el.containerName)) return

    const container = document.createElement('div')
    const root = document.createElement('div')

    this.el.container = container
    this.el.root = root

    this.el.container.id = this.el.containerName
    this.el.root.id = this.el.rootName

    document.body.appendChild(this.el.container)

    this.el.container.attachShadow({ mode: 'open' }).appendChild(this.el.root)
  }

  loadData() {}
}

export default Fairy
