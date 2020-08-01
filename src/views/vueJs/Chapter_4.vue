<template lang="pug">
  a-collapse(v-model="activeKey" :bordered="false")
    a-collapse-panel(class="panel" header="数组的变异方法" key="1")
      span 说明：变异方法会改变原始数组
      ul
        li(v-for="value,index in items" :key="index") {{value}}
    a-collapse-panel(class="panel" header="数组的非变异方法" key="2")
      span 说明：非变异方法不会改变原始数组，而是返回一个新数组
      ul
        li(v-for="value,index in items2" :key="index") {{value}}
</template>

<script>
export default {
  name: 'Chapter_4',
  data () {
    return {
      activeKey: '1',
      items: [
        'push',
        'pop',
        'shift',
        'unShift',
        'splice',
        'sort',
        'reverse'
      ],
      items2: [
        'contact',
        'slice',
        'map',
        'filter'
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.panel {
  text-align: left;
}
</style>
