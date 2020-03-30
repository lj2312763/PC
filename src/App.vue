<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
html{
  width: 100%;
  background-color: #0a142e;
}
*{
  margin: 0; 
  padding: 0;
  //font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-family: PingFangSC-Regular,\\5FAE\8F6F\96C5\9ED1,sans-serif;
  font-size: 1rem;
  outline: none;
  box-sizing: border-box;
}
::-webkit-scrollbar {
    width: 6px;
    background-color: #161d28;
}
::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: #222639;
}
li{
  list-style: none;
}

input:-webkit-autofill , textarea:-webkit-autofill, select:-webkit-autofill {
	-webkit-text-fill-color: #666 !important;
	-webkit-box-shadow: 0 0 0px 1000px transparent  inset !important;
    background-color:transparent;
    background-image: none;
     transition: background-color 50000s ease-in-out 0s; //背景色透明  生效时长  过渡效果  启用时延迟的时间
}

input{
  border: 0;
  outline: 0;
  border-radius: 2px;
  background: transparent;
}
a{
  text-decoration: none;
}
#app {

}
.el-scrollbar__wrap{
  overflow:hidden;
}

.green{
  color: #4db872;
}
.red{
color: #ee6560;
}
.aaa{
  color:#aaa;
}
.eee{
  color:#eee;
}
.blue{
  color:#2558d9;
}
.el-slider__button{
  border-color: #4db872;
}
.el-slider__bar{
  background: #4db872;
}
</style>
