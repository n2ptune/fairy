<template>
  <el-row type="flex" justify="center" class="top-wrap" :gutter="20">
    <el-col :xs="22" :sm="16" :md="12" :lg="8" :xl="4" class="left">
      <div class="title">Helpful for Web Service</div>
      <div class="sub">
        마크다운으로 작성한 컨텐츠를 Fairy와 통합시켜 손쉽게 고객센터를
        구축하거나 컨텐츠를 보여주어 접근성을 높여보세요.
      </div>
    </el-col>
    <el-col :xs="22" :sm="16" :md="12" :lg="8" :xl="4" class="right">
      <object
        :data="require('@/assets/svg/top-landing-illu.svg')"
        class="illustration"
        type="image/svg+xml"
      ></object>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
@import '@/assets/css/_breakpoints.scss';

@include mobile {
  .top-wrap {
    & .left {
      margin-bottom: 1.5rem;
    }
  }

  .illustration {
    display: none;
  }
}

@include not-mobile {
  .top-wrap {
    & .left {
      padding: 2rem 0;
    }
  }
}

.top-wrap {
  margin: 3rem 0;
  flex-wrap: wrap;

  & .title {
    font-size: 3rem;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.85);
    letter-spacing: -2px;
    margin-bottom: 2rem;
    line-height: 1;
  }

  & .sub {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.75);
  }

  & .illustration {
    object-fit: cover;
    width: 100%;
  }
}
</style>
