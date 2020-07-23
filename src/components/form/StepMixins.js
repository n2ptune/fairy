export default {
  beforeDestroy() {
    this.$emit('step', this.form, this.$options.name)
  }
}
