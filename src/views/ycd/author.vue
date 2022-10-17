<template>
  <el-container>
    <el-main>
      <el-container>
        <span class="book-title">{{ author.authorName }}</span>
      </el-container>
      <el-container>
        <el-main>
          <span class="tag">
            作品数：{{ author.bookNum }}本&emsp;&emsp;&emsp;累计字数：{{
              author.authorWordsNum
            }}万字
          </span>
        </el-main>
      </el-container>
      <el-divider></el-divider>
      <el-container>
        <el-table
          ref="tableSort"
          v-loading="listLoading"
          :data="bookList"
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
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="serials"
            label="是否完结"
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="wordsNum"
            label="字数(万字)"
            sortable
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="recommonend"
            label="总推荐"
            sortable
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="weekCRecommonend"
            label="周推荐"
            sortable
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="click"
            label="点击数"
            sortable
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="time"
            label="更新时间"
          ></el-table-column>
          <el-table-column show-overflow-tooltip label="操作" width="160px">
            <template #default="{ row }">
              <!-- <el-button type="text" @click="handleLike(row)">收藏</el-button> -->
              <el-button type="text" @click="handleCheck(row)">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-container>
      <el-divider></el-divider>
    </el-main>
  </el-container>
</template>
<script>
  import { selectWriterInformation, selectWriterBook } from '@/api/testApi'
  export default {
    data() {
      return {
        accept: '',
        author: { authorName: '漆奥峤', authorWordsNum: 443.6, bookNum: 4 },
        listLoading: true,
        elementLoadingText: '后台处理中。。。。',
        bookList: [],
      }
    },
    created() {
      this.accept = this.$route.query.sentAuthor
      this.author.authorName = this.accept
      console.log('authorName: ', this.author.authorName)
      selectWriterInformation(this.author.authorName).then((res) => {
        this.author = res.data.data
        console.log('author:', this.author)
      })
      selectWriterBook(this.author.authorName).then((res) => {
        this.bookList = res.data.data
        console.log('bookList:', this.bookList)
      })
      if (this.bookList) {
        this.listLoading = false
      }
    },
    methods: {
      setSelectRows() {},
      tableSortChange() {},
      handleLike() {},
      handleCheck(row) {
        console.log('row:', row)
        this.$router.push({
          path: '/perfect/book',
          query: { sentBook: row },
        })
      },
    },
  }
</script>
<style scoped>
  .book-title {
    font-size: 40px;
  }
  /* .interduce {
    line-height: 25px;
  } */
</style>
