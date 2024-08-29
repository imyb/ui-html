<!-- prettier-ignore -->
<template>
  <div class="uic-body">
    <h1 class="uic-title">Dropdown</h1>

    <div class="uic-preview">

      <div class="dropdown" data-ui="dropdown">
        <button type="button" class="btn" data-dropdown="toggle">dropdown toggle</button>
        <div class="dropdown-menu" data-dropdown="menu">
          <ul>
            <li class="is-active"><button type="button" class="dropdown-item">dropdown item1</button></li>
            <li><button type="button" class="dropdown-item">dropdown item2</button></li>
            <li><button type="button" class="dropdown-item">dropdown item3</button></li>
            <li><button type="button" class="dropdown-item">dropdown item4</button></li>
            <li><button type="button" class="dropdown-item">dropdown item5</button></li>
          </ul>
        </div>
      </div>
    </div>
    <UicCode>
      {{
        `
      <div class="dropdown" data-ui="dropdown" data-direction="up">
        <button type="button" class="dropdown-toggle" data-dropdown="toggle">dropdown toggle</button>
        <div class="dropdown-menu" data-dropdown="menu">
          <ul>
            <li class="is-active"><button type="button" class="dropdown-item">dropdown item1</button></li>
            <li><button type="button" class="dropdown-item">dropdown item2</button></li>
            <li><button type="button" class="dropdown-item">dropdown item3</button></li>
            <li><button type="button" class="dropdown-item">dropdown item4</button></li>
            <li><button type="button" class="dropdown-item">dropdown item5</button></li>
          </ul>
        </div>
      </div>
      `
      }}
    </UicCode>



    <h2 class="uic-title">Direction</h2>

    <div class="uic-preview">


      <div class="dropdown" data-ui="dropdown">
        <button type="button" class="dropdown-toggle" data-dropdown="toggle">direction : down</button>
        <div class="dropdown-menu" data-dropdown="menu">
          <ul>
            <li class="is-active"><button type="button" class="dropdown-item">dropdown item1</button></li>
            <li><button type="button" class="dropdown-item">dropdown item2</button></li>
            <li><button type="button" class="dropdown-item">dropdown item3</button></li>
            <li><button type="button" class="dropdown-item">dropdown item4</button></li>
            <li><button type="button" class="dropdown-item">dropdown item5</button></li>
          </ul>
        </div>
      </div>

      <br>

      <div class="dropdown" data-ui="dropdown" data-direction="up">
        <button type="button" class="dropdown-toggle" data-dropdown="toggle">direction : up</button>
        <div class="dropdown-menu" data-dropdown="menu">
          <ul>
            <li class="is-active"><button type="button" class="dropdown-item">dropdown item1</button></li>
            <li><button type="button" class="dropdown-item">dropdown item2</button></li>
            <li><button type="button" class="dropdown-item">dropdown item3</button></li>
            <li><button type="button" class="dropdown-item">dropdown item4</button></li>
            <li><button type="button" class="dropdown-item">dropdown item5</button></li>
          </ul>
        </div>
      </div>
      <br>

      <div class="align-right">
        <div class="dropdown" data-ui="dropdown" data-direction="left">
          <button type="button" class="dropdown-toggle" data-dropdown="toggle">direction : left</button>
          <div class="dropdown-menu" data-dropdown="menu">
            <ul>
              <li class="is-active"><button type="button" class="dropdown-item">dropdown item1</button></li>
              <li><button type="button" class="dropdown-item">dropdown item2</button></li>
              <li><button type="button" class="dropdown-item">dropdown item3</button></li>
              <li><button type="button" class="dropdown-item">dropdown item4</button></li>
              <li><button type="button" class="dropdown-item">dropdown item5</button></li>
            </ul>
          </div>
        </div>
      </div>

      <br>

      <div>
        <div class="dropdown" data-ui="dropdown" data-direction="right">
          <button type="button" class="dropdown-toggle" data-dropdown="toggle">direction : right</button>
          <div class="dropdown-menu" data-dropdown="menu">
            <ul>
              <li class="is-active"><button type="button" class="dropdown-item">dropdown item1</button></li>
              <li><button type="button" class="dropdown-item">dropdown item2</button></li>
              <li><button type="button" class="dropdown-item">dropdown item3</button></li>
              <li><button type="button" class="dropdown-item">dropdown item4</button></li>
              <li><button type="button" class="dropdown-item">dropdown item5</button></li>
            </ul>
          </div>
        </div>
      </div>


      <br>
      <div class="align-center">
        <div class="dropdown" data-ui="dropdown" data-direction="center">
          <button type="button" class="dropdown-toggle" data-dropdown="toggle">direction : center</button>
          <div class="dropdown-menu" data-dropdown="menu">
            <ul>
              <li class="is-active"><button type="button" class="dropdown-item">dropdown item1</button></li>
              <li><button type="button" class="dropdown-item">dropdown item2</button></li>
              <li><button type="button" class="dropdown-item">dropdown item3</button></li>
              <li><button type="button" class="dropdown-item">dropdown item4</button></li>
              <li><button type="button" class="dropdown-item">dropdown item5</button></li>
            </ul>
          </div>
        </div>
      </div>
      <br>

      <div class="align-right">
        <div class="dropdown" data-ui="dropdown" data-direction="left, up">
          <button type="button" class="dropdown-toggle" data-dropdown="toggle">direction : left, up</button>
          <div class="dropdown-menu" data-dropdown="menu">
            <ul>
              <li class="is-active"><button type="button" class="dropdown-item">dropdown item1</button></li>
              <li><button type="button" class="dropdown-item">dropdown item2</button></li>
              <li><button type="button" class="dropdown-item">dropdown item3</button></li>
              <li><button type="button" class="dropdown-item">dropdown item4</button></li>
              <li><button type="button" class="dropdown-item">dropdown item5</button></li>
            </ul>
          </div>
        </div>
      </div>
      <br>

      <div>
        <div class="dropdown" data-ui="dropdown" data-direction="right, up">
          <button type="button" class="dropdown-toggle" data-dropdown="toggle">direction : right, up</button>
          <div class="dropdown-menu" data-dropdown="menu">
            <ul>
              <li class="is-active"><button type="button" class="dropdown-item">dropdown item1</button></li>
              <li><button type="button" class="dropdown-item">dropdown item2</button></li>
              <li><button type="button" class="dropdown-item">dropdown item3</button></li>
              <li><button type="button" class="dropdown-item">dropdown item4</button></li>
              <li><button type="button" class="dropdown-item">dropdown item5</button></li>
            </ul>
          </div>
        </div>
      </div>

      <br>

      <div class="align-center">
        <div class="dropdown" data-ui="dropdown" data-direction="center,up">
          <button type="button" class="dropdown-toggle" data-dropdown="toggle">direction : center, up</button>
          <div class="dropdown-menu" data-dropdown="menu">
            <ul>
              <li class="is-active"><button type="button" class="dropdown-item">dropdown item1</button></li>
              <li><button type="button" class="dropdown-item">dropdown item2</button></li>
              <li><button type="button" class="dropdown-item">dropdown item3</button></li>
              <li><button type="button" class="dropdown-item">dropdown item4</button></li>
              <li><button type="button" class="dropdown-item">dropdown item5</button></li>
            </ul>
          </div>
        </div>
      </div>

      <br>

      <div class="align-right">
        <div class="dropdown" data-ui="dropdown" data-direction="alignend">
          <button type="button" class="dropdown-toggle" data-dropdown="toggle">direction : alignend</button>
          <div class="dropdown-menu" data-dropdown="menu">
            <ul>
              <li class="is-active"><button type="button" class="dropdown-item">dropdown item1</button></li>
              <li><button type="button" class="dropdown-item">dropdown item2</button></li>
              <li><button type="button" class="dropdown-item">dropdown item3</button></li>
              <li><button type="button" class="dropdown-item">dropdown item4</button></li>
              <li><button type="button" class="dropdown-item">dropdown item5</button></li>
            </ul>
          </div>
        </div>
      </div>

      <br>

      <div>
        <div class="dropdown" data-ui="dropdown" data-direction="full">
          <button type="button" class="dropdown-toggle" data-dropdown="toggle">direction : full</button>
          <div class="dropdown-menu" data-dropdown="menu">
            <ul>
              <li class="is-active"><button type="button" class="dropdown-item">dropdown item1</button></li>
              <li><button type="button" class="dropdown-item">dropdown item2</button></li>
              <li><button type="button" class="dropdown-item">dropdown item3</button></li>
              <li><button type="button" class="dropdown-item">dropdown item4</button></li>
              <li><button type="button" class="dropdown-item">dropdown item5</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <UicCode>
      {{
        `
      <div class="dropdown" data-ui="dropdown" data-direction="up">
      ...
      </div>
      <div class="dropdown" data-ui="dropdown" data-direction="left">
      ...
      </div>
      <div class="dropdown" data-ui="dropdown" data-direction="right">
      ...
      </div>
      <div class="dropdown" data-ui="dropdown" data-direction="center">
      ...
      </div>
      <div class="dropdown" data-ui="dropdown" data-direction="left,up">
      ...
      </div>
      <div class="dropdown" data-ui="dropdown" data-direction="right,up">
      ...
      </div>
      <div class="dropdown" data-ui="dropdown" data-direction="center,up">
      ...
      </div>
      <div class="dropdown" data-ui="dropdown" data-direction="alignend">
      ...
      </div>
      `
      }}
    </UicCode>

  </div>
<!--
  <p>Lorem, ipsum.</p>
  <p>Lorem, ipsum.</p>
  <p>Lorem, ipsum.</p>
  <p>Lorem, ipsum.</p>
  <p>Lorem, ipsum.</p>
  <p>Lorem, ipsum.</p>
  <p>Lorem, ipsum.</p>
  <p>Lorem, ipsum.</p>
  <p>Lorem, ipsum.</p>
  <p>Lorem, ipsum.</p>
  <p>Lorem, ipsum.</p>
  <p>Lorem, ipsum.</p>
  <p>Lorem, ipsum.</p>
  <p>Lorem, ipsum.</p>
  <p>Lorem, ipsum.</p>
  <p>Lorem, ipsum.</p>
  <p>Lorem, ipsum.</p>
  <p>Lorem, ipsum.</p>

  <div id="testdiv"></div>

  <br>

  <div class="dropdown" data-ui="dropdown" data-direction="center" id="test01">
    <button type="button" class="dropdown-toggle" data-dropdown="toggle">dropdown toggle : #test01</button>
    <div class="dropdown-menu" data-dropdown="menu">
      <ul>
        <li class="is-active"><button type="button" class="dropdown-item">dropdown item1 adadassdadasdsasd</button></li>
        <li><button type="button" class="dropdown-item">dropdown item2</button></li>
        <li><button type="button" class="dropdown-item">dropdown item3</button></li>
        <li><button type="button" class="dropdown-item">dropdown item4</button></li>
        <li><button type="button" class="dropdown-item">dropdown item5</button></li>
      </ul>
    </div>
  </div>

  <br>

  <button type="button" class="btn" @click="dropdown.init()">dropdown.init();</button>
  <button type="button" class="btn" @click="testAddItem()">testAddItem</button>
  <button type="button" class="btn" @click="testDropdownOpen">#test01 open</button>
  <button type="button" class="btn" @click="testDropdownClose">#test01 close</button> -->

</template>

<script setup>
import UicCode from '@/components/UicCode.vue';
import { onMounted } from 'vue';
import { dropdown } from '@/assets/js/ui';

const testDropdownOpen = (e) => {
  dropdown.toggle('#test01', 'open');
};
const testDropdownClose = (e) => {
  dropdown.toggle('#test01', 'close');
};

const testAddItem = () => {
  console.log('testAddItem');
  const testUi = document.querySelector('#testdiv');

  let itemHtml = `
      <div class="dropdown" data-ui="dropdown">
        <button type="button" class="dropdown-toggle" data-dropdown="toggle">dropdown toggle</button>
        <div class="dropdown-menu" data-dropdown="menu">
          <ul>
            <li class="is-active"><button type="button" class="dropdown-item">dropdown item1 adadassdadasdsasd</button></li>
            <li><button type="button" class="dropdown-item">dropdown item2</button></li>
            <li><button type="button" class="dropdown-item">dropdown item3</button></li>
            <li><button type="button" class="dropdown-item">dropdown item4</button></li>
            <li><button type="button" class="dropdown-item">dropdown item5</button></li>
          </ul>
        </div>
      </div>
  `;

  if (testUi) {
    testUi.insertAdjacentHTML('beforeend', itemHtml);
  }
};

onMounted(() => {
  dropdown.init();
});
</script>

<style lang="scss" scoped>
.dropdown {
  margin-bottom: 1.6rem;
}
</style>
