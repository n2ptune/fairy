if (typeof window === 'object') {
  window.FAIRY_INIT = function(c) {
    const xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function() {
      if (this.readyState === this.DONE) {
        const { name, code } = JSON.parse(this.response)

        window.FAIRY_APP = {
          name,
          code
        }

        console.log(window.FAIRY_APP)
      }
    }

    xhr.open('get', 'http://localhost:5000/dummy.json')
    xhr.send()
  }
}
