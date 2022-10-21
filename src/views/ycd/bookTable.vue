<template>
  <div>
    <el-container>
      <el-main>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="书名:">
            <el-input v-model="formInline.bookName"></el-input>
          </el-form-item>
          <el-form-item label="or   作者:">
            <el-input v-model="formInline.authorName"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="handleSearch(formInline.bookName, formInline.authorName)"
            >
              查询
            </el-button>
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
            width="55"
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="bookName"
            label="书名"
            width="120"
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="authorName"
            label="作者"
            width="120"
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="serials"
            label="是否完结"
            width="120"
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="wordsNum"
            label="字数(万字)"
            width="120"
            sortable
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="recommonend"
            label="总推荐"
            width="120"
            sortable
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="weekCRecommonend"
            label="周推荐"
            width="120"
            sortable
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="click"
            label="点击数"
            width="120"
            sortable
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="time"
            label="更新时间"
            width="130"
            sortable
          ></el-table-column>
          <el-table-column show-overflow-tooltip label="操作" width="150">
            <template #default="{ row }">
              <!-- <el-button type="text" @click="handleLike(row.id)">
                收藏
              </el-button> -->
              <el-button type="text" @click="handleCheck(row)">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          :current-page.sync="currentPage"
          :total="total"
          :page-sizes="[1, 5, 10, 15, dataList.length]"
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
  import {
    selectWriterBook,
    selectAllBook,
    selectBookByBookName,
  } from '@/api/testApi'
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
        formInline: {
          authorName: '',
          bookName: '',
        },
        bookList: [],
        dataList: [],
      }
    },
    watch: {
      dataList() {
        if (this.dataList) this.listLoading = false
        else this.listLoading = true
      },
    },
    created() {
      selectAllBook().then((res) => {
        // this.dataList = res.data.data
        // this.delay(res.data.data)
        console.log('res.data.data:', res.data.data)
        // for (let i = 0; i < 100; i++) {
        //   this.dataList[i] = res.data.data[i]
        // }
        this.dataList = res.data.data
        this.tempList = res.data.data
        this.total = res.data.data.length
        console.log('dataList:', this.dataList)
      })
      // if (this.dataList) {
      //   this.listLoading = false
      // }
      // this.dataList = this.list
      // for (let i = 0; i < this.dataList.length; i++) {
      //   this.tempList[i] = this.dataList[i]
      // }
      this.handleCurrentChange(1)
      console.log('dataList:', this.dataList)
      console.log('tempList:', this.tempList)
    },
    methods: {
      setSelectRows() {},
      tableSortChange() {},
      handleLike() {},
      refresh() {
        selectAllBook().then((res) => {
          console.log('res.data.data:', res.data.data)
          this.dataList = res.data.data
          this.tempList = res.data.data
          this.total = res.data.data.length
          console.log('dataList:', this.dataList)
        })
      },
      delay(data) {
        var that = this
        var t
        clearTimeout(t)
        t = setTimeout(function () {
          console.log('3秒后执行')
          // that.dataList = data
          // that.dataList = data.map((x) => x)
          for (let i = 0; i < 100; i++) {
            that.dataList[i] = data[i]
          }
          // console.log('dataList：', dataList)
          // window.eventHub.$emit('refreshList', '')// 更新右侧列表状态
        }, 2000)
      },
      handleCheck(row) {
        console.log('row:', row)
        this.$router.push({
          path: '/perfect/book',
          query: { sentBook: row },
        })
      },
      handleSearch(bookName, authorName) {
        console.log('submit!:', authorName)
        console.log('submit!:', bookName)
        // selectWriterBook(this.authorName).then((res) => {
        //   this.dataList = res.data.data
        //   console.log('authorBook:', this.dataList)
        // })
        if (authorName) {
          selectWriterBook(authorName).then((res) => {
            this.dataList = res.data.data
            this.tempList = res.data.data
            console.log('authorBook:', this.dataList)
          })
        } else if (bookName) {
          selectBookByBookName(bookName).then((res) => {
            this.dataList = res.data.data
            this.tempList = res.data.data
            console.log('authorBook:', this.dataList)
          })
        } else {
          selectAllBook().then((res) => {
            this.dataList = res.data.data
            this.tempList = res.data.data
            console.log('res.data.data:', res.data.data)
          })
        }
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
