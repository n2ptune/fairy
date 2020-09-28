<template>
  <div class="steps">
    <div class="inner">
      <el-row type="flex" justify="center">
        <el-col v-bind="columns.title" class="col-wrap">
          <div class="heading">
            <h1 class="title">Make Fairy App with 3 steps</h1>
            <h3 class="sub">Follow the steps below to create Fairy App</h3>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" class="row-body">
        <el-col v-bind="columns.body">
          <div class="left">
            <div class="step">01</div>
            <div class="title">
              That. Life bring above, there seasons moveth can't. Green over.
            </div>
            <div class="body">
              Thing can't own Fruitful fruitful fruit deep you're can't shall
              seed. Every signs multiply form fruit isn't greater may morning
              gathering. Heaven thing open fruit he grass gathered. Form.
              Heaven.
            </div>
          </div>
        </el-col>
        <el-col v-bind="columns.body">
          <div class="right">
            <img
              src="https://images.unsplash.com/photo-1567606404839-dea8cec4d278?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80"
            />
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" class="row-body">
        <el-col v-bind="columns.body">
          <div class="left">
            <div class="step">02</div>
            <div class="title">
              Shall saw sea green land gathered forth fowl days. Moved.
            </div>
            <div class="body">
              Man a gathering let upon moveth darkness divided us image shall
              divided thing abundantly male heaven won't dry all you're. Sixth,
              bring he. Fruitful under green form likeness likeness. Land.
            </div>
          </div>
        </el-col>
        <el-col v-bind="columns.body">
          <div class="right">
            <img
              src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
            />
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" class="row-body">
        <el-col v-bind="columns.body">
          <div class="left">
            <div class="step">03</div>
            <div class="title">
              In lights darkness dominion our. Saying was saw rule had.
            </div>
            <div class="body">
              Fruit fruit give seasons which divided called air. Divided sixth
              don't day Green very deep gathering two one made third isn't you
              whose. Great so. Heaven face there of behold.
            </div>
          </div>
        </el-col>
        <el-col v-bind="columns.body">
          <div class="right">
            <img
              src="https://images.unsplash.com/photo-1497048679117-1a29644559e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            />
          </div>
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
          md: 20,
          lg: 14,
          xl: 12
        },
        body: {
          xs: 24,
          md: 12,
          lg: 10,
          xl: 6
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/_breakpoints';
@import '@/assets/css/_variables';

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
    padding: 40px 5px;
  }

  & .col-wrap {
    text-align: center;

    & .heading {
      & h1.title {
        font-size: 2.4rem;
        font-weight: 900;
        margin: 0;
      }

      & h3.sub {
        font-size: 1.3rem;
        margin-top: 0.5rem;
      }
    }
  }

  & .row-body {
    flex-wrap: wrap;
    margin: 10rem 0 15rem 0;

    & .left {
      @include mobile {
        margin-bottom: 5rem;
      }

      & .step {
        font-size: 2.3rem;
        font-weight: 900;
        position: relative;
        display: inline-block;

        &::after {
          content: '';
          width: 100%;
          height: 30%;
          background-color: $color-dark-header-default;
          position: absolute;
          top: 50%;
          bottom: 0;
          left: 0;
          z-index: -90;
        }
      }
      & .title {
        font-size: 1.7rem;
        margin-bottom: 1rem;
      }
      & .body {
        font-size: 1rem;
      }

      & .title,
      & .body {
        margin-right: 2.5rem;

        @include mobile {
          margin-right: 0;
        }
      }
    }

    & .right {
      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: 0 30px 50px 3px rgba(0, 0, 0, 0.3);
      }
    }
  }
}
</style>
