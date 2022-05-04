<template>
  <div>
    <!-- 头部面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>车库总揽</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区 -->
    <div class="parking-table">
      <div class="parking-box-pic">
        <!-- 区域A-->
        <ul class="area_A">
          <!-- A区域1 -->
          <ul class="area_a_main1">
            <!-- A区域 分区1 -->
            <li class="area_a1">
              <!-- 分区1 6小组 -->
              <ul class="a1_group1">
                <li class="a1_1">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[0].parkingColor"
                  >
                    <p>{{ parkingDataForm[0].parkingArea }}</p>
                    <a>{{ parkingDataForm[0].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[1].parkingColor"
                  >
                    <p>{{ parkingDataForm[1].parkingArea }}</p>
                    <a>{{ parkingDataForm[1].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[2].parkingColor"
                  >
                    <p>{{ parkingDataForm[2].parkingArea }}</p>
                    <a>{{ parkingDataForm[2].areaNum }}</a>
                  </div>
                </li>
                <li class="a1_2">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[3].parkingColor"
                  >
                    <p>{{ parkingDataForm[3].parkingArea }}</p>
                    <a>{{ parkingDataForm[3].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[4].parkingColor"
                  >
                    <p>{{ parkingDataForm[4].parkingArea }}</p>
                    <a>{{ parkingDataForm[4].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[5].parkingColor"
                  >
                    <p>{{ parkingDataForm[5].parkingArea }}</p>
                    <a>{{ parkingDataForm[5].areaNum }}</a>
                  </div>
                </li>
              </ul>
              <!-- 分区2 6小组 -->
              <ul class="a1_group2">
                <li class="a1_1">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[6].parkingColor"
                  >
                    <p>{{ parkingDataForm[6].parkingArea }}</p>
                    <a>{{ parkingDataForm[6].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[7].parkingColor"
                  >
                    <p>{{ parkingDataForm[7].parkingArea }}</p>
                    <a>{{ parkingDataForm[7].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[8].parkingColor"
                  >
                    <p>{{ parkingDataForm[8].parkingArea }}</p>
                    <a>{{ parkingDataForm[8].areaNum }}</a>
                  </div>
                </li>
                <li class="a1_2">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[9].parkingColor"
                  >
                    <p>{{ parkingDataForm[9].parkingArea }}</p>
                    <a>{{ parkingDataForm[9].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[10].parkingColor"
                  >
                    <p>{{ parkingDataForm[10].parkingArea }}</p>
                    <a>{{ parkingDataForm[10].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[11].parkingColor"
                  >
                    <p>{{ parkingDataForm[11].parkingArea }}</p>
                    <a>{{ parkingDataForm[11].areaNum }}</a>
                  </div>
                </li>
              </ul>
              <!-- 分区3 6小组 -->
              <ul class="a1_group3">
                <li class="a1_1">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[12].parkingColor"
                  >
                    <p>{{ parkingDataForm[12].parkingArea }}</p>
                    <a>{{ parkingDataForm[12].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[13].parkingColor"
                  >
                    <p>{{ parkingDataForm[13].parkingArea }}</p>
                    <a>{{ parkingDataForm[13].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[14].parkingColor"
                  >
                    <p>{{ parkingDataForm[14].parkingArea }}</p>
                    <a>{{ parkingDataForm[14].areaNum }}</a>
                  </div>
                </li>
                <li class="a1_2">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[15].parkingColor"
                  >
                    <p>{{ parkingDataForm[15].parkingArea }}</p>
                    <a>{{ parkingDataForm[15].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[16].parkingColor"
                  >
                    <p>{{ parkingDataForm[16].parkingArea }}</p>
                    <a>{{ parkingDataForm[16].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[17].parkingColor"
                  >
                    <p>{{ parkingDataForm[17].parkingArea }}</p>
                    <a>{{ parkingDataForm[17].areaNum }}</a>
                  </div>
                </li>
              </ul>
              <!-- 分区4 6小组 -->
              <ul class="a1_group4">
                <li class="a1_1">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[18].parkingColor"
                  >
                    <p>{{ parkingDataForm[18].parkingArea }}</p>
                    <a>{{ parkingDataForm[18].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[19].parkingColor"
                  >
                    <p>{{ parkingDataForm[19].parkingArea }}</p>
                    <a>{{ parkingDataForm[19].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[20].parkingColor"
                  >
                    <p>{{ parkingDataForm[20].parkingArea }}</p>
                    <a>{{ parkingDataForm[20].areaNum }}</a>
                  </div>
                </li>
                <li class="a1_2">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[21].parkingColor"
                  >
                    <p>{{ parkingDataForm[21].parkingArea }}</p>
                    <a>{{ parkingDataForm[21].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[22].parkingColor"
                  >
                    <p>{{ parkingDataForm[22].parkingArea }}</p>
                    <a>{{ parkingDataForm[22].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[23].parkingColor"
                  >
                    <p>{{ parkingDataForm[23].parkingArea }}</p>
                    <a>{{ parkingDataForm[23].areaNum }}</a>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
          <!-- A区域2 -->
          <ul class="area_a_main2">
            <!-- A区域 分区2 -->
            <li class="area_a2">
              <!-- 分区2 6小组 -->
              <ul class="a1_group1">
                <li class="a1_1">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[24].parkingColor"
                  >
                    <p>{{ parkingDataForm[24].parkingArea }}</p>
                    <a>{{ parkingDataForm[24].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[25].parkingColor"
                  >
                    <p>{{ parkingDataForm[25].parkingArea }}</p>
                    <a>{{ parkingDataForm[25].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[26].parkingColor"
                  >
                    <p>{{ parkingDataForm[26].parkingArea }}</p>
                    <a>{{ parkingDataForm[26].areaNum }}</a>
                  </div>
                </li>
                <li class="a1_2">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[27].parkingColor"
                  >
                    <p>{{ parkingDataForm[27].parkingArea }}</p>
                    <a>{{ parkingDataForm[27].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[28].parkingColor"
                  >
                    <p>{{ parkingDataForm[28].parkingArea }}</p>
                    <a>{{ parkingDataForm[28].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[29].parkingColor"
                  >
                    <p>{{ parkingDataForm[29].parkingArea }}</p>
                    <a>{{ parkingDataForm[29].areaNum }}</a>
                  </div>
                </li>
              </ul>
              <!-- 分区2 6小组 -->
              <ul class="a1_group2">
                <li class="a1_1">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[30].parkingColor"
                  >
                    <p>{{ parkingDataForm[30].parkingArea }}</p>
                    <a>{{ parkingDataForm[30].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[31].parkingColor"
                  >
                    <p>{{ parkingDataForm[31].parkingArea }}</p>
                    <a>{{ parkingDataForm[31].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[32].parkingColor"
                  >
                    <p>{{ parkingDataForm[32].parkingArea }}</p>
                    <a>{{ parkingDataForm[32].areaNum }}</a>
                  </div>
                </li>
                <li class="a1_2">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[33].parkingColor"
                  >
                    <p>{{ parkingDataForm[33].parkingArea }}</p>
                    <a>{{ parkingDataForm[33].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[34].parkingColor"
                  >
                    <p>{{ parkingDataForm[34].parkingArea }}</p>
                    <a>{{ parkingDataForm[34].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[35].parkingColor"
                  >
                    <p>{{ parkingDataForm[35].parkingArea }}</p>
                    <a>{{ parkingDataForm[35].areaNum }}</a>
                  </div>
                </li>
              </ul>
              <!-- 分区3 6小组 -->
              <ul class="a1_group3">
                <li class="a1_1">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[36].parkingColor"
                  >
                    <p>{{ parkingDataForm[36].parkingArea }}</p>
                    <a>{{ parkingDataForm[36].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[37].parkingColor"
                  >
                    <p>{{ parkingDataForm[37].parkingArea }}</p>
                    <a>{{ parkingDataForm[37].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[38].parkingColor"
                  >
                    <p>{{ parkingDataForm[38].parkingArea }}</p>
                    <a>{{ parkingDataForm[38].areaNum }}</a>
                  </div>
                </li>
                <li class="a1_2">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[39].parkingColor"
                  >
                    <p>{{ parkingDataForm[39].parkingArea }}</p>
                    <a>{{ parkingDataForm[39].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[40].parkingColor"
                  >
                    <p>{{ parkingDataForm[40].parkingArea }}</p>
                    <a>{{ parkingDataForm[40].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[41].parkingColor"
                  >
                    <p>{{ parkingDataForm[41].parkingArea }}</p>
                    <a>{{ parkingDataForm[41].areaNum }}</a>
                  </div>
                </li>
              </ul>
              <!-- 分区4 6小组 -->
              <ul class="a1_group4">
                <li class="a1_1">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[42].parkingColor"
                  >
                    <p>{{ parkingDataForm[42].parkingArea }}</p>
                    <a>{{ parkingDataForm[42].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[43].parkingColor"
                  >
                    <p>{{ parkingDataForm[43].parkingArea }}</p>
                    <a>{{ parkingDataForm[43].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[44].parkingColor"
                  >
                    <p>{{ parkingDataForm[44].parkingArea }}</p>
                    <a>{{ parkingDataForm[44].areaNum }}</a>
                  </div>
                </li>
                <li class="a1_2">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[45].parkingColor"
                  >
                    <p>{{ parkingDataForm[45].parkingArea }}</p>
                    <a>{{ parkingDataForm[45].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[46].parkingColor"
                  >
                    <p>{{ parkingDataForm[46].parkingArea }}</p>
                    <a>{{ parkingDataForm[46].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[47].parkingColor"
                  >
                    <p>{{ parkingDataForm[47].parkingArea }}</p>
                    <a>{{ parkingDataForm[47].areaNum }}</a>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
          <!-- A区域3 -->
          <ul class="area_a_main3">
            <!-- A区域 分区3 -->
            <li class="area_a3">
              <!-- 分区3 6小组 -->
              <ul class="a1_group1">
                <li class="a1_1">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[48].parkingColor"
                  >
                    <p>{{ parkingDataForm[48].parkingArea }}</p>
                    <a>{{ parkingDataForm[48].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[49].parkingColor"
                  >
                    <p>{{ parkingDataForm[49].parkingArea }}</p>
                    <a>{{ parkingDataForm[49].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[50].parkingColor"
                  >
                    <p>{{ parkingDataForm[50].parkingArea }}</p>
                    <a>{{ parkingDataForm[50].areaNum }}</a>
                  </div>
                </li>
                <li class="a1_2">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[51].parkingColor"
                  >
                    <p>{{ parkingDataForm[51].parkingArea }}</p>
                    <a>{{ parkingDataForm[51].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[52].parkingColor"
                  >
                    <p>{{ parkingDataForm[52].parkingArea }}</p>
                    <a>{{ parkingDataForm[52].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[53].parkingColor"
                  >
                    <p>{{ parkingDataForm[53].parkingArea }}</p>
                    <a>{{ parkingDataForm[53].areaNum }}</a>
                  </div>
                </li>
              </ul>
              <!-- 分区2 6小组 -->
              <ul class="a1_group2">
                <li class="a1_1">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[54].parkingColor"
                  >
                    <p>{{ parkingDataForm[54].parkingArea }}</p>
                    <a>{{ parkingDataForm[54].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[55].parkingColor"
                  >
                    <p>{{ parkingDataForm[55].parkingArea }}</p>
                    <a>{{ parkingDataForm[55].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[56].parkingColor"
                  >
                    <p>{{ parkingDataForm[56].parkingArea }}</p>
                    <a>{{ parkingDataForm[56].areaNum }}</a>
                  </div>
                </li>
                <li class="a1_2">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[57].parkingColor"
                  >
                    <p>{{ parkingDataForm[57].parkingArea }}</p>
                    <a>{{ parkingDataForm[57].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[58].parkingColor"
                  >
                    <p>{{ parkingDataForm[58].parkingArea }}</p>
                    <a>{{ parkingDataForm[58].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[59].parkingColor"
                  >
                    <p>{{ parkingDataForm[59].parkingArea }}</p>
                    <a>{{ parkingDataForm[59].areaNum }}</a>
                  </div>
                </li>
              </ul>
              <!-- 分区3 6小组 -->
              <ul class="a1_group3">
                <li class="a1_1">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[60].parkingColor"
                  >
                    <p>{{ parkingDataForm[60].parkingArea }}</p>
                    <a>{{ parkingDataForm[60].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[61].parkingColor"
                  >
                    <p>{{ parkingDataForm[61].parkingArea }}</p>
                    <a>{{ parkingDataForm[61].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[62].parkingColor"
                  >
                    <p>{{ parkingDataForm[62].parkingArea }}</p>
                    <a>{{ parkingDataForm[62].areaNum }}</a>
                  </div>
                </li>
                <li class="a1_2">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[63].parkingColor"
                  >
                    <p>{{ parkingDataForm[63].parkingArea }}</p>
                    <a>{{ parkingDataForm[63].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[64].parkingColor"
                  >
                    <p>{{ parkingDataForm[64].parkingArea }}</p>
                    <a>{{ parkingDataForm[64].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[65].parkingColor"
                  >
                    <p>{{ parkingDataForm[65].parkingArea }}</p>
                    <a>{{ parkingDataForm[65].areaNum }}</a>
                  </div>
                </li>
              </ul>
              <!-- 分区4 6小组 -->
              <ul class="a1_group4">
                <li class="a1_1">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[60].parkingColor"
                  >
                    <p>{{ parkingDataForm[60].parkingArea }}</p>
                    <a>{{ parkingDataForm[60].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[67].parkingColor"
                  >
                    <p>{{ parkingDataForm[67].parkingArea }}</p>
                    <a>{{ parkingDataForm[67].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[68].parkingColor"
                  >
                    <p>{{ parkingDataForm[68].parkingArea }}</p>
                    <a>{{ parkingDataForm[68].areaNum }}</a>
                  </div>
                </li>
                <li class="a1_2">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[69].parkingColor"
                  >
                    <p>{{ parkingDataForm[69].parkingArea }}</p>
                    <a>{{ parkingDataForm[69].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[70].parkingColor"
                  >
                    <p>{{ parkingDataForm[70].parkingArea }}</p>
                    <a>{{ parkingDataForm[70].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[71].parkingColor"
                  >
                    <p>{{ parkingDataForm[71].parkingArea }}</p>
                    <a>{{ parkingDataForm[71].areaNum }}</a>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
          <li></li>
        </ul>
        <!-- 区域B-->
        <ul class="area_B">
          <!-- B区域1 -->
          <ul class="area_a_main1">
            <!-- B区域 分区1 -->
            <li class="area_a1">
              <!-- 分区1 6小组 -->
              <ul class="a1_group1">
                <li class="a1_1">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[72].parkingColor"
                  >
                    <p>{{ parkingDataForm[72].parkingArea }}</p>
                    <a>{{ parkingDataForm[72].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[73].parkingColor"
                  >
                    <p>{{ parkingDataForm[73].parkingArea }}</p>
                    <a>{{ parkingDataForm[73].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[74].parkingColor"
                  >
                    <p>{{ parkingDataForm[74].parkingArea }}</p>
                    <a>{{ parkingDataForm[74].areaNum }}</a>
                  </div>
                </li>
                <li class="a1_2">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[75].parkingColor"
                  >
                    <p>{{ parkingDataForm[75].parkingArea }}</p>
                    <a>{{ parkingDataForm[75].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[76].parkingColor"
                  >
                    <p>{{ parkingDataForm[76].parkingArea }}</p>
                    <a>{{ parkingDataForm[76].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[77].parkingColor"
                  >
                    <p>{{ parkingDataForm[77].parkingArea }}</p>
                    <a>{{ parkingDataForm[77].areaNum }}</a>
                  </div>
                </li>
              </ul>
              <!-- 分区2 6小组 -->
              <ul class="a1_group2">
                <li class="a1_1">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[78].parkingColor"
                  >
                    <p>{{ parkingDataForm[78].parkingArea }}</p>
                    <a>{{ parkingDataForm[78].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[79].parkingColor"
                  >
                    <p>{{ parkingDataForm[79].parkingArea }}</p>
                    <a>{{ parkingDataForm[79].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[80].parkingColor"
                  >
                    <p>{{ parkingDataForm[80].parkingArea }}</p>
                    <a>{{ parkingDataForm[80].areaNum }}</a>
                  </div>
                </li>
                <li class="a1_2">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[81].parkingColor"
                  >
                    <p>{{ parkingDataForm[81].parkingArea }}</p>
                    <a>{{ parkingDataForm[81].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[82].parkingColor"
                  >
                    <p>{{ parkingDataForm[82].parkingArea }}</p>
                    <a>{{ parkingDataForm[82].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[83].parkingColor"
                  >
                    <p>{{ parkingDataForm[83].parkingArea }}</p>
                    <a>{{ parkingDataForm[83].areaNum }}</a>
                  </div>
                </li>
              </ul>
              <!-- 分区3 6小组 -->
              <ul class="a1_group3">
                <li class="a1_1">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[84].parkingColor"
                  >
                    <p>{{ parkingDataForm[84].parkingArea }}</p>
                    <a>{{ parkingDataForm[84].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[85].parkingColor"
                  >
                    <p>{{ parkingDataForm[85].parkingArea }}</p>
                    <a>{{ parkingDataForm[85].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[86].parkingColor"
                  >
                    <p>{{ parkingDataForm[86].parkingArea }}</p>
                    <a>{{ parkingDataForm[86].areaNum }}</a>
                  </div>
                </li>
                <li class="a1_2">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[87].parkingColor"
                  >
                    <p>{{ parkingDataForm[87].parkingArea }}</p>
                    <a>{{ parkingDataForm[87].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[88].parkingColor"
                  >
                    <p>{{ parkingDataForm[88].parkingArea }}</p>
                    <a>{{ parkingDataForm[88].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[89].parkingColor"
                  >
                    <p>{{ parkingDataForm[89].parkingArea }}</p>
                    <a>{{ parkingDataForm[89].areaNum }}</a>
                  </div>
                </li>
              </ul>
              <!-- 分区4 6小组 -->
              <ul class="a1_group4">
                <li class="a1_1">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[90].parkingColor"
                  >
                    <p>{{ parkingDataForm[90].parkingArea }}</p>
                    <a>{{ parkingDataForm[90].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[91].parkingColor"
                  >
                    <p>{{ parkingDataForm[91].parkingArea }}</p>
                    <a>{{ parkingDataForm[91].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[92].parkingColor"
                  >
                    <p>{{ parkingDataForm[92].parkingArea }}</p>
                    <a>{{ parkingDataForm[92].areaNum }}</a>
                  </div>
                </li>
                <li class="a1_2">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[93].parkingColor"
                  >
                    <p>{{ parkingDataForm[93].parkingArea }}</p>
                    <a>{{ parkingDataForm[93].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[94].parkingColor"
                  >
                    <p>{{ parkingDataForm[94].parkingArea }}</p>
                    <a>{{ parkingDataForm[94].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[95].parkingColor"
                  >
                    <p>{{ parkingDataForm[95].parkingArea }}</p>
                    <a>{{ parkingDataForm[95].areaNum }}</a>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
          <!-- A区域2 -->
          <ul class="area_a_main2">
            <!-- A区域 分区2 -->
            <li class="area_a2">
              <!-- 分区2 6小组 -->
              <ul class="a1_group1">
                <li class="a1_1">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[96].parkingColor"
                  >
                    <p>{{ parkingDataForm[96].parkingArea }}</p>
                    <a>{{ parkingDataForm[96].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[97].parkingColor"
                  >
                    <p>{{ parkingDataForm[97].parkingArea }}</p>
                    <a>{{ parkingDataForm[97].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[98].parkingColor"
                  >
                    <p>{{ parkingDataForm[98].parkingArea }}</p>
                    <a>{{ parkingDataForm[98].areaNum }}</a>
                  </div>
                </li>
                <li class="a1_2">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[99].parkingColor"
                  >
                    <p>{{ parkingDataForm[99].parkingArea }}</p>
                    <a>{{ parkingDataForm[99].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[100].parkingColor"
                  >
                    <p>{{ parkingDataForm[100].parkingArea }}</p>
                    <a>{{ parkingDataForm[100].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[101].parkingColor"
                  >
                    <p>{{ parkingDataForm[101].parkingArea }}</p>
                    <a>{{ parkingDataForm[101].areaNum }}</a>
                  </div>
                </li>
              </ul>
              <!-- 分区2 6小组 -->
              <ul class="a1_group2">
                <li class="a1_1">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[102].parkingColor"
                  >
                    <p>{{ parkingDataForm[102].parkingArea }}</p>
                    <a>{{ parkingDataForm[102].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[103].parkingColor"
                  >
                    <p>{{ parkingDataForm[103].parkingArea }}</p>
                    <a>{{ parkingDataForm[103].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[104].parkingColor"
                  >
                    <p>{{ parkingDataForm[104].parkingArea }}</p>
                    <a>{{ parkingDataForm[104].areaNum }}</a>
                  </div>
                </li>
                <li class="a1_2">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[105].parkingColor"
                  >
                    <p>{{ parkingDataForm[105].parkingArea }}</p>
                    <a>{{ parkingDataForm[105].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[106].parkingColor"
                  >
                    <p>{{ parkingDataForm[106].parkingArea }}</p>
                    <a>{{ parkingDataForm[106].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[107].parkingColor"
                  >
                    <p>{{ parkingDataForm[107].parkingArea }}</p>
                    <a>{{ parkingDataForm[107].areaNum }}</a>
                  </div>
                </li>
              </ul>
              <!-- 分区3 6小组 -->
              <ul class="a1_group3">
                <li class="a1_1">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[108].parkingColor"
                  >
                    <p>{{ parkingDataForm[108].parkingArea }}</p>
                    <a>{{ parkingDataForm[108].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[109].parkingColor"
                  >
                    <p>{{ parkingDataForm[109].parkingArea }}</p>
                    <a>{{ parkingDataForm[109].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[110].parkingColor"
                  >
                    <p>{{ parkingDataForm[110].parkingArea }}</p>
                    <a>{{ parkingDataForm[110].areaNum }}</a>
                  </div>
                </li>
                <li class="a1_2">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[111].parkingColor"
                  >
                    <p>{{ parkingDataForm[111].parkingArea }}</p>
                    <a>{{ parkingDataForm[111].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[112].parkingColor"
                  >
                    <p>{{ parkingDataForm[112].parkingArea }}</p>
                    <a>{{ parkingDataForm[112].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[113].parkingColor"
                  >
                    <p>{{ parkingDataForm[113].parkingArea }}</p>
                    <a>{{ parkingDataForm[113].areaNum }}</a>
                  </div>
                </li>
              </ul>
              <!-- 分区4 6小组 -->
              <ul class="a1_group4">
                <li class="a1_1">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[114].parkingColor"
                  >
                    <p>{{ parkingDataForm[114].parkingArea }}</p>
                    <a>{{ parkingDataForm[114].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[115].parkingColor"
                  >
                    <p>{{ parkingDataForm[115].parkingArea }}</p>
                    <a>{{ parkingDataForm[115].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[116].parkingColor"
                  >
                    <p>{{ parkingDataForm[116].parkingArea }}</p>
                    <a>{{ parkingDataForm[116].areaNum }}</a>
                  </div>
                </li>
                <li class="a1_2">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[117].parkingColor"
                  >
                    <p>{{ parkingDataForm[117].parkingArea }}</p>
                    <a>{{ parkingDataForm[117].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[118].parkingColor"
                  >
                    <p>{{ parkingDataForm[118].parkingArea }}</p>
                    <a>{{ parkingDataForm[118].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[119].parkingColor"
                  >
                    <p>{{ parkingDataForm[119].parkingArea }}</p>
                    <a>{{ parkingDataForm[119].areaNum }}</a>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
          <!-- A区域3 -->
          <ul class="area_a_main3">
            <!-- A区域 分区3 -->
            <li class="area_a3">
              <!-- 分区3 6小组 -->
              <ul class="a1_group1">
                <li class="a1_1">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[120].parkingColor"
                  >
                    <p>{{ parkingDataForm[120].parkingArea }}</p>
                    <a>{{ parkingDataForm[120].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[121].parkingColor"
                  >
                    <p>{{ parkingDataForm[121].parkingArea }}</p>
                    <a>{{ parkingDataForm[121].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[122].parkingColor"
                  >
                    <p>{{ parkingDataForm[122].parkingArea }}</p>
                    <a>{{ parkingDataForm[122].areaNum }}</a>
                  </div>
                </li>
                <li class="a1_2">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[123].parkingColor"
                  >
                    <p>{{ parkingDataForm[123].parkingArea }}</p>
                    <a>{{ parkingDataForm[123].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[124].parkingColor"
                  >
                    <p>{{ parkingDataForm[124].parkingArea }}</p>
                    <a>{{ parkingDataForm[124].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[125].parkingColor"
                  >
                    <p>{{ parkingDataForm[125].parkingArea }}</p>
                    <a>{{ parkingDataForm[125].areaNum }}</a>
                  </div>
                </li>
              </ul>
              <!-- 分区2 6小组 -->
              <ul class="a1_group2">
                <li class="a1_1">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[126].parkingColor"
                  >
                    <p>{{ parkingDataForm[126].parkingArea }}</p>
                    <a>{{ parkingDataForm[126].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[127].parkingColor"
                  >
                    <p>{{ parkingDataForm[127].parkingArea }}</p>
                    <a>{{ parkingDataForm[127].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[128].parkingColor"
                  >
                    <p>{{ parkingDataForm[128].parkingArea }}</p>
                    <a>{{ parkingDataForm[128].areaNum }}</a>
                  </div>
                </li>
                <li class="a1_2">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[129].parkingColor"
                  >
                    <p>{{ parkingDataForm[129].parkingArea }}</p>
                    <a>{{ parkingDataForm[129].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[130].parkingColor"
                  >
                    <p>{{ parkingDataForm[130].parkingArea }}</p>
                    <a>{{ parkingDataForm[130].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[131].parkingColor"
                  >
                    <p>{{ parkingDataForm[131].parkingArea }}</p>
                    <a>{{ parkingDataForm[131].areaNum }}</a>
                  </div>
                </li>
              </ul>
              <!-- 分区3 6小组 -->
              <ul class="a1_group3">
                <li class="a1_1">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[132].parkingColor"
                  >
                    <p>{{ parkingDataForm[132].parkingArea }}</p>
                    <a>{{ parkingDataForm[132].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[133].parkingColor"
                  >
                    <p>{{ parkingDataForm[133].parkingArea }}</p>
                    <a>{{ parkingDataForm[133].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[134].parkingColor"
                  >
                    <p>{{ parkingDataForm[134].parkingArea }}</p>
                    <a>{{ parkingDataForm[134].areaNum }}</a>
                  </div>
                </li>
                <li class="a1_2">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[135].parkingColor"
                  >
                    <p>{{ parkingDataForm[135].parkingArea }}</p>
                    <a>{{ parkingDataForm[135].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[136].parkingColor"
                  >
                    <p>{{ parkingDataForm[136].parkingArea }}</p>
                    <a>{{ parkingDataForm[136].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[137].parkingColor"
                  >
                    <p>{{ parkingDataForm[137].parkingArea }}</p>
                    <a>{{ parkingDataForm[137].areaNum }}</a>
                  </div>
                </li>
              </ul>
              <!-- 分区4 6小组 -->
              <ul class="a1_group4">
                <li class="a1_1">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[138].parkingColor"
                  >
                    <p>{{ parkingDataForm[138].parkingArea }}</p>
                    <a>{{ parkingDataForm[138].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[139].parkingColor"
                  >
                    <p>{{ parkingDataForm[139].parkingArea }}</p>
                    <a>{{ parkingDataForm[139].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[140].parkingColor"
                  >
                    <p>{{ parkingDataForm[140].parkingArea }}</p>
                    <a>{{ parkingDataForm[140].areaNum }}</a>
                  </div>
                </li>
                <li class="a1_2">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[141].parkingColor"
                  >
                    <p>{{ parkingDataForm[141].parkingArea }}</p>
                    <a>{{ parkingDataForm[141].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[142].parkingColor"
                  >
                    <p>{{ parkingDataForm[142].parkingArea }}</p>
                    <a>{{ parkingDataForm[142].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[143].parkingColor"
                  >
                    <p>{{ parkingDataForm[143].parkingArea }}</p>
                    <a>{{ parkingDataForm[143].areaNum }}</a>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
          <li></li>
        </ul>
        <!-- 区域C -->
        <ul class="area_C">
          <!-- B区域1 -->
          <ul class="area_a_main1">
            <!-- B区域 分区1 -->
            <li class="area_a1">
              <!-- 分区1 6小组 -->
              <ul class="a1_group1">
                <li class="a1_1">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[144].parkingColor"
                  >
                    <p>{{ parkingDataForm[144].parkingArea }}</p>
                    <a>{{ parkingDataForm[144].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[145].parkingColor"
                  >
                    <p>{{ parkingDataForm[145].parkingArea }}</p>
                    <a>{{ parkingDataForm[145].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[146].parkingColor"
                  >
                    <p>{{ parkingDataForm[146].parkingArea }}</p>
                    <a>{{ parkingDataForm[146].areaNum }}</a>
                  </div>
                </li>
                <li class="a1_2">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[147].parkingColor"
                  >
                    <p>{{ parkingDataForm[147].parkingArea }}</p>
                    <a>{{ parkingDataForm[147].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[148].parkingColor"
                  >
                    <p>{{ parkingDataForm[148].parkingArea }}</p>
                    <a>{{ parkingDataForm[148].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[149].parkingColor"
                  >
                    <p>{{ parkingDataForm[149].parkingArea }}</p>
                    <a>{{ parkingDataForm[149].areaNum }}</a>
                  </div>
                </li>
              </ul>
              <!-- 分区2 6小组 -->
              <ul class="a1_group2">
                <li class="a1_1">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[150].parkingColor"
                  >
                    <p>{{ parkingDataForm[150].parkingArea }}</p>
                    <a>{{ parkingDataForm[150].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[151].parkingColor"
                  >
                    <p>{{ parkingDataForm[151].parkingArea }}</p>
                    <a>{{ parkingDataForm[151].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[152].parkingColor"
                  >
                    <p>{{ parkingDataForm[152].parkingArea }}</p>
                    <a>{{ parkingDataForm[152].areaNum }}</a>
                  </div>
                </li>
                <li class="a1_2">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[153].parkingColor"
                  >
                    <p>{{ parkingDataForm[153].parkingArea }}</p>
                    <a>{{ parkingDataForm[153].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[154].parkingColor"
                  >
                    <p>{{ parkingDataForm[154].parkingArea }}</p>
                    <a>{{ parkingDataForm[154].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[155].parkingColor"
                  >
                    <p>{{ parkingDataForm[155].parkingArea }}</p>
                    <a>{{ parkingDataForm[155].areaNum }}</a>
                  </div>
                </li>
              </ul>
              <!-- 分区3 6小组 -->
              <ul class="a1_group3">
                <li class="a1_1">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[156].parkingColor"
                  >
                    <p>{{ parkingDataForm[156].parkingArea }}</p>
                    <a>{{ parkingDataForm[156].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[157].parkingColor"
                  >
                    <p>{{ parkingDataForm[157].parkingArea }}</p>
                    <a>{{ parkingDataForm[157].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[158].parkingColor"
                  >
                    <p>{{ parkingDataForm[158].parkingArea }}</p>
                    <a>{{ parkingDataForm[158].areaNum }}</a>
                  </div>
                </li>
                <li class="a1_2">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[159].parkingColor"
                  >
                    <p>{{ parkingDataForm[159].parkingArea }}</p>
                    <a>{{ parkingDataForm[159].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[160].parkingColor"
                  >
                    <p>{{ parkingDataForm[160].parkingArea }}</p>
                    <a>{{ parkingDataForm[160].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[161].parkingColor"
                  >
                    <p>{{ parkingDataForm[161].parkingArea }}</p>
                    <a>{{ parkingDataForm[161].areaNum }}</a>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
          <!-- A区域2 -->
          <ul class="area_a_main2">
            <!-- A区域 分区2 -->
            <li class="area_a2">
              <!-- 分区2 6小组 -->
              <ul class="a1_group1">
                <li class="a1_1">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[162].parkingColor"
                  >
                    <p>{{ parkingDataForm[162].parkingArea }}</p>
                    <a>{{ parkingDataForm[162].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[163].parkingColor"
                  >
                    <p>{{ parkingDataForm[163].parkingArea }}</p>
                    <a>{{ parkingDataForm[163].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[164].parkingColor"
                  >
                    <p>{{ parkingDataForm[164].parkingArea }}</p>
                    <a>{{ parkingDataForm[164].areaNum }}</a>
                  </div>
                </li>
                <li class="a1_2">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[165].parkingColor"
                  >
                    <p>{{ parkingDataForm[165].parkingArea }}</p>
                    <a>{{ parkingDataForm[165].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[166].parkingColor"
                  >
                    <p>{{ parkingDataForm[166].parkingArea }}</p>
                    <a>{{ parkingDataForm[166].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[167].parkingColor"
                  >
                    <p>{{ parkingDataForm[167].parkingArea }}</p>
                    <a>{{ parkingDataForm[167].areaNum }}</a>
                  </div>
                </li>
              </ul>
              <!-- 分区2 6小组 -->
              <ul class="a1_group2">
                <li class="a1_1">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[168].parkingColor"
                  >
                    <p>{{ parkingDataForm[168].parkingArea }}</p>
                    <a>{{ parkingDataForm[168].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[169].parkingColor"
                  >
                    <p>{{ parkingDataForm[169].parkingArea }}</p>
                    <a>{{ parkingDataForm[169].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[170].parkingColor"
                  >
                    <p>{{ parkingDataForm[170].parkingArea }}</p>
                    <a>{{ parkingDataForm[170].areaNum }}</a>
                  </div>
                </li>
                <li class="a1_2">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[171].parkingColor"
                  >
                    <p>{{ parkingDataForm[171].parkingArea }}</p>
                    <a>{{ parkingDataForm[171].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[172].parkingColor"
                  >
                    <p>{{ parkingDataForm[172].parkingArea }}</p>
                    <a>{{ parkingDataForm[172].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[173].parkingColor"
                  >
                    <p>{{ parkingDataForm[173].parkingArea }}</p>
                    <a>{{ parkingDataForm[173].areaNum }}</a>
                  </div>
                </li>
              </ul>
              <!-- 分区3 6小组 -->
              <ul class="a1_group3">
                <li class="a1_1">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[174].parkingColor"
                  >
                    <p>{{ parkingDataForm[174].parkingArea }}</p>
                    <a>{{ parkingDataForm[174].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[175].parkingColor"
                  >
                    <p>{{ parkingDataForm[175].parkingArea }}</p>
                    <a>{{ parkingDataForm[175].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[176].parkingColor"
                  >
                    <p>{{ parkingDataForm[176].parkingArea }}</p>
                    <a>{{ parkingDataForm[176].areaNum }}</a>
                  </div>
                </li>
                <li class="a1_2">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[177].parkingColor"
                  >
                    <p>{{ parkingDataForm[177].parkingArea }}</p>
                    <a>{{ parkingDataForm[177].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[178].parkingColor"
                  >
                    <p>{{ parkingDataForm[178].parkingArea }}</p>
                    <a>{{ parkingDataForm[178].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[179].parkingColor"
                  >
                    <p>{{ parkingDataForm[179].parkingArea }}</p>
                    <a>{{ parkingDataForm[179].areaNum }}</a>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
          <!-- A区域3 -->
          <ul class="area_a_main3">
            <!-- A区域 分区3 -->
            <li class="area_a3">
              <!-- 分区3 6小组 -->
              <ul class="a1_group1">
                <li class="a1_1">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[180].parkingColor"
                  >
                    <p>{{ parkingDataForm[180].parkingArea }}</p>
                    <a>{{ parkingDataForm[180].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[181].parkingColor"
                  >
                    <p>{{ parkingDataForm[181].parkingArea }}</p>
                    <a>{{ parkingDataForm[181].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[182].parkingColor"
                  >
                    <p>{{ parkingDataForm[182].parkingArea }}</p>
                    <a>{{ parkingDataForm[182].areaNum }}</a>
                  </div>
                </li>
                <li class="a1_2">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[183].parkingColor"
                  >
                    <p>{{ parkingDataForm[183].parkingArea }}</p>
                    <a>{{ parkingDataForm[183].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[184].parkingColor"
                  >
                    <p>{{ parkingDataForm[184].parkingArea }}</p>
                    <a>{{ parkingDataForm[184].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[185].parkingColor"
                  >
                    <p>{{ parkingDataForm[185].parkingArea }}</p>
                    <a>{{ parkingDataForm[185].areaNum }}</a>
                  </div>
                </li>
              </ul>
              <!-- 分区2 6小组 -->
              <ul class="a1_group2">
                <li class="a1_1">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[186].parkingColor"
                  >
                    <p>{{ parkingDataForm[186].parkingArea }}</p>
                    <a>{{ parkingDataForm[186].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[187].parkingColor"
                  >
                    <p>{{ parkingDataForm[187].parkingArea }}</p>
                    <a>{{ parkingDataForm[187].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[188].parkingColor"
                  >
                    <p>{{ parkingDataForm[188].parkingArea }}</p>
                    <a>{{ parkingDataForm[188].areaNum }}</a>
                  </div>
                </li>
                <li class="a1_2">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[189].parkingColor"
                  >
                    <p>{{ parkingDataForm[189].parkingArea }}</p>
                    <a>{{ parkingDataForm[189].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[190].parkingColor"
                  >
                    <p>{{ parkingDataForm[190].parkingArea }}</p>
                    <a>{{ parkingDataForm[190].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[191].parkingColor"
                  >
                    <p>{{ parkingDataForm[191].parkingArea }}</p>
                    <a>{{ parkingDataForm[191].areaNum }}</a>
                  </div>
                </li>
              </ul>
              <!-- 分区3 6小组 -->
              <ul class="a1_group3">
                <li class="a1_1">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[192].parkingColor"
                  >
                    <p>{{ parkingDataForm[192].parkingArea }}</p>
                    <a>{{ parkingDataForm[192].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[193].parkingColor"
                  >
                    <p>{{ parkingDataForm[193].parkingArea }}</p>
                    <a>{{ parkingDataForm[193].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[194].parkingColor"
                  >
                    <p>{{ parkingDataForm[194].parkingArea }}</p>
                    <a>{{ parkingDataForm[194].areaNum }}</a>
                  </div>
                </li>
                <li class="a1_2">
                  <div
                    class="a1_1p"
                    v-bind:id="parkingDataForm[195].parkingColor"
                  >
                    <p>{{ parkingDataForm[195].parkingArea }}</p>
                    <a>{{ parkingDataForm[195].areaNum }}</a>
                  </div>
                  <div
                    class="a1_2p"
                    v-bind:id="parkingDataForm[196].parkingColor"
                  >
                    <p>{{ parkingDataForm[196].parkingArea }}</p>
                    <a>{{ parkingDataForm[196].areaNum }}</a>
                  </div>
                  <div
                    class="a1_3p"
                    v-bind:id="parkingDataForm[197].parkingColor"
                  >
                    <p>{{ parkingDataForm[197].parkingArea }}</p>
                    <a>{{ parkingDataForm[197].areaNum }}</a>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
          <li></li>
        </ul>
        <img src="../../assets/parking-table.png" alt="停车场平面图" />
      </div>
    </div>

    <!-- 车位情况 -->
    <div class="state_box">
      <div class="parking_state">
        <el-divider></el-divider>
        <el-descriptions
          class="margin-top"
          title="车位分配情况"
          :column="3"
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
              <el-tag type="primary"> 车库总车辆 </el-tag>
            </template>
            192
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
          <el-descriptions-item>
            <template slot="label">
              <el-tag type="primary" effect="dark"> 剩余车位数量 </el-tag>
            </template>
            {{ lastNum }}
          </el-descriptions-item>
        </el-descriptions>
      </div>
    </div>

    <!-- 入库 出库 -->
    <div class="inout">
      <el-button
        type="success"
        round
        style="width: 120px; height: 50px; font-size: 22px"
        @click="enterBridge()"
        >入库
      </el-button>
      <el-divider direction="vertical"></el-divider>
      <el-button
        type="danger"
        round
        style="width: 120px; height: 50px; font-size: 22px"
        @click="deleteBridge()"
        >出库</el-button
      >
    </div>

    <!-- 车牌出库 -->
    <el-dialog title="车牌出库 " :visible.sync="deletVisible" width="24%">
      <el-form ref="form" :model="confForm1">
        <el-form-item>
          <el-input
            v-model="confForm1.carNumber"
            placeholder="请输入车牌号"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="delfSubmit">出库</el-button>
          <el-button @click="confDont1">取 消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 车牌查询 -->
    <el-dialog title="车牌查询 " :visible.sync="editVisible" width="24%">
      <el-form ref="form" :model="confForm">
        <el-form-item>
          <el-input
            v-model="confForm.carNumber"
            placeholder="请输入车牌号进行查询"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="confSubmit">查询</el-button>
          <el-button @click="confDont">取 消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      token: "",
      lastNum: "",
      editVisible: false,
      deletVisible: false,
      imageUrl: "",
      search: "",
      searchData: "",
      tableData: [],
      confForm: {},
      confForm1: {},
      queryInfo: {
        query: "",
        pagenum: 1,
        pagesize: 15,
      },
      userlist: [],
      total: 0,
      addDialogVisible: false,
      editDialogVisible: false,
      parking_coditon: {
        rentedNum: "",
        unrentNum: "",
        tempNum: "",
        unTempNum: "",
      },
      // 加载的车库情况表单数据
      parkingDataForm: [],
    };
  },
  created: function () {
    // 获取后端数据后
    ///this.tableData=数据
    this.confForm = {};
    (this.confForm1 = {}), this.fetch();
    // //  console.log(this.tableData)
    //   this.total = this.tableData.length;
  },
  methods: {
    enterBridge() {
      this.editVisible = true;
    },

    deleteBridge() {
      this.deletVisible = true;
    },
    confDont() {
      this.editVisible = false;
      this.confForm = {};
    },
    confDont1() {
      this.deletVisible = false;
      this.confForm1 = {};
    },
    confSubmit() {
      if (!this.confForm.carNumber) {
        console.log(this.confForm);
        this.$message({
          type: "error",
          message: "请输入内容",
        });
      } else {
        //  console.log(this.confForm.carNumber);
        var carNumber = this.confForm.carNumber;
        // let srch = this.$qs.stringify(form1);
        console.log(carNumber);
        this.editVisible = false;
        // this.$http.get(this.api + "enterDoor",{params:{carNumber:ssss}
        // }).
        this.openLoading();
        this.$http({
          method: "get",
          url: this.api + "enterDoor",
          params: {
            carNumber,
          },
        }).then(
          (res) => {
            //token 刷新
            let thetoken = localStorage.getItem("token");
            localStorage.setItem("token", thetoken);
            console.log(res);
            if (res.data.code == 200) {
              this.openLoading().close();
              this.$message({
                type: "success",
                message: "此车为业主，请放行",
              });
            } else {
              this.openLoading().close();
              this.confForm = "";
              this.$confirm(
                "此车为临时车，是否跳转到临时停车新增页面?",
                "提示",
                {
                  confirmButtonText: "确定",
                  cancelButtonText: "取消",
                  type: "warning",
                }
              ).then(() => {
                this.$router.push("/tempOut");
                this.$message({
                  type: "success",
                  message: "跳转成功!",
                });
                console.log("error");
              });
            }
          },
          (response) => {
            console.log(response);
          }
        );
      }
    },
    delfSubmit() {
      if (!this.confForm1.carNumber) {
        console.log(this.confForm);
        this.$message({
          type: "error",
          message: "请输入内容",
        });
      } else {
        //  console.log(this.confForm1.carNumber);
        var carNumber = this.confForm1.carNumber;
        // let srch = this.$qs.stringify(form1);
        console.log(carNumber);
        // this.$http.get(this.api + "enterDoor",{params:{carNumber:ssss}
        // }).
        this.openLoading();
        this.$http({
          method: "get",
          url: this.api + "exitDoor",
          params: {
            carNumber,
          },
        }).then(
          (res) => {
            this.openLoading().close();
            //token 刷新
            let thetoken = localStorage.getItem("token");
            localStorage.setItem("token", thetoken);
            const box = res.data.data;
            var pDataForm = JSON.parse(box);
            //  console.log(pDataForm);
            this.deletVisible = false;
            {
              this.$confirm(
                "停车收费    " + pDataForm.cost + "元",
                "该车辆为临时车",
                {
                  confirmButtonText: "确定",
                  type: "warning",
                }
              )
                .then(() => {
                  this.$message({
                    type: "success ",
                    message: "车辆" + this.confForm1.carNumber + "已成功出库",
                  });
                })
                .catch(() => {
                  this.$message({
                    type: "info",
                    message: "已取消出库",
                  });
                });
            }
            this.confForm1.carNumber = "";
          },
          (response) => {
            console.log(response.request);
            this.openLoading().close();
            this.$confirm("查无此车", "提示", {
              confirmButtonText: "确定",
              type: "warning",
            }).then(() => {
              this.confForm1.carNumber = "";
            });
          }
        );
      }
    },
    tableRowClassName({ row, goodsCount }) {
      if (row.checkSituation == 2) {
        return "warning-row";
      } else if (row.checkSituation == 1) {
        return "success-row";
      } else {
        return "audit-row";
      }
      return "";
    },
    fetch() {
      this.token = localStorage.getItem("token");
      console.log(this.token);
      this.openLoading();
      // this.$http.get(this.api + "getAll").then((res) => {
      //   this.openLoading().close();
      //   // this.openLoading().close()
      //   //console.log(res.data.data)
      //   console.log(res);
      //   // const box = res.data.data;
      //   var pDataForm = res.data.data;
      //   //console.log(pDataForm.parking_coditon);
      //   //console.log(pDataForm.parkingDataForm);
      //   this.parkingDataForm = pDataForm.parkingDataForm;
      //   // console.log(this.parkingDataForm);
      //   this.lastNum =
      //     192 -
      //     Number(pDataForm.parking_coditon.rentedNum) -
      //     Number(pDataForm.parking_coditon.tempNum);
      //   this.parking_coditon = pDataForm.parking_coditon;
      //   // console.log(this.tableData)
      //   this.searchData = this.tableData;
      // });

      this.$http({
        method: "get",
        url: this.api + "getAll",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      })
        .then(
          (res) => {
            //token 刷新
            let thetoken = localStorage.getItem("token");
            localStorage.setItem("token", thetoken);
            this.openLoading().close();
            const box = res.data.data;
            var pDataForm = JSON.parse(box);
            this.parkingDataForm = pDataForm.parkingDataForm;
            console.log(res.data.data);
            console.log(
              "----------------------------------------",
              this.parkingDataForm.length
            );
            this.lastNum =
              192 -
              Number(pDataForm.parking_coditon.rentedNum) -
              Number(pDataForm.parking_coditon.tempNum);
            this.parking_coditon = pDataForm.parking_coditon;
            // console.log(this.tableData)
            this.searchData = this.tableData;
          },
          (error) => {
            console.log("error");
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

    // 监听页码值改变的事件
    // 监听添加用户表单的关闭事件并清除其中的数据
    // addDialogClosed() {
    //   this.$refs.addFormRef.resetFields();
    // },
    // 点击确认按钮的事件
    // 这个位置有bug，在教程中是直接把数据交到后端，再重新拿数据渲染
    // 但此处加入tableData的数据和addForm绑定死了，分不开，在加入数据了之后
    // 清除表单里的数据还是会把已经加入界面里的删掉，就算不清除表单里的数据，加入表格里的也会每个数据都一模一样
    // 解决方案：Object.assign({}, this.addForm)需要深拷贝
    // addUser() {
    //   this.$refs.addFormRef.validate(valid => {
    //     if (!valid) {
    //       this.$message("请填写完整信息");
    //       this.addDialogClosed();
    //     }
    //   else {
    //       this.addDialogVisible = false;
    //       //this.inintData()
    //       //let company
    //       this.postForm.goodsName = this.addForm.goodsName;
    //         this.postForm.goodsCount = this.addForm.goodsCount;
    //         this.postForm.company = this.addForm.company;
    //            this.addForm = {
    //        goodsName: "",
    //        goodsCount: "",
    //        company: "",
    //       };
    //       var addValue = this.$qs.stringify(this.postForm)
    //       console.log(addValue)
    //     //  this.addDialogClosed();
    //       //向前端发送数据 @rk---
    //       //console.log(this.postForm)
    //    this.$http
    //       .post(this.api + "commodity/add", addValue)
    //       .then(res => {
    //       this.$message({
    //         message: "提交成功",
    //         type: "success"
    //       });
    //           this.fetch();
    //     }).catch(error=>{
    //                     console.log(error);
    //                 });
    //     }
    //   });
    // },
    //向后端申请数据 @rk---
    // {
    //       goodsName: "",
    //       goodsCount: "",
    //       inboundTime: "",
    //       goodsId: "",
    //       company: "",
    //       checkSituation: ""
    //     },
    //修改信息  @rk---
  },
};
</script>

<style lang='less' scoped>
.inout {
  position: absolute;
  top: 870px;
  left: 860px;
}
.parking_state {
  position: absolute;
  z-index: 30;
  width: 600px;
  margin-top: 40px;
}
.state_box {
  height: 270px;
}
.avatar-uploader .el-upload {
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.parking-table {
  width: 100%;
  height: 600px;
}
.parking-box-pic img {
  position: absolute;
  width: 900px;
  height: 600px;
  top: 0;
  left: -20px;
  right: 0;
  bottom: 0;
  margin: auto;
}
.parking-box-pic a {
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  user-select: none;
}
.parking-box-pic p {
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  user-select: none;
}
.parking-box-pic {
  position: absolute;
  height: 600px;
  width: 900px;
  background-color: rgba(0, 0, 0, 0.87);
  padding: 30px;
  border-radius: 1.6%;
  box-shadow: 6px 12px 12px rgba(0, 0, 0, 0.12), 0 12px 12px rgba(0, 0, 0, 0.04);
}
.area_A {
  width: 860px;
  height: 100%;
  margin-left: -13px;
  margin-top: -4px;
  list-style: none;
}
.area_B {
  position: absolute;
  width: 860px;
  height: 100%;
  margin-left: 278.7px;
  margin-top: -586.5px;
  list-style: none;
}
.area_C {
  position: absolute;
  width: 860px;
  height: 100%;
  margin-left: 571.7px;
  margin-top: -586.5px;
  list-style: none;
}
.area_a_main2 {
  position: absolute;
  margin-top: 162px;
}
.area_a_main3 {
  position: absolute;
  margin-top: 294.6px;
}
ul {
  list-style: none;
}
.area_B li p {
  color: white;
  font-size: 1px;
  font-weight: 400;
}
.area_B li a {
  position: relative;
  color: white;
  font-size: 1px;
  font-weight: 400;
  top: -10px;
}
.area_C li p {
  color: white;
  font-size: 1px;
  font-weight: 400;
}
.area_C li a {
  position: relative;
  color: white;
  font-size: 1px;
  font-weight: 400;
  top: -10px;
}
.area_A li p {
  color: white;
  font-size: 1px;
  font-weight: 400;
}
.area_A li a {
  position: relative;
  color: white;
  font-size: 1px;
  font-weight: 400;
  top: -10px;
}
#p_red {
  background-color: rgb(255, 64, 64);
  box-shadow: 0 0 4px rgb(252, 50, 50);
}
#p_green {
  background-color: rgb(2, 187, 42);
  box-shadow: 0 0 4px rgb(61, 216, 61);
}
#p_gray {
  background-color: rgba(90, 90, 90, 0.918);
  box-shadow: 0 0 4px rgb(39, 39, 39);
}
#p_yellow {
  background-color: rgba(228, 214, 26, 0.945);
  box-shadow: 0 0 4px rgb(240, 228, 60);
}
.a1_group1 {
  position: relative;
  margin-top: -30px;
  margin-left: -97px;
}
.a1_group2 {
  position: relative;
  margin-top: -30px;
  margin-left: -38.55px;
}
.a1_group3 {
  position: relative;
  margin-top: -30px;
  margin-left: 19.75px;
}
.a1_group4 {
  position: relative;
  margin-top: -30px;
  margin-left: 78.35px;
}
.a1_1 {
  position: absolute;
  background-color: yellow;
  left: -58px;
  top: 113px;
}
.a1_2 {
  position: absolute;
  background-color: yellow;
  left: -58px;
  top: 149.8px;
}
.a1_1p {
  height: 35px;
  width: 14.5px;
  position: absolute;
  z-index: 20;
  top: 49.5px;
  left: 115.3px;
  opacity: 0.9;
  background-color: green;
  text-align: center;
}
.a1_2p {
  height: 35px;
  width: 14.5px;
  position: absolute;
  z-index: 20;
  top: 49.5px;
  left: 132px;
  opacity: 0.9;
  background-color: green;
  text-align: center;
}
.a1_3p {
  height: 35px;
  width: 14.5px;
  position: absolute;
  z-index: 20;
  top: 49.5px;
  left: 149px;
  opacity: 0.9;
  background-color: green;
  text-align: center;
}
.a1_4p {
  height: 32px;
  width: 16px;
  position: absolute;
  background-color: green;
  z-index: 20;
  top: 49.5px;
  left: 231px;
  opacity: 0.8;
  text-align: center;
}
</style>