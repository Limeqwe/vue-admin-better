<template>
  <div>
    <el-container>
      <el-main>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="书名:">
            <el-input v-model="formInline.authorName"></el-input>
          </el-form-item>
          <!-- <big>or</big> -->
          <el-form-item label="or   作者:">
            <el-input v-model="formInline.bookName"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit(formInline)">
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
            width="200"
          ></el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="authorName"
            label="作者"
            width="200"
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
            prop="time"
            label="更新时间"
          ></el-table-column>
          <el-table-column show-overflow-tooltip label="操作" width="190">
            <template #default="{ row }">
              <el-button type="text" @click="handleLike(row)">
                取消收藏
              </el-button>
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
        dataList: [
          {
            id: 1,
            bookName: '民国诡闻实录',
            authorName: '王富贵',
            serials: '连载中',
            words: 210.1,
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
            words: 240.1,
            recommonend: 3444,
            weekCRecommonend: 320,
            click: 7420,
            time: '21小时前',
            introduce: '测试测试测试测试',
            imgUrl: '',
            bookUrl: '',
          },
          {
            id: 2,
            bookName: '民国诡闻',
            authorName: '王富贵2222',
            serials: '连载中',
            words: 240.1,
            recommonend: 3444,
            weekCRecommonend: 320,
            click: 7420,
            time: '21小时前',
            introduce: '测试测试测试测试',
            imgUrl: '',
            bookUrl: '',
          },
          {
            id: 2,
            bookName: '民国诡闻',
            authorName: '王富贵2222',
            serials: '连载中',
            words: 240.1,
            recommonend: 3444,
            weekCRecommonend: 320,
            click: 7420,
            time: '21小时前',
            introduce: '测试测试测试测试',
            imgUrl: '',
            bookUrl: '',
          },
          {
            id: 2,
            bookName: '民国诡闻',
            authorName: '王富贵2222',
            serials: '连载中',
            words: 240.1,
            recommonend: 3444,
            weekCRecommonend: 320,
            click: 7420,
            time: '21小时前',
            introduce: '测试测试测试测试',
            imgUrl: '',
            bookUrl: '',
          },
          {
            id: 2,
            bookName: '民国诡闻',
            authorName: '王富贵2222',
            serials: '连载中',
            words: 240.1,
            recommonend: 3444,
            weekCRecommonend: 320,
            click: 7420,
            time: '21小时前',
            introduce: '测试测试测试测试',
            imgUrl: '',
            bookUrl: '',
          },
          {
            id: 2,
            bookName: '民国诡闻',
            authorName: '王富贵2222',
            serials: '连载中',
            words: 240.1,
            recommonend: 3444,
            weekCRecommonend: 320,
            click: 7420,
            time: '21小时前',
            introduce: '测试测试测试测试',
            imgUrl: '',
            bookUrl: '',
          },
          {
            id: 2,
            bookName: '民国诡闻',
            authorName: '王富贵2222',
            serials: '连载中',
            words: 240.1,
            recommonend: 3444,
            weekCRecommonend: 320,
            click: 7420,
            time: '21小时前',
            introduce: '测试测试测试测试',
            imgUrl: '',
            bookUrl: '',
          },
          {
            id: 2,
            bookName: '民国诡闻',
            authorName: '王富贵2222',
            serials: '连载中',
            words: 240.1,
            recommonend: 3444,
            weekCRecommonend: 320,
            click: 7420,
            time: '21小时前',
            introduce: '测试测试测试测试',
            imgUrl: '',
            bookUrl: '',
          },
          {
            id: 2,
            bookName: '民国诡闻',
            authorName: '王富贵2222',
            serials: '连载中',
            words: 240.1,
            recommonend: 3444,
            weekCRecommonend: 320,
            click: 7420,
            time: '21小时前',
            introduce: '测试测试测试测试',
            imgUrl: '',
            bookUrl: '',
          },
          {
            id: 2,
            bookName: '民国诡闻',
            authorName: '王富贵2222',
            serials: '连载中',
            words: 240.1,
            recommonend: 3444,
            weekCRecommonend: 320,
            click: 7420,
            time: '21小时前',
            introduce: '测试测试测试测试',
            imgUrl: '',
            bookUrl: '',
          },
          {
            id: 2,
            bookName: '民国诡闻',
            authorName: '王富贵2222',
            serials: '连载中',
            words: 240.1,
            recommonend: 3444,
            weekCRecommonend: 320,
            click: 7420,
            time: '21小时前',
            introduce: '测试测试测试测试',
            imgUrl: '',
            bookUrl: '',
          },
          {
            id: 2,
            bookName: '民国诡闻',
            authorName: '王富贵2222',
            serials: '连载中',
            words: 240.1,
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
      handleCheck(row) {
        console.log('row:', row)
        this.$router.push({
          path: '/perfect/book',
          query: { sentBook: row },
        })
      },
      onSubmit(formInline) {
        console.log('submit!:', formInline)
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
