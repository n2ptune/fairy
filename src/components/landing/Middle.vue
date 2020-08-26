<template>
  <el-row
    type="flex"
    justify="center"
    :gutter="40"
    :style="{ flexWrap: 'wrap' }"
  >
    <Column v-for="step in steps" :key="step.header" class="card-col">
      <el-card shadow="always">
        <template #header>
          {{ step.header }}
        </template>
        <p>
          {{ step.body }}
        </p>
      </el-card>
    </Column>
  </el-row>
</template>

<script>
import Column from '@/components/landing/utils/Column.vue'

export default {
  components: {
    Column
  },

  data: () => ({
    steps: [
      {
        header: 'Create Fairy',
        body:
          'Praesent sodales nisl nulla, id consequat orci consectetur ut. Suspendisse potenti. Sed suscipit, nisl quis vehicula condimentum, diam lectus vulputate magna, sit amet porta mi sapien at velit. Nunc luctus.'
      },
      {
        header: 'Enter Information',
        body:
          'Proin ac egestas leo. Vestibulum pharetra sodales ante ac ultricies. Curabitur pharetra leo id leo dignissim, id volutpat elit viverra. Morbi rutrum mattis urna non volutpat. Sed malesuada sollicitudin ex.'
      },
      {
        header: 'Insert script',
        body:
          'Donec iaculis augue id nunc sagittis, ac venenatis purus lobortis. Nunc suscipit ullamcorper ante vitae ultrices. Praesent ipsum lectus, vestibulum eu egestas ac, faucibus in erat. Nunc nibh purus, lacinia.'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/_breakpoints.scss';

.card-col {
  position: relative;

  &:not(:last-child) {
    @include mobile {
      margin-bottom: 1.2rem;
    }
  }

  &:not(:first-child) {
    &::after {
      font-family: 'element-icons' !important;
      content: '\e6dc';
      position: absolute;
      top: 50%;
      left: -6px;
      z-index: 99;
      color: #57a0d3;

      @include mobile {
        display: none;
      }
    }
  }

  & .el-card {
    $color-dark-header-default: #f05e23;
    height: 100%;

    &::v-deep .el-card__header {
      font-weight: bold;
      color: $color-dark-header-default;
    }
  }
}
</style>
