<template>
    <div class="order">
      <Header></Header>
      <template>
        <el-table
          :data="listasd"
          style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="用户名">
                  <span>{{ props.row.restaurant_name }}</span>
                </el-form-item>
                <el-form-item label="店铺名称">
                  <span>{{ props.row.restaurant_name }}</span>
                </el-form-item>
                <el-form-item label="收获地址">
                  <span>{{ props.row.address }}</span>
                </el-form-item>
                <el-form-item label="店铺 ID">
                  <span>{{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="店铺地址">
                  <span>{{ props.row.address }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column
            label="订单 ID"
            prop="address_id">
          </el-table-column>
          <el-table-column
            label="总价格"
            prop="total_amount">
          </el-table-column>
          <el-table-column
            label="订单状态"
            prop="status_bar.title">
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
          listasd:[]
        }
      },
      components: {
        Header
      },
      created() {
        Axios.get('https://elm.cangdu.org/bos/orders?offset=${this.num}&limit=20&restaurant_id=undefined').then((res)=>{
          this.listasd=res.data
          console.log(res.data)
        })
      }
    }
</script>

<style scoped>
.order{
  width: 100%;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
