<template>
  <div>
    <el-container>
      <el-main>
        <el-row>
          <el-col :span="5">
            <el-select v-model="value" placeholder="请选择" style="width: 90%">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
          <el-col :span="3">
            <el-button type="primary" @click="handleLook">可视化查看</el-button>
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-table
          ref="tableSort"
          v-loading="listLoading"
          :data="tempList"
          :element-loading-text="elementLoadingText"
          @selection-change="setSelectRows"
          @sort-change="tableSortChange"
        >
          <el-table-column
            show-overflow-tooltip
            prop="id"
            label="ID"
            width="100"
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="listName"
            label="列表名"
            width="300"
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="info"
            label="信息"
            width="300"
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="number"
            label="数量"
          ></el-table-column>
        </el-table>
        <el-pagination
          :current-page.sync="currentPage"
          :total="total"
          :page-sizes="[1, 5, 10, 15]"
          :page-size.sync="pageSize"
          background
          layout="prev, pager, next, sizes, total, jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        ></el-pagination>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: [
          {
            value: '字数排行榜',
            label: '字数排行榜',
          },
          {
            value: '总推荐排行榜',
            label: '总推荐排行榜',
          },
          {
            value: '点击数排行榜',
            label: '点击数排行榜',
          },
          {
            value: '周推荐排行榜',
            label: '周推荐排行榜',
          },
          {
            value: '分类统计饼图',
            label: '分类统计饼图',
          },
          {
            value: '小说作者柱状图',
            label: '小说作者柱状图',
          },
        ],
        ruleId: '',
        value: '',
        // dataList: [], //表格源数据
        tempList: [], //表格显示数据
        currentPage: 1, //当前页
        pageSize: 5, //每页行数
        total: 13, //列表总行数
        listLoading: true,
        elementLoadingText: '后台处理中。。。。',
        dataList: [
          {
            id: 1,
            listName: '总推荐排行榜',
            info: '活着',
            number: 32424.3,
          },
          {
            id: 2,
            listName: '总推荐排行榜',
            info: '活着',
            number: 32424.3,
          },
          {
            id: 3,
            listName: '总推荐排行榜',
            info: '活着',
            number: 32424.3,
          },
          {
            id: 4,
            listName: '总推荐排行榜',
            info: '活着',
            number: 32424.3,
          },
          {
            id: 5,
            listName: '总推荐排行榜',
            info: '活着',
            number: 32424.3,
          },
          {
            id: 6,
            listName: '总推荐排行榜',
            info: '活着',
            number: 32424.3,
          },
          {
            id: 7,
            listName: '总推荐排行榜',
            info: '活着',
            number: 32424.3,
          },
          {
            id: 8,
            listName: '总推荐排行榜',
            info: '活着',
            number: 32424.3,
          },
          {
            id: 9,
            listName: '总推荐排行榜',
            info: '活着',
            number: 32424.3,
          },
          {
            id: 10,
            listName: '总推荐排行榜',
            info: '活着',
            number: 32424.3,
          },
          {
            id: 11,
            listName: '总推荐排行榜',
            info: '活着',
            number: 32424.3,
          },
        ],
      }
    },
    created() {
      this.ruleId = this.$route.query.sentRuleId
      console.log('ruleId:', this.ruleId)
      if (this.dataList) {
        this.listLoading = false
      }
      // this.dataList = this.list
      this.tempList = this.dataList
      this.total = this.dataList.length
      this.handleCurrentChange(1)
      console.log('dataList:', this.dataList)
      console.log('tempList:', this.tempList)
    },
    methods: {
      setSelectRows() {},
      tableSortChange() {},
      handleLike() {},
      handleLook() {
        console.log('value:', this.value)
      },
      handleCheck(row) {
        console.log('row:', row)
        // this.$router.push({
        //   path: '/perfect/book',
        //   query: { sentBook: row },
        // })
      },
      //分页
      // 每页条数切换
      handleSizeChange(pageSize) {
        this.pageSize = pageSize
        this.handleCurrentChange(this.currentPage)
        this.handleCurrentChange(1)
      },
      //页码切换
      handleCurrentChange(currentPage) {
        this.currentPage = currentPage
        this.currentChangePage(this.dataList, currentPage)
      },
      //分页方法
      currentChangePage(list, currentPage) {
        let from = (currentPage - 1) * this.pageSize
        let to = currentPage * this.pageSize
        this.tempList = []
        for (; from < to; from++) {
          if (list[from]) {
            this.tempList.push(list[from])
          }
        }
        console.log(this.tempList)
      },
    },
  }
</script>

<style scoped>
  .danger {
    color: rgb(231, 0, 0);
  }
</style>
