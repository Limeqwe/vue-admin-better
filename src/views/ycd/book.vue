<template>
  <div>
    <el-container>
      <el-main>
        <el-row :gutter="40">
          <el-col :span="4">
            <el-link :underline="false" :href="book.bookUrl">
              <img :src="book.imgUrl" width="180" />
            </el-link>
          </el-col>
          <el-col :span="20">
            <el-container>
              <el-link :underline="false" :href="book.bookUrl">
                <span class="book-title">{{ book.bookName }}</span>
              </el-link>
            </el-container>
            <el-container>
              <el-main>
                作者：
                <el-button
                  size="medium"
                  type="text"
                  @click="handleCheck(book.authorName)"
                >
                  {{ book.authorName }}
                </el-button>
                <p class="tag"></p>
                <span class="tag">
                  {{ book.serials }}&emsp;&emsp;&emsp; 字数：{{
                    book.wordsNum
                  }}万字&emsp;&emsp; 总推荐：{{ book.recommonend }}&emsp;&emsp;
                  周推荐：{{ book.weekCRecommonend }}&emsp;&emsp; 点击量：{{
                    book.click
                  }}&emsp;&emsp;上次更新：{{ book.time }}
                </span>
              </el-main>
            </el-container>
            <el-divider></el-divider>
            <el-container>
              <p class="introduce">小说简介~~~</p>
            </el-container>
          </el-col>
        </el-row>
        <el-divider></el-divider>
      </el-main>
    </el-container>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        accept: {},
        book: {},
      }
    },
    created() {
      this.accept = this.$route.query.sentBook
      console.log('accept:', this.accept)
      if (this.accept.id) {
        this.book = this.accept
        console.log('book:', this.book)
      }
      if (!this.book.imgUrl) {
        this.book.imgUrl = 'loss.png'
      }
    },
    methods: {
      handleCheck(authorName) {
        this.$router.push({
          path: '/perfect/author',
          query: { sentAuthor: authorName },
        })
      },
    },
  }
</script>
<style scoped>
  .el-main {
    background-color: #ffffff;
  }
  .book-title {
    font-size: 40px;
  }
  .introduce {
    margin-bottom: 25px;
  }
</style>
