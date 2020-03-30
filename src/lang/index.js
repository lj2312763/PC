import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from './en'
import zhLocale from './zh'
import jpLocale from './jp'
import twLocale from './tw'
import { getLang } from '@/utils/auth'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale
  },
  zh: {
    ...zhLocale
  },
  tw: {
    ...twLocale
  },
  jp: {
    ...jpLocale
  }
}

const i18n = new VueI18n({
  // set locale
  // options: en | zh | es
  locale: getLang(),
  // set locale messages
  messages
})

export default i18n
