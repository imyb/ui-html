<template>
  <header class="header">
    <button type="button" ref="sidebarBtn" class="sidebar-btn" :class="{ 'is-open' : isOpenSidebar }" @click="handleClickSidebarBtn" aria-label="sidebar toggle button">
       <span></span><span></span><span></span>
    </button>
    <h1 class="logo"><RouterLink to="/">UI Comonent</RouterLink></h1>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import useSidebar from '@/hooks/useSidebar';

const sidebarBtn = ref(null)

const { isOpenSidebar, toggleSidebar , sidebarBtnRef } = useSidebar();

const handleClickSidebarBtn = () => {
  toggleSidebar();
};

onMounted(() => {
  sidebarBtnRef.value = sidebarBtn.value;
});
</script>

<style lang="scss" scoped>

</style>