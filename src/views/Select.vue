<!-- prettier-ignore -->
<template>
  <div class="uic-body">
    <h1 class="uic-title">Select</h1>


    <h2 class="uic-title">Default</h2>
    <div class="uic-preview">
      <div class="input-select">
        <select>
          <option>select</option>
          <option>select111</option>
          <option>select222</option>
          <option>select333</option>
          <option>select444</option>
        </select>
      </div>

      <div class="input-select">
        <select disabled>
          <option>select disabeld</option>
          <option>select111</option>
          <option>select222</option>
          <option>select333</option>
          <option>select444</option>
        </select>
      </div>

      <!-- <div class="input-select" data-type="dropdown">
        <select>
          <option>select disabeld</option>
          <option>select111</option>
          <option>select222</option>
          <option>select333</option>
          <option>select444</option>
        </select>
      </div>

      <div class="input-select" data-type="modal">
        <select>
          <option>select disabeld</option>
          <option>select111</option>
          <option>select222</option>
          <option>select333</option>
          <option>select444</option>
        </select>
      </div> -->
    </div>
    <UicCode>
      {{ `
      <div class="input-select">
        <select>
          <option>select</option>
          ...
        </select>
      </div>

      <div class="input-select">
        <select disabled>
          <option>select</option>
          ...
        </select>
      </div>
      ` }}
    </UicCode>

    <h2 class="uic-title">Inline</h2>
    <div class="uic-preview">
      <div class="input-select inline">
        <select>
          <option>select</option>
          <option>select111</option>
          <option>select222</option>
          <option>select333</option>
          <option>select444</option>
        </select>
      </div>

      <div class="input-select inline">
        <select disabled>
          <option>select disabeld</option>
          <option>select111</option>
          <option>select222</option>
          <option>select333</option>
          <option>select444</option>
        </select>
      </div>
    </div>
    <UicCode>
    {{ `
    <div class="input-select inline">
      <select>
        <option>select</option>
        ...
      </select>
    </div>
    ` }}
    </UicCode>
  </div>
</template>

<script setup>
import UicCode from '@/components/UicCode.vue';
</script>

<style lang="scss" scoped>
.input-select {
  margin-bottom: 0.8rem;
}
</style>
