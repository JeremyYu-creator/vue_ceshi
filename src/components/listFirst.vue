<template>
  <div>
    <el-container>
      <el-header>
       <el-button size="small" class="one" style="float" >筛选</el-button>
       <el-button size="small" class="one" style="margin-left: 600px;">收起筛选</el-button>
       <el-button size="small" type="success" class="one" style="float: right; margin-top: 17px;" @click="shaixuan">查询结果</el-button>
       </el-header>
      <el-main v-if="show">
        投放渠道：
        <el-select v-model="selectQudao" placeholder="请选择">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
         跳转活码渠道:
          <el-select v-model="selectHuoma" placeholder="请选择">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
           <el-button type="danger" style="float: right;">清除筛选</el-button><br/>
            问卷类型:
            <el-select v-model="selectLeixing" placeholder="请选择">
                <el-option
                  v-for="item in options3"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
               </el-select>
               提交日期:
                   <el-date-picker
                         v-model="value4"
                         type="daterange"
                         range-separator="至"
                         start-placeholder="开始日期"
                         end-placeholder="结束日期">
                       </el-date-picker>
            </el-main><br/>
            <el-input v-model="input" placeholder="用户编号" style="width: 200px; margin-bottom: 50px;"></el-input>
    </el-container>
  </div>
</template>

<script>
  import listSecond from './listSecond'
export default {
  data () {//筛选内容
    return {
      show:true,
      options1: [{
        value: '1',
        label: '渠道名称1'
      }, {
        value: '2',
        label: '渠道名称2'
      }, {
        value: '3',
        label: '...'
      }],
      selectQudao: [],
      options2: [{
        value: '1',
        label: '减脂投放问卷'
      }, {
        value: '2',
        label: '辣妈投放问卷'
      }, {
        value: '3',
        label: '...'
      }],
      selectHuoma: [],
      options3: [{
        value: '1',
        label: '减脂'
      }, {
        value: '2',
        label: '辣妈'
      }],
      selectLeixing: [],
      input: '',
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      value4: '',
      seen: true
    }
  },

  methods: {
    //close: function () {
      //this.seen = !this.seen
    //}
     shaixuan(){

          setTimeout(()=>{
            console.log('打印出来了')
          },2000)
      },
      }
}
</script>

<style>
  .el-header, .el-footer {
      background-color: #B3C0D1;
      color: #333;
      line-height: 10px;
      font-size: 15px;
    }
  .el-main {
        background-color: #E9EEF3;
        color: black;
        float: left;
        line-height: 100px;
      }
      .el-main .block{
        width: 210px;
        size: 200px;
      }
</style>
