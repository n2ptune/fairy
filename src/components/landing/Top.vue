<template>
  <div class="top">
    <div class="header">
      <p>Make your own</p>
      <p class="highlight">Service Center</p>
    </div>
    <div class="sub">
      <p>
        Fairy can be <span class="highlight">inserted</span> your page and
        <span class="highlight">make contents</span> then
        <span class="highlight">show contents</span>
        for your client just few seconds
        <span class="highlight">in all modern browsers</span>
      </p>
    </div>
    <div class="button-wrap">
      <el-button type="danger" round @click="$router.push('/create')">
        Try to Create Free
        <i class="el-icon-right" />
      </el-button>
      <div class="button-sub">For IE11, Chrome, All Modern Browsers</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/css/_breakpoints.scss';
@import '@/assets/css/_variables.scss';

.top {
  margin: 4.5rem 0;

  & .header {
    font-size: 3.2rem;
    font-weight: bold;
    text-align: center;

    @include mobile {
      font-size: 2.6rem;
    }

    & p {
      margin: 0;
      line-height: 1.2;

      &.highlight {
        color: $color-dark-header-default;
      }
    }
  }

  & .sub {
    font-size: 1rem;
    text-align: center;
    padding: 0.8rem 0;

    & p {
      margin: 0;
      line-height: 1.8;
      color: rgba(0, 0, 0, 0.55);

      & .highlight {
        color: $color-dark-header-default;
      }
    }
  }

  & .button-wrap {
    text-align: center;
    margin: 1rem 0;

    & .button-sub {
      color: rgba(0, 0, 0, 0.55);
      margin-top: 1rem;
      font-size: 0.9rem;
    }

    & button {
      background-color: $color-dark-header-default;
      border-color: $color-dark-header-default;
      font-weight: bold;
      font-size: 1rem;

      &:hover {
        background-color: #e77a4f;
        border-color: #e77a4f;
      }
    }
  }
}
</style>
