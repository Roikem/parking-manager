<template>
  <div>
    <!-- 头部面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>临时停车</el-breadcrumb-item>
      <el-breadcrumb-item>临时停车新增</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-form
        :model="tempAddForm"
        :inline="false"
        :rules="rules"
        ref="tempAddForm"
        label-width="100px"
        class="demo-form-inline"
      >
        <!-- <el-form-item label="出库时间" required>
    <el-col :span="11">
      <el-form-item prop="outboundTime1">
        <el-date-picker type="date" placeholder="选择日期" v-model="tempAddForm.outboundTime1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-form-item prop="outboundTime2">
        <el-time-picker placeholder="选择时间" v-model="tempAddForm.outboundTime2"  style="width: 100%;"></el-time-picker>
      </el-form-item>
    </el-col>
  </el-form-item> -->

        <el-form-item label="车位编号" prop="parkingId">
          <el-input v-model="tempAddForm.parkingId"></el-input>
        </el-form-item>
        <el-form-item label="车牌号" prop="carNumber">
          <el-input v-model="tempAddForm.carNumber"></el-input>
        </el-form-item>

        <el-form-item label="手机号" prop="telNumber">
          <el-input v-model="tempAddForm.telNumber"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('tempAddForm')"
            >确定添加</el-button
          >
          <el-button @click="resetForm('tempAddForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tempAddForm: {
        carNumber: "",
        renderName: "",
        render_place: "",
        render_type: "",
        telNumber: "",
        parkingId: "",
      },
      postForm: {
        locate: "",
        carNumber: "",
        telNumber: "",
      },
      rules: {
        carNumber: [
          { required: true, message: "请输入车牌号", trigger: "blur" },
        ],
        parkingId: [
          { required: true, message: "请输入车位编号", trigger: "blur" },
        ],
        telNumber: [
          { required: true, message: "请输入手机号", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.postForm.carNumber = this.tempAddForm.carNumber;
          // this.postForm.outboundTime = filter_date
          this.postForm.locate = this.tempAddForm.parkingId;
          this.postForm.telNumber = this.tempAddForm.telNumber;
          let comValue = this.$qs.parse(this.postForm);
          console.log(comValue);
          this.openLoading();
          this.$http({
            method: "post",
            url: this.api + "TempAddForm",
            data: comValue,
          }).then(
            (res) => {
              console.log(res);
              if (res.data.code == 200) {
                this.openLoading().close();
              } else {
                this.openLoading().close();
              }
            },
            (response) => {
              console.log(response);
            }
          );

          // this.$http
          //   .post(this.api + "TempAddForm?" + comValue)
          //   .then((res) => {
          //     console.log(res);
          //     if (res.data.code == 200) {
          //       this.openLoading().close();
          //     } else {
          //       this.openLoading().close();
          //     }
          //   })
          //   .catch((error) => {
          //     this.$message({
          //       message: "数据没有变化",
          //       type: "error",
          //     });
          //   });

          console.log(comValue);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
      // console.log(this.postForm);
      //this.openLoading();

      // this.$http.post(this.api + "/apply/insert", comValue).then((res) => {
      //   console.log(res);
      //   this.openLoading().close();
      //   this.tempAddForm = [];

      //   this.$message({
      //     message: " 申请成功",
      //     type: "success",
      //   });
      // });
    },
    resetForm(tempAddForm) {
      this.$refs[tempAddForm].resetFields();
      Object.keys(this.postForm).forEach((key) => (this.postForm[key] = ""));
    },
  },
};
</script>