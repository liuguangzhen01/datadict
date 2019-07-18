<template lang="pug">
  div(id="VueLearning")
    a-collapse(v-model="activeKey" :bordered="false")
      a-collapse-panel(class="panel" header="v-for的用法" key="1")
        a-row(:gutter="12")
          a-col(:span="6")
            span v-for可以遍历数据
              a-button(@click="changeArray") 改变
            ul
              li(v-for="item,index in items") {{index}}-{{item.title}}-{{item.desc}}
          a-col(:span="6")
            span v-for可以遍历对象
            ul
              li(v-for="val,key in objDemo") {{key}}-{{val}}
          a-col(:span="6")
            span v-for可以遍历整数
            ul
              li(v-for="i in 3") {{i}}
      a-collapse-panel(class="panel" header="v-on修饰符的用法" key="2")
        a-row(:gutter="12")
          a-col(:span="6")
            div(@clivk="message('click from inner')" @click.self="message('click from self')" style="padding: 10px; border: 1px solid #ccc")
              a-button(@click="message('button click')") button1
              a-button(@click.stop="message('just button click')") button2
          a-col(:span="6")
            a-input(@keyup.13="message('13')")
            a-input(@keyup.enter="message('enter')")
      a-collapse-panel(class="panel" header="ant-design-vue的a-tree的用法" key="3")
        a-row(:gutter="12")
          a-col(:span="6")
            a-button(@click="getNode") 获取key='1-2-1'的节点
            a-tree(:treeData="treeData" @select="onSelect")
</template>

<script>
export default {
  name: 'VueLearning',
  data () {
    return {
      activeKey: ['1', '2', '3'],
      items: [
        { title: 't1', desc: 'title-1' },
        { title: 't2', desc: 'title-2' },
        { title: 't3', desc: 'title-3' }
      ],
      objDemo: {
        name: 'Liu Guangzhen',
        age: 25,
        sex: '男'
      },
      treeData: [
        {
          key: '1',
          title: 'title#1',
          children: [
            {
              key: '1-1',
              title: 'title#1-1',
              children: [
                {
                  key: '1-1-1',
                  title: 'title#1-1-1'
                },
                {
                  key: '1-1-2',
                  title: 'title#1-1-2'
                },
                {
                  key: '1-1-3',
                  title: 'title#1-1-3'
                }
              ]
            },
            {
              key: '1-2',
              title: 'title#1-2',
              children: [
                {
                  key: '1-2-1',
                  title: 'title#1-2-1'
                }
              ]
            },
            {
              key: '1-3',
              title: 'title#1-3'
            }
          ]
        },
        {
          key: '2',
          title: 'title#2',
          children: [
            {
              key: '2-1',
              title: 'title#2-1',
              children: [
                {
                  key: '2-1-1',
                  title: 'title#2-1-1'
                },
                {
                  key: '2-1-2',
                  title: 'title#2-1-2'
                }
              ]
            },
            {
              key: '2-2',
              title: 'title#2-2',
              children: [
                {
                  key: '2-2-1',
                  title: 'title#2-2-1'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    onSelect(key) {
      this.getCheckedNode(this.treeData, key[0])
    },
    // 按钮事件
    getNode() {
      this.getCheckedNode(this.treeData, '1-2-1')
    },
    // 递归遍历树结构数据 改变选中节点状态
    getCheckedNode(treeList, key) {
      for(let i = 0; i < treeList.length; i++) {
        if (treeList[i].key === key) {
          treeList[i].title = 'selected'
          break
        } else if (treeList[i].children && treeList[i].children.length > 0) {
          this.getCheckedNode(treeList[i].children, key)
        }
      }
    },
    // 
    changeArray () {
      // 通过索引直接修改数据无法触发视图更新
      this.items[0] = { title: 't6', desc: 'title-6' }
      // this.items.$set(0, { title: 't6', desc: 'title-6' })
    },
    message (msg) {
      alert(msg)
    },
    message (msg) {
      alert(msg)
    }
  }
}
</script>

<style lang="scss" scoped>
#VueLearning .panel {
  text-align: left;
}
</style>
