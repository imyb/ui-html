<!-- prettier-ignore -->
<template>
  <div class="uic-body">
    <h1 class="uic-title">Checkbox / Radio</h1>

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


    <h2 class="uic-title">Switch</h2>
    <div class="uic-preview">
      <div class="input-checkgroup">
        <label class="input-switch">
          <input type="checkbox" aria-label="switch">
          <span class="lever"></span>
        </label>
        <label class="input-switch">
          <input type="checkbox" checked>
          <span class="lever"></span>
          <span class="label">switch checked</span>
        </label>
        <label class="input-switch">
          <input type="checkbox" disabled>
          <span class="lever"></span>
          <span class="label">switch disabled</span>
        </label>
        <label class="input-switch">
          <input type="checkbox" checked disabled>
          <span class="lever"></span>
          <span class="label">switch checked disabled</span>
        </label>
      </div>
    </div>
    <UicCode>
      {{`
        <label class="input-switch">
          <input type="checkbox" aria-label="switch">
          <span class="lever"></span>
        </label>
        <label class="input-switch">
          <input type="checkbox" checked>
          <span class="lever"></span>
          <span class="label">switch checked</span>
        </label>
        <label class="input-switch">
          <input type="checkbox" disabled>
          <span class="lever"></span>
          <span class="label">switch disabled</span>
        </label>
        <label class="input-switch">
          <input type="checkbox" checked disabled>
          <span class="lever"></span>
          <span class="label">switch checked disabled</span>
        </label>
      `}}
    </UicCode>


    <h2 class="uic-title">Button</h2>
    <div class="uic-preview">
      preview
    </div>
    <UicCode>
      {{ `
      code...
      ` }}
    </UicCode>


    <h2 class="uic-title">Check Group</h2>
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

      <div class="input-checkgroup">
        <label class="input-switch">
          <input type="checkbox" checked>
          <span class="lever"></span>
        </label>
        <label class="input-switch">
          <input type="checkbox">
          <span class="lever"></span>
          <span class="label">switch</span>
        </label>
      </div>
    </div>
    <UicCode>
    {{`
      <div class="input-checkgroup">
        checkbox, radio, switch ...
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

      <div class="input-checkgroup inline">
        <label class="input-switch">
          <input type="checkbox" checked>
          <span class="lever"></span>
          <span class="label">switch</span>
        </label>
        <label class="input-switch">
          <input type="checkbox">
          <span class="lever"></span>
          <span class="label">switch</span>
        </label>
      </div>
    </div>
    <UicCode>
      {{`
        <div class="input-checkgroup inline">
          checkbox, radio, switch ...
        </div>
      `}}
    </UicCode>


    <h2 class="uic-title">Reverse</h2>
    <div class="uic-desc">
      개별 체크요소의 <code>.reverse</code> 클래스 추가 시 라벨 위치 반대.
    </div>
    <div class="uic-preview">
      <div class="input-checkgroup">
        <label class="input-check reverse">
          <input type="checkbox">
          <span class="label">checkbox</span>
        </label>

        <label class="input-radio reverse">
          <input type="radio">
          <span class="label">radio</span>
        </label>

        <label class="input-switch reverse">
          <input type="checkbox">
          <span class="lever"></span>
          <span class="label">switch</span>
        </label>
      </div>
    </div>
    <UicCode>
      {{`
        <div class="input-checkgroup">
          <label class="input-check reverse">
            ...
          </label>
          <label class="input-radio reverse">
            ...
          </label>
          <label class="input-switch reverse">
            ...
          </label>
        </div>
      `}}
    </UicCode>

    <div class="uic-desc">
      .input-checkgroup의 <code>.reverse</code> 클래스 추가 시 라벨 위치, 정렬 반대.
    </div>
    <div class="uic-preview">
      <div class="input-checkgroup reverse">
        <label class="input-check">
          <input type="checkbox">
          <span class="label">checkbox</span>
        </label>

        <label class="input-radio">
          <input type="radio">
          <span class="label">radio</span>
        </label>

        <label class="input-switch">
          <input type="checkbox">
          <span class="lever"></span>
          <span class="label">switch</span>
        </label>
      </div>
      <UicCode>
      {{`
        <div class="input-checkgroup reverse">
          <label class="input-check">
            ...
          </label>
          <label class="input-radio">
            ...
          </label>
          <label class="input-switch">
            ...
          </label>
        </div>
      `}}
      </UicCode>
    </div>
  </div>
</template>

<script setup>
import UicCode from '@/components/UicCode.vue';
</script>

<style lang="scss" scoped></style>
