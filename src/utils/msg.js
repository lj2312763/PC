import store from '@/store'
import { MessageBox, Message } from 'element-ui'

export function showMessage(message, type = 'success', duration = 3000) {
  Message({
    message,
    type,
    duration
  })
}

export function _response(res) {
  if (res.code !== 0) {
    // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
    if (res.code === 2000) {
      // to re-login
      MessageBox.confirm(res.message, res.title || '警告', {
        confirmButtonText: '重新登陆',
        cancelButtonText: '返回',
        type: 'warning'
      }).then(() => {
        store.dispatch('FedLogOut').then(() => {
          location.reload()
        })
      })
    } else if (res.code === 1000) {
      var duration = 1000 * (res.time || 3)
      showMessage(res.message, 'warning', duration)
      setTimeout(() => {
        store.dispatch('FedLogOut').then(() => {
          location.reload()
        })
      }, duration)
      return Promise.reject(res.message)
    } else {
      showMessage(res.message || '请求错误', 'warning')
    }
    return Promise.reject(res.message || '请求错误')
  } else {
    res.message && showMessage(res.message)
    return res.data
  }
}

export function _error(error) {
  console.log(error.message)
  // Message({
  //   message: error.message,
  //   type: 'error',
  //   duration: 3 * 1000
  // })
  return Promise.reject(error)
}
