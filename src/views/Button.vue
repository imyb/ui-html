<!-- prettier-ignore -->
<template>
  <div class="uic-body">
    <h1 class="uic-title">Button</h1>

    <h2 class="uic-title">Default</h2>
    <div class="uic-preview">
      <button type="button" class="btn">button</button>
      <a href="javascript:void(0);" class="btn" role="button">anchor</a>
      <input type="button" class="btn" value="input" />
      <input type="submit" class="btn" value="submit" />
      <input type="reset" class="btn" value="reset" />
    </div>
    <UicCode>
      {{`
      <button type="button" class="btn">button</button>
      <a href="javascript:void(0);" class="btn" role="button">anchor</a>
      <input type="button" class="btn" value="input" />
      <input type="submit" class="btn" value="submit" />
      <input type="reset" class="btn" value="reset" />
      `}}
    </UicCode>

    <h2 class="uic-title">Color</h2>
    <div class="uic-preview">
      <button type="button" class="btn prime">prime</button>
      <button type="button" class="btn second">second</button>
      <button type="button" class="btn third">third</button>
      <button type="button" class="btn fourth">fourth</button>
      <button type="button" class="btn dark">dark</button>
      <button type="button" class="btn light">light</button>
    </div>
    <UicCode>
      {{ `
      <button type="button" class="btn prime">prime</button>
      <button type="button" class="btn second">second</button>
      <button type="button" class="btn third">third</button>
      <button type="button" class="btn fourth">fourth</button>
      <button type="button" class="btn dark">dark</button>
      <button type="button" class="btn light">light</button>
      ` }}
    </UicCode>

    <h2 class="uic-title">Outline</h2>
    <div class="uic-preview">
      <button type="button" class="btn prime-outline">outline</button>
      <button type="button" class="btn second-outline">outline</button>
      <button type="button" class="btn third-outline">outline</button>
      <button type="button" class="btn fourth-outline">outline</button>
      <button type="button" class="btn dark-outline">outline</button>
      <button type="button" class="btn light-outline">outline</button>
    </div>
    <UicCode>
      {{ `
      <button type="button" class="btn prime-outline">outline</button>
      <button type="button" class="btn second-outline">outline</button>
      <button type="button" class="btn third-outline">outline</button>
      <button type="button" class="btn fourth-outline">outline</button>
      <button type="button" class="btn dark-outline">outline</button>
      <button type="button" class="btn light-outline">outline</button>
      ` }}
    </UicCode>

    <h2 class="uic-title">Round</h2>
    <div class="uic-preview">
      <button type="button" class="btn prime-round">round</button>
      <button type="button" class="btn second-round">round</button>
      <button type="button" class="btn third-round">round</button>
      <button type="button" class="btn fourth-round">round</button>
      <button type="button" class="btn dark-round">round</button>
      <button type="button" class="btn light-round">round</button>
    </div>
    <UicCode>
      {{ `
      <button type="button" class="btn prime-round">round</button>
      <button type="button" class="btn second-round">round</button>
      <button type="button" class="btn third-round">round</button>
      <button type="button" class="btn fourth-round">round</button>
      <button type="button" class="btn dark-round">round</button>
      <button type="button" class="btn light-round">round</button>
      ` }}
    </UicCode>

    <h2 class="uic-title">Outline Round</h2>
    <div class="uic-preview">
      <button type="button" class="btn prime-outline-round">outline-round</button>
      <button type="button" class="btn second-outline-round">outline-round</button>
      <button type="button" class="btn third-outline-round">outline-round</button>
      <button type="button" class="btn fourth-outline-round">outline-round</button>
      <button type="button" class="btn dark-outline-round">outline-round</button>
      <button type="button" class="btn light-outline-round">outline-round</button>
    </div>
    <UicCode>
      {{ `
      <button type="button" class="btn prime-outline-round">outline-round</button>
      <button type="button" class="btn second-outline-round">outline-round</button>
      <button type="button" class="btn third-outline-round">outline-round</button>
      <button type="button" class="btn fourth-outline-round">outline-round</button>
      <button type="button" class="btn dark-outline-round">outline-round</button>
      <button type="button" class="btn light-outline-round">outline-round</button>
      ` }}
    </UicCode>

    <h2 class="uic-title">Size</h2>
    <div class="uic-preview">
      <button type="button" class="btn xs">xs button</button>
      <button type="button" class="btn sm">sm button</button>
      <button type="button" class="btn md">md button</button>
      <button type="button" class="btn lg">lg button</button>
      <button type="button" class="btn xl">xl button</button>
    </div>
    <UicCode>
      {{ `
      <button type="button" class="btn xs">xs button</button>
      <button type="button" class="btn sm">sm button</button>
      <button type="button" class="btn md">md button</button>
      <button type="button" class="btn lg">lg button</button>
      <button type="button" class="btn xl">xl button</button>
      ` }}
    </UicCode>

    <h2 class="uic-title">Disabled</h2>
    <div class="uic-preview">
      <button type="button" class="btn" disabled>button</button>
      <a href="javascript:void(0);" class="btn" role="button" disabled>anchor</a>
      <input type="button" class="btn" value="input" disabled />
      <input type="submit" class="btn" value="submit" disabled />
      <input type="reset" class="btn" value="reset" disabled />
    </div>
    <UicCode>
      {{ `
      <button type="button" class="btn" disabled>button</button>
      <a href="javascript:void(0);" class="btn" role="button" disabled>anchor</a>
      <input type="button" class="btn" value="input" disabled />
      <input type="submit" class="btn" value="submit" disabled />
      <input type="reset" class="btn" value="reset" disabled />
      ` }}
    </UicCode>

    <h2 class="uic-title">Addon Icon</h2>
    <div class="uic-preview">
      <button type="button" class="btn icon"><i class="fa-solid fa-check"></i> button</button>
      <button type="button" class="btn second icon-right"><i class="fa-solid fa-check"></i> button</button>
      <button type="button" class="btn icon-only" aria-label="label"><i class="fa-solid fa-check"></i></button>
    </div>
    <UicCode>
      {{ `
      <button type="button" class="btn"><i class="fa-solid fa-check"></i> button</button>
      <button type="button" class="btn second"><i class="fa-solid fa-check"></i> button</button>
      <button type="button" class="btn" aria-label="label"><i class="fa-solid fa-check"></i></button>
      ` }}
    </UicCode>


    <h2 class="uic-title">Button Group</h2>
    <div class="uic-preview">
      <div class="btn-group">
        <button type="button" class="btn outline">button</button>
        <button type="button" class="btn outline">button</button>
      </div>
      <div class="btn-group">
        <button type="button" class="btn ">button</button>
        <button type="button" class="btn second">button</button>
        <button type="button" class="btn third">button</button>
      </div>

      <div class="btn-group tight">
        <button type="button" class="btn outline">button</button>
        <button type="button" class="btn outline">button</button>
      </div>
      <div class="btn-group tight">
        <button type="button" class="btn ">button</button>
        <button type="button" class="btn second">button</button>
        <button type="button" class="btn third">button</button>
      </div>
    </div>
    <UicCode>
      {{ `
      <div class="btn-group">
        btn...
      </div>

      <div class="btn-group tight">
        btn...
      </div>
      ` }}
    </UicCode>

    <h2 class="uic-title">Button Panel</h2>
    <div class="uic-preview">
      <div class="btn-panel">
        <div class="left">
          <button type="button" class="btn outline">button</button>
          <button type="button" class="btn outline">button</button>
        </div>
        <div class="right">
          <div class="btn-group tight">
            <button type="button" class="btn outline">button</button>
            <button type="button" class="btn outline">button</button>
          </div>
        </div>
      </div>

      <div class="btn-panel">
        <div class="btn-group tight">
          <button type="button" class="btn ">button</button>
          <button type="button" class="btn second">button</button>
          <button type="button" class="btn third">button</button>
        </div>
      </div>
    </div>
    <UicCode>
      {{ `
      <div class="btn-panel">
        <div class="left">
          btn, btn-group...
        </div>
        <div class="right">
          btn, btn-group...
        </div>
      </div>

      <div class="btn-panel">
        btn, btn-group...
      </div>
      ` }}
    </UicCode>

  </div>
</template>

<script setup>
import UicCode from '@/components/UicCode.vue';
</script>

<style lang="scss">
:where(.uic-preview) {
  > .btn {
    margin-bottom: 0.5rem;
  }

  .btn-group,
  .btn-panel {
    .btn {
      margin-bottom: 0;
    }
  }
}
</style>
