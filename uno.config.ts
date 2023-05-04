import {
  defineConfig, presetAttributify, presetIcons,
  presetTypography, presetUno
} from 'unocss'
import transformerAttributifyJsx from './transformerAttributifyJsx'

export default defineConfig({
  theme: {
  },
  shortcuts: {
    'm-btn': 'py-14px bg-#36b59d rounded-8 w-100% text-16px font-600 text-#f4f4f4',
    'input-sign-in': 'p-12px placeholder-#D8DCE4 color-#333 text-14px grow-1',
    'form-item-sing-in': 'flex items-center b-b-1 b-#D2DBE3',
    'send-code': 'bg-light b-#2fac92 b-1 w-98px rounded-8 py-6px color-#2fac92'
  },
  safelist: [],
  rules: [
    ['h-screen', { height: 'calc(100vh - var(--vh-offset, 0px))' }]
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: { 'display': 'inline-block', 'vertical-align': 'middle' },
    }),
    presetTypography(),
  ],
  transformers: [
    transformerAttributifyJsx()
  ],
})
