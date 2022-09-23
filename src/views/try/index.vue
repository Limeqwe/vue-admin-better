<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ id }}</h1>
    <h1>{{ value }}</h1>
  </div>
</template>

<script>
  let _self
  import { defineComponent } from '@vue/composition-api'
  import test from '@/api/test.js'
  export default {
    name: 'FirstPage',
    data() {
      return {
        id: 2,
        msg: '',
        value: '',
      }
    },
    mounted() {
      _self = this
      _self.test1()
    },
    methods: {
      test1() {
        test.Totest(this.id).then((res) => {
          // _self.msg = res.data.data[0].id
          console.log(res)
          console.log(_self.msg)
          _self.id = res.data.id
          _self.value = res.data
        })
      },
    },
  }
</script>
<style scoped></style>
