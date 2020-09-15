<template>
  <el-header :class="$route.path === '/' ? 'header' : 'header-no-main'">
    <el-row type="flex" justify="center" align="middle">
      <!-- 로고 -->
      <el-col :xs="22" :md="3" :lg="2" :xl="1">
        <router-link to="/" :style="{ display: 'inline-block' }">
          <div class="logo-text font-logo">
            fairy
          </div>
        </router-link>
      </el-col>
      <!-- 메뉴 -->
      <el-col :md="10" :lg="6" :xl="5" class="hidden-sm-and-down menu-wrap">
        <ul class="menu">
          <li v-for="route in menuRoutes" :key="route.name">
            <router-link :to="route.path" exact>
              {{ route.name }}
            </router-link>
          </li>
        </ul>
      </el-col>
      <!-- Create Fairy Button -->
      <el-col :lg="4" :xl="2" class="hidden-md-and-down create-button-wrap">
        <div class="create-button-container">
          <router-link to="/create">
            <button class="create-button">
              Create Fairy
            </button>
          </router-link>
        </div>
      </el-col>
      <!-- 모바일 메뉴 -->
      <el-col class="hidden-md-and-up" :span="2">Menu</el-col>
    </el-row>
  </el-header>
</template>

<script>
export default {
  data: () => ({
    menuRoutes: [
      {
        path: '/',
        name: 'Home'
      },
      {
        path: '/edit',
        name: 'Edit'
      }
      // {
      //   path: '/lorem',
      //   name: 'Lorem'
      // },
      // {
      //   path: '/ipsum',
      //   name: 'Ipsum'
      // }
    ]
  })
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/_breakpoints';
@import '@/assets/css/_variables';

.header,
.header-no-main {
  margin-top: 1rem;

  & .menu {
    list-style: none;
    padding: 0;
    margin: 0;

    & li {
      display: inline-block;

      &:not(:last-child) {
        margin-right: 1.6rem;
      }
    }
  }

  & .logo-text {
    font-size: 1.6rem;
    transition: color 0.6s ease;
  }

  & .menu-wrap {
    text-align: center;
  }

  & .create-button-wrap {
    text-align: center;

    & .create-button-container {
      & .create-button {
        font: inherit;
        font-size: 1rem;
        font-weight: bold;
        border: none;
        border-radius: 9999px;
        cursor: pointer;
        padding: 0 1rem;

        transition: color 0.4s ease, background-color 0.4s ease;

        & a {
          color: inherit;
        }

        &:focus {
          outline: none;
        }
      }
    }
  }
}

.header {
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 45%;
    background-color: $color-dark-header-default;
    z-index: -15;

    @include mobile {
      height: 65% !important;
    }
  }

  & .menu {
    & li {
      & a {
        color: $color-dark-menu-default;
        transition: color 0.3s ease;

        &:hover {
          color: $color-dark-menu-active;
        }

        &.router-link-exact-active {
          color: $color-dark-menu-active;
        }
      }
    }
  }

  & .create-button-wrap {
    & .create-button-container {
      & .create-button {
        background-color: transparent;
        color: $color-dark-menu-active;
        border: 3px solid $color-dark-menu-active;

        &:hover {
          background-color: $color-dark-menu-active;
          color: $color-dark-header-default;
        }
      }
    }
  }

  & .logo-text {
    color: $color-dark-logo;
  }

  &-no-main {
    & .logo-text {
      color: $color-dark-header-default;
    }

    & .menu {
      & li {
        & a {
          color: $color-light-menu-default;
          transition: color 0.3s ease;

          &:hover {
            color: $color-light-menu-active;
          }

          &.router-link-exact-active {
            color: $color-light-menu-active;
          }
        }
      }
    }

    & .create-button-wrap {
      & .create-button-container {
        & .create-button {
          background-color: transparent;
          color: $color-dark-header-default;
          border: 3px solid $color-dark-header-default;

          &:hover {
            background-color: $color-dark-header-default;
            color: $color-dark-menu-active;
          }
        }
      }
    }
  }
}
</style>
