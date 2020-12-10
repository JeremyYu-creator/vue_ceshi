<template>
  <div>
 <el-container>
  <el-header>数据列表
  <el-button type="success" style=" float: right; margin-top: 10px;" size="small" @click = 'daochu' plain>显示后台数据</el-button></el-header>
  <el-container>

    <el-main>{{person1.name}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp{{person1.age}}<br/>
             {{person2.name}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp{{person2.age}}<br/>
             {{person3.name}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp{{person3.age}}</el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      person1:[],
      person2:[],
      person3:[]
    }
  },
  methods: {
    daochu () {
      this.$axios.get('/data.json').then(response => {
        //const result = response.data[0].name
        //console.log(result)
        const result = response.data;
        this.person1 = result[0];
        this.person2 = result[1];
        this.person3 = result[2];

      })
    }
  }

}
</script>

<style>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    float: left;
    line-height: 60px;
  }
  .el-aside {
      background-color: #D3DCE6;
      color: #333;
      text-align: center;
      line-height: 200px;
    }

</style>
