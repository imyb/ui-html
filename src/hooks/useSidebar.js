import { ref } from 'vue';

const isOpenSidebar = ref(false);
const sidebarRef = ref(null);
const sidebarNavRef = ref(null);
const sidebarBtnRef = ref(null);

const useSidebar = () => {
  const openSidebar = () => {
    isOpenSidebar.value = true;
    document.documentElement.classList.add('sidebar-open');

    // if (sidebarRef.value) {
    //   sidebarRef.value.focus();
    // }
  };

  const closeSidebar = () => {
    isOpenSidebar.value = false;
    document.documentElement.classList.remove('sidebar-open');

    // if (sidebarBtnRef.value) {
    //   sidebarBtnRef.value.focus();
    // }
  };

  const toggleSidebar = () => {
    if (isOpenSidebar.value) {
      closeSidebar();
    } else {
      openSidebar();
    }
  };

  return {
    isOpenSidebar,
    sidebarRef,
    sidebarNavRef,
    sidebarBtnRef,
    toggleSidebar,
    openSidebar,
    closeSidebar,
  };
};

export default useSidebar;
