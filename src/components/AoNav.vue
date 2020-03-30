<template>
  <div class="ao-nav">
    <a class="logo" href="#/" style="margin-right:2rem;">
      <img v-if="logo" :src="logo" />
    </a>
    <ul class="nav">
      <li v-for="(item, index) in nav" :key="index" @click="path(item.path)">{{ item.title }}</li>
    </ul>
    <ul class="fr">
      <li @click="path('/table1')">
        <span>{{ btn[2] }}</span>
      </li>
      <li class="lang" @click="path('/login')">
        <span class="iconfont icon-denglu"></span>
        <span v-if="!phone">{{ btn[0] }}</span>
        <span>{{ phone }}</span>
        <div v-if="token" class="lang-box">
          <div
            class="lang-item"
            v-for="(item, index) in menus"
            :key="index"
            @click.stop="path(item.path)"
          >
            <!-- <span class="iconfont icon-denglu"></span> -->
            <span>{{ item.title }}</span>
          </div>
        </div>
      </li>
      <li v-if="!token" @click="path('/register')">
        <span class="iconfont icon-fill"></span>
        <span>{{ btn[1] }}</span>
      </li>
      <li class="lang">
        <span class="iconfont icon-yuyan"></span>
        <span>{{ default_lang }}</span>
        <span class="iconfont iconfont-d icon-xiangxiajiantoushixin"></span>
        <span class="iconfont iconfont-u icon-xiangshang"></span>
        <div class="lang-box">
          <div class="lang-item" v-for="(item, index) in lang" :key="index" @click="setLang(index)">
            <img :src="item.icon" />
            <span :class="[item.key]">{{ item.lang }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { setLang, getLang } from "@/utils/auth";
// import { getLogo } from "@/api/index";

export default {
  props: {
    aoStyle: {
      type: Object,
      default: () => {
        return {
          background: "#0e1837",
          position: "absolute"
        };
      }
    }
  },
  data() {
    return {
      btn: this.$t("nav.btn"),
      nav: this.$t("nav.nav"),
      nav2: this.$t("nav.nav2"),
      menus: this.$t("nav.menus"),
      lang: this.$t("nav.lang"),
      default_lang: '',
      logo: 'http://jyxt.dazyun.cn/uploads/5e69b840dd81d.png'
    };
  },
  computed: {
    ...mapGetters(["token", "phone"])
  },
  mounted() {
    var key = getLang()
    var obj = this.lang.find(o => o.key == key)
    this.default_lang = obj.lang
    // if (this.token) {
    //   this.nav = this.nav.concat(this.nav2);
    // }
    //this.getLogo()
  },
  methods: {
    getLogo(){
      if(sessionStorage.getItem('web_logo')){
        this.logo = sessionStorage.getItem('web_logo')
      }else{
        getLogo({key: 'web_logo'}).then(res => {
          sessionStorage.setItem('web_logo',res)
          this.logo = res
        })
      }
    },
    setLang(index) {
      var key = this.lang[index].key;
      setLang(key);
      this.$i18n.locale = key;
      location.reload()
    },
    path(path) {
      if (path) {
        if(path=='/deal_c'){
          localStorage.setItem('type',2)
        }
        if(path=='/deal'){
          localStorage.setItem('type',1)
        }
        this.$router.push({ path: path });
      } else {
        this.$store.dispatch("FedLogOut").then(() => {
          location.reload();
        });
      }
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


.ao-nav {
  // position: absolute;
  top: 0;
  left: 0;
  height: $nav-height;
  line-height: $nav-height;
  width: 100%;
  min-width: 1200px;
  padding: 0 1.875rem;
  background: $nav-background-color;


  z-index: 99;
  .logo {
    float: left;
    img {
      height: 2rem;
      width: 9rem;
      margin-top: 0.45rem;
    }
  }
  li {
    float: left;
    height: $nav-height;
    line-height: $nav-height;
    text-align: center;
    font-size: $font-size-small;
    padding: 0 11px;
    display: block;
    cursor: pointer;
    color: $color;
  }
  .nav {
    li:hover {
      color: $hoverColor;
      border-bottom: 2px solid $borderColor;
    }
  }
  .fr {
    float: right;
    li {
      position: relative;
      span {
        color: $color;
        font-size: $font-size-small;
        &.iconfont-u {
          display: none;
        }
      }
      &:hover span {
        color: $hoverColor;
        &.iconfont-d {
          display: none;
        }
        &.iconfont-u {
          display: inline-block;
        }
      }
      &.lang:hover {
        .lang-box {
          display: block;
        }
      }
      .lang-box {
        display: none;
        width: 7.5rem;
        background: #fff;
        position: absolute;
        top: 2.8rem;
        border-radius: 6px;
        z-index: 999;
        // left: -58px;
        .lang-item {
          &:hover {
            background: #eee;
          }
          &:first-child {
            border-top-right-radius: 6px;
            border-top-left-radius: 6px;
          }
          &:last-child {
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
          }
          img {
            width: 1.5rem;
            height: 1.5rem;
            vertical-align: middle;
          }
          span {
            color: #333;
            text-align: center;
            vertical-align: middle;
          }
          cursor: pointer;
          padding: 0 10px;
          height: 3.125rem;
        }
      }
    }
  }
}
</style>
