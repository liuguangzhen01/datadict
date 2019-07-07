<template lang="pug">
  div(class="ant-design")
    h1 {{ msg }}
    a-button(@click="changeMsg()") changeMsg
    a-form(:layout="formLayout" :form="userForm")
      a-form-item(label="Note" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }")
        a-input(placeholder="Please input note")
      a-form-item(label="Email" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }")
        a-input(placeholder="Please input email")
      a-form-item(label="Birthday" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }")
        a-date-picker(placeholder="Please input Birthday" :defaultValue="this.$moment('2015-01-01', 'YYYY-MM-DD')")
</template>

<script>
export default {
  name: 'AntDesignVueExample',
  data () {
    return {
      formLayout: 'horizontal',
      userForm: this.$form.createForm(this),
      msg: 'This is ant-design-vue demo page!',
      today: null
    }
  },
  // 侦听器
  watch: {
    msg: function (newVal, oldVal) {
      console.log('newVal:' + newVal)
      console.log('oldVal:' + oldVal)
    }
  },
  // 计算属性
  computed: {
    msg1: function () {
      return 'computed ' + this.msg
    }
  },
  created () {
    this.today = this.$moment().subtract(10, 'days').calendar()
    console.log(this.today)
  },
  methods: {
    changeMsg () {
      this.msg = 'Changed!'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
