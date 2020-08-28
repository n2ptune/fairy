<template>
  <el-row
    :class="active ? 'active' : ''"
    type="flex"
    justify="center"
    class="bottom"
    :gutter="20"
  >
    <el-col
      :xs="24"
      :md="8"
      :lg="6"
      :xl="4"
      class="left"
      :class="reverse ? 'reverse' : ''"
    >
      <img class="phone-image" :src="require('@/assets/images/' + image)" />
    </el-col>
    <el-col
      :xs="24"
      :md="8"
      :lg="6"
      :xl="4"
      class="right"
      :class="reverse ? 'reverse' : ''"
    >
      <div class="right-top">
        <slot name="right-top" />
      </div>
      <div class="right-middle">
        <slot name="right-middle" />
      </div>
      <div class="right-bottom">
        <slot name="right-bottom" />
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    reverse: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data: () => ({
    active: false,
    io: null
  }),

  watch: {
    // eslint-disable-next-line
    active(_n) {
      this.io.unobserve(this.$el)
    }
  },

  mounted() {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.active = true
          }
        })
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
      }
    )

    io.observe(this.$el)
    this.io = io
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/_breakpoints.scss';

.bottom {
  opacity: 0;
  transform: translateY(25%);
  transition: opacity 0.4s ease-in-out, transform 0.9s ease-in-out;
  margin: 15rem 0;

  &.active {
    opacity: 1;
    transform: translateY(0);
  }

  @include mobile {
    flex-direction: column;
    flex-wrap: wrap;
  }

  & .left {
    text-align: center;

    &.reverse {
      order: 2;

      @include mobile {
        order: 1 !important;
      }
    }
  }

  & .right {
    padding: 3rem 0;
    text-align: left;

    &.reverse {
      order: 1;

      @include mobile {
        order: 2 !important;
      }
    }

    @include mobile {
      text-align: center;
    }

    @include not-mobile {
      margin: 0 1.5rem;
    }

    &-top {
      color: rgba(0, 0, 0, 0.5);
      font-weight: bold;
      letter-spacing: 3px;
    }

    &-middle {
      font-weight: bold;
      font-size: 2.5rem;
      margin: 1.35rem 0;
    }

    &-bottom {
      font-size: 1.2rem;
    }
  }
}
</style>
