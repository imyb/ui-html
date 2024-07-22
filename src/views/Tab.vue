<!-- prettier-ignore -->
<template>
  <div class="uic-body">
    <h1 class="uic-title">Tab</h1>

    <div class="uic-preview">preview</div>
    <UicCode>
      {{
        `
      code...
      `
      }}
    </UicCode>
  </div>
</template>

<script setup>
import UicCode from '@/components/UicCode.vue';
</script>

<style lang="scss" scoped></style>
