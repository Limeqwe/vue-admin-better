<template>
  <div class="all">
    数据生成:
    <el-form ref="form" :model="form" label-width="80px" class="layout">
      <el-form-item label="数据量" class="data">
        <el-input
          v-model="form.name"
          placeholder="请输入数据量"
          class="input3"
        ></el-input>
      </el-form-item>

      <el-form-item label="总推荐" class="layout">
        <el-input
          v-model="form.allRecommend_low"
          class="input1"
          placeholder="请输入最低推荐数"
        ></el-input>
        <el-input
          v-model="form.allRecommend_high"
          class="input2"
          placeholder="请输入最高推荐数"
        ></el-input>
      </el-form-item>

      <el-form-item label="总点击" class="layout">
        <el-input
          v-model="form.allClick_low"
          placeholder="请输入最低推荐数"
          class="input1"
        ></el-input>
        <el-input
          v-model="form.allClick_high"
          placeholder="请输入最高推荐数"
          class="input2"
        ></el-input>
      </el-form-item>

      <el-form-item label="周推荐" class="layout">
        <el-input
          v-model="form.weekRecommend_low"
          placeholder="请输入最低推荐数"
          class="input1"
        ></el-input>
        <el-input
          v-model="form.weekRecommend_high"
          placeholder="请输入最高推荐数"
          class="input2"
        ></el-input>
      </el-form-item>

      <el-form-item label="0~30万字" class="layout">
        <el-input
          v-model="form.num0"
          placeholder="请输入百分比"
          class="input3"
        ></el-input>
      </el-form-item>

      <el-form-item label="30~60万字" class="layout">
        <el-input
          v-model="form.num1"
          placeholder="请输入百分比"
          class="input3"
        ></el-input>
      </el-form-item>

      <el-form-item label="60~100万字" class="layout">
        <el-input
          v-model="form.num2"
          placeholder="请输入百分比"
          class="input3"
        ></el-input>
      </el-form-item>
      <el-form-item label="100~200万字" class="layout">
        <el-input
          v-model="form.num2"
          placeholder="请输入百分比"
          class="input3"
        ></el-input>
      </el-form-item>

      <el-form-item label="标签">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="武侠仙侠" name="type"></el-checkbox>
          <el-checkbox label="历史军事" name="type"></el-checkbox>
          <el-checkbox label="都市娱乐" name="type"></el-checkbox>
          <el-checkbox label="竞技同人" name="type"></el-checkbox>
          <el-checkbox label="评论文集" name="type"></el-checkbox>
          <el-checkbox label="二次元" name="type"></el-checkbox>
          <el-checkbox label="脑洞星球" name="type"></el-checkbox>
          <el-checkbox label="奇幻玄幻" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" class="create" @click="onCreate">
          立即生成
        </el-button>
        <el-button type="primary" class="random" @click="onRandom">
          全随机
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
      }
    },
    methods: {
      onCreate() {
        // console.log('submit!')
        this.$router.push({ path: '/history' })
      },
      onRandom() {
        // console.log('onRandom!')
        this.$confirm('当前随机生成的数据为:XXX', '生成数据', {
          confirmButtomText: '生成',
          cancelButtomText: '取消',
          type: 'warning',
        })
          .then(() => {
            this.$message({
              type: 'scuess',
              message: '生成成功！',
            })
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除',
            })
          })
      },
    },
  }
</script>
<style>
  .low {
    width: 20%;
  }
  .high {
    width: 20%;
  }
  /* .line {
    display: flex;
    justify-content: space-between;
  } */
  .input1 {
    -webkit-text-fill-color: gray;
    width: 20%;
    left: 100px;
  }
  .input2 {
    -webkit-text-fill-color: gray;
    width: 20%;
    left: 300px;
  }
  .input3 {
    -webkit-text-fill-color: gray;
    width: 60%;
    left: 100px;
  }
  .random {
    position: absolute;
    right: 400px;
  }
  .layout {
    right: 400px;
  }
  .create {
    right: 150px;
  }
</style>
