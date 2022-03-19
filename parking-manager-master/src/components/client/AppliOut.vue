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

        <el-form-item label="车位编号" prop="parking_id">
          <el-input v-model="renderAddForm.parking_id"></el-input>
        </el-form-item>
        <el-form-item label="车牌号" prop="car_id">
          <el-input v-model="renderAddForm.car_id"></el-input>
        </el-form-item>
        <el-form-item label="续租类型" prop="render_type">
          <el-select
            v-model="renderAddForm.render_type"
            placeholder="请选择续租类型"
          >
            <el-option label="月租" value="月租"></el-option>
            <el-option label="季租" value="季租"></el-option>
            <el-option label="年租" value="年租"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="业主姓名" prop="render_name">
          <el-input v-model="renderAddForm.render_name"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="tel_number">
          <el-input v-model="renderAddForm.tel_number"></el-input>
        </el-form-item>

        <el-form-item label="联系地址" prop="render_place">
          <el-input
            type="textarea"
            v-model="renderAddForm.render_place"
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
        render_name: [
          { required: true, message: "请输入业主姓名", trigger: "blur" },
        ],
        tel_number: [
          { required: true, message: "请输入手机号", trigger: "blur" },
        ],
        render_type: [
          { required: true, message: "请选择出租类型", trigger: "blur" },
        ],
        render_place: [
          { required: false, message: "请填写活动形式", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(renderAddForm) {
      this.postForm.car_id = this.renderAddForm.car_id;
      // this.postForm.outboundTime = filter_date
      this.postForm.parking_id = this.renderAddForm.parking_id;
      this.postForm.render_name = this.renderAddForm.render_name;
      this.postForm.tel_number = this.renderAddForm.tel_number;
      this.postForm.render_place = this.renderAddForm.render_place;
      this.postForm.render_type = this.renderAddForm.render_type;
      console.log(this.postForm);
      let comValue = this.$qs.stringify(this.postForm);
      console.log(comValue);

      // console.log(this.postForm);
      //this.openLoading();

      // this.$http.post(this.api + "/apply/insert", comValue).then((res) => {
      //   console.log(res);
      //   this.openLoading().close();
      //   this.renderAddForm = [];

      //   this.$message({
      //     message: " 申请成功",
      //     type: "success",
      //   });
      // });
    },
    resetForm(renderAddForm) {
      this.$refs[renderAddForm].resetFields();
      Object.keys(this.postForm).forEach((key) => (this.postForm[key] = ""));
    },
  },
};
</script>