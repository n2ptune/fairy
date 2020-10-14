<template>
  <header :style="{ backgroundColor: fairy.themeColor }" class="inner-header">
    <div class="fixed-menu" :style="{ backgroundColor: fairy.themeColor }">
      <div
        :class="innerContentActive ? 'active' : ''"
        class="fixed-menu__item"
        @click="switchActive(true)"
      >
        {{ fairy.siteName }}
      </div>
      <div
        :class="!innerContentActive ? 'active' : ''"
        class="fixed-menu__item"
        @click="switchActive(false)"
      >
        <unicon
          name="smile"
          fill="white"
          style="display: inline-block; vertical-align: middle"
        />
        문의하기
      </div>
    </div>
    <div class="mobile-close-icon">
      <unicon
        name="times"
        fill="white"
        width="25px"
        height="25px"
        @click="switchFairyActive(false)"
      />
    </div>
  </header>
</template>

<script>
import { computed } from '@vue/composition-api'

export default {
  setup(props, { root: { $store: store } }) {
    const fairy = computed(() => store.getters.getFairyData)
    const innerContentActive = computed(
      () => store.getters.getInnerContentActive
    )
    const detailActive = computed(() => store.getters['detail/getActive'])

    const switchActive = active => {
      if (active === innerContentActive.value) return

      return store.commit('SET_INNER_CONTENT_ACTIVE', active)
    }

    const switchFairyActive = active => {
      if (detailActive.value) {
        store.commit('detail/SWITCH_ACTIVE')
      }
      store.commit('SET_FAIRY_ACTIVE', active)
    }

    return {
      fairy,
      innerContentActive,
      switchActive,
      switchFairyActive
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@styles/_variables.scss';
@import '@styles/_breakpoints.scss';

.inner-header {
  top: 0;
  z-index: 25;
  position: sticky;
  width: $fairy-inner-box-width;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  font-weight: bold;
  padding: 1rem 0;
  border-top-left-radius: $fairy-inner-box-radius;
  border-top-right-radius: $fairy-inner-box-radius;

  @include mobile {
    width: 100%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  & .mobile-close-icon {
    @include not-mobile {
      display: none;
    }

    $icon-distance: 5px;

    display: block;
    position: absolute;
    right: $icon-distance;
    top: $icon-distance;

    & .unicon {
      cursor: pointer;
    }
  }

  & .fixed-menu {
    &__item {
      vertical-align: middle;
      display: inline-block;
      color: white;
      font-size: 1rem;
      padding: 0.5rem;
      border-radius: 10px;
      cursor: pointer;

      &.active {
        background-color: rgba(255, 255, 255, 0.25);
      }
    }
  }
}
</style>
