import axios from 'axios'

class Fairy {
  constructor(id) {
    this.id = id
    this.data = null

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

  loadData() {
    return new Promise((resolve, reject) => {
      const url =
        // process.env.NODE_ENV === 'production'
        //   ? 'http://localhost:5001/fairy-web-service/us-central1/api/load/'
        //   : 'http://localhost:5001/fairy-web-service/us-central1/api/load/' +
        //     this.id
        'http://localhost:5001/fairy-web-service/us-central1/api/load/' +
        this.id

      if (url) {
        axios
          .get(url)
          .then(result => {
            this.data = result.data
            resolve(result.data)
          })
          .catch(error => reject(error))
      } else {
        reject(new Error('InvalidURL'))
      }
    })
  }

  get id() {
    return this.__id__
  }

  get data() {
    return this.__data__
  }

  set id(id) {
    this.__id__ = id
  }

  set data(data) {
    this.__data__ = data
  }
}

export default Fairy
