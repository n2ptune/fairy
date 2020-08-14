// import axios from 'axios'

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

// class Fairy {
//   constructor(id, vue) {
//     this.id = id
//     this.data = null
//     this.vue = vue
//     this.isLoadedContents = false
//     this.isActiveFairy = false
//     // API Endpoint
//     this.url =
//       process.env.NODE_ENV === 'production'
//         ? 'http://localhost:5001/fairy-web-service/us-central1/api'
//         : 'http://localhost:5001/fairy-web-service/us-central1/api'

//     this.el = {
//       containerName: 'fairy-app-container',
//       rootName: 'fairy-app'
//     }

//     this.init()
//   }

//   init() {
//     if (document.getElementById(this.el.containerName)) return

//     const container = document.createElement('div')
//     const root = document.createElement('div')

//     this.el.container = container
//     this.el.root = root

//     this.el.container.id = this.el.containerName
//     this.el.root.id = this.el.rootName

//     document.body.appendChild(this.el.container)

//     this.el.container.attachShadow({ mode: 'open' }).appendChild(this.el.root)
//   }

//   loadData() {
//     return new Promise((resolve, reject) => {
//       const url = this.url + '/load/' + this.id

//       if (url) {
//         axios
//           .get(url)
//           .then(result => {
//             this.data = result.data
//             resolve(result.data)
//           })
//           .catch(error => reject(error))
//       } else {
//         reject(new Error('InvalidURL'))
//       }
//     })
//   }

//   loadContents() {
//     return new Promise((resolve, reject) => {
//       const url = `${this.url}/load/contents/${this.id}`

//       axios
//         .get(url)
//         .then(result => {
//           this.data.contents = result.data
//           this.isLoadedContents = true
//           resolve()
//         })
//         .catch(error => reject(error))
//     })
//   }

//   active() {
//     this.isActiveFairy = true
//   }

//   deactive() {
//     this.isActiveFairy = false
//   }

//   get id() {
//     return this.__id__
//   }

//   get data() {
//     return this.__data__
//   }

//   get vue() {
//     return this.__vue__
//   }

//   set id(id) {
//     this.__id__ = id
//   }

//   set data(data) {
//     this.__data__ = data
//   }

//   set vue(vue) {
//     this.__vue__ = vue
//   }
// }

// export default Fairy
