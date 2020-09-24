export function fairyInit() {
  if (process.env.NODE_ENV === 'development' && document) {
    const head = document.querySelector('head')
    const fairyScript = document.createElement('script')

    fairyScript.src = 'http://localhost:5000/dist/fairy.app.js'
    head.appendChild(fairyScript)
  }
}
