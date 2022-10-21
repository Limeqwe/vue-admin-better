<template>
  <div>
    <el-container>
      <el-main>
        <!-- <p>规则生成</p> -->
        <el-form
          ref="ruleForm"
          label-width="150px"
          class="demo-ruleForm"
          :model="ruleForm"
          :rules="rules"
        >
          <el-row>
            <el-col :span="3">&nbsp;</el-col>
            <el-col :span="9">
              <el-form-item label="生成规则：" prop="value1">
                <el-select v-model="value1" placeholder="请选择">
                  <el-option
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="数据量：" prop="dataSize" style="width: 70%">
                <el-input v-model.number="ruleForm.dataSize"></el-input>
              </el-form-item>
              <el-form-item
                label="总推荐最大值："
                prop="maxRecommend"
                style="width: 70%"
              >
                <el-input v-model.number="ruleForm.maxRecommend"></el-input>
              </el-form-item>
              <el-form-item
                label="周推荐最大值："
                prop="maxWeekRecommend"
                style="width: 70%"
              >
                <el-input v-model.number="ruleForm.maxWeekRecommend"></el-input>
              </el-form-item>
              <el-form-item
                label="总点击最大值："
                prop="maxClick"
                style="width: 70%"
              >
                <el-input v-model.number="ruleForm.maxClick"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="9">
              <el-form-item label="字数百分比：" prop="value2">
                <el-select v-model="value2" placeholder="请选择">
                  <el-option
                    v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item
                label="0~30万字："
                prop="fristWordNum"
                style="width: 70%"
              >
                <el-input v-model.number="ruleForm.fristWordNum">
                  <template slot="append">%</template>
                </el-input>
              </el-form-item>
              <el-form-item
                label="30~60万字："
                prop="secondWordNum"
                style="width: 70%"
              >
                <el-input v-model.number="ruleForm.secondWordNum">
                  <template slot="append">%</template>
                </el-input>
              </el-form-item>
              <el-form-item
                label="60~100万字："
                prop="thirdWordNum"
                style="width: 70%"
              >
                <el-input v-model.number="ruleForm.thirdWordNum">
                  <template slot="append">%</template>
                </el-input>
              </el-form-item>
              <el-form-item
                label="100~200万字："
                prop="fourthWordNum"
                style="width: 70%"
              >
                <el-input v-model.number="ruleForm.fourthWordNum">
                  <template slot="append">%</template>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- <el-form-item>
            <p>规则生成</p>
          </el-form-item> -->

          <el-row>
            <el-col :span="7">&nbsp;</el-col>
            <el-col :span="17">
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
  import { setRule } from '@/api/testApi'
  export default {
    data() {
      return {
        value1: '',
        value2: '',
        options1: [
          {
            value: '0',
            label: '自定义',
          },
          {
            value: '1',
            label: '10万，1万，0.1万，5万',
          },
          {
            value: '2',
            label: '100万，10万，0.5万，20万',
          },
          {
            value: '3',
            label: '200万，15万，0.5万，50万',
          },
        ],
        options2: [
          {
            value: null,
            label: '自定义',
          },
          {
            value: '1',
            label: '50%，30%，15%，5%',
          },
          {
            value: '2',
            label: '40%，40%，10%，10%',
          },
          {
            value: '3',
            label: '20%，40%，35%，5%',
          },
        ],
        ruleForm: {
          dataSize: null,
          maxRecommend: null,
          maxWeekRecommend: null,
          maxClick: null,
          fristWordNum: null,
          secondWordNum: null,
          thirdWordNum: null,
          fourthWordNum: null,
        },
        rules: {
          dataSize: [
            {
              required: true,
              message: '请输入数据量',
              trigger: 'blur',
            },
            {
              type: 'number',
              // max: 450000,
              min: 100,
              message: '必须大于100',
              trigger: 'blur',
            },
          ],
          maxRecommend: [
            {
              required: true,
              message: '请输入数据量',
              trigger: 'blur',
            },
            {
              type: 'number',
              min: 10,
              message: '必须大于10',
              trigger: 'blur',
            },
          ],
          maxWeekRecommend: [
            {
              required: true,
              message: '请输入数据量',
              trigger: 'blur',
            },
            {
              type: 'number',
              min: 10,
              message: '必须大于10',
              trigger: 'blur',
            },
          ],
          maxClick: [
            {
              required: true,
              message: '请输入数据量',
              trigger: 'blur',
            },
            {
              type: 'number',
              min: 10,
              message: '必须大于10',
              trigger: 'blur',
            },
          ],
          fristWordNum: [
            {
              required: true,
              message: '请输入占比',
              trigger: 'blur',
            },
            {
              type: 'number',
              min: 0,
              max: 100,
              message: '必须大于0且小于100',
              trigger: 'blur',
            },
          ],
          secondWordNum: [
            {
              required: true,
              message: '请输入占比',
              trigger: 'blur',
            },
            {
              type: 'number',
              min: 0,
              // max: 100,
              message: '必须大于0且小于100',
              trigger: 'blur',
            },
          ],
          thirdWordNum: [
            {
              required: true,
              message: '请输入占比',
              trigger: 'blur',
            },
            {
              type: 'number',
              min: 0,
              max: 100,
              message: '必须大于0且小于100',
              trigger: 'blur',
            },
          ],
          fourthWordNum: [
            {
              required: true,
              message: '请输入占比',
              trigger: 'blur',
            },
            {
              type: 'number',
              min: 0,
              max: 100,
              message: '必须大于0且小于100',
              trigger: 'blur',
            },
          ],
        },
      }
    },
    watch: {
      value1() {
        console.log('value1:', this.value1)
        switch (this.value1) {
          case null:
            this.ruleForm.dataSize = null
            this.ruleForm.maxRecommend = null
            this.ruleForm.maxWeekRecommend = null
            this.ruleForm.maxClick = null
            break
          case '0':
            this.ruleForm.dataSize = 0
            this.ruleForm.maxRecommend = 0
            this.ruleForm.maxWeekRecommend = 0
            this.ruleForm.maxClick = 0
            break
          case '1':
            this.ruleForm.dataSize = 100000
            this.ruleForm.maxRecommend = 10000
            this.ruleForm.maxWeekRecommend = 1000
            this.ruleForm.maxClick = 50000
            break
          case '2':
            this.ruleForm.dataSize = 1000000
            this.ruleForm.maxRecommend = 100000
            this.ruleForm.maxWeekRecommend = 5000
            this.ruleForm.maxClick = 200000
            break
          case '3':
            this.ruleForm.dataSize = 2000000
            this.ruleForm.maxRecommend = 150000
            this.ruleForm.maxWeekRecommend = 5000
            this.ruleForm.maxClick = 500000
            break
        }
        console.log('ruleForm:', this.ruleForm)
      },
      value2() {
        console.log('value2:', this.value2)
        switch (this.value2) {
          case null:
            this.ruleForm.fristWordNum = null
            this.ruleForm.secondWordNum = null
            this.ruleForm.thirdWordNum = null
            this.ruleForm.fourthWordNum = null
            break
          // case '0':
          //   this.ruleForm.fristWordNum = 0
          //   this.ruleForm.secondWordNum = 0
          //   this.ruleForm.thirdWordNum = 0
          //   this.ruleForm.fourthWordNum = 0
          //   break
          case '1':
            this.ruleForm.fristWordNum = 50
            this.ruleForm.secondWordNum = 30
            this.ruleForm.thirdWordNum = 15
            this.ruleForm.fourthWordNum = 5
            break
          case '2':
            this.ruleForm.fristWordNum = 40
            this.ruleForm.secondWordNum = 40
            this.ruleForm.thirdWordNum = 10
            this.ruleForm.fourthWordNum = 10
            break
          case '3':
            this.ruleForm.fristWordNum = 20
            this.ruleForm.secondWordNum = 40
            this.ruleForm.thirdWordNum = 35
            this.ruleForm.fourthWordNum = 5
            break
        }
        console.log('ruleForm:', this.ruleForm)
      },
      'ruleForm.fristWordNum'() {
        if (!this.value2) {
          this.ruleForm.secondWordNum = 100 - this.ruleForm.fristWordNum
        }
      },
      'ruleForm.secondWordNum'() {
        if (!this.value2) {
          this.ruleForm.thirdWordNum =
            100 - this.ruleForm.fristWordNum - this.ruleForm.secondWordNum
        }
      },
      'ruleForm.thirdWordNum'() {
        if (!this.value2) {
          this.ruleForm.fourthWordNum =
            100 -
            this.ruleForm.fristWordNum -
            this.ruleForm.secondWordNum -
            this.ruleForm.thirdWordNum
        }
      },
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$alert(
              '生成过程大概需要几分钟，请稍后查看。',
              '数据生成中',
              {
                confirmButtonText: '确定',
              },
              setRule(this.ruleForm).then((res) => {
                console.log('res.data.data:', res.data.data)
              })
            )
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm(formName) {
        this.value1 = null
        this.value2 = null
        this.$refs[formName].resetFields()
      },
    },
  }
</script>

<style scoped>
  .el-button--primary {
    width: 100px;
  }
  .el-button--btn {
    width: 100px;
  }
</style>
