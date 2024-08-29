<!-- prettier-ignore -->
<template>
  <div class="uic-body">
    <h1 class="uic-title">Accordion</h1>

    <div class="uic-preview">
      <div class="accordion" data-ui="accordion">
        <div class="accordion-item is-active" data-accordion="item">
          <div class="accordion-header">
            <button type="button" class="accordion-title" data-accordion="trigger" data-name="acd-a1">accordion header</button>
          </div>
          <div class="accordion-panel" role="region" data-accordion="panel">
            <div class="accordion-content">
              accordion content<br>
              accordion content<br>
              accordion content<br>
              accordion content<br>
            </div>
          </div>
        </div>
        <div class="accordion-item" data-accordion="item">
          <div class="accordion-header">
            <button type="button" class="accordion-title" data-accordion="trigger" data-name="acd-a2">accordion header</button>
          </div>
          <div class="accordion-panel" role="region" data-accordion="panel">
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
        <div class="accordion-item" data-accordion="item">
          <div class="accordion-header">
            <button type="button" class="accordion-title" data-accordion="trigger" data-name="acd-a3">accordion header</button>
          </div>
          <div class="accordion-panel" role="region" data-accordion="panel">
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
      <div class="accordion" data-ui="accordion">
        <div class="accordion-item is-active" data-accordion="item">
          <div class="accordion-header">
            <button type="button" class="accordion-title" data-accordion="trigger" data-name="acd-a1">accordion header</button>
          </div>
          <div class="accordion-panel" role="region" data-accordion="panel">
            <div class="accordion-content">
              ...
            </div>
          </div>
        </div>
        <div class="accordion-item" data-accordion="item">
          <div class="accordion-header">
            <button type="button" class="accordion-title" data-accordion="trigger" data-name="acd-a2">accordion header</button>
          </div>
          <div class="accordion-panel" role="region" data-accordion="panel">
            <div class="accordion-content">
              ...
            </div>
          </div>
        </div>
        <div class="accordion-item" data-accordion="item">
          <div class="accordion-header">
            <button type="button" class="accordion-title" data-accordion="trigger" data-name="acd-a3">accordion header</button>
          </div>
          <div class="accordion-panel" role="region" data-accordion="panel">
            <div class="accordion-content">
              ...
            </div>
          </div>
        </div>
      </div>
      `
      }}
    </UicCode>

    <h2 class="uic-title">Toggle Type</h2>
    <div class="uic-desc">
        개별적으로 열리고 닫히는 타입은 <code>data-type="toggle"</code> 추가.
    </div>

    <div class="uic-preview">
      <div class="accordion" data-ui="accordion" data-type="toggle">
        <div class="accordion-item is-active" data-accordion="item">
          <div class="accordion-header">
            <button type="button" class="accordion-title" data-accordion="trigger" data-name="acd-b1">accordion header</button>
          </div>
          <div class="accordion-panel" role="region" data-accordion="panel">
            <div class="accordion-content">
              accordion content<br>
              accordion content<br>
              accordion content<br>
              accordion content<br>
            </div>
          </div>
        </div>
        <div class="accordion-item" data-accordion="item">
          <div class="accordion-header">
            <button type="button" class="accordion-title" data-accordion="trigger" data-name="acd-b2">accordion header</button>
          </div>
          <div class="accordion-panel" role="region" data-accordion="panel">
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
        <div class="accordion-item" data-accordion="item">
          <div class="accordion-header">
            <button type="button" class="accordion-title" data-accordion="trigger" data-name="acd-b3">accordion header</button>
          </div>
          <div class="accordion-panel" role="region" data-accordion="panel">
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


    <h2 class="uic-title">Disabled</h2>
    <div class="uic-preview">
      <div class="accordion" data-ui="accordion">
        <div class="accordion-item is-active" data-accordion="item">
          <div class="accordion-header">
            <button type="button" class="accordion-title" data-accordion="trigger" data-name="acd-c1">accordion header</button>
          </div>
          <div class="accordion-panel" role="region" data-accordion="panel">
            <div class="accordion-content">
              accordion content<br>
              accordion content<br>
              accordion content<br>
              accordion content<br>
            </div>
          </div>
        </div>
        <div class="accordion-item" data-accordion="item">
          <div class="accordion-header">
            <button type="button" class="accordion-title" data-accordion="trigger" data-name="acd-c2">accordion header</button>
          </div>
          <div class="accordion-panel" role="region" data-accordion="panel">
            <div class="accordion-content">
              accordion content<br>
              accordion content<br>
              accordion content<br>
              accordion content<br>
            </div>
          </div>
        </div>
        <div class="accordion-item is-disabled" data-accordion="item">
          <div class="accordion-header">
            <button type="button" class="accordion-title" data-accordion="trigger" data-name="acd-c3">disabled</button>
          </div>
          <div class="accordion-panel" role="region" data-accordion="panel">
            <div class="accordion-content">
              accordion content<br>
              accordion content<br>
              accordion content<br>
            </div>
          </div>
        </div>
        <div class="accordion-item is-active is-disabled" data-accordion="item">
          <div class="accordion-header">
            <button type="button" class="accordion-title" data-accordion="trigger" data-name="acd-c4">active disabled</button>
          </div>
          <div class="accordion-panel" role="region" data-accordion="panel">
            <div class="accordion-content">
              accordion content<br>
              accordion content<br>
              accordion content<br>
              accordion content<br>
              accordion content<br>
            </div>
          </div>
        </div>
        <div class="accordion-item" data-accordion="item">
          <div class="accordion-header">
            <button type="button" class="accordion-title" data-accordion="trigger" data-name="acd-c5">accordion header</button>
          </div>
          <div class="accordion-panel" role="region" data-accordion="panel">
            <div class="accordion-content">
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
      <div class="accordion" data-ui="accordion">
        <div class="accordion-item is-disabled" data-accordion="item">
          ...
        </div>
      </div>
      <div class="accordion" data-ui="accordion">
        <div class="accordion-item is-active is-disabled" data-accordion="item">
          ...
        </div>
      </div>
      `
      }}
    </UicCode>
  </div>

  <!-- <br>
  <div id="testdiv"></div>
  <br>
  <button type="button" class="btn" @click="accordion.init()">accordion.init();</button>
  <button type="button" class="btn" @click="testAddUi()">add ui</button>
  <button type="button" class="btn" @click="testAddItem()">add item</button>
  <button type="button" class="btn" @click="testItemOpen()">open item</button>
  <button type="button" class="btn" @click="testItemClose()">close item</button> -->
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import UicCode from '@/components/UicCode.vue';
import { accordion } from '@/assets/js/ui';

const testItemOpen = () => {
  accordion.open(
    '#test-accordion [data-accordion="item"]:nth-child(1) [data-accordion="trigger"]'
  );
};
const testItemClose = () => {
  accordion.close(
    '#test-accordion [data-accordion="item"]:nth-child(1) [data-accordion="trigger"]'
  );
};

const testAddUi = () => {
  console.log('testAddUi');
  const testdiv = document.querySelector('#testdiv');

  let testHtml = `
      <div class="accordion" data-ui="accordion" id="test-accordion">
        <div class="accordion-item is-active" data-accordion="item">
          <div class="accordion-header">
            <button type="button" class="accordion-title" data-accordion="trigger" data-name="acd-test1">accordion header</button>
          </div>
          <div class="accordion-panel" role="region" data-accordion="panel">
            <div class="accordion-content">
              accordion content
            </div>
          </div>
        </div>
        <div class="accordion-item" data-accordion="item">
          <div class="accordion-header">
            <button type="button" class="accordion-title" data-accordion="trigger" data-name="acd-test2">accordion header</button>
          </div>
          <div class="accordion-panel" role="region" data-accordion="panel">
            <div class="accordion-content">
              accordion content
            </div>
          </div>
        </div>
        <div class="accordion-item" data-accordion="item">
          <div class="accordion-header">
            <button type="button" class="accordion-title" data-accordion="trigger" data-name="acd-test3">accordion header</button>
          </div>
          <div class="accordion-panel" role="region" data-accordion="panel">
            <div class="accordion-content">
              accordion content
            </div>
          </div>
        </div>
      </div>
        `;
  testdiv.innerHTML = testHtml;
};

const testAddItem = () => {
  console.log('testAddItem');
  const testUi = document.querySelector('#test-accordion');

  let itemHtml = `
    <div class="accordion-item" data-accordion="item">
      <div class="accordion-header">
        <button type="button" class="accordion-title" data-accordion="trigger" data-name="acd-test3">add accordion header</button>
      </div>
      <div class="accordion-panel" role="region" data-accordion="panel">
        <div class="accordion-content">
          add accordion content<br>
          add accordion content<br>
          add accordion content<br>
          add accordion content<br>
        </div>
      </div>
    </div>
  `;

  if (testUi) {
    testUi.insertAdjacentHTML('beforeend', itemHtml);
  }
};

onMounted(() => {
  accordion.init();
});

onUnmounted(() => {
  // accordion.unInit();
});
</script>

<style lang="scss" scoped></style>
