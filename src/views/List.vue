<!-- prettier-ignore -->
<template>
  <div class="uic-body">
    <h1 class="uic-title">List</h1>

    <div class="uic-preview">
      <ul class="list">
        <li>Lorem, ipsum.</li>
        <li>Quaerat, voluptate!</li>
        <li>Quos, iure!</li>
        <li>Excepturi, provident.</li>
        <li>Sunt, neque.</li>
      </ul>
    </div>
    <UicCode>
      {{
        `
      <ul class="list">
        <li>...</li>
      </ul>
      `
      }}
    </UicCode>

    <h2 class="uic-title">Bullet</h2>
    <div class="uic-preview">
      <ul class="list square">
        <li>Lorem, ipsum.Lorem, ipsum.Lorem, ipsum.Lorem, ipsum.Lorem, ipsum.<br>Lorem, ipsum.Lorem, ipsum.Lorem, ipsum.Lorem, ipsum.</li>
        <li>Quaerat, voluptate!</li>
        <li>Quos, iure!</li>
      </ul>

      <ul class="list circle">
        <li>Lorem, ipsum.</li>
        <li>Quaerat, voluptate!</li>
        <li>Quos, iure!</li>
      </ul>

      <ul class="list dash">
        <li>Lorem, ipsum.</li>
        <li>Quaerat, voluptate!</li>
        <li>Quos, iure!</li>
      </ul>

      <ul class="list star">
        <li>Lorem, ipsum.</li>
        <li>Quaerat, voluptate!</li>
        <li>Quos, iure!</li>
      </ul>
    </div>
    <UicCode>
      {{
        `
      <ul class="list square">
        <li>...</li>
      </ul>

      <ul class="list circle">
        <li>...</li>
      </ul>

      <ul class="list dash">
        <li>...</li>
      </ul>

      <ul class="list star">
        <li>...</li>
      </ul>
      `
      }}
    </UicCode>


    <h2 class="uic-title">Number</h2>
    <div class="uic-preview">
      <ul class="list number">
        <li value="1">Lorem, ipsum.Lorem, ipsum.Lorem, ipsum.<br>Lorem, ipsum.Lorem, ipsum.Lorem, ipsum.</li>
        <li value="2">Quaerat, voluptate!</li>
        <li value="3">Quos, iure!</li>
        <li value="4">Excepturi, provident.</li>
        <li value="5">Sunt, neque.</li>
      </ul>
    </div>
    <UicCode>
      {{
        `
      <ul class="list number">
        <li value="1">...</li>
        <li value="2">...</li>
        <li value="3">...</li>
        <li value="4">...</li>
      </ul>
      `
      }}
    </UicCode>


    <h2 class="uic-title">Label</h2>
    <div class="uic-preview">
      <ul class="list dash">
        <li><div class="label">item label :</div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur earum, possimus esse cumque laborum saepe ad modi deleniti voluptatum dolorum commodi architecto vel at ea sapiente officiis minima omnis. Sunt!.</li>
        <li><div class="label">item label :</div>Quaerat, voluptate!</li>
        <li><div class="label">item label :</div>Quos, iure!</li>
      </ul>
    </div>
    <UicCode>
      {{
        `
      <ul class="list dash">
        <li><div class="label">item label :</div>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
        <li><div class="label">item label :</div>Quaerat, voluptate!</li>
        <li><div class="label">item label :</div>Quos, iure!</li>
      </ul>
      `
      }}
    </UicCode>

  </div>
</template>

<script setup>
import UicCode from '@/components/UicCode.vue';
</script>

<style lang="scss" scoped></style>
