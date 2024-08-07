<!-- prettier-ignore -->
<template>
  <div class="uic-body">
    <h1 class="uic-title">Input</h1>

    <h2 class="uic-title">Text</h2>
    <div class="uic-preview">
      <div class="input-text"><input type="text" placeholder="input text" /></div>
      <div class="input-text"><input type="text" placeholder="input text" value="readonly" readonly /></div>
      <div class="input-text"><input type="text" placeholder="input text" value="disabled" disabled /></div>
    </div>
    <UicCode>
      {{ `
      <div class="input-text"><input type="text" placeholder="input text" /></div>
      <div class="input-text"><input type="text" placeholder="input text" value="readonly" readonly /></div>
      <div class="input-text"><input type="text" placeholder="input text" value="disabled" disabled /></div>
      ` }}
    </UicCode>

    <h2 class="uic-title">Inline</h2>
    <div class="uic-preview">
      <div class="input-text inline"><input type="text" placeholder="input text" /></div>
      <div class="input-text inline"><input type="text" placeholder="input text" value="readonly" readonly /></div>
      <div class="input-text inline"><input type="text" placeholder="input text" value="disabled" disabled /></div>
    </div>
    <UicCode>
      {{ `
      <div class="input-text inline"><input type="text" placeholder="input text" /></div>
      <div class="input-text inline"><input type="text" placeholder="input text" value="readonly" readonly /></div>
      <div class="input-text inline"><input type="text" placeholder="input text" value="disabled" disabled /></div>
      ` }}
    </UicCode>


    <h2 class="uic-title">Textarea</h2>
    <div class="uic-preview">
      <div class="input-textarea">
        <textarea placeholder="textarea"></textarea>
      </div>
      <div class="input-textarea">
        <textarea placeholder="textarea" readonly>readonly</textarea>
      </div>
      <div class="input-textarea">
        <textarea placeholder="textarea" disabled>disabled</textarea>
      </div>
    </div>
    <UicCode>
      {{ `
      <div class="input-textarea">
        <textarea placeholder="textarea"></textarea>
      </div>
      <div class="input-textarea">
        <textarea placeholder="textarea" readonly>readonly</textarea>
      </div>
      <div class="input-textarea">
        <textarea placeholder="textarea" disabled>disabled</textarea>
      </div>
      ` }}
    </UicCode>


    <h2 class="uic-title">File</h2>
    <div class="uic-preview">
      preview
    </div>
    <UicCode>
      {{ `
      code...
      ` }}
    </UicCode>


  </div>
</template>

<script setup>
import UicCode from '@/components/UicCode.vue';
</script>

<style lang="scss" scoped>
.input-text {
  margin-bottom: 0.8rem;
}
</style>
