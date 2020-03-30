<template>
  <el-tabs type="border-card" v-model="activeName" @tab-click="changeTab" class="a">
    <el-tab-pane
      v-for="(item, i) in currency"
      :label="item.name"
      :name="item.name"
      :key="i"><List :unit="item.name" :type="type"/></el-tab-pane>
  </el-tabs>
</template>

<script>
  import List from './List'
  const list  = [
    {name: 'USDT'},
    {name: 'BTC'},
    {name: 'ETH'},
    {name: 'EX900'},
    {name: 'EOS'},
    {name: 'NKC'},
    {name: 'BCH'},
  ]
    export default {
      name: "fabi-tab-list",
      props: [ 'type'],
      components: {
        List
      },
      data() {
        return {
          currency: list,
          activeName: list[0].name
        };
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

<style scoped lang="less">
  .el-tabs--border-card>.el-tabs__content{
    padding: 0;
  }

</style>
