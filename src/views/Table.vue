<!-- prettier-ignore -->
<template>
  <div class="uic-body">
    <h1 class="uic-title">Table</h1>

    <div class="uic-preview">
      <div class="table">
        <table>
          <thead>
            <tr>
              <th scope="col">th</th>
              <th scope="col">th</th>
              <th scope="col">th</th>
              <th scope="col">th</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">th</th>
              <td>td</td>
              <td>td</td>
              <td>td</td>
            </tr>
            <tr>
              <th scope="row">th</th>
              <td>td</td>
              <td>td</td>
              <td>td</td>
            </tr>
            <tr>
              <th scope="row">th</th>
              <td>td</td>
              <td>td</td>
              <td>td</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="table">
        <table>
          <tbody>
            <tr>
              <th scope="row">th</th>
              <td>td</td>
              <td>td</td>
              <td>td</td>
            </tr>
            <tr>
              <th scope="row">th</th>
              <td>td</td>
              <td>td</td>
              <td>td</td>
            </tr>
            <tr>
              <th scope="row">th</th>
              <td>td</td>
              <td>td</td>
              <td>td</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <UicCode>
      {{
        `
      <div class="table">
        <table>
          <thead>
            <tr>
              <th scope="col">th</th>
              <th scope="col">th</th>
              <th scope="col">th</th>
              <th scope="col">th</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">th</th>
              <td>td</td>
              <td>td</td>
              <td>td</td>
            </tr>
          </tbody>
        </table>
      </div>
      `
      }}
    </UicCode>


    <h2 class="uic-title">Text Align</h2>
    <div class="uic-preview">
      <div class="table center">
        <table>
          <thead>
            <tr>
              <th scope="col">th</th>
              <th scope="col">th</th>
              <th scope="col">th</th>
              <th scope="col">th</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">th</th>
              <td>td</td>
              <td>td</td>
              <td>td</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <UicCode>
      {{
        `
      <div class="table center">
        <table>
          ...
        </table>
      </div>
      `
      }}
    </UicCode>

    <div class="uic-preview">
      <div class="table">
        <table>
          <thead class="center">
            <tr>
              <th scope="col">th</th>
              <th scope="col">th</th>
              <th scope="col">th</th>
              <th scope="col">th</th>
            </tr>
          </thead>
          <tbody class="right">
            <tr>
              <th scope="row">th</th>
              <td>td</td>
              <td>td</td>
              <td>td</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <UicCode>
      {{
        `
      <div class="table">
        <table>
          <thead class="center">
            <tr>
            ...
            </tr>
          </thead>
          <tbody class="right">
            <tr>
              ...
            </tr>
          </tbody>
        </table>
      </div>
      `
      }}
    </UicCode>

    <div class="uic-preview">
      <div class="table">
        <table>
          <thead>
            <tr class="center">
              <th scope="col">th</th>
              <th scope="col">th</th>
              <th scope="col" class="center">th</th>
              <th scope="col" class="right">th</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">th</th>
              <td>td</td>
              <td class="center">td</td>
              <td class="right">td</td>
            </tr>
            <tr class="center">
              <th scope="row">th</th>
              <td>td</td>
              <td>td</td>
              <td>td</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <UicCode>
      {{
        `
      <div class="table">
        <table>
          <thead>
            <tr>
              <th scope="col">th</th>
              <th scope="col">th</th>
              <th scope="col" class="center">th</th>
              <th scope="col" class="right">th</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">th</th>
              <td>td</td>
              <td class="center">td</td>
              <td class="right">td</td>
            </tr>
            <tr class="center">
              <th scope="row">th</th>
              <td>td</td>
              <td>td</td>
              <td>td</td>
            </tr>
          </tbody>
        </table>
      </div>
      `
      }}
    </UicCode>





    <h2 class="uic-title">Header Sticky</h2>
    <div class="uic-preview">
      <div class="table sticky">
        <table>
          <thead>
            <tr>
              <th scope="col">th</th>
              <th scope="col">th</th>
              <th scope="col">th</th>
              <th scope="col">th</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>td</td>
              <td>td</td>
              <td>td</td>
              <td>td</td>
            </tr>
            <tr>
              <td>td</td>
              <td>td</td>
              <td>td</td>
              <td>td</td>
            </tr>
            <tr>
              <td>td</td>
              <td>td</td>
              <td>td</td>
              <td>td</td>
            </tr>
            <tr>
              <td>td</td>
              <td>td</td>
              <td>td</td>
              <td>td</td>
            </tr>
            <tr>
              <td>td</td>
              <td>td</td>
              <td>td</td>
              <td>td</td>
            </tr>
            <tr>
              <td>td</td>
              <td>td</td>
              <td>td</td>
              <td>td</td>
            </tr>
            <tr>
              <td>td</td>
              <td>td</td>
              <td>td</td>
              <td>td</td>
            </tr>
            <tr>
              <td>td</td>
              <td>td</td>
              <td>td</td>
              <td>td</td>
            </tr>
            <tr>
              <td>td</td>
              <td>td</td>
              <td>td</td>
              <td>td</td>
            </tr>
            <tr>
              <td>td</td>
              <td>td</td>
              <td>td</td>
              <td>td</td>
            </tr>
            <tr>
              <td>td</td>
              <td>td</td>
              <td>td</td>
              <td>td</td>
            </tr>
            <tr>
              <td>td</td>
              <td>td</td>
              <td>td</td>
              <td>td</td>
            </tr>
            <tr>
              <td>td</td>
              <td>td</td>
              <td>td</td>
              <td>td</td>
            </tr>
            <tr>
              <td>td</td>
              <td>td</td>
              <td>td</td>
              <td>td</td>
            </tr>
            <tr>
              <td>td</td>
              <td>td</td>
              <td>td</td>
              <td>td</td>
            </tr>
          </tbody>
        </table>
      </div>


    </div>
    <UicCode>
      {{
        `
      <div class="table sticky">
        <table>
        ...
        </table>
      </div>
      `
      }}
    </UicCode>


    <div class="uic-preview">
      <div class="table">
        <table>
          <thead>
            <tr>
              <th scope="col" rowspan="2">th</th>
              <th scope="col">th</th>
              <th scope="col">th</th>
              <th scope="col" rowspan="2">th</th>
            </tr>
            <tr>
              <th scope="col">th</th>
              <th scope="col">th</th>
            </tr>
            <tr>
              <th scope="col" rowspan="2">th</th>
              <th scope="col" rowspan="2">th</th>
              <th scope="col">th</th>
              <th scope="col">th</th>
            </tr>
            <tr>
              <th scope="col">th</th>
              <th scope="col">th</th>
            </tr>
            <tr>
              <th scope="col">th</th>
              <th scope="col" rowspan="2">th</th>
              <th scope="col">th</th>
              <th scope="col">th</th>
            </tr>
            <tr>
              <th scope="col">th</th>
              <th scope="col">th</th>
              <th scope="col">th</th>
            </tr>
            <tr>
              <th scope="col" scolspan="2">th</th>
              <th scope="col" scolspan="2">th</th>
              <th scope="col" rowspan="3">th</th>
              <th scope="col">th</th>
            </tr>
            <tr>
              <th scope="col" rowspan="2">th</th>
              <th scope="col" rowspan="2">th</th>
              <th scope="col">th</th>
            </tr>
            <tr>
              <th scope="col">th</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>td</td>
              <td>td</td>
              <td>td</td>
              <td>td</td>
            </tr>
          </tbody>
        </table>
      </div>


    </div>
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
