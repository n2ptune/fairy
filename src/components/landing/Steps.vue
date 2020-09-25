<template>
  <div class="steps">
    <div class="inner">
      <el-row type="flex" justify="center">
        <el-col v-bind="columns.title" class="col-title">
          <div class="title">Title</div>
          <div class="sub">Sub Title</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: {
        title: {
          xs: 24,
          md: 12,
          lg: 8,
          xl: 6
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.steps {
  &::before {
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.2);
    content: '';
    display: block;
    position: absolute;
    left: 0;
  }

  & .inner {
    padding: 25px;
  }

  & .col-title {
    text-align: center;

    & .title {
      font-size: 2.5rem;
      font-weight: 900;
    }

    & .sub {
      font-size: 1.2rem;
      color: rgba(0, 0, 0, 0.75);
    }
  }
}
</style>
