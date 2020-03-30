import Cookies from 'js-cookie'
import storage from './storage'

const Storage = Cookies

const TokenKey = 'jyxt_web_token_20190709010101'

const LangKey  = 'jyxt_web_lang_20190709010101'


export function getLang() {
  return Storage.get(LangKey) || window.GLOBAL.DEFAULT_LANG
}

export function setLang(e) {
  return Storage.set(LangKey, e)
}

export function getToken() {
  return Storage.get(TokenKey)
}

export function setToken(token) {
  return Storage.set(TokenKey, token)
}

export function removeToken() {
  return Storage.remove(TokenKey)
}
