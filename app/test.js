function init() {
  if (window) {
    window.FAIRY_APP = function(code) {
      this.O = code

      return this
    }
  }
}

init()
