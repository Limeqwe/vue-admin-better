<template>
  <el-container>
    <el-main>
      <el-row :gutter="40">
        <el-col :span="4">
          <el-link :underline="false" :href="authorUrl">
            <img :src="imgUrl" width="180" />
          </el-link>
        </el-col>
        <el-col :span="20">
          <el-container>
            <el-link :underline="false" :href="authorUrl">
              <span class="book-title">{{ authorName }}</span>
            </el-link>
          </el-container>
          <el-container>
            <el-main>
              <span class="tag">
                作品数：{{ bookNum }}本&emsp;&emsp;&emsp;标签1 标签2
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
    <el-footer>测试</el-footer>
  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        authorName: '漆奥峤',
        authorUrl: 'https://home.zongheng.com/show/userInfo/46718457.html',
        imgUrl:
          'https://static.zongheng.com/userimage/2a/18/2a186fb6f022915fdf0f45290bc6709fV1_120_120.jpeg',
        bookNum: 4,
        introduce: '|暂无简介~',
      }
    },
  }
</script>
<style>
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
