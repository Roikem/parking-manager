<template>
  <div class="login_container">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" />
      </div>
      <el-form
        ref="loginFormRef"
        label-width="0px"
        class="login_form"
        :model="loginForm"
        :rules="rules"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            prefix-icon="el-icon-user"
            v-model="loginForm.username"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            prefix-icon="el-icon-unlock"
            v-model="loginForm.password"
            type="password"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item prop="code">
          <el-input
            prefix-icon="el-icon-unlock"
            v-model="loginForm.code"
            style="width:280px"
          ></el-input>
          <img
            :src="srcTest"
            @click="changeCode"
            th:src="@{/index/getCode}"
            id="codeImg"
          />
        </el-form-item> -->
        <!-- 按钮区 -->
        <el-button type="primary" class="sumbtn" plain @click="login"
          >登录</el-button
        >
        <el-form-item class="btns">
          <el-button type="text" plain @click="resetLoginForm"
            >注册账号</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      srcTest: "",
      userData: {},
      fullscreenLoading: false,
      loginForm: {
        username: "",
        password: "",
      },
      postForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  created: function () {
    // 获取后端数据后
    ///this.tableData=数据
    // var img = document.getElementById("codeImg");
    // 当某个操作过于频繁   地址都是一样的 浏览器就有可能出现直接从上一次的缓存中获取值
    // this.changeCode();
  },
  methods: {
    // changeCode() {
    //   // var img = document.getElementById("codeImg");
    //   // 当某个操作过于频繁   地址都是一样的 浏览器就有可能出现直接从上一次的缓存中获取值
    //   this.srcTest = this.api + "user/getCode?time=" + new Date().getTime();
    // },
    resetLoginForm() {
      this.$router.push("/regist");
    },
    login() {
      this.$refs.loginFormRef.validate((valid) => {
        if (!valid) {
          this.$message("请填写完整信息");
          this.addDialogClosed();
        } else {
          this.openLoading();
          this.postForm.password = this.loginForm.password;
          this.postForm.username = this.loginForm.username;
          let password = this.postForm.password;
          let username = this.postForm.username;

          let comValue = this.$qs.parse(this.postForm);
          console.log(comValue);

          this.$http({
            headers: {
              "Content-Type": "application/json",
            },
            method: "post",
            url: this.api + "login.do",
            data: comValue,
          }).then(
            (res) => {
              //const box = res.data;
              //  let dataForm = JSON.parse(res.data);
              //console.log(res.data.code);
              this.openLoading().close();
              if (res.data.code == 200) {
                //Vue.prototype.token = res.data.data.token;
                localStorage.setItem("token", res.data.data.token);
                console.log(res);

                this.$message({
                  message: "登陆成功",
                  type: "success",
                });
                this.loginForm = {
                  username: "",
                  password: "",
                };
                this.$router.push("/home");
              } else if (res.data.code == 500) {
                this.$message({
                  message: "账号或者密码错误",
                  type: "danger",
                });
                this.$refs.loginFormRef.resetFields();
              }
            },
            (error) => {
              //console.log("error");
              this.openLoading().close();
              // console.log(error);
            }
          );

          // this.$http
          //   .post(this.api + "login.do?" + comValue)
          //   .then((res) => {
          //     console.log(res);
          //     this.openLoading().close();
          //     if (res.data.code == 200) {
          //       this.$message({
          //         message: "登陆成功",
          //         type: "success",
          //       });
          //       let useri = res.data;
          //       this.personInfo.userName = "ss";
          //       this.personInfo.userId = res.data.data[0].userId;
          //       console.log(this.personInfo);
          //       this.$message.success("登录成功！");
          //       this.loginForm = {
          //         username: "",
          //         password: "",
          //       };
          //       this.$router.push("/home");
          //     } else if (res.data.code == 500) {
          //       this.$message({
          //         message: "账号或者密码错误",
          //         type: "danger",
          //       });
          //       this.$refs.loginFormRef.resetFields();
          //     }
          //   })
          //   .catch((error) => {
          //     console.log(error);
          //     this.openLoading().close();
          //     // console.log(error);
          //   });
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 770px;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 9px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.avatar_box {
  height: 130px;
  width: 130px;
  border-radius: 50%;
  border: 1px solid #eee;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -40%);
  background-color: #fff;
}
.avatar_box img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #eee;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.sumbtn {
  position: absolute;
  width: 230px;
  margin: 0 88px auto;
}
#codeImg {
  position: absolute;
  cursor: pointer;
}
</style>