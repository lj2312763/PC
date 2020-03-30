
import pic from '@/utils/pic'
const { icon1, icon2, icon3, langzh, langen, langtw, langrb, zhsz, jtrz, sfrz, iconchecked, iconcheck } = pic

export default {
  currency: {
    bb: '幣幣交易',
    bba: '幣幣賬戶',
    hy: '合約交易',
    hya: '合約賬戶'
  },
  index: {
    h24: '24H量',
    header_title: ['世界領先的', '區塊鏈數字貨幣交易平臺'],
    header_msg: '安全 - 穩定 - 可信',
    register_title: '註冊一個' + window.GLOBAL.LANG_TITLE.tw + '全球站賬號 開始交易旅程',
    register_pl: '請輸入你的郵箱或手機',
    register: '註冊',
    featureTitle: '安全 穩定 可靠',
    featureMsg: '',
    featureList: [
      { icon: icon1, title: '安全的錢包技術', msg: ['冷、熱錢包技術由全球頂級的安全團隊開發，從未發生', '過丟幣事件。'] },
      { icon: icon2, title: '豐富的加密資產業務', msg: ['支持現貨和多種衍生品交易等，是您的進入加密資產世界的貼身管家。'] },
      { icon: icon3, title: '分布在世界各地的客戶', msg: ['為全球超過130個國家或地區用戶，提供加密資產的全', '方位服務。'] }
    ],
    featureTitle2: '隨時隨地 多平臺終端交易',
    featureMsg2: '覆蓋iOS、Android多個平臺，支持全業務功能',
    tab: ['主流幣', '24漲幅榜'],
    thead: ['名稱', '價格', '漲幅榜', '24H成交量', '操作'],
    more: '查看更多 >',
    btn: '全屏交易',
    dealsTitle: '一站式交易服務',
    dealsTab:[
     // { title: '幣幣交易', content: '幣幣交易是針對數字資產之間的兌換，以USDT作為計價單位去購買其他幣種 。'+window.GLOBAL.TITLE+'幣幣交易支持比特幣、以太坊、萊特幣等數字資產實時交易。', src:'/static/image/deals-1.jpg', path: '' },
      { title: '合約交易', content: '壹種數字貨幣的金融衍生品，不僅支持選擇買多或賣空合約來賺取收益，而且操作簡單，永不到期。'+window.GLOBAL.TITLE+'合約具有先進的風險管理系統，杠桿最高可達100倍。', src:'/static/image/deals-2.jpg', path: '' }
    ]
  },
  market: {
    //tab: ['自選', '合約', '幣幣'],
    tab: ['自選', '合約'],
    thead: ['幣種', '最新價', '24H漲跌幅', '24H最低', '24H最高','24H成交量', '操作'],
    nodata: '暫無數據'
  },
  footer: {
    p: '©Copyright  ' + window.GLOBAL.DEFAULT_YEAR + window.GLOBAL.LANG_TITLE.tw + '. All rights reserved.',
    dd: [
      {
        dt: "關於我們",
        dd: [{ title: "公司簡介", id: 1 }, { title: "商家申請", id: 2 }]
      },
      {
        dt: "用戶支持",
        dd: [
          { title: "用戶協議", id: 3 },
          { title: "法律聲明", id: 4 },
          { title: "隱私條款", id: 5 }
        ]
      },
      {
        dt: "聯系我們",
        icon: true
      }
    ]
  },
  nav: {
    btn: ["登陸", "註冊", "資產管理"],
    nav: [
      { title: "首頁", path: "/" },
      { title: "行情", path: "/market" },
      // { title: "幣幣交易", path: "/deal" },
      { title: "法幣交易", path: "/fabi" },
      { title: "合約交易", path: "/deal_c" }
    ],
    nav2: [{ title: "我的資產", path: "/asset" }],
    menus: [
      { icon: langzh, title: "賬戶設置", path: "/setting" },
      // { icon: langen, title: "交易日誌", path: "/deallog" },
      //{ icon: langzh, title: "身份認證", path: "/authentication" },
      { icon: langen, title: "退出登陸" }
    ],
    lang: [
      { icon: langzh, lang: "简体中文", key: 'zh' },
      { icon: langtw, lang: "繁体中文", key: 'tw' },
      { icon: langen, lang: "English", key: 'en' },
      // { icon: langtw, lang: "繁體中文", key: 'tw' },
      // { icon: langrb, lang: "日本語", key: 'jp' }
    ]
  },
  // 登錄
  login: {
    login: '登陸',
    msg: '請輸入您已註冊的賬號',
    list: ['手機/郵箱', '密碼', '忘記密碼?', '登陸', '沒有賬號，立即註冊'],
    message: '賬號或密碼不能為空'
  },
  register: {
    dl: ['手機註冊', '郵箱註冊'],
    title: '註冊',
    country: '國籍',
    account: '賬號',
    code_text: '請輸入驗證碼',
    code_btn: '獲取驗證碼',
    code_unit: '秒',
    code_no_data: '驗證碼不能為空',
    password_text: '請輸入密碼',
    password_again_text: '請再次輸入密碼',
    pid_text: '邀請碼',
    pid_pl: '选填',
    invitation_code_no_data: '邀請碼必填',
    xy: '用戶協議',
    xy_no_checked: '請選擇協議',
    agree: '我已閱讀並同意',
    register_btn: '註冊',
    bz: ['國籍信息註冊後不可修改，請務必如實選擇。', '驗證郵件可能會被誤判為垃圾郵件，請註意查收。', '請妥善保存您的' + window.GLOBAL.LANG_TITLE.tw + '賬號及登錄密碼。', '請勿和其他網站使用相同的登錄密碼。'],
    account_no_data: '賬號不能為空',
    code_no_equality: '驗證碼不相等',
    password_no_data: '密碼不能為空',
    password_no_equality: '兩次密碼不相等'
  },
  // 設置密碼
  bindmpwd: {
    title: '設置密碼',
    account: '賬號',
    code_text: '請輸入驗證碼',
    code_btn: '獲取驗證碼',
    code_unit: '秒',
    password_text: '請輸入密碼',
    password_again_text: '請再次輸入密碼',
    code_no_data: '驗證碼不能為空',
    code_no_equality: '驗證碼不相等',
    password_no_data: '密碼不能為空',
    password_no_equality: '兩次密碼不相等',
    bindmpwd_btn: '確認',
    phone_no_data: '手機號碼不能為空',
  },
  // 忘記密碼
  forgetpwd: {
    title: ['修改密碼', '忘記密碼'],
    account: '賬號',
    code_text: '請輸入驗證碼',
    code_btn: '獲取驗證碼',
    code_unit: '秒',
    password_text: '請輸入密碼',
    password_again_text: '請再次輸入密碼',

    phone_no_data: '手機號碼不能為空',

    account_no_data: '賬號不能為空',
    code_no_data: '驗證碼不能為空',
    code_no_equality: '驗證碼不相等',
    password_no_data: '密碼不能為空',
    password_no_equality: '兩次密碼不相等',
    forgetpwd_btn: '確認'
  },
  // 綁定手機號碼
  bindphone: {
    title: '綁定手機號碼',
    phone_text: '手機號',
  },
  person: {
    more: '加載更多',
    no_more: '沒有數據了',
    index_menus: [
      { icon: zhsz, title: "賬戶設置", path: '/setting' },
      // { icon: jtrz, title: "交易日誌", path: '/deallog' },
     // { icon: sfrz, title: "身份認證", path: '/authentication' }
    ],
    jyzt_td: ['時間', '詳情', '金額'],
    //sfrz_txt: ['身份認證', '審核中', '已認證', '身份證正面', '身份證反面', '認證'],

    zhsz_txt: ['您的賬號安全等級: #', '您的賬號安全等級: #，完善更多資料，保證賬號安全'],
    zhsz_m: '強',
    zhsz_n: '弱',
    zhsz_p: '不安全',
    zhsz_detailList: [
      // { icon: iconchecked, title: '我的邀請碼', value: '', btn: '復制邀請碼', class: 'copy', event: 'copy' },
      { icon: iconchecked, title: '綁定手機', value: '', btn: '', btn2: '去綁定', path2: '/bindphone' },
      { icon: iconchecked, title: '登陸密碼', value: '互聯網賬號存在被盜風險，建議您定期更改密碼以保護賬號安全。', btn: '修改', path: '/forgetpwd?type=changepwd' },
      //{ icon: iconcheck, title: '交易密碼', value: '設置密碼', btn: '去設置', path: '/bindmpwd' }
    ],
    sksz_txt: ['收款設置', '保存'],
    sksz_list: [
      { label: "用戶名:", pl: "請輸入用戶名", key: "name" },
      { label: "開戶行名稱:", pl: "請輸入開戶行名稱", key: "bank_name" },
      { label: "銀行卡號:", pl: "請輸入銀行卡號", key: "bank_number" },
      { label: "支付寶賬號:", pl: "請輸入支付寶賬號", key: "alipay_account" },
      { label: "微信昵稱：", pl: "請輸入微信昵稱", key: "weixin_nickname" },
      { label: "微信賬號：", pl: "請輸入微信賬號", key: "weixin_account" }
    ]
  },
  pasination: {
    first: '首頁',
    prev: '上一頁',
    next: '下一頁',
    last: '尾頁',
    no_data: '暫無數據',
  },
  asset: {
    title: '我的資產',
    zjhz: '資金劃轉',
    cb: '充幣',
    gz: 'USDT估值',
    atnv: [],
    zh_title: '總資產折合：',
    index_title: '資產',
    address_title: '幣種',
    address_txt: ['請選擇', '提幣地址', '請輸入內容', '備註', '地址列表'],
    address_btn: ['添加', '保存', '刪除', '編輯'],
    address_td: ['幣種', '提幣地址', '備註', '操作'],
    currency_td: ['幣種', '可用', '凍結', '折合'],

    table_title: '總資產：',
    table_address_title: '提幣地址管理',
    table_td: ['幣種', '可用', '凍結', '折合', '操作'],
    table_btn: ['充幣', '提幣', '記錄', '劃轉'],

    money_text: ['提幣地址', '請選擇', '數量', '可用：', '手續費',
      '到賬數量', '交易密碼'],
    money_btn: '提幣',
    money_msg: ['溫馨提示', '請勿向上述地址充值任何非USDT資產，否則資產將不可找回。', 'USDT充幣僅支持simple send的方法，使用其他方法（send all）的充幣暫時無法上賬，請您諒解。'],

    recharge_title: '充值地址',
    recharge_btn: ['復制', '二維碼', '充值'],
    recharge_text: ['數量', '溫馨提示', '請勿向上述地址充值任何非USDT資產，否則資產將不可找回。', 'USDT充幣僅支持simple send的方法，使用其他方法（send all）的充幣暫時無法上賬，請您諒解。', '憑證', '憑證描述'],

    record_title: '財務記錄',
    record_td: ['數量', '記錄', '時間'],

    transfer_title: '劃轉',
    transfer_btn: ['全部', '轉賬'],
    transfer_text: ['從', '至', '請輸入劃轉數量', '可用：']
  },
  text: {
    btn: '返回',
    login: '請先登陸'
  },
  deal: {
    chooseType: '委托類型',
    choose: '請選擇',
    balance: '余額：',
    account: ['賬戶', '可用', '/凍結', '劃轉'],
    dir: ['買', '賣'],
    dir2: ['可買', '可賣'],
    cs: '自選',
    sc_list: ['市場', '幣對', '漲幅'],
    sc_h: ['當前價格', '24h最低價', '24h最高價', '24h成交量'],
    td_lt: ['幣種', '最新價', '漲幅'],
    k_line_txt: ['≈', '', '漲幅', '最高價', '最低價', '24H量'],
    tabListLTitle: ["當前委托", "歷史委托"],
    tabListLEntrust: ["買入", "賣出"],
    tabListRTitle: ["限價交易", "市價交易"],
    table_btn: ['撤單'],
    index_td_l: ['時間', '交易對象', '數量', '價格', '操作'],
    index_td_r: ['最新價', '方向', '價格', '數量'],
    index_td_r2: ['最新交易', '時間', '價格', '交易量'],
    table_txt: ['交易已完成', '已撤單'],

    db_1_txt: ['可用', '買入價', '賣出價', '買入量', '賣出量', '交易額', '以市場最優價格買', '以市場最優價格賣','買入手', '賣出手'],
    db_2_txt: ['價格', '倍數', '請選擇', '手數', '一手等於', '手', '合約市值', '保證金', '以市場最優價格買', '以市場最優價格賣'],
    pathList: ['合約記錄', '交易記錄'],
    db_btn: ['買入(做多)', '賣出(做空)'],
    tabListLTitle2: ['當前委托'],

    lt_btn: ['一鍵平倉', '設置止盈止損價', '平倉', '立即提交', '返回'],
    lt_txt: ['風險率：', '持倉總盈虧：'],
    lt_td: ['類型', '持倉價', '當前價', '保證金', '止盈價', '止損價', '開倉時間', '手續費', '盈虧', '操作'],
    lt_dl: ['設置止盈止損價', '止盈價', '止損價'],

    lt_0_btn: ['撤單'],
    lt_0_td: ['聯系方式', '幣種', '數量', '當前價', '手續費', '操作'],

    lt_1_btn: ['平倉'],
    lt_1_txt: ['平倉中'],
    lt_1_td: ['類型', '持倉價', '當前價', '保證金', '止盈價', '止損價', '開倉時間', '手續費', '盈虧', '操作'],
    node_data: '暫無數據',

    lt_3_txt: ['已平倉', '爆倉'],
    lt_3_td: ['類型', '手數', '持倉價', '平倉價', '止盈價', '止損價', '保證金', '可用保證金', '開倉時間', '平倉時間', '手續費',
      '盈虧', '操作'],

    lt_4_txt: ['已撤單'],
    cm: ['發行時間', '發行總量', '流通總量', '總湊價格', '官網','白皮書','介紹']
  },
  fabi: {
    title: '買入',
    title2: '買入法幣',
    thead: ['商家', '數量', '限制','支付寶支付','微信支付','購買']
  }
}
