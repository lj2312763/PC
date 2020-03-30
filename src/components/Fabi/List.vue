<template>
  <div class="unit-list-container">
    <ul class="unit-list">
      <li
        v-for="(item, i) in list"
        :key="i"
      >
        <div class="row">
          <span class="name"><el-avatar size="small" :src="item.img"></el-avatar><span
            class="name-text">{{item.name}}</span></span>
        </div>
        <div class="row">
          <span class="left"><span class="label">数量</span><span>{{item.count}}</span></span><span class="">单价</span>
        </div>
        <div class="row">
          <span class="left"><span class="label">限额</span><span>{{item.min}} {{unit}}-{{item.max}} {{unit}}</span></span><span class="right">{{item.price}}  {{unit}}</span>
        </div>
        <div class="row">
          <span class="img"><img v-for="(el, idx) in (item.alipay || [])" :key="idx" :src="alipayImgObj[el]"
                                 alt=""></span>
          <el-button type="primary" size="mini" @click="operationClick(item)">{{operationType}}</el-button>
        </div>
      </li>
    </ul>
    <Drawer  v-if="drawerVisible" :drawerVisible="drawerVisible" @onClose="onClose" :data="temp" :unit="unit" :type="type"/>
  </div>
</template>

<script>
  import weChat from '@/assets/fabi/weChat.png'
  import bankCard from '@/assets/fabi/bankCard.png'
  import alipay from '@/assets/fabi/alipay.png'
  import Drawer from './Drawer'

  const alipayImgObj = {
    weChat,
    bankCard,
    alipay
  }
  const list = [
    {
      img: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      count: '10000',
      name: '黄芳',
      min: '700',
      max: '1000',
      price: '7.000000',
      alipay: ['weChat', 'bankCard', 'alipay']
    },
    {
      img: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      count: '10000',
      name: '黄芳',
      min: '700',
      max: '1000',
      price: '7',
      alipay: ['weChat', 'bankCard', 'alipay']
    },
    {
      img: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      count: '10000',
      name: '黄芳',
      min: '700',
      max: '1000',
      price: '7',
      alipay: ['weChat', 'bankCard', 'alipay']
    },
    {
      img: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      count: '10000',
      name: '黄芳',
      min: '700',
      max: '1000',
      price: '7',
      alipay: ['weChat', 'bankCard', 'alipay']
    },
    {
      img: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      count: '10000',
      name: '黄芳',
      min: '700',
      max: '1000',
      price: '7',
      alipay: ['weChat', 'bankCard', 'alipay']
    },
  ]
  export default {
    name: "list",
    props: ['unit', 'type'],
    components:{
      Drawer
    },
    data() {
      return {
        list,
        temp: {},
        tabs: 'price',
        drawerVisible: false,
        alipayImgObj,
      }
    },
    computed: {
      operationType() {
        return this.type === 'buy' ? '购买' : '出售'
      },
    },
    methods: {
      operationClick(item) {
        console.log('我点击了' + this.operationType)
        this.drawerVisible = true
        this.temp = item
      },
      onClose() {
        this.drawerVisible = false
      },
      tabsChange(tabs) {
        this.tabs = tabs
      },

    }
  }
</script>

<style scoped lang="less">
  @color: #8a8a8a;
  @color2: #1c69b9;
  .el-button.el-button--primary {
    background: @color2;
  }

  .el-button.el-button--primary span {
    font-size: 0.6rem;
  }
  .unit-list-container{
    overflow: hidden;
  }
  .unit-list {
    padding: 0 !important;
    color: @color;
    height: calc(~'100vh - 2rem - 3rem');
    width: calc(~'100vw + 15px');
    padding-right: 15px;
    overflow-x: hidden;
    overflow-y: scroll;
    & > li {
      border-bottom: 1px solid #f5f7fa;
      padding: 6px 15px;
      font-size: 1rem;
    }

    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 4px 0;
      .name {
        display: flex;
        align-items: center;
        .name-text {
          margin-left: 10px;
        }
      }
      .left {
        display: flex;
        .label {
          width: 2rem;
          margin-right: 10px;
        }
      }
      .right {
        color: @color2;
      }
      .img img {
        width: 1.5rem;
      }
    }
  }
</style>
