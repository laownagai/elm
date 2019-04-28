<template>
  <div class="shanghu">
    <Header ></Header>
    <template>
      <el-table
        :data="lista"
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="商品名称">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="店铺地址">
                <span>{{ props.row.address }}</span>
              </el-form-item>
              <el-form-item label="店铺介绍">
                <span>{{ props.row.description }}</span>
              </el-form-item>
              <el-form-item label="店铺 ID">
                <span>{{ props.row.id }}</span>
              </el-form-item>
              <el-form-item label="联系电话">
                <span>{{ props.row.phone }}</span>
              </el-form-item>
              <el-form-item label="评分">
                <span>{{ props.row.rating }}</span>
              </el-form-item>
              <el-form-item label="销售量">
                <span>{{ props.row.recent_order_num }}</span>
              </el-form-item>
              <el-form-item label="分类">
                <span>{{ props.row.category }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="店铺名称"
          prop="name">
        </el-table-column>
        <el-table-column
          label="店铺地址"
          prop="address">
        </el-table-column>
        <el-table-column
          label="店铺介绍"
          prop="description">
        </el-table-column>
        <el-table-column
          label="操作"
          prop="desc">
          <el-button size="mini" round>编辑</el-button>
          <el-button size="mini" round>添加</el-button>
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
    data() {
      return {
        lista:[]
      }
    },
      components: {
          Header
      },
    created() {
      Axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=39.90469&longitude=116.407173&offset=0&limit=20').then((res)=>{
        this.lista=res.data
        // console.log(this.lista)
      })
    }
  }
</script>

<style scoped>
.shanghu{
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
