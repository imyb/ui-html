<template>
  <div class="wrapper">
    <Header></Header>

    <div class="body">
      <Sidebar></Sidebar>

      <div class="container">
        <div class="content">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from '@/layouts/Header.vue'
import Sidebar from '@/layouts/Sidebar.vue'
</script>

<style lang="scss" scoped>
</style>