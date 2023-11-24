import { createApp } from 'vue'
import App from './App.vue'
import { PDFPlugin } from 'vue3-pdfmake-v2'

createApp(App).use(PDFPlugin).mount('#app')
