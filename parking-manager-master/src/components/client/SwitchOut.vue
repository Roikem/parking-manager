<template>
  <div>
    <!-- 头部面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>车位管理</el-breadcrumb-item>
      <el-breadcrumb-item>闲置车位管理</el-breadcrumb-item>
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
            placeholder="请输入车位编号、车位类型"
            v-model="search"
            @input="submitFun"
            ref="searchInput"
            onkeyup="this.value=this.value.toLowerCase()"
          >
            <el-button slot="append" icon="el-icon-search"></el-button
          ></el-input>
        </el-col>
      </el-row>

      <el-tabs v-model="activeName" @tab-click="handleClick">
        <div class="tables">
          <div class="left_table">
            <!-- 表格区 -->
            <el-table
              ref="filterTable"
              :data="tempData"
              border
              :stripe="true"
              style="
                width: 90%;
                border-radius: 10px;
                box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12),
                  0 0 6px rgba(0, 0, 0, 0.04);
              "
            >
              <el-table-column
                prop="locate"
                label="车位编号"
                width="120"
                sortable
              ></el-table-column>
              <el-table-column
                prop="status"
                label="车位类型"
                width="180"
                :filters="[
                  { text: '闲置临时车位', value: '闲置临时车位' },
                  { text: '未出租车位', value: '未出租车位' },
                ]"
                :filter-method="filterTag"
                filter-placement="bottom-end"
              >
                <template slot-scope="scope">
                  <el-tag
                    :type="
                      scope.row.status === '闲置临时车位'
                        ? 'primary'
                        : 'success'
                    "
                    disable-transitions
                    >{{ scope.row.status }}</el-tag
                  >
                </template>
              </el-table-column>
              <!-- <el-table-column prop="state" label="状态">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.state" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </template>
        </el-table-column>-->
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    type="primary"
                    @click="switchBridge(scope)"
                    icon="el-icon-edit"
                    >类型切换</el-button
                  >
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
                :page-sizes="[5, 15]"
                :page-size="queryInfo.pagesize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="queryInfo.total"
              ></el-pagination>
            </div>
          </div>
        </div>

        <!-- 信息参数 -->
        <div class="munber_box">
          <div class="parkinfo">
            <el-descriptions
              class="margin-top"
              title="车位分配情况"
              :column="2"
              border
            >
              <el-descriptions-item>
                <template slot="label">
                  <el-tag type="success"> 已出租 </el-tag>
                </template>
                {{ parking_coditon.rentedNum }}
              </el-descriptions-item>

              <el-descriptions-item>
                <template slot="label">
                  <el-tag type="danger"> 未出租 </el-tag>
                </template>
                {{ parking_coditon.unrentNum }}
              </el-descriptions-item>

              <el-descriptions-item>
                <template slot="label">
                  <el-tag type="success" effect="dark"> 闲置临时车位 </el-tag>
                </template>
                {{ parking_coditon.unTempNum }}
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label">
                  <el-tag type="danger" effect="dark"> 已占临时车位 </el-tag>
                </template>
                {{ parking_coditon.tempNum }}
              </el-descriptions-item>
            </el-descriptions>
          </div>

          <div
            id="main"
            class="echarts_class"
            ref="chart"
            style="width: 400px; height: 400px"
          ></div>
        </div>
      </el-tabs>
    </el-card>

    <!-- 类型切换 -->

    <el-dialog title="续租操作 " :visible.sync="reletVisible" width="30%">
      <el-form ref="form" :model="switchForm" label-width="80px">
        <el-form-item label="续租类型">
          <el-select
            v-model="switchForm.status"
            placeholder="请选择要切换成的车位类型"
          >
            <el-option label="未出租车位" value="未出租车位"></el-option>
            <el-option label="闲置临时车位" value="闲置临时车位"></el-option>
          </el-select>
        </el-form-item>
        <span></span>
        <el-form-item>
          <el-button type="primary" @click="reletonSubmit">确 认</el-button>
          <el-button @click="reletVisible = false">取 消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
let Echarts = require("echarts/lib/echarts"); //基础实例 注意不要使用import
require("echarts/lib/chart/pie");
export default {
  data() {
    return {
      activeName: "first",
      reletVisible: false,
      parking_cost: "",
      comValue: "",
      scope: "",
      dialogVisible: false,
      search: "",
      tempData: [],
      t1data: [],
      switchForm: {
        status: "",
        locate: "",
      },
      parking_coditon: {
        rentedNum: "",
        unrentNum: "",
        tempNum: "",
        unTempNum: "",
      },
      tableData: [
        {
          locate: "a1_4",
          status: "未出租车位",
        },
        {
          locate: "a1_5",
          status: "未出租车位",
        },
        {
          locate: "a1_6",
          status: "未出租车位",
        },
        {
          locate: "a1_6",
          status: "未出租车位",
        },
        {
          locate: "a1_6",
          status: "未出租车位",
        },
        {
          locate: "a1_6",
          status: "闲置临时车位",
        },
        {
          locate: "a1_6",
          status: "闲置临时车位",
        },
        {
          locate: "a1_6",
          status: "闲置临时车位",
        },
        {
          locate: "a1_6",
          status: "闲置临时车位",
        },
        {
          locate: "a1_6",
          status: "闲置临时车位",
        },
        {
          locate: "a1_8",
          status: "闲置临时车位",
        },
        {
          locate: "a1_8",
          status: "闲置临时车位",
        },
        {
          locate: "a1_11",
          status: "闲置临时车位",
        },
      ],
      queryInfo: {
        query: "",
        pagenum: 1,
        pagesize: 15,
        total: "",
      },
      userlist: [],
      addDialogVisible: false,
      editDialogVisible: false,
      echartsData: {
        title: {
          text: "分配比例",
          x: "center",
          y: "center",
          textStyle: {
            color: "#000000",
            fontSize: 18,
          },
        },
        series: [
          {
            type: "pie",
            data: [
              {
                value: "",
                name: "已占临时停车位",
              },
              {
                value: "",
                name: "闲置临时停车位",
              },
              {
                value: "",
                name: "已出租",
              },

              {
                value: "",
                name: "未出租",
              },
            ],
            radius: ["40%", "60%"],
          },
        ],
      },
      // 添加用户的表单数据
    };
  },

  created: function () {
    // 获取后端数据后
    ///this.tableData=数据
    this.fetch();
  },
  mounted() {
    this.echartsData.series[0].data[2].value = Number(
      this.parking_coditon.rentedNum
    );
    this.echartsData.series[0].data[3].value = Number(
      this.parking_coditon.unrentNum
    );
    this.echartsData.series[0].data[0].value = Number(
      this.parking_coditon.tempNum
    );
    this.echartsData.series[0].data[1].value = Number(
      this.parking_coditon.unTempNum
    );
    //console.log(this.echartsData.series[0].data[0].value);
    this.init();
  },

  methods: {
    async getUserList() {
      this.userlist = this.tableData;
    },

    init() {
      //柱形图
      //因为初始化echarts 的时候，需要指定的容器 id='main'
      this.$echarts
        .init(document.getElementById("main"))
        .setOption(this.echartsData);
    },

    //分页栏
    handleClick(tab, event) {
      // console.log(tab, event);
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
          status: tabledatas.status,
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
      // console.log(currentPage);
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
    //       locate: "",
    //       status: "",
    //       tel_number: "",
    //       company: "",
    //     },
    fetch() {
      //test

      this.tempData = [];
      this.queryInfo.total = this.tableData.length;
      // console.log(this.queryInfo.total);
      // this.tabledata = this.getData;
      this.handleCurrentChange(1);
      //分页bug
      //this.inintData();

      //启动执行 get
      this.openLoading();
      this.$http.get(this.api + "SwitchInfo").then((res) => {
        const box = res.data.data;
        var pDataForm = JSON.parse(box);
        console.log(pDataForm);
        this.openLoading().close();
        this.tableData = pDataForm.tableData;
        this.parking_coditon = pDataForm.parking_coditon;
        this.inintData();
      });
    },

    //修改信息  @rk---

    //标签

    filterTag(value, row) {
      return row.status === value;
    },

    //出库操作 @rk---
    deleteBridge(scope) {
      this.scope = scope;
      this.dialogVisible = true;
      this.parking_cost = 10;
    },
    reletonSubmit() {
      //console.log(this.switchForm);
      let switchinfo = {
        parkingType: "",
        parkingId: "",
      };
      switchinfo.parkingType = this.switchForm.status;
      switchinfo.parkingId = this.switchForm.locate;
      let switchPost = this.$qs.stringify(switchinfo);
      console.log(switchPost);
      this.$http
        .get(this.api + "SwitchForm?" + switchPost)
        .then((res) => {
          console.log(res);
          this.$message({
            message: "操作成功1",
            type: "success",
          });
          this.reletVisible = false;
          this.fetch();
        })
        .catch((error) => {
          console.log(error);
        });
      // console.log(switchPost);
    },

    //类型切换操作按钮
    switchBridge(scope) {
      this.scope = scope;
      let _1obj = JSON.stringify(this.scope.row);
      let reletJson = JSON.parse(_1obj);
      this.switchForm.status = reletJson.status;
      this.switchForm.locate = reletJson.locate;
      this.reletVisible = true;
      //console.log(this.switchForm);
    },

    deleteData(scope) {
      //console.log("index的值是：",scope.$index)
      this.dialogVisible = false;
      //  this.tableData.splice(scope.$index, 1)
      // this.inintData()
      let comValue = {
        locate: "",
      };
      comValue.locate = scope.row.locate;

      let postinfo = this.$qs.stringify(comValue);
      // console.log(postinfo);
      // console.log(scope.row.userId)
      //console.log("出库的货物编码:",scope.row.goodsId)
      //返回用户车位编号，后端根据locate进行相关处理    将该商品从商品展示的数据库中删除并保存到出库记录数据库中

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
.parkinfo {
  margin-top: 30px;
  width: 430px;
  display: inline-block;
  vertical-align: top;
}
.tables {
  position: relative;
  width: 500px;
  display: inline-block;
  vertical-align: top;
}
#echarts_box {
  position: relative;
  float: left;
}
.echarts_class {
  position: relative;
}
.munber_box {
  float: right;
}
</style>
