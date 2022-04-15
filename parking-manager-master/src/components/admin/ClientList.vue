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
      <el-row :gutter="20">
        <el-col :span="10">
          <!-- <el-input placeholder="请输入内容" v-model="search"
                       @input="submitFun"
                       ref='searchInput' class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input> -->

          <el-input
            placeholder="请输入车位编号、车牌号或手机号"
            v-model="search"
            @input="submitFun"
            ref="searchInput"
            onkeyup="this.value=this.value.toLowerCase()"
          >
            <el-button slot="append" icon="el-icon-search"></el-button
          ></el-input>
        </el-col>
      </el-row>
      <!-- 表格区 -->
      <el-table :data="tempData" border :stripe="true">
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="parking_id" label="车位编号"></el-table-column>
        <el-table-column prop="car_id" label="车牌号"></el-table-column>
        <el-table-column prop="tel_number" label="手机号"></el-table-column>
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
          :page-sizes="[5, 10]"
          :page-size="queryInfo.pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="queryInfo.total"
        ></el-pagination>
      </div>
    </el-card>

    <!-- 出库信息对话框 -->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span style="font-size: 17px; font-weight: 800"
        >是否确定临时车辆出库（当前计费{{ parking_cost }}元）
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
      parking_cost: "",
      comValue: "",
      scope: "",
      dialogVisible: false,
      search: "",
      tempData: [],
      t1data: [],
      tableData: [
        {
          parking_id: "a1_4",
          car_id: "川A23231",
          tel_number: "19999999999",
        },
        {
          parking_id: "a1_5",
          car_id: "川A24211",
          tel_number: "17777777777",
        },
        {
          parking_id: "a1_6",
          car_id: "川A23211",
          tel_number: "12222222223",
        },
        {
          parking_id: "a1_6",
          car_id: "川A23211",
          tel_number: "12222222223",
        },
        {
          parking_id: "a1_6",
          car_id: "川A23211",
          tel_number: "12222222223",
        },
        {
          parking_id: "a1_6",
          car_id: "川A23211",
          tel_number: "12222222223",
        },
        {
          parking_id: "a1_6",
          car_id: "川A23211",
          tel_number: "12222222223",
        },
        {
          parking_id: "a1_6",
          car_id: "川A23211",
          tel_number: "12222222223",
        },
        {
          parking_id: "a1_6",
          car_id: "川A23211",
          tel_number: "12222222223",
        },
        {
          parking_id: "a1_6",
          car_id: "川A23211",
          tel_number: "12222222223",
        },
        {
          parking_id: "a1_8",
          car_id: "川A23211",
          tel_number: "12222222223",
        },
        {
          parking_id: "a1_8",
          car_id: "川A23211",
          tel_number: "12222222223",
        },
        {
          parking_id: "a1_8",
          car_id: "川A23211",
          tel_number: "12222222223",
        },
      ],
      queryInfo: {
        query: "",
        pagenum: 1,
        pagesize: 10,
        total: "",
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
          parking_id: tabledatas.parking_id,
          tel_number: tabledatas.tel_number,
          car_id: tabledatas.car_id,
        };
        return Object.keys(searchField).some(function (key) {
          return String(tabledatas[key]).toLowerCase().indexOf(search) > -1;
        });
      });
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
    },
    currentChangePage(list, currentPage) {
      let from = (currentPage - 1) * this.queryInfo.pagesize;
      let to = currentPage * this.queryInfo.pagesize;
      this.tempData = [];
      for (; from < to; from++) {
        if (list[from]) {
          this.tempData.push(list[from]);
        }
      }
      // console.log(list);
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
    //       parking_id: "",
    //       car_id: "",
    //       tel_number: "",
    //       company: "",
    //     },
    fetch() {
      //test
      this.tempData = [];
      this.queryInfo.total = this.tableData.length;
      //console.log(this.queryInfo.total);
      // this.tabledata = this.getData;
      this.handleCurrentChange(1);
      //分页bug
      //this.inintData();

      //启动执行 get
      this.openLoading();
      this.$http.get(this.api + "TempAddForm").then((res) => {
        console.log(res);
        this.openLoading().close();
        this.tableData = res.data.data;
        this.inintData();
      });
    },

    //修改信息  @rk---

    //出库操作 @rk---
    deleteBridge(scope) {
      this.scope = scope;
      this.dialogVisible = true;
      let postValue = {
        parking_id: "",
        car_id: "",
      };
      postValue.parking_id = scope.row.parking_id;
      postValue.car_id = scope.row.car_id;
      // console.log(postValue);
      let costGet = this.$qs.stringify(postValue);
      //console.log(costGet);
      this.parking_cost = 10;
    },
    deleteData(scope) {
      //console.log("index的值是：",scope.$index)
      this.dialogVisible = false;
      //  this.tableData.splice(scope.$index, 1)
      // this.inintData()
      let comValue = {
        parking_id: "",
        car_id: "",
      };
      comValue.parking_id = scope.row.parking_id;
      comValue.car_id = scope.row.car_id;
      //   console.log(comValue);
      let postinfo = this.$qs.stringify(comValue);
      // console.log(postinfo);
      // console.log(scope.row.userId)
      //console.log("出库的货物编码:",scope.row.goodsId)
      //返回用户车位编号，后端根据parking_id进行相关处理    将该商品从商品展示的数据库中删除并保存到出库记录数据库中

      // this.$http
      //   .post(this.api + "user/delete?" + postinfo)
      //   .then((res) => {
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
  },
};
</script>

<style lang='less' scoped>
</style>
