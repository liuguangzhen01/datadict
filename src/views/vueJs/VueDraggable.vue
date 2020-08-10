<template lang="pug">
  div
    a-button(@click="openModal") 打开拖拽弹框
    a-modal(title="拖拽排序" v-model="visible" @ok="handleOk")
      draggable(:list="list" :options="options" tag="ul" class="list-group")
        transition-group(type="transition" name="flip-list")
          li(class="list-group-item" v-for="(item, index) in list" :key="item.id")
            a-icon(type="tag")
            span {{item.name}}
            span {{index + 1}}
</template>

<script>
export default {
  name: 'VueDraggable',
  data () {
    return {
      visible: false,
      dialogStyle: {
        height: '200px',
        overflowY: 'auto'
      },
      options: {
        animation: 200, // 动画时间
        disabled: false, // false可拖拽，true不可拖拽
        ghostClass: 'ghost',
        // forceFallback: true,
        scroll: true
      },
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
        },
        {
          id: '4',
          name: '刘六'
        },
        {
          id: '5',
          name: 'Sam'
        },
        {
          id: '6',
          name: 'Tim'
        },
        {
          id: '7',
          name: 'Tom'
        },
        {
          id: '8',
          name: 'Leo'
        },
        {
          id: '9',
          name: 'Tony'
        },
        {
          id: '10',
          name: 'Mark'
        },
        {
          id: '11',
          name: 'Jake'
        },
        {
          id: '12',
          name: 'Max'
        }
      ]
    }
  },
  methods: {
    openModal () {
      this.visible = true
    },
    handleOk () {
      this.visible = false
    }
  },
  watch: {
    list () {
      console.log(this.list)
    }
  }
}
</script>

<style lang="scss" scoped>
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.list-group {
  height: 300px;
  overflow-y: auto;
  .list-group-item {
    cursor: move;
    display: flex;
    justify-content: space-between;
    padding: 10px 16px;
    border: 1px solid #fff;
    height: 40px;
    width: 360px;
    text-align: center;
    background: #ccc;
  }
}
</style>
