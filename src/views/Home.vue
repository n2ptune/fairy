<template>
  <main class="relative"></main>
</template>

<script>
export default {
  mounted() {
    const script = document.createElement('script')
    script.setAttribute('src', 'http://localhost:5000/test.js')
    document.head.appendChild(script)

    script.onload = function() {
      const fairyApp = window.FAIRY_APP('1234-5a')

      console.log(fairyApp)
    }
  }
}
</script>
