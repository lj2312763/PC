<template>
  <div>
    <div class="custom-tabs-container">
      <ul v-model="activeName" class="custom-tabs">
        <li
          :class="activeName === item.name ? 'active' : ''"
          v-for="(item, i) in currency"
          :label="item.name"
          :name="item.name"
          @click="changeTab(item)"
          :key="i"><div>{{item.name}}</div>
        </li>
      </ul>
    </div>

    <div>
      <List :unit="activeName" :type="type"/>
    </div>
  </div>

</template>

<script>
    import List from './List'

    const list = [
        {name: 'USDT'},
        {name: 'BTC'},
        {name: 'ETH'},
        {name: 'EX900'},
        {name: 'EOS'},
        {name: 'NKC'},
        {name: 'BCH1'},
        {name: 'BCH2'},
        {name: 'BCH3'},
    ]
    export default {
        name: "fabi-tab-list",
        props: ['type'],
        components: {
            List
        },
        data() {
            return {
                currency: list,
                item: {},
                activeName: list[0].name
            };
        },
        mounted() {

        },
        computed: {},
        methods: {
            changeTab(item) {
                this.activeName = item.name
            }
        }
    };
</script>

<style lang="less">
  @color2: #1c69b9;
  @color3: #DCDFE6;
  @item-height: 3rem;
  .custom-tabs-container{
    height: @item-height;
    overflow: hidden;
    padding: 0 9px;
  }
  .custom-tabs {
    display: flex;
    overflow-x: scroll;
    height: 4.1rem;
    li {
      width: 5rem;
      height: @item-height;
      padding: 4px 6px;
      cursor: pointer;
      padding-bottom: 0;
      border-bottom: 1px solid @color3;
      div{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
      }
    }
    li.active{
      color: @color2;
      div{
        border-bottom: 2px solid @color2;
      }
    }
  }

</style>
