<template>
  <aside ref="sidebar" class="sidebar" :class="{ 'is-open': isOpenSidebar }" tabindex="-1">
    <nav ref="sidebarNav" class="sidebar-nav">
      <ul>
        <li
          v-for="item in sidebarNavItems"
          :key="item.name"
          :class="{ 'is-active': isActive(item.path) }"
        >
          <span v-if="item.disabled" class="link disabled">{{ item.name }}</span>
          <router-link v-else :to="item.path" @click="handleClickLink" class="link">{{
            item.name
          }}</router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { watch, ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import sidebarNavItems from '@/router/sidebarNavItems'
import useSidebar from '@/hooks/useSidebar'

const route = useRoute()
const sidebar = ref(null)
const sidebarNav = ref(null)

const { isOpenSidebar, closeSidebar, sidebarRef, sidebarNavRef, sidebarBtnRef } = useSidebar()

onMounted(() => {
  sidebarRef.value = sidebar.value
  sidebarNavRef.value = sidebarNav.value
})

const isActive = (path) => {
  return route.path === path
}

const handleClickLink = () => {
  closeSidebar()
}

const handleClickOutside = (event) => {
  if (
    sidebarNavRef.value &&
    !sidebarNavRef.value.contains(event.target) &&
    sidebarBtnRef.value &&
    !sidebarBtnRef.value.contains(event.target)
  ) {
    closeSidebar()
  }
}

watch(isOpenSidebar, () => {
  if (isOpenSidebar.value) {
    document.addEventListener('click', handleClickOutside)
  } else {
    document.removeEventListener('click', handleClickOutside)
  }
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style lang="scss" scoped>
// .v-enter-active {
//   transition: transform 0.3s;
// }
// .v-enter-from {
//   transform: translateX(-100%);
// }
// .v-enter-to {
//   transform: translateX(0);
// }

// .v-leave-active {
//   transition: transform 0.3s;
// }
// .v-leave-from {
//   transform: translateX(0);
// }
// .v-leave-to {
//   transform: translateX(-100%);
// }
</style>
