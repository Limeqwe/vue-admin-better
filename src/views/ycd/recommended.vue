<template>
  <div>
    <el-container>
      <el-header size="16px">完本</el-header>
      <el-main>
        <el-row v-if="fristBook" :gutter="20">
          <el-col
            v-for="(item, key) of fristBook"
            :key="key"
            type="flex"
            :span="4"
          >
            <div class="grid-content bg-purple">
              <el-button type="text" :underline="false" :href="item.bookUrl">
                <img
                  tag="img"
                  :src="item.imgUrl"
                  :alt="item.bookName"
                  width="180"
                  @click="handleJump(item)"
                />
              </el-button>
            </div>
            <el-footer>
              <el-button
                type="text"
                :underline="false"
                :href="item.imgUrl"
                @click="handleJump(item)"
              >
                {{ item.bookName }}
              </el-button>
            </el-footer>
          </el-col>
        </el-row>
      </el-main>
    </el-container>

    <el-container>
      <el-header>连载</el-header>
      <el-main>
        <el-row v-if="secondBook" :gutter="20">
          <el-col
            v-for="(item, key) of secondBook"
            :key="key"
            type="flex"
            :span="4"
          >
            <div class="grid-content bg-purple">
              <el-button type="text" :underline="false" :href="item.bookUrl">
                <img
                  tag="img"
                  :src="item.imgUrl"
                  :alt="item.bookName"
                  width="180"
                  @click="handleJump(item)"
                />
              </el-button>
            </div>
            <el-footer>
              <el-button
                type="text"
                :underline="false"
                :href="item.imgUrl"
                @click="handleJump(item)"
              >
                {{ item.bookName }}
              </el-button>
            </el-footer>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        fristBook: [
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
        ],
        secondBook: [
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
        ],
      }
    },
    methods: {
      handleJump(item) {
        console.log('item:', item)
        this.$router.push({
          path: '/perfect/book',
          query: { sentBook: item },
        })
      },
    },
  }
</script>
<style scoped>
  .el-button--text {
    background: #ffffff;
  }

  .img {
    height: 126px;
    width: 95px;
  }

  .el-header {
    background-color: #b3c0d1;
    color: #333;
    text-align: left;
    line-height: 60px;
  }

  .el-footer {
    /* background-color: #b3c0d1; */
    color: #333;
    text-align: center;
    line-height: 60px;
    width: 180px;
  }

  .el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    /* background-color: #e9eef3; */
    height: 370px;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple {
    width: 180px;
    height: 240px;
    background: #d3dce6;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
