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

        <el-form-item label="车位编号" prop="parking_id">
          <el-input v-model="tempAddForm.parking_id"></el-input>
        </el-form-item>
        <el-form-item label="车牌号" prop="car_id">
          <el-input v-model="tempAddForm.car_id"></el-input>
        </el-form-item>

        <el-form-item label="手机号" prop="tel_number">
          <el-input v-model="tempAddForm.tel_number"></el-input>
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
        car_id: "",
        render_name: "",
        render_place: "",
        render_type: "",
        tel_number: "",
        parking_id: "",
      },
      postForm: {
        car_id: "",
        render_name: "",
        render_place: "",
        render_type: "",
        tel_number: "",
        parking_id: "",
      },
      rules: {
        car_id: [{ required: true, message: "请输入车牌号", trigger: "blur" }],
        parking_id: [
          { required: true, message: "请输入车位编号", trigger: "blur" },
        ],
        tel_number: [
          { required: true, message: "请输入手机号", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(tempAddForm) {
      this.postForm.car_id = this.tempAddForm.car_id;
      // this.postForm.outboundTime = filter_date
      this.postForm.parking_id = this.tempAddForm.parking_id;
      this.postForm.render_name = this.tempAddForm.render_name;
      this.postForm.tel_number = this.tempAddForm.tel_number;
      this.postForm.render_place = this.tempAddForm.render_place;
      this.postForm.render_type = this.tempAddForm.render_type;

      let comValue = this.$qs.stringify(this.postForm);
      console.log(comValue);

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