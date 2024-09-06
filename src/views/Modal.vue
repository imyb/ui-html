<!-- prettier-ignore -->
<template>
  <div class="uic-body">
    <h1 class="uic-title">Modal</h1>

    <h2 class="uic-title">Default</h2>
    <div class="uic-preview">

      <button type="button" class="btn" @click="openModal('#modal-default')">open modal</button>

      <div class="modal" id="modal-default" data-ui="modal">
        <div class="modal-window">
          <div class="modal-header">
            <h1 class="modal-title" data-modal="label">modal title</h1>
            <button type="button" class="modal-close" data-modal="close" aria-label="close"></button>
          </div>
          <div class="modal-body">
            <div class="modal-content">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Est eveniet dolores quo repellendus deserunt,
              <div class="input-text"><input type="text" placeholder="input text" /></div><br>
              cumque earum nihil mollitia? Eveniet fuga officiis quas maxime culpa exercitationem a, nobis tempore quo deserunt!</p>
              <div class="input-text"><input type="text" placeholder="input text" /></div><br>
              <button type="button" class="btn" @click="openModal('#modal-xs')">open modal xs</button>
            </div>
          </div>
          <div class="modal-footer">
            modal footer
          </div>
        </div>
      </div>

    </div>
    <UicCode>
      {{
        `
      <div class="modal" id="modal-default" data-ui="modal">
        <div class="modal-window">
          <div class="modal-header">
            <h1 class="modal-title" data-modal="label">modal title</h1>
            <button type="button" class="modal-close" data-modal="close"></button>
          </div>
          <div class="modal-body">
            <div class="modal-content">
              ...
            </div>
          </div>
          <div class="modal-footer">modal footer</div>
        </div>
      </div>
      `
      }}
    </UicCode>



    <h2 class="uic-title">Size</h2>
    <div class="uic-preview">
      <button type="button" class="btn" @click="openModal('#modal-xs')">open modal xs</button>
      <button type="button" class="btn" @click="openModal('#modal-sm')">open modal sm</button>
      <button type="button" class="btn" @click="openModal('#modal-md')">open modal md</button>
      <button type="button" class="btn" @click="openModal('#modal-lg')">open modal lg</button>
      <button type="button" class="btn" @click="openModal('#modal-xl')">open modal xl</button>

      <div class="modal xs" id="modal-xs" data-ui="modal">
        <div class="modal-window">
          <div class="modal-header">
            <h1 class="modal-title" data-modal="label">modal xs</h1>
            <button type="button" class="modal-close" data-modal="close" aria-label="close"></button>
          </div>
          <div class="modal-body">
            <div class="modal-content">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div class="modal-footer">
            modal footer
          </div>
        </div>
      </div>

      <div class="modal sm" id="modal-sm" data-ui="modal">
        <div class="modal-window">
          <div class="modal-header">
            <h1 class="modal-title" data-modal="label">modal sm</h1>
            <button type="button" class="modal-close" data-modal="close" aria-label="close"></button>
          </div>
          <div class="modal-body">
            <div class="modal-content">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div class="modal-footer">
            modal footer
          </div>
        </div>
      </div>

      <div class="modal md" id="modal-md" data-ui="modal">
        <div class="modal-window">
          <div class="modal-header">
            <h1 class="modal-title" data-modal="label">modal md</h1>
            <button type="button" class="modal-close" data-modal="close" aria-label="close"></button>
          </div>
          <div class="modal-body">
            <div class="modal-content">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div class="modal-footer">
            modal footer
          </div>
        </div>
      </div>

      <div class="modal lg" id="modal-lg" data-ui="modal">
        <div class="modal-window">
          <div class="modal-header">
            <h1 class="modal-title" data-modal="label">modal lg</h1>
            <button type="button" class="modal-close" data-modal="close" aria-label="close"></button>
          </div>
          <div class="modal-body">
            <div class="modal-content">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div class="modal-footer">
            modal footer
          </div>
        </div>
      </div>

      <div class="modal xl" id="modal-xl" data-ui="modal">
        <div class="modal-window">
          <div class="modal-header">
            <h1 class="modal-title" data-modal="label">modal xl</h1>
            <button type="button" class="modal-close" data-modal="close" aria-label="close"></button>
          </div>
          <div class="modal-body">
            <div class="modal-content">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div class="modal-footer">
            modal footer
          </div>
        </div>
      </div>

    </div>
    <UicCode>
      {{
        `
      <div class="modal xs" data-ui="modal">
      ...
      </div>

      <div class="modal sm" data-ui="modal">
      ...
      </div>

      <div class="modal md" data-ui="modal">
      ...
      </div>

      <div class="modal lg" data-ui="modal">
      ...
      </div>

      <div class="modal xl" data-ui="modal">
      ...
      </div>
      `
      }}
    </UicCode>


    <h2 class="uic-title">Full Screen</h2>
    <div class="uic-preview">
      <button type="button" class="btn" @click="openModal('#modal-fullscreen')">open modal full screen</button>

      <div class="modal fullscreen" id="modal-fullscreen" data-ui="modal">
        <div class="modal-window">
          <div class="modal-header">
            <h1 class="modal-title" data-modal="label">modal fullscreen</h1>
            <button type="button" class="modal-close" data-modal="close" aria-label="close"></button>
          </div>
          <div class="modal-body">
            <div class="modal-content">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Est eveniet dolores quo repellendus deserunt,
               cumque earum nihil mollitia? Eveniet fuga officiis quas maxime culpa exercitationem a, nobis tempore quo deserunt!</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Est eveniet dolores quo repellendus deserunt,
               cumque earum nihil mollitia? Eveniet fuga officiis quas maxime culpa exercitationem a, nobis tempore quo deserunt!</p>
               <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Est eveniet dolores quo repellendus deserunt,
               cumque earum nihil mollitia? Eveniet fuga officiis quas maxime culpa exercitationem a, nobis tempore quo deserunt!</p>
            </div>
          </div>
          <div class="modal-footer">
            modal footer
          </div>
        </div>
      </div>
    </div>
    <UicCode>
      {{
        `
      <div class="modal fullscreen" data-ui="modal">
      ...
      </div>
      `
      }}
    </UicCode>


    <h2 class="uic-title">Bottom Sheet</h2>
    <div class="uic-preview">
      <button type="button" class="btn" @click="openModal('#modal-bottomsheet')">open modal bottom sheet</button>

      <div class="modal bottomsheet" id="modal-bottomsheet" data-ui="modal">
        <div class="modal-window">
          <div class="modal-header">
            <h1 class="modal-title" data-modal="label">modal bottomsheet</h1>
            <button type="button" class="modal-close" data-modal="close" aria-label="close"></button>
          </div>
          <div class="modal-body">
            <div class="modal-content">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div class="modal-footer">
            modal footer
          </div>
        </div>
      </div>
    </div>
    <UicCode>
      {{
        `
      <div class="modal bottomsheet" data-ui="modal">
      ...
      </div>
      `
      }}
    </UicCode>



    <h2 class="uic-title">Scroll</h2>
    <div class="uic-preview">

      <button type="button" class="btn" @click="openModal('#modal-scroll')">open modal scroll</button>

      <div class="modal scroll" id="modal-scroll" data-ui="modal">
        <div class="modal-window">
          <div class="modal-header">
            <h1 class="modal-title" data-modal="label">modal scroll</h1>
            <button type="button" class="modal-close" data-modal="close" aria-label="close"></button>
          </div>
          <div class="modal-body">
            <div class="modal-content">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Est eveniet dolores quo repellendus deserunt,
               cumque earum nihil mollitia? Eveniet fuga officiis quas maxime culpa exercitationem a, nobis tempore quo deserunt!</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Est eveniet dolores quo repellendus deserunt,
               cumque earum nihil mollitia? Eveniet fuga officiis quas maxime culpa exercitationem a, nobis tempore quo deserunt!</p>
               <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Est eveniet dolores quo repellendus deserunt,
               cumque earum nihil mollitia? Eveniet fuga officiis quas maxime culpa exercitationem a, nobis tempore quo deserunt!</p>
            </div>
          </div>
          <div class="modal-footer">
            modal footer
          </div>
        </div>
      </div>
    </div>
    <UicCode>
      {{
        `
      <div class="modal scroll" data-ui="modal">
      ...
      </div>
      `
      }}
    </UicCode>



    <h2 class="uic-title">Lock outside</h2>
    <div class="uic-preview">

      <button type="button" class="btn" @click="openModal('#modal-lock')">open modal lock outside</button>

      <div class="modal lock" id="modal-lock" data-ui="modal">
        <div class="modal-window">
          <div class="modal-header">
            <h1 class="modal-title" data-modal="label">modal lock outside</h1>
            <button type="button" class="modal-close" data-modal="close" aria-label="close"></button>
          </div>
          <div class="modal-body">
            <div class="modal-content">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Est eveniet dolores quo repellendus deserunt,
               cumque earum nihil mollitia? Eveniet fuga officiis quas maxime culpa exercitationem a, nobis tempore quo deserunt!</p>
            </div>
          </div>
          <div class="modal-footer">
            modal footer
          </div>
        </div>
      </div>

    </div>
    <UicCode>
      {{
        `
      <div class="modal lock" data-ui="modal">
        ...
      </div>
      `
      }}
    </UicCode>


    <h2 class="uic-title">Event</h2>
    <div class="uic-preview">
      <button type="button" class="btn" @click="openModal('#modal-default')">open modal</button>
    </div>
    <UicCode lang="javascript">
      {{
        `
        document.querySelector('#modal-default').addEventListener('modal:opened', (event) => {
          // 모달 열기 완전히 완료 후 실행
          console.log('opened : ', event.target.id);
        });

        document.querySelector('#modal-default').addEventListener('modal:closed', (event) => {
          // 모달 닫기 완전히 완료 후 실행
          console.log('closed : ', event.target.id);
        });


        document.querySelector('#modal-default').addEventListener('modal:open', (event) => {
          // 모달 열기 호출 후 즉시 실행
          console.log('open : ', event.target.id);
        });

        document.querySelector('#modal-default').addEventListener('modal:close', (event) => {
          // 모달 닫기 호출 후 즉시 실행
          console.log('close : ', event.target.id);
        });
      `
      }}
    </UicCode>


    <!-- <div class="test">
      <button type="button">#modal-a : open</button>
      <button type="button">#modal-b : open</button>
      <button type="button">#modal-c : open</button>
      <br>
      <button type="button">#modal-a : close</button>
      <button type="button">#modal-b : close</button>
      <button type="button">#modal-c : close</button>
    </div> -->

  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import UicCode from '@/components/UicCode.vue';
import { modal } from '@/assets/js/ui';

const openModal = (modalSelector) => {
  modal.open(modalSelector);
};

onMounted(() => {
  document.querySelector('#modal-default').addEventListener('modal:opened', (event) => {
    // 모달 열기 완전히 완료 후 실행
    console.log('opened : ', event.target.id);
  });

  document.querySelector('#modal-default').addEventListener('modal:closed', (event) => {
    // 모달 닫기 완전히 완료 후 실행
    console.log('closed : ', event.target.id);
  });

  document.querySelector('#modal-default').addEventListener('modal:open', (event) => {
    // 모달 열기 호출 후 즉시 실행
    console.log('open : ', event.target.id);
  });

  document.querySelector('#modal-default').addEventListener('modal:close', (event) => {
    // 모달 닫기 호출 후 즉시 실행
    console.log('close : ', event.target.id);
  });

});
</script>

<style lang="scss" scoped>
// .test {
//   z-index: 9999999;
//   position: fixed;
//   top: 0;
//   right: 0;
// }
</style>
