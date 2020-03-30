import pic from '@/utils/pic'
const { icon1, icon2, icon3, langzh, langen, langtw, langrb, zhsz, jtrz, sfrz, iconchecked, iconcheck } = pic



export default {
  index: {
    register_title: '注册一个BLEX全球站账号 开始交易旅程',
    register_pl: '请输入你的邮箱或手机',
    register: '注册',
    featureTitle: '全球领先的数字资产交易平台',
    featureMsg: '为全球超过130个国家的数百万用户提供安全、可信赖的数字资产交易及资产管理服务',
    featureList: [
      { icon: icon1, title: '安全可信赖', msg: ['5 年数字资产金融服务经验', '专业分布式架构和防 DDOS 攻击系统'] },
      { icon: icon2, title: '全球生态布局', msg: ['多个国家设立本土化交易服务中心', '打造多业务形态为一体的区块链生态圈'] },
      { icon: icon3, title: '用户至上', msg: ['建立先行赔付机制', '设立投资者保护基金'] }
    ],
    featureTitle2: '随时随地 多平台终端交易',
    featureMsg2: '覆盖iOS、Android、Windows多个平台，支持全业务功能',
  },
  footer: {
    p: '©Copyright  2019 BLEX. All rights reserved.',
    dd: [
      {
        dt: "关于我们",
        dd: [{ title: "公司简介", id: 1 }, { title: "商家申请", id: 2 }]
      },
      {
        dt: "用户支持",
        dd: [
          { title: "用户协议", id: 3 },
          { title: "法律声明", id: 4 },
          { title: "隐私条款", id: 5 }
        ]
      },
      {
        dt: "联系我们",
        icon: true
      }
    ]
  },
  nav: {
    btn: ["登陆", "注册", "简体中文"],
    nav: [
      { title: "首页", path: "/" },
      { title: "币币交易", path: "/deal" },
      { title: "合约交易", path: "/deal_c" }
    ],
    nav2: [{ title: "我的资产", path: "/asset" }],
    menus: [
      { icon: langzh, title: "账户设置", path: "/setting" },
      { icon: langen, title: "交易日志", path: "/deallog" },
      { icon: langtw, title: "收款设置", path: "/receive" },
      { icon: langzh, title: "身份认证", path: "/authentication" },
      { icon: langen, title: "退出登陆" }
    ],
    lang: [
      { icon: langzh, lang: "简体中文", key: 'zh' },
      { icon: langen, lang: "English", key: 'en' },
      { icon: langtw, lang: "繁体中文", key: 'tw' },
      { icon: langrb, lang: "日本语", key: 'jp' }
    ]
  },
  // 登录
  login: {
    account: '账号',
    password: '密码',
    login: '登陆',
    forgetpwd: '忘记密码',
    register: '免费注册',
    dl: ['手机登陆', '邮箱登陆'],
    bz: ['还不是BLEX的用户？', '立即注册，在全球领先的数字资产交易平台开始交易。'],
    message: '账号或密码不能为空'
  },
  register: {
    dl: ['手机注册', '邮箱注册'],
    title: '注册',
    country: '国籍',
    account: '账号',
    code_text: '请输入验证码',
    code_btn: '获取验证码',
    code_unit: '秒',
    code_no_data: '账号不能为空',
    password_text: '请输入密码',
    password_again_text: '请再次输入密码',
    pid_text: '邀请码',
    pid_pl: '选填',
    xy: '用户协议',
    xy_no_checked: '请选择协议',
    agree: '我已阅读并同意',
    register_btn: '注册',
    bz: ['国籍信息注册后不可修改，请务必如实选择。', '验证邮件可能会被误判为垃圾邮件，请注意查收。', '请妥善保存您的BLEX账号及登录密码。', '请勿和其他网站使用相同的登录密码。'],
    account_no_data: '账号不能为空',
    code_no_data: '验证码不能为空',
    code_no_equality: '验证码不相等',
    password_no_data: '密码不能为空',
    password_no_equality: '两次密码不相等'
  },
  // 设置密码
  bindmpwd: {
    title: '设置密码',
    account: '账号',
    code_text: '请输入验证码',
    code_btn: '获取验证码',
    code_unit: '秒',
    password_text: '请输入密码',
    password_again_text: '请再次输入密码',
    code_no_data: '验证码不能为空',
    code_no_equality: '验证码不相等',
    password_no_data: '密码不能为空',
    password_no_equality: '两次密码不相等',
    bindmpwd_btn: '确认'
  },
  // 忘记密码
  forgetpwd: {
    title: ['修改密码', '忘记密码'],
    account: '账号',
    code_text: '请输入验证码',
    code_btn: '获取验证码',
    code_unit: '秒',
    password_text: '请输入密码',
    password_again_text: '请再次输入密码',

    phone_no_data: '手机号码不能为空',

    account_no_data: '账号不能为空',
    code_no_data: '验证码不能为空',
    code_no_equality: '验证码不相等',
    password_no_data: '密码不能为空',
    password_no_equality: '两次密码不相等',
    forgetpwd_btn: '确认'
  },
  // 绑定手机号码
  bindphone: {
    title: '绑定手机号码',
    phone_text: '手机号',
  },
  person: {
    more: '加载更多',
    no_more: '没有数据了',
    index_menus: [
      { icon: zhsz, title: "账户设置", path: '/setting' },
      { icon: jtrz, title: "交易日志", path: '/deallog' },
      { icon: sfrz, title: "身份认证", path: '/authentication' }
    ],
    jyzt_td: ['时间', '详情', '金额'],
    sfrz_txt: ['身份认证', '审核中', '已认证', '身份证正面', '身份证反面', '认证'],

    zhsz_txt: ['您的账号安全等级: #', '您的账号安全等级: #，完善更多资料，保证账号安全'],
    zhsz_m: '强',
    zhsz_n: '弱',
    zhsz_p: '不安全',
    zhsz_detailList: [
      // { icon: iconchecked, title: '我的邀请码', value: '', btn: '复制邀请码', class: 'copy', event: 'copy' },
      { icon: iconchecked, title: '绑定手机', value: '', btn: '', btn2: '去绑定', path2: '/bindphone' },
      { icon: iconchecked, title: '登陆密码', value: '互联网账号存在被盗风险，建议您定期更改密码以保护账号安全。', btn: '修改', path: '/forgetpwd?type=changepwd' },
      { icon: iconcheck, title: '交易密码', value: '设置密码', btn: '去设置', path: '/bindmpwd' }
    ],
    sksz_txt: ['收款设置', '保存'],
    sksz_list: [
      { label: "用户名:", pl: "请输入用户名", key: "name" },
      { label: "开户行名称:", pl: "请输入开户行名称", key: "bank_name" },
      { label: "银行卡号:", pl: "请输入银行卡号", key: "bank_number" },
      { label: "支付宝账号:", pl: "请输入支付宝账号", key: "alipay_account" },
      { label: "微信昵称：", pl: "请输入微信昵称", key: "weixin_nickname" },
      { label: "微信账号：", pl: "请输入微信账号", key: "weixin_account" }
    ]
  },
  pasination: {
    first: '首页',
    prev: '上一页',
    next: '下一页',
    last: '尾页',
    no_data: '暂无数据',
  },
  asset: {
    zh_title: '总资产折合：',
    index_title: '资产',
    address_title: '币种',
    address_txt: ['请选择', '提币地址', '请输入内容', '备注', '地址列表'],
    address_btn: ['添加', '保存', '删除', '编辑'],
    address_td: ['币种', '提币地址', '备注', '操作'],
    currency_td: ['币种', '可用', '冻结', '折合'],

    table_title: '总资产：',
    table_address_title: '提币地址管理',
    table_td: ['币种', '可用', '冻结', '折合', '操作'],
    table_btn: ['充币', '提币', '记录', '划转'],

    money_text: ['提币地址', '请选择', '数量', '可用：', '手续费',
      '到账数量', '交易密码'],
    money_btn: '提币',
    money_msg: ['温馨提示', '请勿向上述地址充值任何非USDT资产，否则资产将不可找回。', 'USDT充币仅支持simple send的方法，使用其他方法（send all）的充币暂时无法上账，请您谅解。'],

    recharge_title: '充值地址',
    recharge_btn: ['复制', '二维码', '充值'],
    recharge_text: ['金额', '温馨提示', '请勿向上述地址充值任何非USDT资产，否则资产将不可找回。', 'USDT充币仅支持simple send的方法，使用其他方法（send all）的充币暂时无法上账，请您谅解。'],

    record_title: '财务记录',
    record_td: ['数量', '记录', '时间'],

    transfer_title: '划转',
    transfer_btn: ['全部', '转账'],
    transfer_text: ['从', '至', '请输入划转数量', '可用：']
  },
  text: {
    btn: '返回'
  },
  deal: {
    td_lt: ['币种', '最新价', '涨幅'],
    k_line_txt: ['≈', '', '涨幅', '最高价', '最低价', '24H量'],
    tabListLTitle: ["当前委托", "历史委托"],
    tabListLEntrust: ["买入", "卖出"],
    tabListRTitle: ["限价交易", "市价交易"],
    table_btn: ['撤单'],
    index_td_l: ['时间', '交易对象', '数量', '价格', '操作'],
    index_td_r: ['最新价', '方向', '价格', '数量'],
    index_td_r2: ['全站交易', '时间', '价格', '交易量'],
    table_txt: ['交易已完成', '已撤单'],

    db_1_txt: ['可用', '买入价', '卖出价', '买入量', '卖出量', '交易额', '以市场最优价格买', '以市场最优价格卖'],
    db_2_txt: ['价格', '倍数', '请选择', '手数', '一手等于', '手', '合约市值', '保证金', '以市场最优价格买', '以市场最优价格卖'],
    pathList: ['合约记录', '交易记录'],
    db_btn: ['买入(做多)', '卖出(做空)'],
    tabListLTitle2: ['当前委托'],

    lt_btn: ['一键平仓', '设置止盈止损价', '平仓', '立即提交', '返回'],
    lt_txt: ['风险率：', '持仓总盈亏：'],
    lt_td: ['类型', '开仓价', '当前价', '保证金', '止盈价', '止损价', '开仓时间', '手续费', '隔夜费', '盈亏', '操作'],
    lt_dl: ['设置止盈止损价', '止盈价', '止损价'],

    lt_0_btn: ['撤单'],
    lt_0_td: ['用户名称', '联系方式', '币种', '数量', '当前价', '手续费', '操作'],

    lt_1_btn: ['平仓'],
    lt_1_txt: ['平仓中'],
    lt_1_td: ['类型', '开仓价', '当前价', '保证金', '止盈价', '止损价', '开仓时间', '手续费', '隔夜费', '盈亏', '操作'],
    node_data: '暂无数据',

    lt_3_txt: ['已平仓'],
    lt_3_td: ['类型', '手数', '开仓价', '平仓价', '止盈价', '止损价', '保证金', '可用保证金', '开仓时间', '平仓时间', '手续费',
  '隔夜费', '盈亏', '操作'],
    
    lt_4_txt: ['已撤单']
  }
}
