<template>
  <div>
    <div class="demo-input-size">
      <div class="author">作者:</div>
      <div class="input1">
        <el-input v-model="input1" placeholder="请输入作者:"></el-input>
      </div>
      <div class="bookname">书名:</div>
      <div class="input2">
        <el-input v-model="input2" size="medium" placeholder="请输入书名:">
          >
        </el-input>
      </div>
    </div>
    <div class="recommend">
      推荐:
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="id" width="150">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="书名" width="150">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.bookname }}</span>
          </template>
        </el-table-column>
        <el-table-column label="作者" width="150">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.author }}</span>
          </template>
        </el-table-column>
        <el-table-column label="类型" width="150">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.type }}</span>
          </template>
        </el-table-column>
        <el-table-column label="完本" width="150">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.end }}</span>
          </template>
        </el-table-column>
        <el-table-column label="字数" width="150">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.num }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
              查看小说
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
      <span class="demonstration"></span>
      <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        input1: '',
        input2: '',
        percentage: 50,
        tableData: [
          {
            id: 1,
            bookname: '魔尊',
            author: '青柠',
            type: '科幻',
            end: 'no',
            num: '500w',
          },
          {
            id: 1,
            bookname: '权威',
            author: 'q',
            type: '科幻',
            end: 'yes',
            num: '1500w',
          },
          {
            id: 1,
            bookname: '小明',
            author: '青柠',
            type: '爱情',
            end: 'yes',
            num: '2500w',
          },
          {
            id: 1,
            bookname: '魔尊',
            author: '青柠',
            type: '科幻',
            end: 'yes',
            num: '500w',
          },
        ],
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row)
      },
      handleDelete(index, row) {
        console.log(index, row)
      },
      customColorMethod(percentage) {
        if (percentage < 30) {
          return '#909399'
        } else if (percentage < 70) {
          return '#e6a23c'
        } else {
          return '#67c23a'
        }
      },
      increase() {
        this.percentage += 10
        if (this.percentage > 100) {
          this.percentage = 100
        }
      },
      decrease() {
        this.percentage -= 10
        if (this.percentage < 0) {
          this.percentage = 0
        }
      },
    },
  }
</script>
<style>
  .input1 {
    position: absolute;
    width: 250px;
    height: 200px;
    left: 100px;
    top: 5px;
  }
  .input2 {
    position: absolute;
    width: 250px;
    height: 200px;
    left: 550px;
    top: 5px;
  }
  .author {
    position: absolute;
    width: 250px;
    height: 200px;
    left: 60px;
    top: 14px;
  }
  .bookname {
    position: absolute;
    width: 250px;
    height: 200px;
    left: 510px;
    top: 14px;
  }
  .recommend {
    position: absolute;
    top: 45px;
  }
  .block {
    position: absolute;
    bottom: 0px;
    width: 600px;
    left: 250px;
  }
</style>
