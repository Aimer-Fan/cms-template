import { createI18n } from 'vue-i18n'
import zh from '@/locales/zh-CN'
import en from '@/locales/en'

const i18n = createI18n({
  legacy: false,
  locale: 'zh-CN',
  fallbackLocale: 'zh-CN',
  messages: {
    'zh-CN': zh,
    en: en
  }
})

export const toggleLocal = (local: string) => {
  i18n.global.locale.value = local
}

export default i18n
