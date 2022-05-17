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
      <h1 class="regiser_title">欢迎注册</h1>
      <el-form
        ref="loginFormRef"
        label-width="90px"
        class="login_form"
        :model="loginForm"
        :rules="rules"
      >
        <el-form-item label="设置账号" prop="userAccount" style="width: 350px">
          <el-input v-model="loginForm.userAccount"></el-input>
        </el-form-item>
        <el-form-item
          label="设置密码"
          prop="userPassword1"
          style="width: 350px"
        >
          <el-input
            v-model="loginForm.userPassword1"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="再次确认"
          prop="userPassword2"
          style="width: 350px"
        >
          <el-input
            v-model="loginForm.userPassword2"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email" style="width: 350px">
          <el-input v-model="loginForm.email"></el-input>
        </el-form-item>
        <el-form-item
          label="验证码"
          prop="checkCode"
          style="width: 200px; height: 30px"
        >
          <el-input v-model="loginForm.checkCode"></el-input
          ><el-button
            type="primary"
            :disabled="disable"
            class="codeBtn { codeGeting:isGeting }"
            @click="codeSend"
            icon="el-icon-s-promotion"
            >{{ getCode }}</el-button
          >
        </el-form-item>

        <!-- 按钮区 -->
        <el-button type="primary" class="sumbtn" plain @click="login"
          >确定</el-button
        >
        <el-form-item class="btns">
          <el-button type="text" plain @click="resetLoginForm"
            >返回登陆界面</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <el-dialog :visible.sync="codeVisible" class="codebox">
      <div>
        <el-form ref="form">
          <slide-verify
            :l="32"
            :r="10"
            :w="310"
            :h="155"
            ref="slideblock"
            @again="onAgain"
            @fulfilled="onFulfilled"
            @success="onSuccess"
            @fail="onFail"
            @refresh="onRefresh"
            :slider-text="text"
            :accuracy="accuracy"
          ></slide-verify>
          <div>{{ msg }}</div>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      getCode: "获取验证码",
      disable: false,
      isGeting: false,
      count: 30,
      emailPost: {
        email: "",
      },
      codeVisible: false,
      msg: "",
      text: "向右滑动->",
      accuracy: 1,
      confForm1: {
        checkCode: "",
      },
      fullscreenLoading: false,
      loginForm: {
        email: "",
        userAccount: "",
        userPassword1: "",
        userPassword2: "",
        checkCode: "",
      },
      postForm: {
        email: "",
        name: "",
        password: "",
        checkCode: "",
      },
      rules: {
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        userAccount: [
          { required: true, message: "请输入您想要的用户名", trigger: "blur" },
        ],
        checkCode: [
          { required: true, message: "请输入邮箱验证码", trigger: "blur" },
        ],
        userPassword1: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, message: "密码过短", trigger: "blur" },
        ],
        userPassword2: [
          {
            required: true,
            message: "请再次输入密码进行确实",
            trigger: "blur",
          },
        ],
      },
    };
  },
  created: function () {
    this.onRefresh();
  },
  methods: {
    codeSend() {
      this.onRefresh();
      if (this.loginForm.email == "") {
        this.$message({
          type: "error",
          message: "请输入邮箱",
        });
      } else {
        this.onRefresh();
        this.codeVisible = true;
      }
    },
    onSuccess(times) {
      var thetime = times / 1000;
      var time = thetime.toFixed(2);
      this.$message({
        type: "success",
        message: "验证通过,你只用了" + time + "秒,快如闪电！",
      });
      this.openLoading();
      this.emailPost.email = this.loginForm.email;
      // var comValue = this.emailPost;
      var comValue = this.$qs.stringify(this.emailPost);
      console.log(comValue);
      this.onRefresh();
      this.codeVisible = false;
      this.$http.get(this.api + "getCheckCode?" + comValue).then(
        (res) => {
          this.openLoading().close();
          console.log(res);
          this.$message({
            type: "success",
            message: "验证码已发送，请查看邮箱",
          });
          var countDown = setInterval(() => {
            if (this.count < 1) {
              this.isGeting = false;
              this.disable = false;
              this.getCode = "获取验证码";
              this.count = 30;
              clearInterval(countDown);
            } else {
              this.isGeting = true;
              this.disable = true;
              this.getCode = this.count-- + "s后重发";
            }
          }, 1000);
          this.onRefresh();
        },
        (response) => {
          console.log("response.request");
          this.codeVisible = false;
          this.onRefresh();
        }
      );
    },
    onFail() {
      console.log("验证不通过");
      this.$message({
        type: "error",
        message: "验证不通过",
      });
      this.msg = "";
    },
    onRefresh() {
      console.log("点击了刷新小图标");
      this.msg = "";
    },
    onFulfilled() {
      console.log("刷新成功啦！");
    },
    onAgain() {
      console.log("检测到非人为操作的哦！");
      // 刷新
      this.$refs.slideblock.reset();
    },
    handleClick() {
      this.$refs.slideblock.reset();
    },
    resetLoginForm() {
      this.$router.push("/login");
    },
    confirmCode() {
      this.openLoading();
      var confCode = $qs.parse(this.confForm1.checkCode);
      this.$http({
        method: "get",
        url: this.api + "getCheckCode",
        params: {
          confCode,
        },
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      }).then(
        (res) => {
          console.log(res);
          this.$message({
            type: "success",
            message: "验证成功",
          });
        },
        (response) => {
          console.log(response);
          this.$message({
            type: "error",
            message: "网络错误",
          });
        }
      );
    },
    confDont1() {},
    login() {
      // console.log(this.loginForm)
      this.$refs.loginFormRef.validate((valid) => {
        if (!valid) {
          this.$message("请正确填写信息");
          this.addDialogClosed();
        } else if (
          this.loginForm.userPassword1 !== this.loginForm.userPassword2
        ) {
          this.$message("密码不匹配,请重新输入密码");
        } else {
          this.openLoading();
          // console.log(this.loginForm);
          this.postForm.name = this.loginForm.userAccount;
          this.postForm.password = this.loginForm.userPassword1;
          this.postForm.email = this.loginForm.email;
          this.postForm.checkCode = this.loginForm.checkCode;
          //console.log(this.loginForm.email);
          //let comValue = JSON.stringify(this.postForm)
          let comValue = this.$qs.parse(this.postForm);
          console.log(comValue);

          this.$http({
            headers: {
              "Content-Type": "application/json",
            },
            method: "post",
            url: this.api + "registered",
            data: comValue,
          }).then(
            (res) => {
              console.log(res);
              if (res.data.code == 500) {
                this.openLoading().close();
                this.$message({
                  message: "账号已存在",
                  type: "danger",
                });
              } else {
                this.openLoading().close();
                this.$message({
                  message: "注册成功",
                  type: "success",
                });
                this.loginForm = {
                  checkCode: "",
                  email: "",
                  userAccount: "",
                  userPassword1: "",
                  userPassword2: "",
                };
                this.$router.push("/login");
              }
            },
            (error) => {
              // console.log(error);
              this.openLoading().close();
              this.$router.push("/regist");
              this.$message({
                type: "error",
                message: "网络错误",
              });
            }
          );

          // this.$http
          //     .post(this.api + "registered")
          //     .then((res) => {
          //       if (res.data.code == 500) {
          //         this.openLoading().close();
          //         this.$message({
          //           message: "账号已存在",
          //           type: "danger",
          //         });
          //       } else {
          //         console.log(res);
          //         this.openLoading().close();
          //         this.$message({
          //           message: "注册成功",
          //           type: "success",
          //         });
          //         this.loginForm = {
          //           checkCode: "",
          //           email: "",
          //           userAccount: "",
          //           userPassword1: "",
          //           userPassword2: "",
          //         };
          //         this.$router.push("/login");
          //       }
          //     })
          //     .catch((error) => {
          //       // console.log(error);
          //       this.openLoading().close();
          //       this.$router.push("/regist");
          //       this.$message({
          //         type: "error",
          //         message: "网络错误",
          //       });
          //     });
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.codeGeting {
  background: #cdcdcd;
  border-color: #cdcdcd;
}
.codeBtn {
  position: relative;
  top: -40px;
  left: 130px;
}
.codebox {
  height: 100%;
  width: 700px;
  margin: 0 auto;
  padding-top: 100px;
}
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 480px;
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
  padding: 10px 0;
}
.login_form {
  position: absolute;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.regiser_title {
  text-align: center;
  opacity: 0.6;
  line-height: 40px;
}
.el-form {
  margin-bottom: 15px;
}
.sumbtn {
  position: absolute;
  width: 230px;
  margin: 0 88px auto;
  bottom: 32px;
}
</style>