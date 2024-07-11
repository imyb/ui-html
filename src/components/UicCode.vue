<template>
  <div  class="uic-code">
    <pre><code :class="`language-${lang}`"><slot></slot></code></pre>
  </div>
</template>


<script setup>
import { onMounted } from 'vue';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';

window.Prism = window.Prism || {};
Prism.manual = true;

const props = defineProps({
  lang : {
    type: String,
    default: 'markup',
  }
});

onMounted(() => {
  Prism.highlightAll();
});
</script>

<style lang="scss" scoped>

</style>