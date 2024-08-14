<!-- prettier-ignore -->
<template>
  <div class="uic-body">
    <h1 class="uic-title">Accordion</h1>

    <div class="uic-preview">
      <div class="accordion">
        <div class="accordion-item is-active">
          <div class="accordion-header">
            <button type="button" class="accordion-trigger" data-name="acd-a1">accordion header</button>
          </div>
          <div class="accordion-panel" role="region">
            <div class="accordion-content">
              accordion content<br>
              accordion content<br>
              accordion content<br>
              accordion content<br>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header">
            <button type="button" class="accordion-trigger" data-name="acd-a2">accordion header</button>
          </div>
          <div class="accordion-panel" role="region">
            <div class="accordion-content">
              accordion content<br>
              accordion content<br>
              accordion content<br>
              <input type="text"><br>
              accordion content<br>
              accordion content<br>
              accordion content<br>
              accordion content<br>
              accordion content<br>
              accordion content<br>
              accordion content<br>
              accordion content<br>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header">
            <button type="button" class="accordion-trigger" data-name="acd-a3">accordion header</button>
          </div>
          <div class="accordion-panel" role="region">
            <div class="accordion-content">
              accordion content<br>
              accordion content<br>
              accordion content<br>
              accordion content<br>
              accordion content<br>
            </div>
          </div>
        </div>
      </div>
    </div>
    <UicCode>
      {{
        `
      <div class="accordion">
        <div class="accordion-item is-active">
          <div class="accordion-header">
            <button type="button" class="accordion-trigger" data-name="acd-a1">accordion header</button>
          </div>
          <div class="accordion-panel" role="region">
            <div class="accordion-content">
              ...
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header">
            <button type="button" class="accordion-trigger" data-name="acd-a2">accordion header</button>
          </div>
          <div class="accordion-panel" role="region">
            <div class="accordion-content">
              ...
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header">
            <button type="button" class="accordion-trigger" data-name="acd-a3">accordion header</button>
          </div>
          <div class="accordion-panel" role="region">
            <div class="accordion-content">
              ...
            </div>
          </div>
        </div>
      </div>
      `
      }}
    </UicCode>


    <div class="uic-desc">
        개별적으로 열리고 닫히는 타입은 <code>data-type="toggle"</code> 추가.
    </div>

    <div class="uic-preview">
      <div class="accordion" data-type="toggle">
        <div class="accordion-item is-active">
          <div class="accordion-header">
            <button type="button" class="accordion-trigger" data-name="acd-b1">accordion header</button>
          </div>
          <div class="accordion-panel" role="region">
            <div class="accordion-content">
              accordion content<br>
              accordion content<br>
              accordion content<br>
              accordion content<br>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header">
            <button type="button" class="accordion-trigger" data-name="acd-b2">accordion header</button>
          </div>
          <div class="accordion-panel" role="region">
            <div class="accordion-content">
              accordion content<br>
              accordion content<br>
              accordion content<br>
              <input type="text"><br>
              accordion content<br>
              accordion content<br>
              accordion content<br>
              accordion content<br>
              accordion content<br>
              accordion content<br>
              accordion content<br>
              accordion content<br>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header">
            <button type="button" class="accordion-trigger" data-name="acd-b3">accordion header</button>
          </div>
          <div class="accordion-panel" role="region">
            <div class="accordion-content">
              accordion content<br>
              accordion content<br>
              accordion content<br>
              accordion content<br>
              accordion content<br>
            </div>
          </div>
        </div>
      </div>
    </div>
    <UicCode>
      {{
        `
      <div class="accordion" data-type="toggle">
        ...
      </div>
      `
      }}
    </UicCode>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import UicCode from '@/components/UicCode.vue';
import { accordion } from '@/assets/js/ui';

onMounted(() => {
  accordion.init();
});

onUnmounted(() => {
  accordion.unInit();
});
</script>

<style lang="scss" scoped></style>
