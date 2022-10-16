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
          <!-- <el-table-column
            show-overflow-tooltip
            type="selection"
            width="55"
          ></el-table-column> -->
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
              <el-button type="text" @click="handleLike(row)">收藏</el-button>
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
  export default {
    data() {
      return {
        accept: '',
        author: { authorName: '漆奥峤', authorWordsNum: 443.6, bookNum: 4 },
        listLoading: true,
        elementLoadingText: '后台处理中。。。。',
        bookList: [
          {
            id: 1,
            bookName: '民国诡闻实录',
            authorName: '王富贵',
            serials: '连载中',
            wordsNum: 210.1,
            recommonend: 5444,
            weekCRecommonend: 320,
            click: 6420,
            time: '21小时前',
            introduce:
              '民国初立，军阀割据，活人难生世道艰，死人复阳妖异现，此为众生鬼像也，兴安岭猎人岳观潮为救被出马仙诅咒的弟兄，惹上兴安岭原始神灵，从此踏上一条未知险途，兴安岭、长白山、贝加尔、神农架、罗布泊……他在乱世漂泊中辗转各地，探索诡异秘闻，寻觅扑朔迷离的真相！',
            imgUrl:
              'https://static.zongheng.com/upload/cover/ca/60/ca60ae14553d0703b82a9993f87af0b9.jpeg',
            bookUrl: 'https://book.zongheng.com/book/1208354.html',
          },
          {
            id: 2,
            bookName: '民国诡闻',
            authorName: '王富贵2222',
            serials: '连载中',
            wordsNum: 240.1,
            recommonend: 3444,
            weekCRecommonend: 320,
            click: 7420,
            time: '21小时前',
            introduce: '测试测试测试测试',
            imgUrl: '',
            bookUrl: '',
          },
        ],
      }
    },
    created() {
      this.accept = this.$route.query.sentAuthor
      this.author.authorName = this.accept
      console.log('authorName: ', this.author.authorName)
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
