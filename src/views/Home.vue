<template>
  <main class="relative"></main>
</template>

<script>
export default {
  mounted() {
    const script = document.createElement('script')
    script.setAttribute('src', 'http://localhost:5000/dist/fairy.dist.js')
    document.head.appendChild(script)

    script.onload = function() {
      window.FAIRY_INIT('123456')
    }
  }
}
</script>
