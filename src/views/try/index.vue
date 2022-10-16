<template>
  <div>
    <el-container>
      <el-main>
        <el-button @click="printValue">默认按钮</el-button>
        历史数据任务:
        <el-table :data="[value]" style="width: 100%">
          <el-table-column label="序号" width="120" prop="topList">
            <!-- <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.topList }}</span>
        </template> -->
          </el-table-column>
          <el-table-column label="数据量" width="120" prop="dataOrigin">
            <!-- <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.dataOrigin }}</span>
        </template> -->
          </el-table-column>
          <el-table-column label="总推荐最大值" width="120" prop="id">
            <!-- <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.id }}</span>
        </template> -->
          </el-table-column>
          <el-table-column label="周推荐最大值" width="120" prop="listName">
            <!-- <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.listName }}</span>
        </template> -->
          </el-table-column>
          <el-table-column label="总点击最大值" width="120" prop="Information">
            <!-- <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.Information }}</span>
        </template> -->
          </el-table-column>
          <el-table-column
            label="0~30万字"
            width="120"
            prop="bookName"
          ></el-table-column>
          <el-table-column
            label="30~60万字"
            width="120"
            prop="bookName"
          ></el-table-column>
          <el-table-column
            label="60~100万字"
            width="120"
            prop="bookName"
          ></el-table-column>
          <el-table-column
            label="100~200万字"
            width="120"
            prop="bookName"
          ></el-table-column>
          <el-table-column label="操作时间" width="120" prop="bookName">
            <!-- <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.bookName }}</span>
        </template> -->
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
              >
                结果分析
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
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import { postListByListName } from '../../api/testApi'
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
      }
    },
    created() {
      var that = this
      postListByListName(this.param).then((res) => {
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
      printValue() {
        console.log(this.value)
        console.log(this.tableData)
      },
    },
  }
</script>
