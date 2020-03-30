<template>
  <nav>
    <ul class="pagination" v-show="total > 0">
      <li class="a" :class="{'disabled': current == 1}">
        <a href="javascript:;" @click="setCurrent(1)">{{ first }}</a>
      </li>
      <li class="b" :class="{'disabled': current == 1}">
        <a href="javascript:;" @click="setCurrent(current - 1)">{{ prev }}</a>
      </li>
      <li v-for="(p,i) in grouplist" :class="{'active': current == p.val}" :key="i++">
        <a href="javascript:;" @click="setCurrent(p.val)">{{ p.text }}</a>
      </li>
      <li class="b" :class="{'disabled': current == page}">
        <a href="javascript:;" @click="setCurrent(current + 1)">{{ next }}</a>
      </li>
      <li class="a" :class="{'disabled': current == page}">
        <a href="javascript:;" @click="setCurrent(page)">{{ last }}</a>
      </li>
    </ul>
    <div class="no-data" v-show="!total > 0">{{ no_data }}</div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      first: this.$t('pasination.first'),
      prev: this.$t('pasination.prev'),
      next: this.$t('pasination.next'),
      last: this.$t('pasination.last'),
      no_data: this.$t('pasination.no_data'),
      current: this.currentPage
    };
  },
  props: {
    total: {
      // 数据总条数
      type: Number,
      default: 0
    },
    display: {
      // 每页显示条数
      type: Number,
      default: 6
    },
    currentPage: {
      // 当前页码
      type: Number,
      default: 1
    },
    pagegroup: {
      // 分页条数
      type: Number,
      default: 5,
      coerce: function(v) {
        v = v > 0 ? v : 5;
        return v % 2 === 1 ? v : v + 1;
      }
    }
  },
  computed: {
    page: function() {
      // 总页数
      return Math.ceil(this.total / this.display);
    },
    grouplist: function() {
      // 获取分页页码
      var len = this.page,
        temp = [],
        list = [],
        count = Math.floor(this.pagegroup / 2),
        center = this.current;
      if (len <= this.pagegroup) {
        while (len--) {
          temp.push({ text: this.page - len, val: this.page - len });
        }
        return temp;
      }
      while (len--) {
        temp.push(this.page - len);
      }
      var idx = temp.indexOf(center);
      idx < count && (center = center + count - idx);
      this.current > this.page - count && (center = this.page - count);
      temp = temp.splice(center - count - 1, this.pagegroup);
      do {
        var t = temp.shift();
        list.push({
          text: t,
          val: t
        });
      } while (temp.length);
      // if (this.page > this.pagegroup) {
      //   this.current > count + 1 &&
      //     list.unshift({ text: "...", val: list[0].val - 1 });
      //   this.current < this.page - count &&
      //     list.push({ text: "...", val: list[list.length - 1].val + 1 });
      // }
      return list;
    }
  },
  methods: {
    setCurrent: function(idx) {
      if (this.current != idx && idx > 0 && idx < this.page + 1) {
        this.current = idx;
        this.$emit("pagechange", this.current);
      }
    }
  }
};
</script>

<style lang="scss">
$height: 1.8rem;
.pagination {
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
  margin: .34rem .3rem;
  li {
    height: $height;
    // border-radius: 50%;
    margin: 1rem 0;
    list-style: none;
    &.a{
      width: 2.73rem;
      a{
        width: 100%;
      }
    }
    &.b{
      width: 2.97rem;
      a{
        width: 100%;
      }
    }
    & :hover {
      background: #7a98f7;
      a {
        color: #c7cce6;
      }
    }
    a {
      display: block;
      width: $height;
      height: $height;
      text-align: center;
      line-height: $height;
      font-size: .27rem;
      // border-radius: 50%;
      text-decoration: none;
      color:#c7cce6;
    }
  }
  .active {
    background: #7a98f7;
    a {
      color: #fff;
    }
  }
}
.no-data {
    text-align: center;
    margin: .34rem auto;
}
</style>
