<template lang="pug">
  draggable(:list="list" ghost-class="ghost")
    div(v-for="item in list" :key="item.id" style="cursor: pointer;border: 1px solid red; width: 100px;") {{item.name}}
</template>

<script>
export default {
  name: 'VueDraggable',
  data () {
    return {
      list: [
        {
          id: '1',
          name: '张三'
        },
        {
          id: '2',
          name: '李四'
        },
        {
          id: '3',
          name: '王五'
        }
      ]
    }
  },
  methods: {},
  watch: {
    list () {
      console.log(this.list)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
