# Vue PDFMake

A [PDFMake](http://pdfmake.org/#/) plugin for Vue 3.x

> Don't support Vue 2.x

## Install

`yarn add vue3-pdfmake`

OR

`npm install vue3-pdfmake`

in `main.(js|ts)`

```js
import { createApp } from 'vue';
import pdfMake from 'vue3-pdfmake';
import App from './App.vue';

const app = createApp(App);
//...
app.use(pdfMake);
//...
app.mount('#app');
```

## Example

```html
<script setup>
  import { onMounted, inject } from 'vue';
  import { usePDF, Key } from 'vue3-pdfmake';

  const { create, get } = usePDF();

  onMounted(() => {

    create().download();
  });

  // get root pdfMake
  console.log(get());

  // or local inject without usePDF()
  const pdf = inject(Key)
  console.log(pdf);
</script>
```
