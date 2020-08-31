<template>
  <el-container>
    <el-footer>
      <el-row type="flex" justify="center" :gutter="20">
        <el-col v-bind="column">
          <ul>
            <li class="font-logo">
              fairy
            </li>
            <li></li>
          </ul>
        </el-col>
        <el-col v-bind="column">
          Some Menus
        </el-col>
        <el-col v-bind="column">
          Some Menus 2
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data: () => ({
    column: {
      xs: 24,
      md: 8,
      lg: 6,
      xl: 4
    }
  })
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/_breakpoints.scss';
@import '@/assets/css/_variables.scss';

.el-container {
  border-top: 1px solid #ddd;
  padding: 3rem 0;
}

.el-footer {
  width: 100%;

  & .el-row {
    flex-wrap: wrap;

    & ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    & .el-col {
      text-align: center;

      & .font-logo {
        font-size: 1.7rem;
        color: $color-dark-header-default;
      }

      @include mobile {
        margin-bottom: 1.5rem;
      }
    }
  }
}
</style>
