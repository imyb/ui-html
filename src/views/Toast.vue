<!-- prettier-ignore -->
<template>
  <div class="uic-body">
    <h1 class="uic-title">Toast</h1>

    <h2 class="uic-title">Default</h2>
    <div class="uic-preview">
      <button type="button" class="btn outline" @click="openToast('토스트 메세지 입니다.')">open toast</button>
    </div>
    <UicCode lang="javascript">
      {{
        `
      toast.open('토스트 메세지 입니다.');

      // 옵션
      toast.open('토스트 메세지 입니다.' {
        addClass: '',   // class추가
        addClose: false, // 닫기버튼
        stack: false,   // 토스트 쌓기
        timeout: 5000,  // 토스트 닫히는 시간
        onOpened: function() {}, // 열린 후 콜백
        onClosed: function() {}, // 닫힌 후 콜백
      });
      `
      }}
    </UicCode>

    <h2 class="uic-title">Add Class</h2>
    <div class="uic-preview">
      <button type="button" class="btn outline" @click="openToast('토스트 메세지 입니다. type2', {addClass: 'type2'})">open toast</button>
    </div>
    <UicCode lang="javascript">
      {{
        `
      toast.open('토스트 메세지 입니다.', {
        addClass: 'type2'
      });
      `
      }}
    </UicCode>


    <h2 class="uic-title">Add Close</h2>
    <div class="uic-preview">
      <button type="button" class="btn outline" @click="openToast('토스트 메세지 입니다.', {addClose: true})">open toast</button>
    </div>
    <UicCode lang="javascript">
      {{
        `
      toast.open('토스트 메세지 입니다.', {
        addClose: true
      });
      `
      }}
    </UicCode>

    <h2 class="uic-title">Timeout</h2>
    <div class="uic-desc">
      토스트 닫는 시간<br>
      default : 5000
    </div>
    <div class="uic-preview">
      <button type="button" class="btn outline" @click="openToast('토스트 메세지 입니다.', {timeout: 1000})">open toast</button>
    </div>
    <UicCode lang="javascript">
      {{
        `
      toast.open('토스트 메세지 입니다.', {
        timeout: 1000,
      });
      `
      }}
    </UicCode>

    <h2 class="uic-title">Stack</h2>
    <div class="uic-desc">
      토스트 쌓기
    </div>
    <div class="uic-preview">
      <button type="button" class="btn outline" @click="openToast('토스트 메세지 입니다.', {stack: true, addClose: true})">open toast</button>
    </div>
    <UicCode lang="javascript">
      {{
        `
      toast.open('토스트 메세지 입니다.', {
        stack: true
      });
      `
      }}
    </UicCode>


    <h2 class="uic-title">Close All</h2>
    <div class="uic-preview">
      <button type="button" class="btn outline" @click="closeToastAll()">close Toast All</button>
    </div>
    <UicCode lang="javascript">
      {{
        `
      toast.closeAll();
      `
      }}
    </UicCode>


    <h2 class="uic-title">Event</h2>
    <div class="uic-preview">
      <button type="button" class="btn outline" @click="openToast('토스트 메세지 입니다.', {
        onOpened : function() {
          console.log('opened')
        },
        onClosed : function() {
          console.log('closed')
        },
        addClose: false

      })">open toast</button>
    </div>
    <UicCode lang="javascript">
      {{
        `
      toast.open('토스트 메세지 입니다.' {
        onOpened: function() {
          console.log('opened')
        },
        onClosed: function() {
          console.log('closed')
        },
      });
      `
      }}
    </UicCode>
  </div>
</template>

<script setup>
import UicCode from '@/components/UicCode.vue';
import { toast } from '@/assets/js/ui';
import { onUnmounted } from 'vue';

const openToast = (msg, options) => {
  toast.open(msg, options);
};

const closeToastAll = () => {
  toast.closeAll();
};

onUnmounted(() => {
  toast.closeAll();
});
</script>

<style lang="scss" scoped></style>
