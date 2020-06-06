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
      a-collapse-panel(class="panel" header="vue.js 2.0 监听(watch)的用法" key="4")
        a-row(:gutter="12")
          a-col(:span="6")
            a-button(@click="changeValues") 改变values的值
      a-collapse-panel(class="panel" header="ant-design-vue的form表单性能" key="5")
        a-form(:form="antdForm" layout="vertical")
          a-form-item(label="username" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol")
            a-input(v-decorator="['username', { rules: [{ required: true, message: 'Please input your username' }] }]")
          a-form-item(label="nickname" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol")
            a-input(v-decorator="['nickname', { rules: [{ required: true, message: 'Please input your nickname' }] }]")
    el-collapse
      el-collapse-item(title="element-ui的form表单性能" name="1") 
        el-form(:model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm")
          el-form-item(label="活动名称" prop="name")
            el-input(v-model="ruleForm.name")
          el-form-item(label="活动区域" prop="region")
            el-select(v-model="ruleForm.region" placeholder="请选择活动区域")
              el-option(label="区域一" value="shanghai")
</template>

<script>
export default {
  name: 'VueLearning',
  props: {
    values: {
      type: Array,
      default: () => []
    }
  },
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
      ],
      antdForm: this.$form.createForm(this),
      formItemLayout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 8 }
      },
      ruleForm: {
        name: '',
        region: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    onSelect (key) {
      this.getCheckedNode(this.treeData, key[0])
    },
    // 按钮事件
    getNode () {
      this.getCheckedNode(this.treeData, '1-2-1')
    },
    // 递归遍历树结构数据 改变选中节点状态
    getCheckedNode (treeList, key) {
      for (let i = 0; i < treeList.length; i++) {
        if (treeList[i].key === key) {
          treeList[i].title = 'selected'
          break
        } else if (treeList[i].children && treeList[i].children.length > 0) {
          this.getCheckedNode(treeList[i].children, key)
        }
      }
    },
    changeArray () {
      // 通过索引直接修改数据无法触发视图更新
      this.items[0] = { title: 't6', desc: 'title-6' }
      // this.items.$set(0, { title: 't6', desc: 'title-6' })
    },
    message (msg) {
      alert(msg)
    },
    changeValues () {
      this.values.push('0000')
    }
  },
  watch: {
    values: {
      handler (newArr, oldArr) {
        console.log(newArr)
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
#VueLearning .panel {
  text-align: left;
}
</style>
