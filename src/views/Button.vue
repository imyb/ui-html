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
      <button type="button" class="btn" data-type="prime">prime</button>
      <button type="button" class="btn" data-type="second">second</button>
      <button type="button" class="btn" data-type="third">third</button>
      <button type="button" class="btn" data-type="fourth">fourth</button>
      <button type="button" class="btn" data-type="dark">dark</button>
      <button type="button" class="btn" data-type="light">light</button>
    </div>
    <UicCode>
      {{ `
      <button type="button" class="btn" data-type="prime">prime</button>
      <button type="button" class="btn" data-type="second">second</button>
      <button type="button" class="btn" data-type="third">third</button>
      <button type="button" class="btn" data-type="fourth">fourth</button>
      <button type="button" class="btn" data-type="dark">dark</button>
      <button type="button" class="btn" data-type="light">light</button>
      ` }}
    </UicCode>

    <h2 class="uic-title">Outline</h2>
    <div class="uic-preview">
      <button type="button" class="btn" data-type="prime-outline">outline</button>
      <button type="button" class="btn" data-type="second-outline">outline</button>
      <button type="button" class="btn" data-type="third-outline">outline</button>
      <button type="button" class="btn" data-type="fourth-outline">outline</button>
      <button type="button" class="btn" data-type="dark-outline">outline</button>
      <button type="button" class="btn" data-type="light-outline">outline</button>
    </div>
    <UicCode>
      {{ `
      <button type="button" class="btn" data-type="prime-outline">outline</button>
      <button type="button" class="btn" data-type="second-outline">outline</button>
      <button type="button" class="btn" data-type="third-outline">outline</button>
      <button type="button" class="btn" data-type="fourth-outline">outline</button>
      <button type="button" class="btn" data-type="dark-outline">outline</button>
      <button type="button" class="btn" data-type="light-outline">outline</button>
      ` }}
    </UicCode>

    <h2 class="uic-title">Round</h2>
    <div class="uic-preview">
      <button type="button" class="btn" data-type="prime-round">round</button>
      <button type="button" class="btn" data-type="second-round">round</button>
      <button type="button" class="btn" data-type="third-round">round</button>
      <button type="button" class="btn" data-type="fourth-round">round</button>
      <button type="button" class="btn" data-type="dark-round">round</button>
      <button type="button" class="btn" data-type="light-round">round</button>
    </div>
    <UicCode>
      {{ `
      <button type="button" class="btn" data-type="prime-round">round</button>
      <button type="button" class="btn" data-type="second-round">round</button>
      <button type="button" class="btn" data-type="third-round">round</button>
      <button type="button" class="btn" data-type="fourth-round">round</button>
      <button type="button" class="btn" data-type="dark-round">round</button>
      <button type="button" class="btn" data-type="light-round">round</button>
      ` }}
    </UicCode>

    <h2 class="uic-title">Outline Round</h2>
    <div class="uic-preview">
      <button type="button" class="btn" data-type="prime-outline-round">outline-round</button>
      <button type="button" class="btn" data-type="second-outline-round">outline-round</button>
      <button type="button" class="btn" data-type="third-outline-round">outline-round</button>
      <button type="button" class="btn" data-type="fourth-outline-round">outline-round</button>
      <button type="button" class="btn" data-type="dark-outline-round">outline-round</button>
      <button type="button" class="btn" data-type="light-outline-round">outline-round</button>
    </div>
    <UicCode>
      {{ `
      <button type="button" class="btn" data-type="prime-outline-round">outline-round</button>
      <button type="button" class="btn" data-type="second-outline-round">outline-round</button>
      <button type="button" class="btn" data-type="third-outline-round">outline-round</button>
      <button type="button" class="btn" data-type="fourth-outline-round">outline-round</button>
      <button type="button" class="btn" data-type="dark-outline-round">outline-round</button>
      <button type="button" class="btn" data-type="light-outline-round">outline-round</button>
      ` }}
    </UicCode>

    <h2 class="uic-title">Size</h2>
    <div class="uic-preview">
      <button type="button" class="btn" data-type="prime" data-size="xs">xs button</button>
      <button type="button" class="btn" data-type="prime" data-size="sm">sm button</button>
      <button type="button" class="btn" data-type="prime" data-size="md">md button</button>
      <button type="button" class="btn" data-type="prime" data-size="lg">lg button</button>
      <button type="button" class="btn" data-type="prime" data-size="xl">xl button</button>
    </div>
    <UicCode>
      {{ `
      <button type="button" class="btn" data-type="prime" data-size="xs">xs button</button>
      <button type="button" class="btn" data-type="prime" data-size="sm">sm button</button>
      <button type="button" class="btn" data-type="prime" data-size="md">md button</button>
      <button type="button" class="btn" data-type="prime" data-size="lg">lg button</button>
      <button type="button" class="btn" data-type="prime" data-size="xl">xl button</button>
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
      <button type="button" class="btn" data-addon="icon"><i class="fa-solid fa-check"></i> button</button>
      <button type="button" class="btn" data-type="second" data-addon="icon-right"><i class="fa-solid fa-check"></i> button</button>
      <button type="button" class="btn" data-addon="icon-only" aria-label="label"><i class="fa-solid fa-check"></i></button>
    </div>
    <UicCode>
      {{ `
      <button type="button" class="btn" data-addon="icon"><i class="fa-solid fa-check"></i> button</button>
      <button type="button" class="btn" data-type="second" data-addon="icon-right"><i class="fa-solid fa-check"></i> button</button>
      <button type="button" class="btn" data-addon="icon-only" aria-label="label"><i class="fa-solid fa-check"></i></button>
      ` }}
    </UicCode>


    <h2 class="uic-title">Button Group</h2>
    <div class="uic-preview">
      <div class="btn-group">
        <button type="button" class="btn" data-type="outline">button</button>
        <button type="button" class="btn" data-type="outline">button</button>
      </div>
      <div class="btn-group">
        <button type="button" class="btn" data-type="">button</button>
        <button type="button" class="btn" data-type="second">button</button>
        <button type="button" class="btn" data-type="third">button</button>
      </div>

      <div class="btn-group tight">
        <button type="button" class="btn" data-type="outline">button</button>
        <button type="button" class="btn" data-type="outline">button</button>
      </div>
      <div class="btn-group tight">
        <button type="button" class="btn" data-type="">button</button>
        <button type="button" class="btn" data-type="second">button</button>
        <button type="button" class="btn" data-type="third">button</button>
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
          <button type="button" class="btn" data-type="outline">button</button>
          <button type="button" class="btn" data-type="outline">button</button>
        </div>
        <div class="right">
          <div class="btn-group tight">
            <button type="button" class="btn" data-type="outline">button</button>
            <button type="button" class="btn" data-type="outline">button</button>
          </div>
        </div>
      </div>

      <div class="btn-panel">
        <div class="btn-group tight">
          <button type="button" class="btn" data-type="">button</button>
          <button type="button" class="btn" data-type="second">button</button>
          <button type="button" class="btn" data-type="third">button</button>
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
