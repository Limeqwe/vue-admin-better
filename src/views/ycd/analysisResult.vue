<template>
  <div>
    <el-container>
      <el-main>
        <el-form :inline="true" :model="selectForm" class="demo-form-inline">
          <el-form-item label="可视化：">
            <el-select v-model="selectForm.value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleLook">查看</el-button>
            <el-button type="primary" @click="refresh">刷新</el-button>
          </el-form-item>
        </el-form>
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
  import { selectListByRuleId } from '@/api/testApi'
  export default {
    data() {
      return {
        options: [
          {
            value: '字数排行榜',
            label: '字数排行榜',
          },
          {
            value: '总推荐数排行榜',
            label: '总推荐数排行榜',
          },
          {
            value: '点击数排行榜',
            label: '点击数排行榜',
          },
          {
            value: '周推荐数排行榜',
            label: '周推荐数排行榜',
          },
          {
            value: '小说类型的数量排行榜',
            label: '小说类型的数量排行榜',
          },
          {
            value: '小说作者的作品数量排行榜',
            label: '小说作者的作品数量排行榜',
          },
        ],
        ruleId: '',
        selectForm: {
          value: '',
        },
        // dataList: [], //表格源数据
        tempList: [], //表格显示数据
        currentPage: 1, //当前页
        pageSize: 5, //每页行数
        total: 13, //列表总行数
        listLoading: true,
        elementLoadingText: '后台处理中。。。。',
        analysisResultList: [],
        dataList: [],
      }
    },
    watch: {
      dataList() {
        this.listLoading = !this.listLoading
        var t
        clearTimeout(t)
        t = setTimeout(function () {
          console.log('3秒后执行')
          self.listLoading = false
          // window.eventHub.$emit('refreshList', '')// 更新右侧列表状态
        }, 2000)
        this.delay()
      },
    },
    created() {
      this.ruleId = this.$route.query.sentRuleId
      console.log('ruleId:', this.ruleId)
      // this.ruleId = 0
      // selectListByRuleId(this.ruleId).then((res) => {
      selectListByRuleId(this.ruleId).then((res) => {
        console.log('res.data.data:', res.data.data)
        console.log('res.data:', res.data)
        // console.log('res.value:', res.value)
        this.dataList = res.data.data
        this.tempList = res.data.data
        this.total = res.data.data.length
      })
      // if (this.dataList) {
      //   this.listLoading = false
      // }
      // this.dataList = this.list

      this.handleCurrentChange(1)
      console.log('dataList:', this.dataList)
      console.log('tempList:', this.tempList)
    },
    methods: {
      setSelectRows() {},
      tableSortChange() {},
      handleLike() {},
      delay() {
        var self = this
        var t
        clearTimeout(t)
        t = setTimeout(function () {
          console.log('3秒后执行')
          self.listLoading = false
          // window.eventHub.$emit('refreshList', '')// 更新右侧列表状态
        }, 2000)
      },
      refresh() {
        selectListByRuleId(this.ruleId).then((res) => {
          console.log('res.data.data:', res.data.data)
          console.log('res.data:', res.data)
          // console.log('res.value:', res.value)
          this.dataList = res.data.data
          this.tempList = res.data.data
          this.total = res.data.data.length
        })
      },
      handleLook() {
        console.log('value:', this.selectForm.value)
        switch (this.selectForm.value) {
          case '字数排行榜':
            this.$router.push({
              path: '/exhibition/numRanklist',
              query: { id: this.ruleId, value: this.selectForm.value },
            })
            break
          case '总推荐数排行榜':
            this.$router.push({
              path: '/exhibition/recommendedRanklist',
              query: { id: this.ruleId, value: this.selectForm.value },
            })
            break
          case '点击数排行榜':
            this.$router.push({
              path: '/exhibition/clickRanklist',
              query: { id: this.ruleId, value: this.selectForm.value },
            })
            break
          case '周推荐数排行榜':
            this.$router.push({
              path: '/exhibition/weekRecommendedRanklist',
              query: { id: this.ruleId, value: this.selectForm.value },
            })
            break
          case '小说类型的数量排行榜':
            this.$router.push({
              path: '/exhibition/categorypie',
              query: { id: this.ruleId, value: this.selectForm.value },
            })
            break
          case '小说作者的作品数量排行榜':
            this.$router.push({
              path: '/exhibition/authorRanklist',
              query: { id: this.ruleId, value: this.selectForm.value },
            })
            break
        }
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

<style scoped></style>
