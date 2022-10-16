<template>
  <div>
    <el-container>
      <el-main>
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
            width="55"
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="dataSize"
            label="数据量"
            width="90"
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="maxRecommend"
            label="总推荐最大值"
            width="120"
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="maxWeekRecommend"
            label="周推荐最大值"
            width="120"
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="maxClick"
            label="总点击最大值"
            width="120"
            sortable
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="fristWordNum"
            label="0~30万字(%)"
            width="120"
            sortable
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="secondWordNum"
            label="30~60万字(%)"
            width="120"
            sortable
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="thirdWordNum"
            label="60~100万字(%)"
            width="120"
            sortable
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="fourthWordNum"
            label="100~200万字(%)"
            width="130"
            sortable
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="createdDate"
            label="生成时间"
            width="150"
            sortable
          ></el-table-column>
          <el-table-column show-overflow-tooltip label="操作" width="150">
            <template #default="{ row }">
              <el-button type="text" @click="handleAnalysis(row.id)">
                分析
              </el-button>
              <el-button class="danger" type="text" @click="handleCheck(row)">
                删除
              </el-button>
            </template>
          </el-table-column>
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
            dataSize: 10000,
            maxRecommend: 2000,
            maxWeekRecommend: 2000,
            maxClick: 50000,
            fristWordNum: 50,
            secondWordNum: 20,
            thirdWordNum: 20,
            fourthWordNum: 10,
            createdDate: '2022-10-16 19:02',
          },
          {
            id: 2,
            dataSize: 20000,
            maxRecommend: 4000,
            maxWeekRecommend: 4000,
            maxClick: 50000,
            fristWordNum: 50,
            secondWordNum: 20,
            thirdWordNum: 20,
            fourthWordNum: 10,
            createdDate: '2022-10-16 19:02',
          },
          {
            id: 2,
            dataSize: 20000,
            maxRecommend: 4000,
            maxWeekRecommend: 4000,
            maxClick: 50000,
            fristWordNum: 50,
            secondWordNum: 20,
            thirdWordNum: 20,
            fourthWordNum: 10,
            createdDate: '2022-10-16 19:02',
          },
          {
            id: 2,
            dataSize: 20000,
            maxRecommend: 4000,
            maxWeekRecommend: 4000,
            maxClick: 50000,
            fristWordNum: 50,
            secondWordNum: 20,
            thirdWordNum: 20,
            fourthWordNum: 10,
            createdDate: '2022-10-16 19:02',
          },
          {
            id: 2,
            dataSize: 20000,
            maxRecommend: 4000,
            maxWeekRecommend: 4000,
            maxClick: 50000,
            fristWordNum: 50,
            secondWordNum: 20,
            thirdWordNum: 20,
            fourthWordNum: 10,
            createdDate: '2022-10-16 19:02',
          },
          {
            id: 2,
            dataSize: 20000,
            maxRecommend: 4000,
            maxWeekRecommend: 4000,
            maxClick: 50000,
            fristWordNum: 50,
            secondWordNum: 20,
            thirdWordNum: 20,
            fourthWordNum: 10,
            createdDate: '2022-10-16 19:02',
          },
          {
            id: 2,
            dataSize: 20000,
            maxRecommend: 4000,
            maxWeekRecommend: 4000,
            maxClick: 50000,
            fristWordNum: 50,
            secondWordNum: 20,
            thirdWordNum: 20,
            fourthWordNum: 10,
            createdDate: '2022-10-16 19:02',
          },
          {
            id: 2,
            dataSize: 20000,
            maxRecommend: 4000,
            maxWeekRecommend: 4000,
            maxClick: 50000,
            fristWordNum: 50,
            secondWordNum: 20,
            thirdWordNum: 20,
            fourthWordNum: 10,
            createdDate: '2022-10-16 19:02',
          },
          {
            id: 2,
            dataSize: 20000,
            maxRecommend: 4000,
            maxWeekRecommend: 4000,
            maxClick: 50000,
            fristWordNum: 50,
            secondWordNum: 20,
            thirdWordNum: 20,
            fourthWordNum: 10,
            createdDate: '2022-10-16 19:02',
          },
          {
            id: 2,
            dataSize: 20000,
            maxRecommend: 4000,
            maxWeekRecommend: 4000,
            maxClick: 50000,
            fristWordNum: 50,
            secondWordNum: 20,
            thirdWordNum: 20,
            fourthWordNum: 10,
            createdDate: '2022-10-16 19:02',
          },
          {
            id: 2,
            dataSize: 20000,
            maxRecommend: 4000,
            maxWeekRecommend: 4000,
            maxClick: 50000,
            fristWordNum: 50,
            secondWordNum: 20,
            thirdWordNum: 20,
            fourthWordNum: 10,
            createdDate: '2022-10-16 19:02',
          },
        ],
      }
    },
    created() {
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
      handleAnalysis(id) {
        console.log('id:', id)
        this.$router.push({
          path: '/perfect/analysisResult',
          query: { sentRuleId: id },
        })
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
