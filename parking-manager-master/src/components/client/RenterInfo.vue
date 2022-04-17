<template>
  <div>
    <!-- 头部面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>车库出租</el-breadcrumb-item>
      <el-breadcrumb-item>业主信息列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <el-table
        :data="tableData"
        border
        style="
          width: 100%;
          border-radius: 10px;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
        "
        :cell-style="cellStyle"
        :default-sort="{ prop: 'date', order: 'descending' }"
      >
        <el-table-column
          prop="locate"
          label="车位编号"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="carNumber"
          label="车牌号"
          width="180"
        ></el-table-column>
        <el-table-column label="业主信息" width="130">
          <template slot-scope="scope">
            <el-button type="info" @click="renderInfoBridge(scope)"
              >信息详情</el-button
            >
          </template>
        </el-table-column>

        <el-table-column width="350" label="操作">
          <template slot-scope="scope">
            <el-button
              type="primary"
              plain
              icon="el-icon-edit"
              @click="editBridge(scope)"
              >编辑</el-button
            >
            <el-button
              type="warning"
              plain
              icon="el-icon-time"
              @click="reletBridge(scope)"
              >续租</el-button
            >
            <el-button
              type="danger"
              plain
              icon="el-icon-delete"
              @click="deleteBridge(scope)"
              >退租</el-button
            >
          </template>
        </el-table-column>
        <el-table-column prop="days" label="剩余天数" :formatter="formatter">
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 修改信息对话框 -->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span style="font-size: 17px; font-weight: 500"
        >是否确认退租，请谨慎选择</span
      >
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="deleteData(scope)">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 续租操作 -->

    <el-dialog title="续租操作 " :visible.sync="reletVisible" width="30%">
      <el-form ref="form" :model="reletForm" label-width="80px">
        <el-form-item label="续租类型">
          <el-select
            v-model="reletForm.reletDateType"
            placeholder="请选择续租类型"
          >
            <el-option label="月租" value="月租"></el-option>
            <el-option label="季租" value="季租"></el-option>
            <el-option label="年租" value="年租"></el-option>
          </el-select>
        </el-form-item>

        <span></span>
        <el-form-item>
          <el-button type="primary" @click="reletonSubmit">确 认</el-button>
          <el-button @click="reletVisible = false">取 消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 车位信息编辑 -->
    <el-dialog title="车位信息编辑 " :visible.sync="editVisible" width="40%">
      <el-form ref="form" :model="editForm" label-width="80px" size="small">
        <el-form-item label="车牌号">
          <el-input v-model="editForm.carNumber"></el-input>
        </el-form-item>
        <el-form-item label="业主姓名">
          <el-input v-model="editForm.renderName"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="editForm.telNumber"></el-input>
        </el-form-item>
        <el-form-item label="联系地址">
          <el-input v-model="editForm.renderPlace"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确 认</el-button>
          <el-button @click="editVisible = false">取 消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <!-- 信息详情 -->
    <el-dialog title="信息详情" :visible.sync="renderInfoVisible" width="45%">
      <el-descriptions class="margin-top" :column="3" :size="medium" border>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-user"></i>
            业主姓名
          </template>
          {{ infoData.renderName }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-mobile-phone"></i>
            手机号
          </template>
          {{ infoData.telNumber }}
        </el-descriptions-item>

        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-tickets"></i>
            出租类型
          </template>
          <el-tag size="small"> {{ infoData.leaseType }}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-office-building"></i>
            联系地址
          </template>
          {{ infoData.renderPlace }}
        </el-descriptions-item>
      </el-descriptions>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="renderInfoVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<style>
.el-table {
  font-size: 18px !important;
  font-weight: 800;
}
</style>
<script>
export default {
  data() {
    return {
      medium: "",
      reletVisible: false,
      editVisible: false,
      renderInfoVisible: false,
      dialogVisible: false,
      addDialogVisible: false,
      editDialogVisible: false,
      scope: "",
      reletForm: {
        parkingId: "",
        reletDateType: "",
      },
      editForm: {
        locate: "",
        carNumber: "",
        renderName: "",
        telNumber: "",
        renderPlace: "",
      },
      renderInfo: {
        locate: "",
        carNumber: "",
        days: "",
        daysSituation: "",
        renderName: "",
        telNumber: "",
        leaseType: "",
        renderPlace: "",
      },
      infoData: {
        leaseType: "",
        renderName: "",
        renderPlace: "",
        telNumber: "",
      },
      tableData: [
        {
          locate: "",
          carNumber: "",
          days: "",
        },
      ],
    };
  },
  created() {
    this.fetch();
    // this.openLoading()
    // let usersid = {
    //   userId: "",
    // };

    //let postId = this.$qs.stringify(usersid);
    // console.log(postId);
    // this.$http.post(this.api + "apply/getAll", postId).then(res => {
    //   // this.tableData= res.data.data;
    //   this.openLoading().close();
    //   var jsonObj = JSON.parse(JSON.stringify(res.data.data));
    //   for (var i = 0; i < jsonObj.length; i++) {
    //     if (jsonObj[i].daysSituation == 0) {
    //       jsonObj[i].days = "审核中";
    //     } else if (jsonObj[i].daysSituation == 1) {
    //       jsonObj[i].days = "通过";
    //     } else {
    //       jsonObj[i].days = "未通过";
    //     }
    //   }
    //   console.log(jsonObj);
    //   this.tableData = jsonObj;
    // });
  },
  methods: {
    fetch() {
      this.openLoading();
      this.$http.get(this.api + "getAllOwnerParking").then((res) => {
        this.openLoading().close();
        // this.openLoading().close()
        const box = res.data.data;
        var pDataForm = JSON.parse(box);
        //用户信息
        console.log(pDataForm);
        //console.log(res.data.tableData);
        this.tableData = pDataForm;
        // console.log(this.tableData)
        this.searchData = this.tableData;
      });
    },

    //信息详情操作
    renderInfoBridge(scope) {
      this.scope = scope;
      this.renderInfo = scope.row;
      let form = this.renderInfo.carNumber;

      // this.$http
      //   .get(this.api + "RenderInfoByCarNumber", this.renderInfo.carNumber)
      //   .then((res) => {
      //     this.openLoading().close();
      //     // this.openLoading().close()
      //     console.log(res.data.data);
      //     const box1 = res.data.data;
      //     var pDataForm = JSON.parse(box1);
      //     //用户信息
      //     // console.log(pDataForm.tableData);
      //     console.log(pDataForm);
      //     this.infoData = pDataForm;
      //     // console.log(this.tableData)
      //     this.searchData = this.tableData;
      //   });
      // this.renderInfoVisible = true;
      this.openLoading();
      this.$http({
        method: "get",
        url: this.api + "RenderInfoByCarNumber",
        params: {
          carNumber: form,
        },
      }).then((res) => {
        this.openLoading().close();
        const box1 = res.data.data;
        var pDataForm = JSON.parse(box1);
        //用户信息
        // console.log(pDataForm.tableData);

        this.infoData = pDataForm;
        this.renderInfoVisible = true;
        // console.log(this.tableData)
        console.log(this.infoData);
        // this.searchData = this.tableData;
      });
    },
    //续租操作按钮
    reletBridge(scope) {
      this.scope = scope;

      let _1obj = JSON.stringify(this.scope.row);
      let reletJson = JSON.parse(_1obj);
      this.reletForm.parkingId = reletJson.locate;
      this.reletVisible = true;
      console.log(this.reletForm);
    },
    //编辑操作
    editBridge(scope) {
      this.scope = scope;
      //实现浅拷贝
      let _obj = JSON.stringify(this.scope.row);
      this.renderInfo = JSON.parse(_obj);
      this.openLoading();
      this.$http({
        method: "get",
        url: this.api + "RenderInfoByCarNumber",
        params: {
          carNumber: scope.row.carNumber,
        },
      }).then((res) => {
        this.openLoading().close();
        const box1 = res.data.data;
        var pDataForm = JSON.parse(box1);
        //用户信息
        this.infoData = pDataForm;
        this.renderInfo = this.infoData;
        console.log(this.tableData.carNumber);
        this.editForm.carNumber = scope.row.carNumber;
        this.editForm.locate = scope.row.locate;
        this.editForm.renderName = this.renderInfo.renderName;
        this.editForm.telNumber = this.renderInfo.telNumber;
        this.editForm.renderPlace = this.renderInfo.renderPlace;
        //  console.log(this.editForm);

        // this.searchData = this.tableData;
        this.editVisible = true;
      });
    },
    //退租按钮
    deleteBridge(scope) {
      console.log("所选择的车位编号为:", scope.row);
      this.scope = scope;
      this.dialogVisible = true;
    },
    //退租操作
    deleteData(scope) {
      console.log("index的值是：", scope.$index);
      this.dialogVisible = false;
      //  this.tableData.splice(scope.$index, 1)
      // this.inintData()
      let comValue = {
        parkingId: "",
      };
      console.log(scope.row);
      comValue.parkingId = scope.row.locate;

      let postinfo = this.$qs.parse(comValue);
      console.log(comValue);
      // console.log(scope.row.userId)
      //console.log("出库的货物编码:",scope.row.goodsId)
      //返回用户姓名，后端根据userName进行相关处理    将该商品从商品展示的数据库中删除并保存到出库记录数据库中

      this.$http({
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        url: this.api + "UnrentForm",
        data: postinfo,
      }).then(
        (res) => {
          console.log(res);
          this.$message({
            message: "操作成功",
            type: "success",
          });
          this.editVisible = false;
          this.fetch();

          this.openLoading().close();
        },
        (response) => {}
      );

      // this.$http
      //   .post(this.api + "UnrentForm?" + postinfo)
      //   .then((res) => {
      //     console.log(res);
      //     this.$message({
      //       message: "操作成功",
      //       type: "success",
      //     });
      //     this.fetch();
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    },
    formatter(row, column) {
      return row.days;
    },

    //编辑提交按钮
    onSubmit() {
      // console.log(this.editForm);
      if (
        this.editForm.renderName &&
        this.editForm.renderPlace &&
        this.editForm.telNumber &&
        this.editForm.carNumber
      ) {
        let postinfo = this.$qs.parse(this.editForm);
        console.log(postinfo);

        //   this.$http
        //     .post(this.api + "RenderEditForm?" + postinfo)
        //     .then((res) => {
        //       console.log(res);
        //       this.$message({
        //         message: "操作成功",
        //         type: "success",
        //       });
        //       this.editVisible = false;
        //       this.fetch();
        //     })
        //     .catch((error) => {
        //       this.$message({
        //         message: "数据没有变化",
        //         type: "error",
        //       });
        //     });
        //   //console.log("postinfo");
        // } else {
        //   this.$message({
        //     message: "请完整输入内容",
        //     type: "error",
        //   });

        this.$http({
          headers: {
            "Content-Type": "application/json",
          },
          method: "post",
          url: this.api + "RenderEditForm",
          data: postinfo,
        }).then(
          (res) => {
            console.log(res);
            this.$message({
              message: "操作成功",
              type: "success",
            });
            this.editVisible = false;
            this.fetch();

            this.openLoading().close();
          },
          (response) => {}
        );
      }
    },
    //续租选择确定按钮
    reletonSubmit() {
      console.log(this.reletForm);
      let postinfo = this.$qs.stringify(this.reletForm);
      console.log(postinfo);
      this.openLoading();

      // this.$http({
      //   method: "get",
      //   url: this.api + "ReletForm",
      //   params: {
      //     postinfo,
      //   },
      // }).then((res) => {
      //   this.openLoading().close();
      //   this.$message({
      //     message: "操作完成",
      //     type: "success",
      //   });
      //   this.reletVisible = false;
      //   //用户信息
      //   console.log(res);
      //   // this.searchData = this.tableData;
      // }),
      //   (response) => {
      //     console.log(response);
      //     this.$message({
      //       message: "操作错误",
      //       type: "error",
      //     });
      //   };

      this.$http
        .get(this.api + "ReletForm?" + postinfo)
        .then((res) => {
          this.openLoading().close();
          this.$message({
            message: "操作完成",
            type: "success",
          });
          this.reletVisible = false;
          this.fetch();
          //用户信息
          console.log(res);
          // this.searchData = this.tableData;
        })
        .catch((error) => {
          console.log(error);
          this.openLoading().close();
          // console.log(error);
        });
    },
    cellStyle({ row, column, rowIndex, columnIndex }) {
      if (row.daysSituation == 2 && columnIndex === 4) {
        return "background-color: rgba(218, 97, 97, 0.9);color:#fff;text-align:center;";
      } else if (row.daysSituation == 1 && columnIndex === 4) {
        return "background-color: rgba(113, 214, 62, 0.9);color:#fff;text-align:center;";
      } else if (columnIndex === 4) {
        return "background-color:rgb(230, 172, 86, 0.9);color:#fff;text-align:center;";
      } else {
        return "success-row";
      }
    },
  },
};
</script>