<template>
  <p>
    历史数据任务:
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="序号" width="120">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.order }}</span>
        </template>
      </el-table-column>
      <el-table-column label="任务名称" width="120">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.task }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作者" width="120">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.operator }}</span>
        </template>
      </el-table-column>
      <el-table-column label="数量" width="120">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.num }}</span>
        </template>
      </el-table-column>
      <el-table-column label="主要规则" width="120">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.rule }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作时间" width="120">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
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
  export default {
    data() {
      return {
        percentage: 50,
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
    methods: {
      handleEdit(index, row) {
        console.log(index, row)
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
    },
  }
</script>
