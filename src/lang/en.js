import pic from '@/utils/pic'
const { icon1, icon2, icon3, langzh, langen, langtw, langrb, zhsz, jtrz, sfrz, iconchecked, iconcheck } = pic


export default {
  currency: {
    bb: 'Exchange',
    bba: 'Exchange Account',
    hy: 'Lever',
    hya: 'Lever Account'
  },
  index: {
    h24: '24h',
    header_title: ['The world is leading', 'blockchain digital currency trading platform'],
    header_msg: 'Safety - Stable - Reliable',
    register_title: 'Register a ' + window.GLOBAL.LANG_TITLE.en + ' Global Station Account and Start the Trading Journey',
    register_pl: 'Please enter your email or mobile phone',
    register: 'Sign Up',
    featureTitle: "Safety Stable Reliable",
    featureMsg: '',
    featureList: [
      { icon: icon1, title: 'Safe and trustworthy', msg: ['5 years experience in digital asset financial services', 'Professional distributed architecture and anti-DDOS attack system'] },
      { icon: icon2, title: 'Global ecological layout', msg: ['Support spot and a variety of derivatives trading, is your stewards into the world of encrypted assets'] },
      { icon: icon3, title: 'Customer first', msg: ['Establish a preemptive payment mechanism', 'Set up an investor protection fund'] }
    ],
    featureTitle2: 'Multi-platform terminal trading anytime, anywhere',
    featureMsg2: 'Covers multiple platforms of iOS, Android and supports full business functions',

    tab: ['mainstream currency', 'ranks'],
    thead: ['name', 'price', 'ranks', 'vol', 'operate'],
    more: 'more >',
    btn: 'screen trading',
    dealsTitle: 'One-stop trading service',
    dealsTab:[
      //{ title: 'Exchange', content: 'Bitcoin transaction is the exchange between digital assets, using USDT as the unit to purchase other currencies '+window.GLOBAL.TITLE+' currency transaction support bitcoin ethereum litecoin and other digital assets real-time transaction', src:'/static/image/deals-1.jpg', path: '' },
      { title: 'Lever', content: 'A digital currency derivative that not only supports the option to buy long or short short contracts to earn returns, but also is simple to operate, and the '+window.GLOBAL.TITLE+' contract, which never expires, has an advanced risk management system and can be leveraged up to 100 times', src:'/static/image/deals-2.jpg', path: '' }
    ]

  },
  footer: {
    p: '©Copyright  '+ window.GLOBAL.DEFAULT_YEAR + window.GLOBAL.LANG_TITLE.en + '. All rights reserved.',
    dd: [
      {
        dt: "About us",
        dd: [{ title: "About us", id: 1 }, { title: "Business application", id: 2 }]
      },
      {
        dt: "User support",
        dd: [
          { title: "User agreement", id: 3 },
          { title: "Legal notice", id: 4 },
          { title: "Privacy policy", id: 5 }
        ]
      },
      {
        dt: "Connect us",
        icon: true
      }
    ]
  },
  market: {
    // tab: ['Optional', 'Lever', 'Exchange'],
    tab: ['Optional', 'Lever'],
    thead: ['currency', 'new price', ' up/down', 'low', 'high','vol', 'operate'],
    nodata: 'no -data'
  },
  nav: {
    btn: ["Login", "Register","assets"],
    nav: [
      { title: "Home", path: "/" },
      { title: "Market", path: "/market" },
      // { title: "Exchange", path: "/deal" },
      { title: "Fiat", path: "/fabi" },
      { title: "Lever", path: "/deal_c" }
    ],
    nav2: [{ title: "Assets", path: "/asset" }],
    menus: [
      { icon: langzh, title: "Account", path: "/setting" },
      // { icon: langen, title: "Transaction log", path: "/deallog" },
      // { icon: langzh, title: "Authentication", path: "/authentication" },
      { icon: langen, title: "Logout" }
    ],
    lang: [
      { icon: langzh, lang: "简体中文", key: 'zh' },
      { icon: langtw, lang: "繁体中文", key: 'tw' },
      { icon: langen, lang: "English", key: 'en' },
      // { icon: langtw, lang: "繁体中文", key: 'tw' },
      // { icon: langrb, lang: "Japanese", key: 'jp' }
    ]
  },
  // 登录
  login: {
    login: 'Login',
    msg: 'Please enter your account number',
    list: ['phone/email', 'password', 'forget password?', 'Login', 'No account, register now'],
    message: 'The account number or password cannot be empty'
  },
  register: {
    dl: ['Mobile', 'Mailbox'],
    title: 'Register',
    country: 'nationality',
    account: 'account',
    code_text: 'Please enter the verification code',
    code_btn: 'send',
    code_unit: 's',
    code_no_data: 'The verification code cannot be empty',
    password_text: 'Please enter a password',
    password_again_text: 'Please enter your password again',
    pid_text: 'Invitation Code',
    pid_pl: 'Certificate',
    invitation_code_no_data: 'Invitation Code cannot be empty',
    xy: 'User Agreement',
    xy_no_checked: 'Please select user agreement',
    agree: 'I have read and agree',
    register_btn: 'Register',
    bz: ['Do not modify the nationality information after registration, please be sure to choose it.', 'Verification emails may be misidentified as spam, please check.', 'Please save your account and login password.', 'Do not use the same login password as other websites.'],
    account_no_data: 'The account cannot be empty',
    code_no_equality: 'Verification codes are not equal',
    password_no_data: 'The password cannot be empty',
    password_no_equality: 'Two passwords are not equal'
  },
  // 设置密码
  bindmpwd: {
    title: 'Set Password',
    account: 'account',
    code_text: 'Please enter the verification code',
    code_btn: 'send',
    code_unit: 's',
    password_text: 'Please enter a password',
    password_again_text: 'Please enter your password again',
    code_no_data: 'The verification code cannot be empty',
    code_no_equality: 'Verification codes are not equal',
    password_no_data: 'The password cannot be empty',
    password_no_equality: 'Two passwords are not equal',
    bindmpwd_btn: 'Confirmed',
    phone_no_data: 'The phone cannot be empty',
  },
  // 忘记密码
  forgetpwd: {
    title: ['Change Password', 'Forget Password'],
    account: 'account',
    code_text: 'send',
    code_btn: 'send',
    code_unit: 's',
    password_text: 'Please enter a password',
    password_again_text: 'Please enter your password again',

    phone_no_data: 'The phone cannot be empty',

    account_no_data: 'The account cannot be empty',
    code_no_data: 'The verification code cannot be empty',
    code_no_equality: 'Verification codes are not equal',
    password_no_data: 'The password cannot be empty',
    password_no_equality: 'Two passwords are not equal',
    forgetpwd_btn: 'Confirmed'
  },
  // 绑定手机号码
  bindphone: {
    title: 'Bind Mobile',
    phone_text: 'mobile',
  },
  person: {
    more: 'more',
    no_more: 'no data',
    index_menus: [
      { icon: zhsz, title: "Account", path: '/setting' },
      // { icon: jtrz, title: "Transaction log", path: '/deallog' },
      { icon: sfrz, title: "Authentication", path: '/authentication' }
    ],
    jyzt_td: ['time', 'detail', 'money'],
    sfrz_txt: ['Authentication', 'Rejected', 'Authenticated', 'the face of ID card', 'the back of ID card', 'authentication'],

    zhsz_txt: ['Your account security level: #', 'Your account security level: #，Complete more information to ensure account security'],
    zhsz_m: 'strong',
    zhsz_n: 'weak',
    zhsz_p: 'unsafe',
    zhsz_detailList: [
      // { icon: iconchecked, title: '我的邀请码', value: '', btn: '复制邀请码', class: 'copy', event: 'copy' },
      { icon: iconchecked, title: 'Bind the phone', value: '', btn: '', btn2: 'bind', path2: '/bindphone' },
      { icon: iconchecked, title: 'login password', value: 'The Internet account is at risk of being stolen. It is recommended that you change', btn: 'Modify', path: '/forgetpwd?type=changepwd' },
      //{ icon: iconcheck, title: 'transaction password', value: 'set password', btn: 'Go to set', path: '/bindmpwd' }
    ],
    sksz_txt: ['收款设置', 'save'],
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
    first: 'first',
    prev: 'prev',
    next: 'next',
    last: 'end',
    no_data: 'no data',
  },
  asset: {
    zh_title: 'Total assets equivalent：',
    index_title: 'Asset',
    address_title: 'currency',
    address_txt: ['Please select', 'address', 'Please enter content', 'message', 'address list'],
    address_btn: ['add', 'save', 'delete', 'edit'],
    address_td: ['currency', 'address', 'message', 'operation'],
    currency_td: ['currency', 'available', 'freeze', 'folding'],

    table_title: 'Total assets：',
    table_address_title: 'Address Manage',
    table_td: ['currency', 'available', 'freeze', 'folding', 'operation'],
    table_btn: ['filling coins', 'ticks', 'record', 'swiping'],

    money_text: ['address', 'Please select', 'number', 'available：', 'service charge',
      'number', 'password'],
    money_btn: 'Ticks',
    money_msg: ['warm tips', 'Do not recharge any non-USDT assets to the above address, otherwise the assets will not be recovered.', 'USDT currency only supports the simple send method, the use of other methods (send all) for the currency can not be accounted for temporarily, please understand.'],

    recharge_title: 'Charge address',
    recharge_btn: ['copy', 'qr deo', 'Charge'],
    recharge_text: ['number', 'warm tips', 'Do not recharge any non-USDT assets to the above address, otherwise the assets will not be recovered.', 'USDT currency only supports the simple send method, the use of other methods (send all) for the currency can not be accounted for temporarily, please understand.', 'certificate', 'credentials to describe'],

    record_title: 'Financial Record ',
    record_td: ['number', 'record', 'time'],

    transfer_title: 'swiping',
    transfer_btn: ['add', 'swiping'],
    transfer_text: ['from', 'to', 'Please enter the number of paddles', 'available：']
  },
  text: {
    btn: 'Return',
    login: 'Please login'
  },
  deal: {
    chooseType: 'delegate type',
    choose: 'please choose',
    balance: 'balacne',
    account: ['account', 'use', 'freeze', 'transfer'],
    dir: ['Buy', 'Sell'],
    dir2: ['Buy', 'Sell'],
    cs: 'optional',
    sc_list: ['Markets', 'Comparison', 'Ups/Downs'],
    sc_h: ['new price', 'low', 'hight', 'vol'],
    td_lt: ['currency', 'last price', 'change'],
    k_line_txt: ['≈', '', 'change', 'high', 'low', '24H vol'],
    tabListLTitle: ['Open orders', 'Order history'],
    tabListLEntrust: ['buy', 'sell'],
    tabListRTitle: ['Limit', 'Market'],
    table_btn: ['cancel'],
    index_td_l: ['time', 'pair', 'number', 'price', 'operation'],
    index_td_r: ['last price', 'direction', 'price', 'number'],
    index_td_r2: ['Market trades', 'time', 'price', 'total'],
    table_txt: ['deal closed', 'canceled'],

    db_1_txt: ['available', 'price', 'price', 'amount', 'amount', 'total', 'Buy it at the best price in the market', 'Sell at the best market price','amount', 'hand'],
    db_2_txt: ['price', 'multiple', 'Please select', 'hands', 'one hands equal', 'hands', 'contract market value', 'margin', 'Buy it at the best price in the market', 'Sell at the best market price'],
    pathList: ['Leverage position', 'Transaction record'],
    db_btn: ['Buy (long)', 'sell (short)'],
    tabListLTitle2: ['Commissioned by the current'],

    lt_btn: ['One button closes', 'Set stop profit and loss price', 'close out', 'save', 'return'],
    lt_txt: ['risk rate：', 'total position profit and loss：'],
    lt_td: ['type', 'position price', 'current price', 'margin', 'profit price', 'loss price', 'open time', 'service charge', 'profit and loss', 'operation'],
    lt_dl: ['Set stop profit and loss price', 'profit price', 'loss price'],

    lt_0_btn: ['cancel'],
    lt_0_td: ['phone/email', 'currency', 'number', 'current price', 'fee', 'operation'],

    lt_1_btn: ['close out'],
    lt_1_txt: ['平仓中'],
    lt_1_td: ['type', 'position price', 'current price', 'margin', 'profit price', 'loss price', 'open time', 'service charge', 'profit and loss', 'operation'],
    node_data: 'no data',

    lt_3_txt: ['closed position', 'blow position'],
    lt_3_td: ['type', 'hands', 'close price', 'close price', 'profit price', 'loss price', 'margin', 'available margin', 'open time', 'close time', 'close fee','profit and loss', 'status'],

    lt_4_txt: ['canceled'],
    cm: ['Issue Time', 'Total circulation', 'Total', 'Total Price', 'Website','White Book','Introduction']
  },
  fabi: {
    title: 'buy',
    title2: 'Buy Fait',
    thead: ['Business', 'Number', 'Limit','Alipay Pay','WeChat Pay','Buy']
  }
}
