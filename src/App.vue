<template>
  <component :is="layouts[route.meta.layout] || DefaultLayout">
    <RouterView />
  </component>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import MobileDetect from 'mobile-detect'
import useSidebar from '@/hooks/useSidebar'
import '@/assets/styles/style.scss'

const { closeSidebar } = useSidebar()

const route = useRoute()

const layouts = {
  DefaultLayout
}

const setDeviceDetect = () => {
  const md = new MobileDetect(window.navigator.userAgent)

  if (md.mobile()) {
    document.documentElement.classList.remove('pc')
    document.documentElement.classList.add('mobile')
  } else {
    document.documentElement.classList.remove('mobile')
    document.documentElement.classList.add('pc')

    closeSidebar()
  }
}

onMounted(() => {
  setDeviceDetect()

  window.addEventListener('resize', setDeviceDetect)
})

onUnmounted(() => {
  window.removeEventListener('resize', setDeviceDetect)
})
</script>

<style scoped></style>
