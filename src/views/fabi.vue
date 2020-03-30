<template>
  <div class="fabi">
    <el-tabs type="border-card" v-model="activeName" @tab-click="changeTab" >
      <el-tab-pane label="我要买" name="buy"><Buy /></el-tab-pane>
      <el-tab-pane label="我要卖" name="sell"><Sell /></el-tab-pane>
    </el-tabs>
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
      changeTab(tab, event) {
        console.log(tab.name, event);
        this.activeName = tab.name
      }
    }
  };
</script>

<style lang="scss">
  .fabi .el-tabs--border-card>.el-tabs__content{
    padding: 0;
  }

  .fabi {

  }
</style>
