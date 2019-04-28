<template>
  <div class="footlist">
    <Header ></Header>
    <template>
      <el-table
        :data="listad"
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="商品名称">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="餐馆名称">
                <span>{{ props.row.address }}</span>
              </el-form-item>
              <el-form-item label="食品 ID">
                <span>{{ props.row.item_id }}</span>
              </el-form-item>
              <el-form-item label="餐馆 ID">
                <span>{{ props.row.restaurant_id }}</span>
              </el-form-item>
              <el-form-item label="食品介绍">
                <span>{{ props.row.phone }}</span>
              </el-form-item>
              <el-form-item label="餐馆地址">
                <span>{{ props.row.rating }}</span>
              </el-form-item>
              <el-form-item label="食品评分">
                <span>{{ props.row.rating }}</span>
              </el-form-item>
              <el-form-item label="食品分类">
                <span>{{ props.row.category }}</span>
              </el-form-item>
              <el-form-item label="月销量">
                <span>{{ props.row.month_sales }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="食品名称"
          prop="name">
        </el-table-column>
        <el-table-column
          label="食品介绍"
          prop="description">
        </el-table-column>
        <el-table-column
          label="评分"
          prop="rating">
        </el-table-column>
        <el-table-column
          label="操作"
          prop="desc">
          <el-button size="mini" round>编辑</el-button>
          <el-button size="mini" class="aaa" round>删除</el-button>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
  import Axios from 'axios'
  import Header from "./head";
    export default {
      components: {
        Header
      },
      data(){
        return{
          listad:[]
        }
      },
      created(){
        Axios.get('https://elm.cangdu.org/shopping/v2/foods?offset=0&limit=20&restaurant_id=undefined').then((res)=>{
          this.listad=res.data
          // console.log(res.data)
        })
      }
    }
</script>

<style scoped>
.footlist{
  width: 100%;
}
.aaa{
  background: red;
  color: white;
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
