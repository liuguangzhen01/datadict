<template lang="pug">
  a-layout(id="components-layout-custom-trigger")
    a-layout-sider(:trigger="null" collapsible v-model="collapsed")
      div(class="logo")
        img(v-if="!collapsed" src="../assets/logo-unfold.png")
        img(v-else src="../assets/logo-fold.png")
      a-menu(theme="dark" mode="inline" :defaultOpenKeys="['submenu2']" :defaultSelectedKeys="['22']" :style="{ height: '100%', borderRight: 0 }")
        a-sub-menu(key="submenu1")
          span(slot="title" class="menu-title")
            a-icon(type="profile")
            span ant-design-vue
          a-menu-item(key="11")
            router-link(to="/AntDesignVue" class="link")
              span ant-design-vue
          a-menu-item(key="12")
            router-link(to="" class="link")
              span option2
          a-menu-item(key="13")
            router-link(to="" class="link")
              span option3
        a-sub-menu(key="submenu2")
          span(slot="title" class="menu-title")
            a-icon(type="profile")
            span vue.js
          a-menu-item(key="21")
            router-link(to="/HelloWorld" class="link")
              span hello-world
          a-menu-item(key="22")
            router-link(to="/VueLearning" class="link")
              span VueLearning
          a-menu-item(key="23")
            router-link(to="" class="link")
              span option3
    a-layout
      a-layout-header(style="background: #fff; padding: 0")
        a-icon(class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="()=> collapsed = !collapsed")
      a-layout-content(class="content")
        div
          router-view
      a-layout-footer(class="footer")
        div Ant Design Learning ©2019 Created by Liu Guangzhen
</template>

<script>
export default {
  name: 'GlobalLayout',
  components: {},
  data () {
    return {
      collapsed: false
    }
  },
  created () {
    this.$router.push({ path: '/VueLearning' })
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
#components-layout-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  float: left;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}
#components-layout-custom-trigger .trigger:hover {
  color: #1890ff;
}
#components-layout-custom-trigger .logo {
  height: 64px;
  background: rgba(255,255,255,.2);
}
#components-layout-custom-trigger .content {
  margin: 24px 16px;
  padding: 24px;
  background: #fff;
  min-height: 280px;
}
#components-layout-custom-trigger .footer {
  text-align: center;
}
#components-layout-custom-trigger .menu-title {
  float: left;
}
#components-layout-custom-trigger .link {
  float: left;
}
</style>
