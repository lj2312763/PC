<template>
  <div class="ao-footer">
    <div class="content">
      <dl>
        <dt>
          <img v-if="flogo" :src="flogo" style="margin-top: 0;max-width:400px;" />
        </dt>
      </dl>
      <dl v-for="(item, index) in dl" :key="index">
        <dt>{{ item.dt }}</dt>
        <dd v-for="(i,n) in item.dd" :key="n" @click="path(i.id)">{{ i.title }}</dd>
        <dd v-if="item.icon">
          <div class="img" v-for="(item, index) in icon" :key="index">
            <img v-for="src in item" :key="src" :src="src" />
          </div>
        </dd>
      </dl>
    </div>
    <div class="info">
      <p>{{ p }}</p>
    </div>
  </div>
</template>

<script>
import icon1 from "@/assets/index-footer-icon1.png";
import icon2 from "@/assets/index-footer-icon2.png";
import icon3 from "@/assets/index-footer-icon3.png";
import icon4 from "@/assets/index-footer-icon4.png";
import icon5 from "@/assets/index-footer-icon5.png";
import icon6 from "@/assets/index-footer-icon6.png";
import icon7 from "@/assets/index-footer-icon7.png";
import icon8 from "@/assets/index-footer-icon8.png";
// import { getLogo } from "@/api/index";

export default {
  data() {
    return {
      icon: [[icon1, icon2, icon3, icon4], [icon5, icon6, icon7, icon8]],
      p: this.$t("footer.p"),
      dl: this.$t("footer.dd"),
      flogo: 'http://jyxt.dazyun.cn/uploads/5e69b839c0646.png'
    };
  },
  mounted() {
    // if(sessionStorage.getItem('web_footer_logo')){
    //   this.flogo = sessionStorage.getItem('web_footer_logo')
    // }else{
    //   getLogo({key:'web_footer_logo'}).then(res => {
    //     sessionStorage.setItem('web_footer_logo', res)
    //     this.flogo = res
    //   })
    // }
  },
  methods: {
    path(id) {
      this.$router.push({
        path: "/text",
        query: { id }
      });
    }
  }
};
</script>

<style scoped lang="scss">
$nav-height: 3rem;

$font-size-mini:.75rem; 
$font-size-small: .875rem; 
$font-size:1rem; 
$font-size-large:1.125rem; 
$font-size-big:1.6rem; 


$blue:#2558d9;
$green: #0d8551;
$red: #ef4034;
$aaa: #aaa;
$eee:#eee;
$c3: #333;
$c6: #666;


$color: #dbdde1;
$hoverColor: #dbdde1;
$activeColor: #dbdde1;
$borderColor:#2558d9;

$nav-background-color: #0e1936;
$background-color:#0e1014;

$background:#fff;
$background-blue:#2558d9;
$background-green:#0d8551;

.ao-footer {
  width: 100%;
  background: $background-color;
  padding: 50px 0 0;
  text-align: center;
  .content {
    display: flex;
    width: 1200px;
    margin: 0 auto;
    justify-content: space-between;
    // border-top: 1px solid $borderColor;
    padding-top: 30px;
  }
  dl dt {
    font-size: 1rem;
    color: $color;
    margin-bottom: 10px;
  }
  dl dd {
    font-size: 0.875rem;
    color: $eee;
    line-height: 24px;
    cursor: pointer;
    padding-top: 10px;
  }
  .img img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-right: 10px;
  }
  .info p {
    line-height: 4.375rem;
    // border-top: 1px solid $borderColor;
    height: 4.375rem;
    color: $color;
    margin-top: 1.25rem;
    font-size: 0.75rem;
    text-align: center;
  }
}
</style>
