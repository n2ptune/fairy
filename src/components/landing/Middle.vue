<template>
  <transition name="appear-bottom" appear>
    <el-row
      v-show="appearComponent"
      class="wrap"
      type="flex"
      justify="center"
      :gutter="40"
    >
      <!-- <Column v-for="step in steps" :key="step.header" class="card-col">
        <el-card shadow="always">
          <template #header>
            {{ step.header }}
          </template>
          <p>
            {{ step.body }}
          </p>
        </el-card>
      </Column> -->
    </el-row>
  </transition>
</template>

<script>
// import Column from '@/components/landing/utils/Column.vue'

export default {
  components: {
    // Column
  },

  data: () => ({
    steps: [
      {
        header: 'Create Fairy',
        body:
          'Fairy를 만드는건 매우 쉽습니다. 홈페이지 내 Create Fairy 버튼을 눌러 생성하는 곳으로 이동합니다. 홈페이지 헤더에 Create Fairy 버튼을 눌러서도 이동할 수 있습니다.'
      },
      {
        header: 'Enter Information',
        body:
          'Fairy 등록에 필요한 정보들을 입력합니다. Fairy를 삽입하고 싶은 사이트의 대략적인 정보만 있으면 됩니다. 그리고 Fairy가 표시할 컨텐츠를 작성 혹은 RSS를 표시하게 할 수 있습니다.'
      },
      {
        header: 'Insert script',
        body:
          '입력된 정보를 기반으로 간단한 HTML 코드가 만들어집니다. 이 코드를 웹 페이지에 삽입하게 되면 Fairy가 컨텐츠를 표시합니다.'
      }
    ],
    appearComponent: false
  }),

  mounted() {
    this.$nextTick(() => (this.appearComponent = true))
  }
}
</script>

<style lang="scss" scoped>
.appear-bottom-enter-active,
.appear-bottom-leave-active {
  transition: opacity 0.4s ease, transform 0.5s ease;
}

.appear-bottom-enter {
  opacity: 0;
  transform: translateY(50%);
}

.appear-bottom-enter-to {
  opacity: 1;
  transform: translateY(0);
}

@import '@/assets/css/_breakpoints.scss';
@import '@/assets/css/_variables.scss';

.wrap {
  flex-wrap: wrap;
}

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
    height: 100%;

    &::v-deep .el-card__header {
      font-weight: bold;
      color: $color-dark-header-default;
    }
  }
}
</style>
