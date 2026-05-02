import type { Translations } from '../types'
import { translation_en } from './translation_en'
import { translation_bn } from './translation_bn'

export const translations: Record<'en' | 'bn', Translations> = {
  en: translation_en,
  bn: translation_bn,
}