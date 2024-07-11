<template>
  <div class="uic-body">
    <h1 class="uic-title">Button</h1>

    <h2 class="uic-title">Default</h2>
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
import UicCode from '@/components/UicCode.vue'
</script>

<style lang="scss" scoped>
.uic-preview {
  .btn {
    margin-bottom: 0.4rem;
  }
}
</style>
