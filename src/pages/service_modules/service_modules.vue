<template>
  <view class="YmContent">
    <!-- 头部 -->
    <view class="top_space">
      <view class="top_backgroud"> </view>
    </view>

    <!-- 功能模块 -->
    <view class="functions_module">
      <!-- 项目 -->
      <view class="hospital_services_14">
        <view class="module_name_view"> </view>
        <text decode="true" class="module_name">项目</text>
      </view>

      <!-- 项目列表 -->
      <view class="module_space">
        <view class="function_name">
          <image
            v-on:click="toProjectList()"
            src="/static/modules_img/projects.png"
            mode="scaleToFill"
            border="0"
            class="function_img"
          ></image>
          <text decode="true" class="function_text" v-on:click="toProjectList()"
            >项目列表</text
          >
        </view>

        <!-- 经费列表 -->
        <view class="function_name">
          <image
            v-on:click="toFundList()"
            src="/static/modules_img/funds.png"
            mode="scaleToFill"
            border="0"
            class="function_img"
          ></image>
          <text decode="true" class="function_text" v-on:click="toFundList()"
            >经费列表</text
          >
        </view>
      </view>

      <!-- 成果 -->
      <view class="hospital_services_14">
        <view class="module_name_view"> </view>
        <text decode="true" class="module_name">成果</text>
      </view>

      <!-- 论文成果 -->
      <view class="module_space">
        <view class="function_name">
          <image
            v-on:click="toPaperList()"
            src="/static/modules_img/papers.png"
            mode="scaleToFill"
            border="0"
            class="function_img"
          ></image>
          <text decode="true" class="function_text" v-on:click="toPaperList()"
            >论文成果</text
          >
        </view>

        <!-- 著作成果 -->
        <view class="function_name">
          <image
            v-on:click="toWorkList()"
            src="/static/modules_img/works.png"
            mode="scaleToFill"
            border="0"
            class="function_img"
          ></image>
          <text decode="true" class="function_text" v-on:click="toWorkList()"
            >著作成果</text
          >
        </view>

        <!-- 科研项目成果 -->
        <view class="function_name">
          <image
            v-on:click="toSicenList()"
            src="/static/modules_img/scientific.png"
            mode="scaleToFill"
            border="0"
            class="function_img"
          ></image>
          <text decode="true" class="function_text" v-on:click="toSicenList()"
            >科研成果</text
          >
        </view>

        <!-- 专利产品 -->
        <view class="function_name">
          <image
            v-on:click="toPatentList()"
            src="/static/modules_img/patents.png"
            mode="scaleToFill"
            border="0"
            class="function_img"
          ></image>
          <text decode="true" class="function_text" v-on:click="toPatentList()"
            >专利产品</text
          >
        </view>
      </view>

      <!-- 考核结果 -->
      <view class="hospital_services_14">
        <view class="module_name_view"> </view>
        <text decode="true" class="module_name">考核结果</text>
      </view>
      <view class="module_space">
        <view class="function_name">
          <image
            v-on:click="hospital_services_58_58_click()"
            src="/static/modules_img/project_check_result.png"
            mode="scaleToFill"
            border="0"
            class="function_img"
          ></image>
          <text decode="true" class="function_text">项目考核</text>
        </view>

        <view class="function_name">
          <image
            v-on:click="hospital_services_59_59_click()"
            src="/static/modules_img/papers_check_result.png"
            mode="scaleToFill"
            border="0"
            class="function_img"
          ></image>
          <text decode="true" class="function_text">论文考核</text>
        </view>

        <view class="function_name">
          <image
            v-on:click="hospital_services_59_59_click()"
            src="/static/modules_img/works_check_result.png"
            mode="scaleToFill"
            border="0"
            class="function_img"
          ></image>
          <text decode="true" class="function_text">著作考核</text>
        </view>

        <view class="function_name">
          <image
            v-on:click="hospital_services_59_59_click()"
            src="/static/modules_img/scientific_check_result.png"
            mode="scaleToFill"
            border="0"
            class="function_img"
          ></image>
          <text decode="true" class="function_text">科研考核</text>
        </view>
      </view>

      <view class="ex_module_space">
        <view class="function_name">
          <image
            v-on:click="hospital_services_59_59_click()"
            src="/static/modules_img/patents_check_result.png"
            mode="scaleToFill"
            border="0"
            class="function_img"
          ></image>
          <text decode="true" class="function_text">专利考核</text>
        </view>
      </view>

      <!-- 团队 -->
      <view class="hospital_services_14">
        <view class="module_name_view"> </view>
        <text decode="true" class="module_name">团队</text>
      </view>
      <view class="module_space">
        <view class="function_name">
          <image
            v-on:click="hospital_services_59_59_click()"
            src="/static/modules_img/team.png"
            mode="scaleToFill"
            border="0"
            class="function_img"
          ></image>
          <text decode="true" class="function_text">团队成员</text>
        </view>
      </view>

      <!-- 权限管理 -->
      <view class="hospital_services_14">
        <view class="module_name_view"> </view>
        <text decode="true" class="module_name">权限管理</text>
      </view>
      <view class="module_space">
        <view class="function_name">
          <image
            v-on:click="hospital_services_58_58_click()"
            src="/static/modules_img/authority.png"
            mode="scaleToFill"
            border="0"
            class="function_img"
          ></image>
          <text decode="true" class="function_text">权限</text>
        </view>
      </view>
	  
	  <!-- 日志管理 -->
	  <view class="hospital_services_14">
	    <view class="module_name_view"> </view>
	    <text decode="true" class="module_name">日志管理</text>
	  </view>
	  <view class="module_space">
	    <view class="function_name">
	      <image
	        v-on:click="openLog"
	        src="/static/log/log.png"
	        border="0"
	        class="function_img"
	      ></image>
	      <text decode="true" class="function_text">日志</text>
	    </view>
	  </view>
	  
	  
    </view>
  </view>
</template>

<script>
	
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			openLog() {
				console.log('打开日志');
				uni.navigateTo({
					url: '/pages/log/log',
				})
			}
		}
	}
	
</script>

<style lang="scss" scoped>
@import "./service_modules.scss";
</style>