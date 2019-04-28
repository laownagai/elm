<template>
    <div class="adminis">
      <Header></Header>
      <template>
        <el-table
          :data="listadmin"
          style="width: 100%">
          <el-table-column
            prop="user_name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="create_time"
            label="注册日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="city"
            label="地址">
          </el-table-column>
          <el-table-column
            prop="admin"
            label="权限"
            width="180">
          </el-table-column>
        </el-table>
      </template>
    </div>
</template>

<script>
  import Axios from 'axios'
  import Header from "./head";
    export default {
      data(){
        return{
          listadmin:[]
        }
      },
      components: {
        Header
      },
      created() {
        Axios.get('https://elm.cangdu.org/admin/all?offset=0&limit=20').then((res)=>{
          this.listadmin=res.data.data
          // console.log(res.data.data)
        })
      }
    }
</script>

<style scoped>
.adminis{
  width: 100%;
}
</style>
