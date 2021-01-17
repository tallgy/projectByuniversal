<template>
  <view class="my-unit">

    <view class="unit-head">
      <view class="fr color-999">{{ data.item}}</view>
    </view>

    <view class="unit-body">
      <text v-for="(item, index) in unitModel1" :key="index"
        >{{ item.label }}：<text v-if="item.isMoney" :class="item.class"
          >￥ </text
        ><text :class="item.class">暂无</text
        ><text v-if="item.isMoney" :class="item.class"> 元</text></text
      >
    </view>

    <view class="unit-foot">
      <!-- <text class="color-999">20190212</text> -->
      <button class="fr btn" type="primary" @click="toReturn">返回</button>
    </view>
	
  </view>
</template>
	
<script>
import List from "./details.js";
export default {
  data() {
    return {
      unitModel1: [],
      data: {},
      fun_id:"",
    };
  },
  methods: {
    toReturn() {
      uni.navigateBack();
    },

    onLoad(options) {
      this.data= JSON.parse(options.detailDate);
      this.fun_id=this.data.fun_id;
      this.unitModel1=List.List.get(this.data.fun_id);
      console.log(this.data.fun_id);
      // console.log(this.fun_id);
      console.log(List.List.get(this.data.fun_id));
    },
  },
  computed: {},
  created() {},
};
</script>
<style lang='scss'>
.my-unit {
  margin: 20upx 0;
  background-color: #ffffff;
  font-size: 28upx;
  transform: all 1s;

  .unit-head {
    padding: 20upx;
    height: 80upx;
    box-sizing: border-box;
    border-bottom: 2upx solid #f5f5f5;
  }
  .unit-body {
    padding: 20upx;
    display: flex;
    flex-wrap: wrap;
    height: 300upx;

    text {
      width: 50%;
      font-size: 28upx;
      line-height: 55upx;
    }
  }
  .unit-foot {
    height: 88upx;
    padding: 0 20upx;
    border-top: 2upx solid #f5f5f5;
    border-bottom: none;
    line-height: 88upx;

    .btn {
      height: 60upx;
      font-size: 28upx;
      line-height: 60upx;
      margin: 14upx 0;
    }
  }
}
</style>