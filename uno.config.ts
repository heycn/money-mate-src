import {
  defineConfig, presetAttributify, presetIcons,
  presetTypography, presetUno, transformerAttributifyJsx
} from 'unocss'

export default defineConfig({
  theme: {
  },
  shortcuts: {
    'm-btn': 'py-14px bg-#36b59d rounded-8 w-100% text-16px font-600 text-#f4f4f4',
    'input-sign-in': 'p-12px placeholder-#D8DCE4 color-#333 text-14px grow-1',
    'form-item-sing-in': 'flex items-center b-b-1 b-#D2DBE3',
    'send-code': 'bg-light b-#2fac92 b-1 rounded-8 py-6px px-3 color-#2fac92'
  },
  safelist: [],
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
