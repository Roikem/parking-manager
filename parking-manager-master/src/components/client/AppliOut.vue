<template>
  <div>
    <!-- 头部面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>车库出租</el-breadcrumb-item>
      <el-breadcrumb-item>业主新增</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-form
        :model="renderAddForm"
        :inline="false"
        :rules="rules"
        ref="renderAddForm"
        label-width="100px"
        class="demo-form-inline"
      >
        <!-- <el-form-item label="出库时间" required>
    <el-col :span="11">
      <el-form-item prop="outboundTime1">
        <el-date-picker type="date" placeholder="选择日期" v-model="renderAddForm.outboundTime1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-form-item prop="outboundTime2">
        <el-time-picker placeholder="选择时间" v-model="renderAddForm.outboundTime2"  style="width: 100%;"></el-time-picker>
      </el-form-item>
    </el-col>
  </el-form-item> -->

        <el-form-item label="车位编号" prop="parkingId">
          <el-input v-model="renderAddForm.parkingId"></el-input>
        </el-form-item>
        <el-form-item label="车牌号" prop="car_id">
          <el-input v-model="renderAddForm.car_id"></el-input>
        </el-form-item>
        <el-form-item label="续租类型" prop="renderType">
          <el-select
            v-model="renderAddForm.renderType"
            placeholder="请选择续租类型"
          >
            <el-option label="月租" value="月租"></el-option>
            <el-option label="季租" value="季租"></el-option>
            <el-option label="年租" value="年租"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="业主姓名" prop="renderName">
          <el-input v-model="renderAddForm.renderName"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="telNumber">
          <el-input v-model="renderAddForm.telNumber"></el-input>
        </el-form-item>

        <el-form-item label="联系地址" prop="renderPlace">
          <el-input
            type="textarea"
            v-model="renderAddForm.renderPlace"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('renderAddForm')"
            >确定添加</el-button
          >
          <el-button @click="resetForm('renderAddForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      renderAddForm: {
        car_id: "",
        renderName: "",
        renderPlace: "",
        renderType: "",
        telNumber: "",
        parkingId: "",
      },
      postForm: {
        car_id: "",
        renderName: "",
        renderPlace: "",
        renderType: "",
        telNumber: "",
        parkingId: "",
      },
      rules: {
        car_id: [{ required: true, message: "请输入车牌号", trigger: "blur" }],
        parkingId: [
          { required: true, message: "请输入车位编号", trigger: "blur" },
        ],
        renderName: [
          { required: true, message: "请输入业主姓名", trigger: "blur" },
        ],
        telNumber: [
          { required: true, message: "请输入手机号", trigger: "blur" },
        ],
        renderType: [
          { required: true, message: "请选择出租类型", trigger: "blur" },
        ],
        renderPlace: [
          { required: false, message: "请填写活动形式", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.postForm.car_id = this.renderAddForm.car_id;

      this.$refs[formName].validate((valid) => {
        if (valid) {
          // this.postForm.outboundTime = filter_date
          this.postForm.parkingId = this.renderAddForm.parkingId;
          this.postForm.renderName = this.renderAddForm.renderName;
          this.postForm.telNumber = this.renderAddForm.telNumber;
          this.postForm.renderPlace = this.renderAddForm.renderPlace;
          this.postForm.renderType = this.renderAddForm.renderType;

          console.log(this.postForm);
          let comValue = this.$qs.stringify(this.postForm);
          console.log(comValue);

          // console.log(this.postForm);
          // this.openLoading();
          // this.$http.post(this.api + "AddrentForm", comValue).then((res) => {
          //   console.log(res);
          //   this.openLoading().close();
          //   this.renderAddForm = [];
          //   this.$message({
          //     message: " 申请成功",
          //     type: "success",
          //   }).catch((error) => {
          //     console.log(error);
          //   });
          // });

          this.$http({
            method: "post",
            url: this.api + "AddrentForm",
            params: {
              comValue,
            },
          }).then(
            (res) => {
              this.deletVisible = false;
              console.log(res);
              this.openLoading().close();
              this.renderAddForm = [];
              this.$message({
                message: " 申请成功",
                type: "success",
              });
            },
            (error) => {
              console.log(error.response);
              this.openLoading().close();
              this.$message({
                message: " 申请成功",
                type: "success",
              });
            }
          );
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(renderAddForm) {
      this.$refs[renderAddForm].resetFields();
      Object.keys(this.postForm).forEach((key) => (this.postForm[key] = ""));
    },
  },
};
</script>