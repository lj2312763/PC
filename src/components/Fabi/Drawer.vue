<template>
  <div>
    <el-drawer
      size="45%"
      :visible="true"
      direction="btt"
      :show-close="false"
      :withHeader="false"
      custom-class="a"
      :before-close="close"
    >
      <div class="drawer-title">
        {{operationType}}{{unit}}
        <div class="drawer-title-content">
          <span>单价</span>
          <span class="price">{{data.price}} {{unit}}</span>
        </div>
      </div>
      <div class="drawer-content">
        <div class="drawer-content-top">
          <div :class="tabs === 'price' ? ' active' : ''" @click="tabsChange('price')">按价格{{operationType}}</div>
          <div :class="tabs === 'count' ? ' active' : ''" @click="tabsChange('count')">按数量{{operationType}}</div>
        </div>
        <div class="input-box">
          <el-input
            type="text"
            :placeholder="placeholder"
            v-model="input"
            maxlength="10">
            <div class="input-suffix"
                 slot="suffix"
                 @click="handleIconClick">
              <span>全部买入</span>
            </div>
          </el-input>
        </div>
        <div class="row">
          <span class="left"><span
            class="label">限额</span><span>{{data.min}} {{unit}}-{{data.max}} {{unit}}</span></span>
        </div>
        <div class="row total">
          <span class="left"><span class="label">交易总额</span></span><span class="right">{{totalMoney}} {{unit}}</span>
        </div>
        <div class="row operation">
          <el-button type="primary" size="mini" @click="onCancel">{{cancelText}}</el-button>
          <el-button type="primary" size="mini" @click="orderClick">下单</el-button>
        </div>
      </div>
    </el-drawer>
    <el-dialog
      :visible.sync="dialogVisible"
      :append-to-body="true"
      :close-on-click-modal="false"
      width="60%"
      top="15vh"
      :before-close="handleClose">
      <div class="qr-box">
        <span>交易二维码</span>
        <img :src="QRImg" alt="">
      </div>
      <span class="voucher-title">上传交易凭证</span>
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary">提交</el-button>
      </span>
    </el-dialog>
  </div>

</template>
<script>
  import QRImg from '@/assets/fabi/QR.png'

  const TIME = 60;
  // 允许上传图片类型
  const IMG_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/bmp'];
  export default {
    name: "customDrawer",
    props: ['unit', 'type', 'data', 'drawerVisible'],
    data() {
      return {
        tabs: 'price',
        dialogVisible: false,
        imageUrl: '',
        QRImg: '',
        time: TIME, // 倒计时关闭下单界面
        input: '', // 输入框的输入数量或者金额
        total: '', // 交易总额
      }
    },
    computed: {
      totalMoney() {
        // 按数量时
        if (this.tabs === 'count') {
          return parseFloat(this.data.price || 0) * parseFloat(this.input || 0)
        } else {// 按金额时
          return parseFloat(this.input || 0)
        }
      },
      operationType() {
        return this.type === 'buy' ? '购买' : '出售'
      },
      placeholder() {
        // 按数量时
        if (this.tabs === 'count') {
          if (this.type === 'buy') {
            return '购买数量'
          }
          // 按金额出售
          return '出售数量'
        } else {// 按金额时
          // 按金额购买
          if (this.type === 'buy') {
            return '购买金额'
          }
          // 按金额出售
          return '出售金额'
        }
      },
      cancelText() {
        // 已经点击了下单
        if (this.dialogVisible) {
          return '取消'
        }
        return this.time + '秒自动取消'
      }
    },
    mounted() {
      if (this.timer) {
        clearInterval(this.timer)
      }
      this.countDown()
    },
    methods: {
      close() {
        console.log('ppp')
        this.$emit('onClose')
      },
      tabsChange(tabs) {
        this.input = ''
        this.tabs = tabs
        this.start()
      },
      // 重新开始倒计时
      start() {
        clearInterval(this.timer)
        this.time = TIME
        this.countDown()
      },
      handleIconClick() {

      },
      // 倒计时
      countDown() {
        this.timer = setInterval(() => {
          this.time -= 1
          if (this.time <= 0) {
            this.$emit('onClose')
            clearInterval(this.timer)
          }
        }, 1000)
      },
      // 下单
      orderClick() {
        clearInterval(this.timer);
        this.getQR()
        this.dialogVisible = true
      },
      onCancel() {
        this.$emit('onClose')
      },
      // 关闭支付弹窗
      handleClose() {
        this.dialogVisible = false
        this.start()
      },
      // 获取支付二维码
      getQR() {
        this.QRImg = QRImg
        console.log(QRImg)
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = IMG_TYPES.includes(file.type);
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          const str = IMG_TYPES.map(e => e.split('/')[1]).join('、')
          this.$message.error('上传证明图片只能是' + str + '格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传证明图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    },
    beforeUpdate() {
      console.log('pp')
    }
  }
</script>

<style scoped lang="less">
  @color: #8a8a8a;
  @color2: #1c69b9;
  .el-button.el-button--primary {
    background: @color2;
    flex: 1;
  }

  .el-button.el-button--primary span {
    font-size: 0.6rem;
  }

  .el-input__suffix {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .price {
    color: @color2;
  }

  .input-suffix {
    display: flex;
    align-items: center;
    padding: 4px 0;
    height: 100%;
    > span {
      border-left: 1px solid #DCDFE6;
      padding: 0 8px;
    }
  }

  .drawer-title {
    font-size: 1.2rem;
    padding: 10px 10px 0;
    background: #eaeaea;
  }

  .drawer-title-content {
    padding: 10px 0;

  }

  .drawer-content {
    padding: 10px;
  }

  .drawer-content-top {
    display: flex;
    & > {
      padding-bottom: 8px;
      :first-child {
        margin-right: 6px;
      }
    }
    & > .active {
      color: @color2;
      border-bottom: 2px solid @color2;
    }
  }

  .row {
    padding: 8px 0;
    .label {
      margin-right: 10px;
    }
    .right {
      color: @color2;
    }
  }

  .row.total {
    display: flex;
    justify-content: space-between;
    padding-right: 20px;
  }

  .row.operation {
    display: flex;
  }

  .qr-box {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: red;
    img {
      width: 160px;
    }
  }

  .dialog-footer {
    display: flex;
  }

  .voucher-title {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: red;
  }
</style>
