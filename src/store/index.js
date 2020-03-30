import Vue from 'vue'
import Vuex from 'vuex'
// import { userLogin } from '@/api/index'
// import { getInfo } from '@/api/user'
import { getToken, setToken, removeToken, getLang } from '@/utils/auth'

Vue.use(Vuex)

/**
 * email: null
invitation_code: "00Z2"
phone: "14785564430"
token: "e27e302f8b2e908bf921eca001be9105b1460dc2"
transaction_password
id_card
bank_name
bank_number
alipay_account
weixin_nickname
weixin_account

 */

const store = new Vuex.Store({
  state: {
    __data: null,

    lang: getLang(),
    token: getToken(),

    name: null,
    invitation_code: null,
    email: null,
    phone: null,
    transaction_password: 0,
    bank_name: null,
    bank_number: null,
    alipay_account: null,
    weixin_nickname: null,
    weixin_account: null,
    usdt: ''
  },
  mutations: {
    SET_DATA: (state, data) => {
      state.__data = data
    },
    SET_TP: (state, tp) => {
      state.transaction_password = tp
    },
    SET_LOGIN: (state, data) => {
      for (var key in data) {
        state[key] = data[key]
      }
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions: {
    updateData({ commit }, data) {
      commit('SET_DATA', data)
    },
    updateTP({ commit }, tp) {
      commit('SET_TP', tp)
    },
    updateInfo({ commit }, data) {
      commit('SET_LOGIN', data)
    },
    // 用户登录保存信息
    login({ commit }, data) {
      return new Promise((resolve, reject) => {
        userLogin(data).then(res => {
          setToken(res.token)
          commit('SET_LOGIN', res)
          resolve(res)
        }).catch(() => {
          reject()
        })
      })
    },
    // 获取用户信息
    getInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo().then(res => {
          commit('SET_LOGIN', res)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        removeToken()
        commit('SET_TOKEN', null)
        resolve()
      })
    }
  },
  getters: {
    token: state => state.token,
    usdt: state => state.usdt,
    phone: state => {
      var p = state.phone || state.email
      if(!p)return ''
      return p.length < 12 ? p : p.substr(0,12) + '...'
    }
  }
})

export default store

