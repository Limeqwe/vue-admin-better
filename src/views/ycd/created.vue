<template>
  <div>
    <el-container>
      <el-main>
        <!-- <p>规则生成</p> -->
        <el-form
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
          :model="ruleForm"
          :rules="rules"
        >
          <el-row>
            <el-col :span="3">&nbsp;</el-col>
            <el-col :span="9">
              <el-form-item label="数据量" prop="dataSize" style="width: 70%">
                <el-input v-model="ruleForm.dataSize"></el-input>
              </el-form-item>
              <el-form-item
                label="总推荐最大值"
                prop="maxRecommend"
                style="width: 70%"
              >
                <el-input v-model="ruleForm.maxRecommend"></el-input>
              </el-form-item>
              <el-form-item
                label="周推荐最大值"
                prop="maxWeekRecommend"
                style="width: 70%"
              >
                <el-input v-model="ruleForm.maxWeekRecommend"></el-input>
              </el-form-item>
              <el-form-item
                label="总点击最大值"
                prop="maxClick"
                style="width: 70%"
              >
                <el-input v-model="ruleForm.maxClick"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="9">
              <el-form-item label="0~30万字" prop="word30" style="width: 70%">
                <el-input v-model="ruleForm.word30"></el-input>
              </el-form-item>
              <el-form-item label="30~60万字" prop="word60" style="width: 70%">
                <el-input v-model="ruleForm.word60"></el-input>
              </el-form-item>
              <el-form-item
                label="60~100万字"
                prop="word100"
                style="width: 70%"
              >
                <el-input v-model="ruleForm.word100"></el-input>
              </el-form-item>
              <el-form-item
                label="100~200万字"
                prop="word200"
                style="width: 70%"
              >
                <el-input v-model="ruleForm.word200"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- <el-form-item>
            <p>规则生成</p>
          </el-form-item> -->

          <el-row>
            <el-col :span="7">&nbsp;</el-col>
            <el-col :span="7">
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">
                  生成
                </el-button>
                <el-button type="btn" @click="resetForm('ruleForm')">
                  重置
                </el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          dataSize: 0,
          maxRecommend: 0,
          maxWeekRecommend: 0,
          maxClick: 0,
          word30: 0,
          word60: 0,
          word100: 0,
          word200: 0,
        },
        rules: {
          dataSize: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            {
              min: 3,
              max: 5,
              message: '长度在 3 到 5 个字符',
              trigger: 'blur',
            },
          ],
        },
      }
    },
  }
</script>

<style scoped>
  .btn {
    display: flex;
    justify-content: center;
  }

  .el-button--primary {
    width: 100px;
  }
  .el-button--btn {
    width: 100px;
  }
</style>
