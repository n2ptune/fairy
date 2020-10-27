<template>
  <el-header height="auto">
    <el-row type="flex" justify="space-between" align="middle" class="row">
      <el-col
        :style="{ marginRight: '0.4rem' }"
        :xs="22"
        :sm="22"
        :md="3"
        :lg="2"
        :xl="1"
      >
        <div class="logo">
          <unicon
            :width="iconSize"
            :height="iconSize"
            name="comment-dots"
            icon-style="monochrome"
            class="icon"
          />
          <span>FAIRY</span>
        </div>
      </el-col>
      <el-col class="hidden-sm-and-down" :span="21">
        <ul class="route-wrap">
          <li v-for="route in menuRoutes" :key="route.name">
            <router-link :to="route.path">
              {{ route.name }}
            </router-link>
          </li>
        </ul>
      </el-col>
      <el-col class="hidden-sm-and-down" :md="4" :lg="3" :xl="2">
        <el-button type="warning" round @click="onClickCreateButton">
          CREATE FAIRY
          <i class="el-icon-right el-icon-search"></i>
        </el-button>
      </el-col>
      <el-col class="hidden-md-and-up" :span="1">
        <unicon name="bars" fill="gray" />
      </el-col>
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
        path: '/create',
        name: 'Create'
      },
      {
        path: '/edit',
        name: 'Edit'
      },
      {
        path: '/manage',
        name: 'Manage'
      }
    ],
    iconSize: '28px'
  }),

  methods: {
    onClickCreateButton() {
      if (this.$route.path === '/create') {
        return
      }
      this.$router.push('/create')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/_breakpoints.scss';
@import '@/assets/css/_variables.scss';

header {
  line-height: 0 !important;
  padding: 0;

  & .row {
    padding: 1rem 0.85rem;
    width: 100%;

    & .logo {
      font-size: 1.25rem;

      & span {
        vertical-align: super;
      }

      & .icon {
        margin-right: 3px;
        fill: orangered;
      }
    }

    & .route-wrap {
      list-style: none;
      padding: 0;
      margin: 0;

      & li {
        display: inline-block;
        margin-right: 0.75rem;

        & a {
          transition: color 0.3s ease;
          color: $color-light-menu-default;

          &:hover,
          &.router-link-exact-active {
            color: $color-light-menu-active;
          }
        }
      }
    }
  }
}
</style>
