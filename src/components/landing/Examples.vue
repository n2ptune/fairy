<template>
  <div class="examples">
    <div class="header">
      <ul>
        <li v-for="n in 3" :key="n"></li>
      </ul>
      <div class="search-example">
        <div class="search">
          <i class="el-icon-search" />
        </div>
      </div>
    </div>
    <div class="body">
      <div class="top">
        <div class="icon-list">
          <div class="left">
            <i
              v-for="icon in icons.slice(0, 4)"
              :key="icon"
              :class="`el-icon-${icon}`"
            />
          </div>
          <div class="right">
            <i
              v-for="icon in icons.slice(4, 6)"
              :key="icon"
              :class="`el-icon-${icon}`"
            />
          </div>
        </div>
        <div class="top-body-placeholder">
          <div
            v-for="(i, index) in lines"
            :key="i"
            :style="{ width: `${lineWidth[index]}%` }"
            class="block"
          ></div>
          <div class="sub">
            <p>Write <span class="highlight">markdown</span></p>
            <p>that your contents</p>
          </div>
          <div class="dots">
            <div v-for="i in 3" :key="i" class="dot"></div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <transition-group tag="ul" name="card-list" class="card-list">
          <li v-for="card in cards" :key="card.title">
            <div class="card-title">
              {{ card.title }}
            </div>
            <div class="card-body">
              {{ card.body }}
            </div>
          </li>
        </transition-group>
        <div class="dots">
          <div v-for="i in 3" :key="i" class="dot"></div>
        </div>
        <Process />
      </div>
    </div>
  </div>
</template>

<script>
import Process from './Process.vue'

export default {
  components: {
    Process
  },

  data: () => ({
    icons: ['edit', 'star-off', 'zoom-in', 'picture-outline', 'delete', 'more'],
    lines: 7,
    lineWidth: [],
    dummyBody: [
      'in faucibus orci luctus et ultrices posuere cubilia curae; Donec non porta tortor. Morbi auctor commodo dolor, at varius nisi porttitor elementum. Cras suscipit aliquet augue vel pharetra. Integer maximus sollicitudin risus eget vestibulum. Aenean at sodales augue, ut laoreet tellus.',
      'Sed dolor nisi, ullamcorper id purus aliquet, interdum efficitur tellus. Integer id pulvinar elit, eu tincidunt purus. Maecenas euismod tempor molestie. Nunc feugiat massa ac risus accumsan, nec pretium urna auctor. Sed maximus tincidunt libero, non tempor magna vulputate',
      'Maecenas vehicula neque a dolor tempus posuere ac sodales elit. Suspendisse id maximus dolor. Fusce eget dui id odio rhoncus viverra hendrerit nec est. Donec euismod nibh at elit convallis pellentesque. Cras cursus hendrerit enim id condimentum. Fusce eleifend auctor quam in dapibus.'
    ],
    cards: [
      {
        title: '1',
        body: ''
      },
      {
        title: '2',
        body: ''
      },
      {
        title: '3',
        body: ''
      }
    ]
  }),

  created() {
    this.cards.forEach(card => {
      card.body = this.dummyBody[this.rand(this.dummyBody.length - 1, 0)]
    })
  },

  mounted() {
    this.setLineWidth()
    setInterval(this.setLineWidth, 3000)
    setInterval(this.pushCardItem, 3000)
  },

  methods: {
    rand(max, min) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    setLineWidth() {
      this.lineWidth = []

      for (let i = 0; i < this.lines; i++) {
        this.lineWidth.push(this.rand(100, 30))
      }
    },
    pushCardItem() {
      this.cards.splice(this.cards.length - 1, 1)
      this.cards.unshift({
        title: `${this.rand(1000, 1)}`,
        body: this.dummyBody[this.rand(this.dummyBody.length - 1, 0)]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.card-list {
  &-enter-active {
    transition: 0.5s ease;
    transition-property: opacity, transform;
  }

  &-leave-active {
    opacity: 0;
    position: absolute;
  }

  &-enter {
    opacity: 0;
    transform: translateX(50px) scaleY(0.5);
  }

  &-enter-to {
    opacity: 1;
    transform: translateX(0) scaleY(1);
  }
}

@import '@/assets/css/_variables.scss';

.examples {
  margin: 8rem 0;

  & .header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0.5rem 0;

    & ul {
      list-style: none;
      padding: 0;
      margin: 0;

      & li {
        display: inline-block;
        margin-right: 0.5rem;
        width: 10px;
        height: 10px;
        border-radius: 9999px;
        background-color: #feb51b;

        &:first-of-type {
          background-color: #ce4136;
        }

        &:last-of-type {
          background-color: #10bd94;
        }
      }
    }

    & .search-example {
      & .search {
        padding: 0.5rem 5rem;
        // background: rgba(0, 0, 0, 0.15);
        background-color: rgba(206, 65, 54, 0.1);
        border-radius: 9999px;
        position: relative;

        & i {
          position: relative;
          right: -400%;
        }
      }
    }
  }

  & .body {
    margin: 1rem 0;

    & .dots {
      margin: 1rem 0;

      & .dot {
        --dot-size: 7px;

        display: block;
        width: var(--dot-size);
        height: var(--dot-size);
        border-radius: 999px;
        background-color: rgba(0, 0, 0, 0.08);
        margin: 1rem auto;
      }
    }

    & .top {
      & .icon-list {
        margin: 2rem 0;
        padding: 0.5rem 0 1.3rem 0;
        border-bottom: 1px solid #ddd;
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;

        & i {
          color: rgba(0, 0, 0, 0.55);
          font-size: 1.3rem;
          margin-right: 10px;
        }
      }

      &-body-placeholder {
        text-align: center;

        & .block {
          background-color: rgba(0, 0, 0, 0.08);
          border-radius: 9999px;
          height: 20px;
          margin-bottom: 0.7rem;
          transition: all 0.45s ease;
        }

        & .sub {
          margin: 3rem 0;
          font-size: 1.5rem;
          font-weight: bold;
          color: rgba(0, 0, 0, 0.7);

          & p {
            line-height: 0.5;

            & .highlight {
              color: $color-dark-header-default;
            }
          }
        }
      }
    }

    & .bottom {
      & .card-list {
        list-style: none;
        margin: 2rem 0;
        padding: 0;

        & li {
          border: 1px solid #eee;
          border-radius: 5px;
          padding: 1rem;
          margin-bottom: 1rem;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
            0 1px 2px 0 rgba(0, 0, 0, 0.06);

          & .card-title {
            font-weight: bold;
            margin-bottom: 1rem;
          }

          & .card-body {
            color: rgba(0, 0, 0, 0.6);
          }
        }
      }
    }
  }
}
</style>
