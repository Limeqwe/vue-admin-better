<template>
  <div>
    <el-container>
      <el-header size="16px">完本</el-header>
      <el-main>
        <el-row :gutter="20">
          <el-col type="flex" :span="4">
            <div class="grid-content bg-purple">
              <img
                tag="img"
                src="https://static.zongheng.com/upload/cover/ca/60/ca60ae14553d0703b82a9993f87af0b9.jpeg"
                alt="民国诡闻实录"
                width="180"
              />
            </div>
            <el-footer>民国诡闻实录</el-footer>
          </el-col>
          <el-col type="flex" :span="4">
            <div class="grid-content bg-purple">Main</div>
            <el-footer>Footer</el-footer>
          </el-col>
          <el-col type="flex" :span="4">
            <div class="grid-content bg-purple">Main</div>
            <el-footer>Footer</el-footer>
          </el-col>
          <el-col type="flex" :span="4">
            <div class="grid-content bg-purple">Main</div>
            <el-footer>Footer</el-footer>
          </el-col>
          <el-col type="flex" :span="4">
            <div class="grid-content bg-purple">Main</div>
            <el-footer>Footer</el-footer>
          </el-col>
          <el-col type="flex" :span="4">
            <div class="grid-content bg-purple">Main</div>
            <el-footer>Footer</el-footer>
          </el-col>
        </el-row>
      </el-main>
    </el-container>

    <el-container>
      <el-header>连载</el-header>
      <el-main>
        <el-row :gutter="20">
          <el-col type="flex" :span="4">
            <div class="grid-content bg-purple">
              <el-link
                :underline="false"
                href="https://book.zongheng.com/book/1208354.html"
              >
                <img
                  tag="img"
                  src="https://static.zongheng.com/upload/cover/ca/60/ca60ae14553d0703b82a9993f87af0b9.jpeg"
                  alt="民国诡闻实录"
                  width="180"
                />
              </el-link>
            </div>
            <el-footer>
              <el-link
                :underline="false"
                href="https://book.zongheng.com/book/1208354.html"
              >
                民国诡闻实录
              </el-link>
            </el-footer>
          </el-col>
          <el-col type="flex" :span="4">
            <div class="grid-content bg-purple">Main</div>
            <el-footer>Footer</el-footer>
          </el-col>
          <el-col type="flex" :span="4">
            <div class="grid-content bg-purple">Main</div>
            <el-footer>Footer</el-footer>
          </el-col>
          <el-col type="flex" :span="4">
            <div class="grid-content bg-purple">Main</div>
            <el-footer>Footer</el-footer>
          </el-col>
          <el-col type="flex" :span="4">
            <div class="grid-content bg-purple">Main</div>
            <el-footer>Footer</el-footer>
          </el-col>
          <el-col type="flex" :span="4">
            <div class="grid-content bg-purple">Main</div>
            <el-footer>Footer</el-footer>
          </el-col>
        </el-row>
      </el-main>
    </el-container>

    <el-container>
      <el-header>作者</el-header>
      <el-main></el-main>
    </el-container>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      }
    },
  }
</script>
<style scoped>
  .img {
    height: 126px;
    width: 95px;
  }

  .el-header {
    /* font-family: '微软雅黑'; */
    /* "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif */
    background-color: #b3c0d1;
    color: #333;
    text-align: left;
    line-height: 60px;
  }

  .el-footer {
    /* font-family: '微软雅黑'; */
    /* "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif */
    background-color: #b3c0d1;
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
    background-color: #e9eef3;
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
    /* &:last-child {
      margin-bottom: 0;
    } */
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
