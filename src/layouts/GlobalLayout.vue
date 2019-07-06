<template lang="pug">
  a-layout(id="components-layout-custom-trigger")
    a-layout-sider(:trigger="null" collapsible v-model="collapsed")
      div(class="logo")
      a-menu(theme="dark" mode="inline" :defaultSelectedKeys="['1']")
        a-menu-item(key="1")
          router-link(to="AntDesignVue" :style="{ color: 'aqua', float: 'left' }")
            a-icon(type="profile")
            span ant-design-vue
        a-menu-item(key="2")
          router-link(to="HelloWorld" :style="{ color: 'aqua', float: 'left' }")
            a-icon(type="profile")
            span hello-world
    a-layout
      a-layout-header(style="background: #fff; padding: 0")
        a-icon(class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="()=> collapsed = !collapsed")
      a-layout-content(class="content")
        div
          router-view
</template>

<script>
export default {
  name: 'GlobalLayout',
  components: {},
  data () {
    return {
      collapsed: false
    }
  }
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
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
#components-layout-custom-trigger .content {
  margin: 24px 16px;
  padding: 24px;
  background: #fff;
  min-height: 280px;
}
</style>
