<template>
  <div>
    <!-- 头部面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>临时停车</el-breadcrumb-item>
      <el-breadcrumb-item>临时停车信息列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区 -->
    <el-card>
      <!-- 搜索框区 -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="车位编号">
          <el-input
            v-model="formInline.locate"
            placeholder="请输入车位编号"
          ></el-input>
        </el-form-item>
        <el-form-item label="车牌号">
          <el-input
            v-model="formInline.carNumber"
            placeholder="请输入车牌号"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchForm" icon="el-icon-search"
            >查询</el-button
          >
        </el-form-item>
      </el-form>
      <!-- 表格区 -->
      <el-table :data="tableData" border :stripe="true">
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="locate" label="车位编号"></el-table-column>
        <el-table-column prop="carNumber" label="车牌号"></el-table-column>
        <el-table-column prop="telNumber" label="手机号"></el-table-column>
        <!-- <el-table-column prop="state" label="状态">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.state" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </template>
        </el-table-column>-->
        <el-table-column label="操作" width="130">
          <template slot-scope="scope">
            <!-- 删除 -->
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              @click="deleteBridge(scope)"
              >出库</el-button
            >
            <!-- 分配角色 -->
            <!-- <el-tooltip effect="dark" content="购买信息" placement="top" :enterable="false">
              <el-button type="warning" icon="el-icon-setting" size="mini"></el-button>
            </el-tooltip>-->
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页区 -->
      <div class="block">
        <!-- size-change在切换分页（如100页为一格）的时候触发，current-change在只要换页的时候就会触发 -->
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="queryInfo.pagenum"
          :page-sizes="[10]"
          :page-size="queryInfo.pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="queryInfo.total"
        ></el-pagination>
      </div>
    </el-card>

    <!-- 出库信息对话框 -->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span style="font-size: 17px; font-weight: 800"
        >是否确定临时车辆出库（当前计费
        <el-tag type="primary" disable-transitions>{{ parking_cost }}元</el-tag
        >）
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="deleteData(scope)">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        locate: "",
        carNumber: "",
      },
      parking_cost: "",
      comValue: "",
      scope: "",
      dialogVisible: false,
      search: "",
      tempData: [],
      t1data: [],
      tableData: [],
      queryInfo: {
        query: "",
        pagenum: 1,
        pagesize: 10,
        total: 0,
      },
      userlist: [],
      addDialogVisible: false,
      editDialogVisible: false,
      // 添加用户的表单数据
    };
  },

  created: function () {
    // 获取后端数据后
    ///this.tableData=数据
    this.fetch();
  },
  methods: {
    async getUserList() {
      this.userlist = this.tableData;
    },
    //查询功能
    inintData() {
      this.tempData = this.tableData;
    },
    submitFun() {
      let search = this.search;
      search.toLowerCase();
      this.tempData = this.tableData.filter(function (tabledatas) {
        // console.log('过滤', tabledatas);
        let searchField = {
          locate: tabledatas.locate,
          telNumber: tabledatas.telNumber,
          carNumber: tabledatas.carNumber,
        };
        return Object.keys(searchField).some(function (key) {
          return String(tabledatas[key]).toLowerCase().indexOf(search) > -1;
        });
      });
    },

    //分页栏
    handleClick(tab, event) {
      console.log(tab, event);
    },
    //  监听pagesize改变的事件
    handleSizeChange(newSize) {
      //console.log(newSize);
      this.queryInfo.pagesize = newSize;
      // 案例中是根据当前页面需要的数据数量来发起请求
      //this.getUserList();
      this.handleCurrentChange(this.queryInfo.pagenum);
    },
    // 监听页码值改变的事件
    handleCurrentChange(currentPage) {
      //   console.log(currentPage);
      this.queryInfo.pagenum = currentPage;
      this.currentChangePage(this.tableData, currentPage);
      this.fetch();
    },
    currentChangePage(list, currentPage) {
      let from = (currentPage - 1) * this.queryInfo.pagesize;
      let to = currentPage * this.queryInfo.pagesize;
    },

    // 监听添加用户表单的关闭事件并清除其中的数据
    addDialogClosed() {
      this.$refs.addFormRef.resetFields();
    },
    addDialogClosed() {
      this.$refs.addFormRef.resetFields();
    },
    // 点击确认按钮的事件
    // 这个位置有bug，在教程中是直接把数据交到后端，再重新拿数据渲染
    // 但此处加入tableData的数据和addForm绑定死了，分不开，在加入数据了之后
    // 清除表单里的数据还是会把已经加入界面里的删掉，就算不清除表单里的数据，加入表格里的也会每个数据都一模一样
    // 解决方案：Object.assign({}, this.addForm)需要深拷贝

    //向后端申请数据 @rk---
    // {
    //       locate: "",
    //       carNumber: "",
    //       telNumber: "",
    //       company: "",
    //     },
    fetch() {
      //test
      //this.queryInfo.total = this.tableData.length;
      //console.log(this.queryInfo.total);
      // this.tabledata = this.getData;
      //this.handleCurrentChange(1);
      //分页bug
      //this.inintData();
      //启动执行 get
      var listData = {};
      listData.pageNum = this.queryInfo.pagenum - 1;
      listData.pageSize = 10;
      listData.locate = this.formInline.locate;
      listData.carNumber = this.formInline.carNumber;
      let listRequest = this.$qs.stringify(listData);
      console.log(listRequest);
      this.openLoading();
      this.$http
        .get(this.api + "TempInfo?" + listRequest)
        .then(
          (res) => {
            this.openLoading().close();
            const box = res.data.data;
            var pDataForm = JSON.parse(box);
            console.log(res);
            this.queryInfo.total = pDataForm.count;
            this.tableData = pDataForm.tempList;
            this.inintData();
          },
          (err) => {
            console.log(err.response);
          }
        )
        .catch((error) => {
          this.openLoading().close();
          this.$message({
            message: "长时间未操作，请重新登录",
            type: "error",
          });
          this.$router.push("/login");
        });
    },

    //修改信息  @rk---
    searchForm() {
      var searchForm = {};
      searchForm.locate = this.formInline.locate;
      searchForm.carNumber = this.formInline.carNumber;
      searchForm.pageNum = 0;
      searchForm.pageSize = 10;
      let listSearch = this.$qs.stringify(searchForm);
      console.log(listSearch);
      this.openLoading();
      this.$http.get(this.api + "TempInfo?" + listSearch).then((res) => {
        this.openLoading().close();
        const box = res.data.data;
        var pDataForm = JSON.parse(box);
        console.log(res);
        this.queryInfo.total = pDataForm.count;
        this.tableData = pDataForm.tempList;
        this.queryInfo.pagenum = 1;
        this.inintData();
      });
    },
    //出库操作 @rk---
    deleteBridge(scope) {
      this.scope = scope;
      let postValue = {
        carNumber: "",
      };
      //postValue.locate = scope.row.locate;
      postValue.carNumber = scope.row.carNumber;
      // console.log(postValue);
      let costGet = this.$qs.stringify(postValue);
      console.log(costGet);
      this.openLoading();
      this.$http
        .get(this.api + "exitDoor?" + costGet)
        .then((res) => {
          this.openLoading().close();
          this.dialogVisible = true;
          // this.openLoading().close()
          console.log(res);
          const box1 = res.data.data;
          var pDataForm = JSON.parse(box1);
          this.parking_cost = pDataForm.cost;
          // console.log(pDataForm);
        })
        .catch((error) => {
          this.openLoading().close();
          this.$message({
            message: "网络超时",
            type: "error",
          });
        });
    },
    deleteData(scope) {
      //console.log("index的值是：",scope.$index)
      this.dialogVisible = false;
      //  this.tableData.splice(scope.$index, 1)
      // this.inintData()
      let comValue = {
        carNumber: "",
        locate: "",
      };
      comValue.carNumber = scope.row.carNumber;
      comValue.locate = scope.row.locate;
      //   console.log(comValue);
      let postinfo = this.$qs.stringify(comValue);
      console.log(postinfo);
      // console.log(scope.row.userId)
      //console.log("出库的货物编码:",scope.row.goodsId)
      //返回用户车位编号，后端根据locate进行相关处理    将该商品从商品展示的数据库中删除并保存到出库记录数据库中
      this.openLoading();
      this.$http
        .get(this.api + "TempDelete?" + postinfo)
        .then((res) => {
          console.log(res);
          this.openLoading().close();
          this.fetch();
          this.$message({
            message: "出库成功",
            type: "success",
          });
        })
        .catch((error) => {
          console.log(error);
          this.fetch();
        });
    },
  },
};
</script>

<style lang='less' scoped>
</style>
