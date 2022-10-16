<template>
  <p>
    <el-button @click="printValue">默认按钮</el-button>
    历史数据任务:
    <el-table :data="[value]" style="width: 100%">
      <el-table-column label="序号" width="120" prop="topList">
        <!-- <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.topList }}</span>
        </template> -->
      </el-table-column>
      <el-table-column label="任务名称" width="120" prop="dataOrigin">
        <!-- <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.dataOrigin }}</span>
        </template> -->
      </el-table-column>
      <el-table-column label="操作者" width="120" prop="id">
        <!-- <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.id }}</span>
        </template> -->
      </el-table-column>
      <el-table-column label="数量" width="120" prop="listName">
        <!-- <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.listName }}</span>
        </template> -->
      </el-table-column>
      <el-table-column label="主要规则" width="120" prop="Information">
        <!-- <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.Information }}</span>
        </template> -->
      </el-table-column>
      <el-table-column label="操作时间" width="120" prop="bookName">
        <!-- <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.bookName }}</span>
        </template> -->
      </el-table-column>
      <el-table-column label="状态" width="120">
        <el-progress
          :percentage="percentage"
          :color="customColorMethod"
        ></el-progress>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
            结果分析
          </el-button>
          <el-button size="mini" @click="handleEdit1(scope.$index, scope.row)">
            规则查看
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </p>
</template>

<script>
  import { postInformation } from '../../api/testApi'
  export default {
    data() {
      return {
        percentage: 50,
        id: '1',
        param: {
          id: 1,
        },
        value: [],
        postValue: {},
        tableData: [
          {
            order: 1,
            task: '数据生成',
            operator: '青柠',
            num: 10000,
            rule: '作者,类别',
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
          },
          {
            order: 2,
            task: '数据生成',
            operator: '小虎',
            num: 10000,
            rule: '作者，类别',
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
          },
          {
            order: 3,
            task: '数据生成',
            operator: '小青',
            num: 10000,
            rule: '作者，类别',
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
          },
          {
            order: 4,
            task: '数据生成',
            operator: '小娜',
            num: 10000,
            rule: '作者，类别',
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
          },
        ],
      }
    },
    created() {
      var that = this
      postInformation(this.param).then((res) => {
        console.log('成功,res.data', res.data.data)
        that.value = res.data.data
        console.log(that.value)
      })
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row)
        this.$router.push({ path: '/show' + '/show' })
      },

      handleEdit1(index, row) {
        this.$confirm('具体信息为:XXXXXXX', '规则生成为:', {
          confirmButtonText: '确定',
          cancalButtonText: '取消',
          type: 'warning',
        })
          .then(() => {
            this.$message({
              type: 'scuess',
              message: '确定成功！',
            })
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '取消成功!',
            })
          })
      },

      handleDelete(index, row) {
        console.log(index, row)
      },

      customColorMethod(percentage) {
        if (percentage < 30) {
          return '#909399'
        } else if (percentage < 70) {
          return '#e6a23c'
        } else {
          return '#67c23a'
        }
      },

      increase() {
        this.percentage += 10
        if (this.percentage > 100) {
          this.percentage = 100
        }
      },

      decrease() {
        this.percentage -= 10
        if (this.percentage < 0) {
          this.percentage = 0
        }
      },

      printValue() {
        console.log(this.value)
        console.log(this.tableData)
      },
    },
  }
</script>
