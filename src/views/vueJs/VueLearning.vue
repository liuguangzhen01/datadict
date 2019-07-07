<template lang="pug">
  div(id="VueLearning")
    a-collapse(v-model="activeKey" :bordered="false")
      a-collapse-panel(class="panel" header="过滤器" key="1")
        div
          p {{ name | uppercase }}
          p {{ name | capitalize }}
      a-collapse-panel(class="panel" header="过滤器2" key="2")
        div 我的第2个测试用例
</template>

<script>
export default {
  name: 'VueLearning',
  data () {
    return {
      activeKey: ['1'],
      name: 'liu guangzhen'
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
#VueLearning .panel {
  text-align: left;
}
</style>
