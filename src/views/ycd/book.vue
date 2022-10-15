<template>
  <div>
    <el-container>
      <el-main>
        <el-row :gutter="40">
          <el-col :span="4">
            <el-link :underline="false" :href="bookUrl">
              <img :src="imgUrl" width="180" />
            </el-link>
          </el-col>
          <el-col :span="20">
            <el-container>
              <el-link :underline="false" :href="bookUrl">
                <span class="book-title">{{ bookName }}</span>
              </el-link>
            </el-container>
            <el-container>
              <el-main>
                作者：
                <el-button
                  size="medium"
                  type="text"
                  @click="handleCheck(author)"
                >
                  {{ author }}
                </el-button>
                <p class="tag"></p>
                <span class="tag">
                  {{ label }}&emsp;&emsp;&emsp; 字数：{{
                    wordsNum
                  }}万字&emsp;&emsp; 总推荐：{{ recommonend }}&emsp;&emsp;
                  周推荐：{{ weekCRecommonend }}&emsp;&emsp; 点击量：{{
                    click
                  }}&emsp;&emsp;上次更新：{{ time }}
                </span>
              </el-main>
            </el-container>
            <el-divider></el-divider>
            <el-container>
              <p class="introduce">{{ introduce }}</p>
            </el-container>
          </el-col>
        </el-row>
        <el-divider></el-divider>
      </el-main>
      <!-- <el-footer></el-footer> -->
    </el-container>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        accept: {},
        author: '王富贵',
        bookName: '民国诡闻实录',
        label: '连载中',
        wordsNum: 320.1,
        recommonend: 5444,
        weekCRecommonend: 320,
        click: 6420,
        time: '21小时前',
        bookUrl: 'https://book.zongheng.com/book/1208354.html',
        imgUrl:
          // './loss.png',
          'https://static.zongheng.com/upload/cover/ca/60/ca60ae14553d0703b82a9993f87af0b9.jpeg',
        introduce:
          '民国初立，军阀割据，活人难生世道艰，死人复阳妖异现，此为众生鬼像也，兴安岭猎人岳观潮为救被出马仙诅咒的弟兄，惹上兴安岭原始神灵，从此踏上一条未知险途，兴安岭、长白山、贝加尔、神农架、罗布泊……他在乱世漂泊中辗转各地，探索诡异秘闻，寻觅扑朔迷离的真相！',
      }
    },
    created() {
      this.accept = this.$route.query.sentBook
      console.log('accept:', this.accept)
      if (this.accept.id) {
        this.author = this.accept.author
        this.bookName = this.accept.bookName
        this.label = this.accept.label
        this.wordsNum = this.accept.words
        this.recommonend = this.accept.recommonend
        this.weekCRecommonend = this.accept.weekCRecommonend
        this.click = this.accept.click
        this.time = this.accept.time
        this.bookUrl = this.accept.bookUrl
        this.imgUrl = this.accept.imgUrl
        this.introduce = this.accept.introduce
        console.log('imgUrl:', this.imgUrl)
        console.log('bookUrl:', this.bookUrl)
      }
      if (!this.imgUrl) {
        this.imgUrl = 'loss.png'
      }
    },
    methods: {
      handleCheck(author) {
        this.$router.push({
          path: '/perfect/author',
          query: { sentAuthor: author },
        })
      },
    },
  }
</script>
<style scoped>
  .el-main {
    background-color: #ffffff;
    /* color: #333; */
    /* text-align: center; */
    /* line-height: 200px; */
  }
  .book-title {
    font-size: 40px;
  }
  .introduce {
    margin-bottom: 25px;
  }
  /* .interduce {
    line-height: 25px;
  } */
</style>
