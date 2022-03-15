<template>
  <div>
    <!-- 头部面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>车库总揽</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区 -->
    <div class="parking-table">
      <div class="parking-box-pic">
        <ul class="area_A">
          <li>
            <div class="a1_1p"></div>
            <div class="a1_2p"></div>
            <div class="a1_3p"></div>
          </li>
          <li></li>
          <li></li>
        </ul>
        <img src="../../assets/parking-table.png" alt="停车场平面图" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageUrl: "",
      search: "",
      searchData: "",
      tableData: [],
      queryInfo: {
        query: "",
        pagenum: 1,
        pagesize: 15
      },
      userlist: [],
      total: 0,
      addDialogVisible: false,
      editDialogVisible: false,
      // 添加用户的表单数据
      addForm: {
        goodsName: "",
        goodsCount: "",
        company: ""
      },
      postForm: {
        goodsName: "",
        goodsCount: "",
        company: ""
      },
      editForm: {
        goodsName: "",
        goodsCount: "",
        inboundTime: "",
        goodsId: "",
        company: "",
        checkSituation: ""
      },

      changeForm: {
        goodsName: "",
        goodsCount: "",
        inboundTime: "",
        goodsId: "",
        company: "",
        checkSituation: ""
      },
      postchangeForm: {
        goodsName: "",
        goodsCount: "",
        company: "",
        goodsId: ""
      }
    };
  },
  created: function() {
    // 获取后端数据后
    ///this.tableData=数据
    //  this.fetch();
    // //  console.log(this.tableData)
    //   this.total = this.tableData.length;
  },
  methods: {
    //     fetch() {
    //       this.openLoading()
    //           this.$http.get(this.api+"commodity/getAll").then(res => {
    //               this.openLoading().close()
    //          // this.openLoading().close()
    //        //console.log(res.data.data)
    //        this.tableData= res.data.data;
    //         // console.log(this.tableData)
    // this.searchData= this.tableData
    //       });
    // },
    // 监听页码值改变的事件
    // 监听添加用户表单的关闭事件并清除其中的数据
    // addDialogClosed() {
    //   this.$refs.addFormRef.resetFields();
    // },
    // 点击确认按钮的事件
    // 这个位置有bug，在教程中是直接把数据交到后端，再重新拿数据渲染
    // 但此处加入tableData的数据和addForm绑定死了，分不开，在加入数据了之后
    // 清除表单里的数据还是会把已经加入界面里的删掉，就算不清除表单里的数据，加入表格里的也会每个数据都一模一样
    // 解决方案：Object.assign({}, this.addForm)需要深拷贝
    // addUser() {
    //   this.$refs.addFormRef.validate(valid => {
    //     if (!valid) {
    //       this.$message("请填写完整信息");
    //       this.addDialogClosed();
    //     }
    //   else {
    //       this.addDialogVisible = false;
    //       //this.inintData()
    //       //let company
    //       this.postForm.goodsName = this.addForm.goodsName;
    //         this.postForm.goodsCount = this.addForm.goodsCount;
    //         this.postForm.company = this.addForm.company;
    //            this.addForm = {
    //        goodsName: "",
    //        goodsCount: "",
    //        company: "",
    //       };
    //       var addValue = this.$qs.stringify(this.postForm)
    //       console.log(addValue)
    //     //  this.addDialogClosed();
    //       //向前端发送数据 @rk---
    //       //console.log(this.postForm)
    //    this.$http
    //       .post(this.api + "commodity/add", addValue)
    //       .then(res => {
    //       this.$message({
    //         message: "提交成功",
    //         type: "success"
    //       });
    //           this.fetch();
    //     }).catch(error=>{
    //                     console.log(error);
    //                 });
    //     }
    //   });
    // },
    //向后端申请数据 @rk---
    // {
    //       goodsName: "",
    //       goodsCount: "",
    //       inboundTime: "",
    //       goodsId: "",
    //       company: "",
    //       checkSituation: ""
    //     },
    //修改信息  @rk---
  }
};
</script>

<style lang='less' scoped>
.avatar-uploader .el-upload {
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.parking-table {
  width: 100%;
  height: 600px;
  padding: px;
  background-color: red;
}
.parking-box-pic img {
  position: absolute;
  width: 900px;
  height: 600px;
  top: 0;
  left: -220px;
  right: 0;
  bottom: 0;
  margin: auto;
}
.parking-box-pic {
  position: relative;
  height: 600px;
  width: 1100px;
  background-color: #333744;
  padding: 30px;
}
.area_A{
  width: 860px;
  height: 100%;
  margin-left: -13px;
  margin-top: -4px;
  list-style:none;
}
.a1_1p {
   height: 32px;
    width: 16px;
    position: absolute;
    background-color: green;
    z-index: 20;
    top: 49.5px;
    left: 115px;
    opacity: 0.8;
}
</style>