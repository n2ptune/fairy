<template>
  <div class="process">
    <div class="icon">
      <div class="origin-icon">F</div>
      <div class="pulse"></div>
      <div class="pulse"></div>
      <div class="pulse"></div>
    </div>
    <div class="sub">
      <p>Init <span class="highlight">Fairy Client</span></p>
      <p>Generate code that insert to your page</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/css/_variables.scss';

.process {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 5rem 0;

  & .sub {
    width: 100%;
    margin: 4rem 0 3rem 0;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.7);

    & p {
      line-height: 1.5;
      margin: 0;

      & .highlight {
        color: $color-dark-header-default;
      }
    }
  }

  & .icon {
    position: relative;

    & .origin-icon {
      line-height: 0.5;
      padding: 1.3rem;
      border-radius: 9999px;
      background-color: $color-dark-header-default;
      color: white;
      font-weight: bold;
      font-size: 1.2rem;
    }

    & .pulse {
      position: absolute;
      top: calc(25% - 5px);
      left: calc(25% - 5px);
      width: 50%;
      height: 50%;
      border-width: 5px;
      border-style: solid;
      border-radius: 9999px;

      animation-iteration-count: infinite;
      animation-name: pulse;
      animation-duration: 4s;

      @keyframes pulse {
        0% {
          opacity: 1;
          transform: scale(1);
        }
        100% {
          opacity: 0;
          transform: scale(4);
        }
      }

      &:nth-of-type(2) {
        animation-delay: 200ms;
        border-color: rgba(240, 94, 35, 0.7);
      }

      &:nth-of-type(3) {
        animation-delay: 800ms;
        border-color: rgba(240, 94, 35, 0.6);
      }

      &:nth-of-type(4) {
        animation-delay: 1400ms;
        border-color: rgba(240, 94, 35, 0.5);
      }
    }
  }
}
</style>
