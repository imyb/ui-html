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

    <h2 class="uic-title">Select</h2>
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

    <h2 class="uic-title">Checkbox</h2>
    <div class="uic-preview">
      <div class="input-checkgroup">
        <label class="input-check">
          <input type="checkbox">
          <span class="label">checkbox</span>
        </label>
        <label class="input-check">
          <input type="checkbox" checked>
          <span class="label">체크박스 checked</span>
        </label>
        <label class="input-check">
          <input type="checkbox" disabled>
          <span class="label">체크박스 disabled</span>
        </label>
        <label class="input-check">
          <input type="checkbox" checked disabled>
          <span class="label">체크박스 checked disabled</span>
        </label>
      </div>
    </div>
    <UicCode>
      {{`
        <label class="input-check">
          <input type="checkbox">
          <span class="label">checkbox</span>
        </label>
        <label class="input-check">
          <input type="checkbox" checked>
          <span class="label">체크박스 checked</span>
        </label>
        <label class="input-check">
          <input type="checkbox" disabled>
          <span class="label">체크박스 disabled</span>
        </label>
        <label class="input-check">
          <input type="checkbox" checked disabled>
          <span class="label">체크박스 checked disabled</span>
        </label>
      `}}
    </UicCode>

    <h2 class="uic-title">Radio</h2>
    <div class="uic-preview">
      <div class="input-checkgroup">
        <label class="input-radio">
          <input type="radio" name="radio1">
          <span class="label">radio</span>
        </label>
        <label class="input-radio">
          <input type="radio" name="radio1" checked>
          <span class="label">라디오 checked</span>
        </label>
        <label class="input-radio">
          <input type="radio" name="radio2" disabled>
          <span class="label">라디오 disabled</span>
        </label>
        <label class="input-radio">
          <input type="radio" name="radio2" checked disabled>
          <span class="label">라디오 checked disabled</span>
        </label>
      </div>
    </div>
    <UicCode>
      {{`
        <label class="input-radio">
          <input type="radio" name="radio1">
          <span class="label">radio</span>
        </label>
        <label class="input-radio">
          <input type="radio" name="radio1" checked>
          <span class="label">라디오 checked</span>
        </label>
        <label class="input-radio">
          <input type="radio" name="radio2" disabled>
          <span class="label">라디오 disabled</span>
        </label>
        <label class="input-radio">
          <input type="radio" name="radio2" checked disabled>
          <span class="label">라디오 checked disabled</span>
        </label>
      `}}
    </UicCode>


    <h2 class="uic-title">Checkbox / Radio Group</h2>
    <div class="uic-desc">
      기본 수직 방향으로 정렬.
    </div>
    <div class="uic-preview">
      <div class="input-checkgroup">
        <label class="input-check">
          <input type="checkbox" checked>
          <span class="label">checkbox</span>
        </label>
        <label class="input-check">
          <input type="checkbox">
          <span class="label">checkbox</span>
        </label>
      </div>

      <div class="input-checkgroup">
        <label class="input-radio">
          <input type="radio" name="radio3" checked>
          <span class="label">radio</span>
        </label>
        <label class="input-radio">
          <input type="radio" name="radio3">
          <span class="label">radio</span>
        </label>
      </div>
    </div>
    <UicCode>
    {{`
      <div class="input-checkgroup">
        checkbox, radio ...
      </div>
    `}}
    </UicCode>

    <div class="uic-desc">
      <code>.inline</code> 클래스 추가 시 수평 방향 정렬.
    </div>
    <div class="uic-preview">
      <div class="input-checkgroup inline">
        <label class="input-check">
          <input type="checkbox" checked>
          <span class="label">checkbox</span>
        </label>
        <label class="input-check">
          <input type="checkbox">
          <span class="label">checkbox</span>
        </label>
        <label class="input-check">
          <input type="checkbox">
          <span class="label">checkbox</span>
        </label>
      </div>

      <div class="input-checkgroup inline">
        <label class="input-radio">
          <input type="radio" name="radio4" checked>
          <span class="label">radio</span>
        </label>
        <label class="input-radio">
          <input type="radio" name="radio4">
          <span class="label">radio</span>
        </label>
        <label class="input-radio">
          <input type="radio" name="radio4">
          <span class="label">radio</span>
        </label>
      </div>
    </div>
    <UicCode>
      {{`
        <div class="input-checkgroup inline">
          checkbox, radio ...
        </div>
      `}}
    </UicCode>
  </div>
</template>

<script setup>
import UicCode from '@/components/UicCode.vue';
</script>

<style lang="scss" scoped>
.input-text {
  margin-bottom: 0.5rem;
}
.input-select {
  margin-bottom: 0.5rem;
}
</style>
