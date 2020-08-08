<template lang="pug">
  a-collapse(v-model="activeKey" :bordered="false")
    a-collapse-panel(class="panel" header="stop、capture修饰符" key="1")
      //- 使用stop修饰符
      //- div(class="outside" @click="outside") 外面
      //-   div(class="center" @click.stop="center") 中间
      //-     div(class="inside" @click.stop="inside") 里面
      //- 使用capture修饰符
      //- div(class="outside" @click.capture="outside") 外面
      //-   div(class="center" @click.capture="center") 中间
      //-     div(class="inside" @click="inside") 里面
      div(class="outside" @click="outside") 外面
        div(class="center" @click="center") 中间
          div(class="inside" @click="inside") 里面
    a-collapse-panel(class="panel" header="系统修饰键" key="2")
      div .ctrl|.alt|.shift|.meta
      div 系统修饰键与常规按键不同，在和keyup一起使用时，事件触发时系统修饰键必须处于按下状态；
      a-input(@keyup.shift.enter="name" type="text")
</template>

<script>
export default {
  name: 'Chapter_6',
  data () {
    return {
      activeKey: '1'
    }
  },
  methods: {
    outside () {
      alert('外面的div')
    },
    center () {
      alert('中间的div')
    },
    inside () {
      alert('里面的div')
    },
    name () {
      alert('name')
    }
  }
}
</script>

<style lang="scss" scoped>
.outside {
  width: 300px;
  height: 300px;
  color: white;
  font-size: 30px;
  background: red;
}
.center {
  width: 200px;
  height: 200px;
  background: blue;
}
.inside {
  width: 100px;
  height: 100px;
  background: yellow;
}
.panel {
  text-align: left;
}
</style>
