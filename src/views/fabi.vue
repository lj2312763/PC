<template>
  <div class="fabi">
    <div class="fabi-header">
      <div @click="changeTab('buy')" :class="activeName === 'buy' ? 'active': ''">我要买</div>
      <div @click="changeTab('sell')" :class="activeName === 'sell' ? 'active': ''">我要卖</div>
    </div>
    <div>
      <Buy v-if="activeName === 'buy'" />
      <Sell v-else-if="activeName === 'sell'" />
    </div>
  </div>
</template>

<script>
import Buy from '../components/Fabi/Buy'
import Sell from '../components/Fabi/Sell'
  export default {
    name: 'fabi',
    components: {},
    data() {
      return {
        activeName: 'buy'
      };
    },
    components: {
      Buy,
      Sell
    },
    mounted() {

    },
    computed: {},
    methods: {
      changeTab(activeName) {
        this.activeName = activeName
      }
    }
  };
</script>

<style lang="less">
  @color2: #1c69b9;
  .fabi {
    background: #ffffff;
  }
  .fabi-header{
    display: flex;
    align-items: center;
    padding: 0 15px;
    &>div{
      width: 4rem;
      height: 2rem;
      margin-right: 10px;
      font-size: 1.1rem;
      display: flex;
      align-items: center;
    }
    &>div.active{
      color: @color2;
      transform: scale(1.2);
    }
  }
</style>
