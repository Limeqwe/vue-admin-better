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
  import { RandomSelectBook } from '@/api/betaApi'
  export default {
    data() {
      return {
        fristBook: [],
        secondBook: [],
        param: {
          serial: '',
        },
      }
    },
    created() {
      this.param.serial = '已完结'
      RandomSelectBook(this.param).then((res) => {
        this.fristBook = res.data.data
        console.log('完结：', this.fristBook)
      })
      this.param.serial = '连载中'
      RandomSelectBook(this.param).then((res) => {
        this.secondBook = res.data.data
        console.log('连载：', this.secondBook)
      })
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
