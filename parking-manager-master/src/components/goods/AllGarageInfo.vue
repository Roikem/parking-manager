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
          <!-- A区域 -->
          <ul class="area_a">
            <!-- A区域 分区1 -->
            <li class="area_a1">
              <!-- 分区1 6小组 -->
              <ul class="a1_group1">
                <li class="a1_1">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[0].parkingColor"
                  >
                    <p>{{ parkingDataForm[0].parking_area }}</p>
                    <a>{{ parkingDataForm[0].area_num }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[1].parkingColor"
                  >
                    <p>{{ parkingDataForm[1].parking_area }}</p>
                    <a>{{ parkingDataForm[1].area_num }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[2].parkingColor"
                  >
                    <p>{{ parkingDataForm[2].parking_area }}</p>
                    <a>{{ parkingDataForm[2].area_num }}</a>
                  </div>
                </li>
                <li class="a1_2">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[3].parkingColor"
                  >
                    <p>{{ parkingDataForm[3].parking_area }}</p>
                    <a>{{ parkingDataForm[3].area_num }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[4].parkingColor"
                  >
                    <p>{{ parkingDataForm[4].parking_area }}</p>
                    <a>{{ parkingDataForm[4].area_num }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[5].parkingColor"
                  >
                    <p>{{ parkingDataForm[5].parking_area }}</p>
                    <a>{{ parkingDataForm[5].area_num }}</a>
                  </div>
                </li>
              </ul>
            </li>
          </ul>

          <li></li>
        </ul>
        <img src="../../assets/parking-table.png" alt="停车场平面图" />
      </div>
    </div>

    <!-- 车位情况 -->
    <div class="state_box">
      <div class="parking_state">
        <el-divider></el-divider>
        <el-descriptions
          class="margin-top"
          title="车位分配情况"
          :column="3"
          border
        >
          <el-descriptions-item>
            <template slot="label">
              <el-tag type="success"> 已出租 </el-tag>
            </template>
            {{ parking_coditon.rented_num }}
          </el-descriptions-item>

          <el-descriptions-item>
            <template slot="label">
              <el-tag type="danger"> 未出租 </el-tag>
            </template>
            {{ parking_coditon.unrent_num }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <el-tag type="primary"> 车库总车辆 </el-tag>
            </template>
            {{ parking_coditon.unrent_num }}
          </el-descriptions-item>

          <el-descriptions-item>
            <template slot="label">
              <el-tag type="success" effect="dark"> 闲置临时车位 </el-tag>
            </template>
            {{ parking_coditon.untemp_num }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <el-tag type="danger" effect="dark"> 已占临时车位 </el-tag>
            </template>
            {{ parking_coditon.temp_num }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">
              <el-tag type="primary" effect="dark"> 剩余车位数量 </el-tag>
            </template>
            {{ parking_coditon.temp_num }}
          </el-descriptions-item>
        </el-descriptions>
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
        pagesize: 15,
      },
      userlist: [],
      total: 0,
      addDialogVisible: false,
      editDialogVisible: false,
      parking_coditon: {
        rented_num: "1",
        unrent_num: "2",
        temp_num: "11",
        untemp_num: "122",
      },
      // 加载的车库情况表单数据
      parkingDataForm: [
        {
          parking_area: "a1",
          area_num: "1",
          carId: "",
          parkingColor: "p_red",
          parkingSituation: "0",
        },
        {
          parking_area: "a1",
          area_num: "2",
          carId: "",
          parkingColor: "p_red",
          parkingSituation: "1",
        },
        {
          parking_area: "a1",
          area_num: "3",
          carId: "",
          parkingColor: "p_red",
          parkingSituation: "2",
        },
        {
          parking_area: "a1",
          area_num: "4",
          carId: "",
          parkingColor: "p_gray",
          parkingSituation: "3",
        },
        {
          parking_area: "a1",
          area_num: "5",
          carId: "",
          parkingColor: "p_yellow",
          parkingSituation: "3",
        },
        {
          parking_area: "a1",
          area_num: "6",
          carId: "",
          parkingColor: "p_green",
          parkingSituation: "3",
        },
      ],
    };
  },
  created: function () {
    // 获取后端数据后
    ///this.tableData=数据
    this.fetch();
    // //  console.log(this.tableData)
    //   this.total = this.tableData.length;
  },
  methods: {
    tableRowClassName({ row, goodsCount }) {
      if (row.checkSituation == 2) {
        return "warning-row";
      } else if (row.checkSituation == 1) {
        return "success-row";
      } else {
        return "audit-row";
      }
      return "";
    },
    fetch() {
      this.openLoading();
      this.$http.get(this.api + "GetAll").then((res) => {
        this.openLoading().close();
        // this.openLoading().close()
        //console.log(res.data.data)
        console.log(res.data.parkingDataForm);
        this.parkingDataForm = res.data.parkingDataForm;
        this.parking_coditon = res.data.parking_coditon;

        // console.log(this.tableData)
        this.searchData = this.tableData;
      });
    },

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
  },
};
</script>

<style lang='less' scoped>
.parking_state {
  margin-top: 80px;
  z-index: 30;
  width: 60%;
}
.state_box {
  height: 270px;
}
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
}
.parking-box-pic img {
  position: absolute;
  width: 900px;
  height: 600px;
  top: 0;
  left: -20px;
  right: 0;
  bottom: 0;
  margin: auto;
}
.parking-box-pic a {
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  user-select: none;
}
.parking-box-pic p {
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  user-select: none;
}
.parking-box-pic {
  position: absolute;
  height: 600px;
  width: 900px;
  background-color: rgba(0, 0, 0, 0.87);
  padding: 30px;
  border-radius: 1.6%;
  box-shadow: 6px 12px 12px rgba(0, 0, 0, 0.12), 0 12px 12px rgba(0, 0, 0, 0.04);
}
.area_A {
  width: 860px;
  height: 100%;
  margin-left: -13px;
  margin-top: -4px;
  list-style: none;
}
ul {
  list-style: none;
}
.area_A li p {
  color: white;
  font-size: 1px;
  font-weight: 400;
  margin-left: 2px;
}
.area_A li a {
  position: relative;
  color: white;
  font-size: 1px;
  font-weight: 400;
  padding-right: 3px;
  top: -10px;
  margin-left: 4px;
}
#p_red {
  background-color: rgb(255, 64, 64);
  box-shadow: 0 0 4px rgb(252, 50, 50);
}
#p_green {
  background-color: rgb(2, 187, 42);
  box-shadow: 0 0 4px rgb(61, 216, 61);
}
#p_gray {
  background-color: rgba(49, 49, 49, 0.692);
  box-shadow: 0 0 4px rgb(39, 39, 39);
}
#p_yellow {
  background-color: rgba(228, 214, 26, 0.945);
  box-shadow: 0 0 4px rgb(240, 228, 60);
}

.a1_1 {
  position: absolute;
  background-color: yellow;
  left: -58px;
  top: 113px;
}
.a1_2 {
  position: absolute;
  background-color: yellow;
  left: -58px;
  top: 149.8px;
}
.a1_1p {
  height: 35px;
  width: 14.5px;
  position: absolute;
  z-index: 20;
  top: 49.5px;
  left: 115.3px;
  opacity: 0.9;
  background-color: green;
}
.a1_2p {
  height: 35px;
  width: 14.5px;
  position: absolute;
  z-index: 20;
  top: 49.5px;
  left: 132px;
  opacity: 0.9;
  background-color: green;
}
.a1_3p {
  height: 35px;
  width: 14.5px;
  position: absolute;
  z-index: 20;
  top: 49.5px;
  left: 149px;
  opacity: 0.9;
  background-color: green;
}
.a1_4p {
  height: 32px;
  width: 16px;
  position: absolute;
  background-color: green;
  z-index: 20;
  top: 49.5px;
  left: 231px;
  opacity: 0.8;
}
</style>