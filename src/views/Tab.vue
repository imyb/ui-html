<!-- prettier-ignore -->
<template>
  <div class="uic-body">
    <h1 class="uic-title">Tab</h1>


    <h2 class="uic-title">Page Nav</h2>
    <div class="uic-preview">
      <div class="tabnav">
        <ul class="tablist">
          <li class="tabitem is-active"><a href="javascript:void(0);" class="tab" aria-current="page">page-1</a></li>
          <li class="tabitem"><a href="javascript:void(0);" class="tab">page-2</a></li>
          <li class="tabitem"><a href="javascript:void(0);" class="tab">page-3</a></li>
        </ul>
      </div>


    </div>
    <UicCode>
      {{
        `
      <div class="tabnav">
        <ul class="tablist">
          <li class="tabitem is-active"><a href="javascript:void(0);" class="tab" aria-current="page">page-1</a></li>
          <li class="tabitem"><a href="javascript:void(0);" class="tab">page-2</a></li>
          <li class="tabitem"><a href="javascript:void(0);" class="tab">page-3</a></li>
        </ul>
      </div>
      `
      }}
    </UicCode>


    <h2 class="uic-title">Tab Contents</h2>
    <div class="uic-desc">
      .tab 과 .tabpanel 의 [data-name] 을 같은 값으로 연결.

    </div>
    <div class="uic-preview">
      <div class="tabnav">
        <ul class="tablist" role="tablist">
          <li class="tabitem is-active" role="none"><button type="button" class="tab" role="tab" data-name="tab-a1">tab-a1</button></li>
          <li class="tabitem" role="none"><button type="button" class="tab" role="tab" data-name="tab-a2">tab-a2</button></li>
          <li class="tabitem" role="none"><a href="javascript:void(0);" class="tab" role="tab" data-name="tab-a3"> tab-a3</a></li>
          <!-- <li class="tabitem" role="none"><a href="javascript:void(0);" class="tab" role="tab" data-name="tab-a5" disabled>dissabeld</a></li> -->
        </ul>
      </div>

      <div class="tabcontent">
        <div class="tabpanel is-active" role="tabpanel" data-name="tab-a1">
          tabpanel-a1<br>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto nam animi omnis, illo itaque ea eligendi? Architecto tempore, iure dignissimos expedita cumque officia necessitatibus. Tempore voluptatibus saepe quia eligendi natus!
        </div>
        <div class="tabpanel" role="tabpanel" data-name="tab-a2">
          tabpanel-a2<br>
          <input type="text"><br>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni aut explicabo nam, cupiditate eum modi qui ipsam autem consequuntur vitae! Error architecto quae id, consequuntur repellat, dolorum quia earum nulla vero vel saepe quis veritatis cum nobis quasi! Eveniet odit praesentium molestiae quis illo sint nesciunt quidem eaque, libero repellendus reprehenderit dolor impedit ducimus excepturi suscipit doloribus est autem ratione mollitia facere cumque! Eligendi veniam similique unde expedita accusantium ipsam vero distinctio eveniet molestias officia optio corporis omnis, vel aliquid maxime cumque dicta hic veritatis voluptas. Necessitatibus, qui tempore odio doloribus sed fugit maiores quibusdam, cupiditate ad iure expedita veniam?
        </div>
        <div class="tabpanel" role="tabpanel" data-name="tab-a3">
          tabpanel-a3<br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, error blanditiis totam dolorum repudiandae quos ducimus hic. Quam saepe at sint libero earum illum officiis nisi architecto. Repellat aliquam illum, at odit impedit consectetur voluptates debitis iusto asperiores quas perspiciatis omnis voluptatum nihil quos dignissimos consequatur? Adipisci aperiam iste fuga, esse, reprehenderit nisi earum ea porro reiciendis omnis, dolorem numquam repellat expedita voluptas harum odit. Dolorem odio magnam odit sequi, animi, dolorum ullam vitae officia, adipisci rerum eaque reprehenderit hic optio ex quidem ipsum facere doloremque. Laboriosam eveniet nemo esse quidem animi temporibus accusamus error blanditiis velit, reiciendis nulla obcaecati hic debitis ratione odit fugiat porro enim itaque quod, non excepturi sapiente? Sit dolor porro obcaecati voluptate, quos adipisci. Aspernatur?
        </div>
        <!-- <div class="tabpanel" role="tabpanel" data-name="tab-a4">444</div> -->
        <!-- <div class="tabpanel" role="tabpanel" data-name="tab-a5">555</div> -->
      </div>

      <br>
      <br>

      <div class="tabnav">
        <ul class="tablist" role="tablist">
          <li class="tabitem is-active" role="none"><button type="button" class="tab" role="tab" data-name="tab-b1">tab-b1</button></li>
          <li class="tabitem" role="none"><button type="button" class="tab" role="tab" data-name="tab-b2">tab-b2</button></li>
          <li class="tabitem" role="none"><a href="javascript:void(0);" class="tab" role="tab" data-name="tab-b3">tab-b3</a></li>
          <li class="tabitem" role="none"><a href="javascript:void(0);" class="tab" role="tab" data-name="tab-b4" disabled>disabled</a></li>
        </ul>
      </div>

      <div class="tabcontent">
        <div class="tabpanel is-active" role="tabpanel" data-name="tab-b1">
          tabpanel-b1<br>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto nam animi omnis, illo itaque ea eligendi? Architecto tempore, iure dignissimos expedita cumque officia necessitatibus. Tempore voluptatibus saepe quia eligendi natus!
        </div>
        <div class="tabpanel" role="tabpanel" data-name="tab-b2">
          tabpanel-b2<br>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni aut explicabo nam, cupiditate eum modi qui ipsam autem consequuntur vitae! Error architecto quae id, consequuntur repellat, dolorum quia earum nulla vero vel saepe quis veritatis cum nobis quasi! Eveniet odit praesentium molestiae quis illo sint nesciunt quidem eaque, libero repellendus reprehenderit dolor impedit ducimus excepturi suscipit doloribus est autem ratione mollitia facere cumque! Eligendi veniam similique unde expedita accusantium ipsam vero distinctio eveniet molestias officia optio corporis omnis, vel aliquid maxime cumque dicta hic veritatis voluptas. Necessitatibus, qui tempore odio doloribus sed fugit maiores quibusdam, cupiditate ad iure expedita veniam?
        </div>
        <div class="tabpanel" role="tabpanel" data-name="tab-b3">
          tabpanel-b3<br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, error blanditiis totam dolorum repudiandae quos ducimus hic. Quam saepe at sint libero earum illum officiis nisi architecto. Repellat aliquam illum, at odit impedit consectetur voluptates debitis iusto asperiores quas perspiciatis omnis voluptatum nihil quos dignissimos consequatur? Adipisci aperiam iste fuga, esse, reprehenderit nisi earum ea porro reiciendis omnis, dolorem numquam repellat expedita voluptas harum odit. Dolorem odio magnam odit sequi, animi, dolorum ullam vitae officia, adipisci rerum eaque reprehenderit hic optio ex quidem ipsum facere doloremque. Laboriosam eveniet nemo esse quidem animi temporibus accusamus error blanditiis velit, reiciendis nulla obcaecati hic debitis ratione odit fugiat porro enim itaque quod, non excepturi sapiente? Sit dolor porro obcaecati voluptate, quos adipisci. Aspernatur?
        </div>
        <div class="tabpanel" role="tabpanel" data-name="tab-b4">
          tabpanel-b4<br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, error blanditiis totam dolorum repudiandae quos ducimus hic. Quam saepe at sint libero earum illum officiis nisi architecto. Repellat aliquam illum, at odit impedit consectetur voluptates debitis iusto asperiores quas perspiciatis omnis voluptatum nihil quos dignissimos consequatur? Adipisci aperiam iste fuga, esse, reprehenderit nisi earum ea porro reiciendis omnis, dolorem numquam repellat expedita voluptas harum odit. Dolorem odio magnam odit sequi, animi, dolorum ullam vitae officia, adipisci rerum eaque reprehenderit hic optio ex quidem ipsum facere doloremque. Laboriosam eveniet nemo esse quidem animi temporibus accusamus error blanditiis velit, reiciendis nulla obcaecati hic debitis ratione odit fugiat porro enim itaque quod, non excepturi sapiente? Sit dolor porro obcaecati voluptate, quos adipisci. Aspernatur?
        </div>
      </div>

    </div>
    <UicCode>
      {{
        `
      <div class="tabnav">
        <ul class="tablist" role="tablist">
          <li class="tabitem is-active" role="none"><button type="button" class="tab" role="tab" data-name="tab-a1">tab-a1</button></li>
          <li class="tabitem" role="none"><button type="button" class="tab" role="tab" data-name="tab-a2">tab-a2</button></li>
          <li class="tabitem" role="none"><button type="button" class="tab" role="tab" data-name="tab-a3">tab-a3</button></li>
          <li class="tabitem" role="none"><button type="button" class="tab" role="tab" data-name="tab-a4">tab-a4</button></li>
        </ul>
      </div>

      <div class="tabcontent">
        <div class="tabpanel is-active" role="tabpanel" data-name="tab-a1"></div>
        <div class="tabpanel" role="tabpanel" data-name="tab-a2"></div>
        <div class="tabpanel" role="tabpanel" data-name="tab-a3"></div>
        <div class="tabpanel" role="tabpanel" data-name="tab-a4"></div>
      </div>
      `
      }}
    </UicCode>


    <h2 class="uic-title">Full</h2>
    <div class="uic-preview">
      <div class="tabnav full">
        <ul class="tablist" role="tablist">
          <li class="tabitem is-active" role="none"><button type="button" class="tab" role="tab" data-name="tab-c1">tab-c1</button></li>
          <li class="tabitem" role="none"><button type="button" class="tab" role="tab" data-name="tab-c2">tab-c2</button></li>
          <li class="tabitem" role="none"><button type="button" class="tab" role="tab" data-name="tab-c3">tab-c3</button></li>
        </ul>
      </div>

      <div class="tabcontent">
        <div class="tabpanel is-active" role="tabpanel" data-name="tab-c1">tabpanel-c1</div>
        <div class="tabpanel" role="tabpanel" data-name="tab-c2">tabpanel-c2</div>
        <div class="tabpanel" role="tabpanel" data-name="tab-c3">tabpanel-c3</div>
      </div>
    </div>
    <UicCode>
      {{
        `
      <div class="tabnav full">
        ...
      </div>
      `
      }}
    </UicCode>

    <h2 class="uic-title">Center</h2>
    <div class="uic-preview">
      <div class="tabnav center">
        <ul class="tablist" role="tablist">
          <li class="tabitem is-active" role="none"><button type="button" class="tab" role="tab" data-name="tab-d1">tab-d1</button></li>
          <li class="tabitem" role="none"><button type="button" class="tab" role="tab" data-name="tab-d2">tab-d2</button></li>
          <li class="tabitem" role="none"><button type="button" class="tab" role="tab" data-name="tab-d3">tab-d3</button></li>
        </ul>
      </div>
      <div class="tabcontent">
        <div class="tabpanel is-active" role="tabpanel" data-name="tab-d1">tabpanel-d1</div>
        <div class="tabpanel" role="tabpanel" data-name="tab-d2">tabpanel-d2</div>
        <div class="tabpanel" role="tabpanel" data-name="tab-d3">tabpanel-d3</div>
      </div>
    </div>
    <UicCode>
      {{
        `
      <div class="tabnav center">
        ...
      </div>
      `
      }}
    </UicCode>

    <h2 class="uic-title">Scroll</h2>
    <div class="uic-preview">
      <div class="tabnav full">
        <ul class="tablist" role="tablist">
          <li class="tabitem is-active" role="none"><button type="button" class="tab" role="tab" data-name="tab-e1">tab-e1</button></li>
          <li class="tabitem" role="none"><button type="button" class="tab" role="tab" data-name="tab-e2">tab-e2</button></li>
          <li class="tabitem" role="none"><button type="button" class="tab" role="tab" data-name="tab-e3">tab-e3</button></li>
          <li class="tabitem" role="none"><button type="button" class="tab" role="tab" data-name="tab-e4">tab-e4</button></li>
          <li class="tabitem" role="none"><button type="button" class="tab" role="tab" data-name="tab-e5">tab-e5</button></li>
          <li class="tabitem" role="none"><button type="button" class="tab" role="tab" data-name="tab-e6">tab-e6</button></li>
          <li class="tabitem" role="none"><button type="button" class="tab" role="tab" data-name="tab-e7">tab-e7</button></li>
          <li class="tabitem" role="none"><button type="button" class="tab" role="tab" data-name="tab-e8">tab-e8</button></li>
          <li class="tabitem" role="none"><button type="button" class="tab" role="tab" data-name="tab-e9">tab-e9</button></li>
          <li class="tabitem" role="none"><button type="button" class="tab" role="tab" data-name="tab-e10">tab-e10</button></li>
        </ul>
      </div>

      <div class="tabcontent">
        <div class="tabpanel is-active" role="tabpanel" data-name="tab-e1">tabpanel-e1</div>
        <div class="tabpanel" role="tabpanel" data-name="tab-e2">tabpanel-e2</div>
        <div class="tabpanel" role="tabpanel" data-name="tab-e3">tabpanel-e3</div>
        <div class="tabpanel" role="tabpanel" data-name="tab-e4">tabpanel-e4</div>
        <div class="tabpanel" role="tabpanel" data-name="tab-e5">tabpanel-e5</div>
        <div class="tabpanel" role="tabpanel" data-name="tab-e6">tabpanel-e6</div>
        <div class="tabpanel" role="tabpanel" data-name="tab-e7">tabpanel-e7</div>
        <div class="tabpanel" role="tabpanel" data-name="tab-e8">tabpanel-e8</div>
        <div class="tabpanel" role="tabpanel" data-name="tab-e9">tabpanel-e9</div>
        <div class="tabpanel" role="tabpanel" data-name="tab-e10">tabpanel-e10</div>
      </div>
    </div>

  </div>
</template>

<script setup>
import UicCode from '@/components/UicCode.vue';
import { onMounted, onUnmounted } from 'vue';
import { tab } from '@/assets/js/ui';

onMounted(() => {
  tab.init();
});

onUnmounted(() => {
  tab.unInit();
});
</script>

<style lang="scss" scoped></style>
