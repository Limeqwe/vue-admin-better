<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
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
        msg: '',
      }
    },
    mounted() {
      _self = this
      _self.test1()
    },
    methods: {
      test1() {
        test.Totest().then((res) => {
          _self.msg = res.data.data[0].id
          console.log(res)
          console.log(_self.msg)
        })
      },
    },
  }
</script>
<style scoped></style>
