const uiTab = function () {
  const SELECTOR = {
    TABLIST: '[role="tablist"]',
    TAB: '[role="tab"]',
    TABPANEL: '[role="tabpanel"]',
  };

  const initTabLists = [];
  const initTabs = [];

  const handleClickTab = (e) => {
    changeTab(e.target);
  };

  const handleKeydownTabList = (e) => {
    keyboardTabList(e);
  };

  const init = () => {
    if (!document.querySelectorAll(SELECTOR.TAB).length) {
      return;
    }

    document.querySelectorAll(SELECTOR.TABLIST).forEach((tablist, index) => {
      if (initTabLists.length && initTabLists[index] == tablist) {
        return;
      }

      tablist.addEventListener('keydown', handleKeydownTabList);

      initTabLists.push(tablist);
    });

    document.querySelectorAll(SELECTOR.TAB).forEach((tab, index) => {
      if (initTabs.length && initTabs[index] === tab) {
        return;
      }

      setupTab(tab);

      tab.addEventListener('click', handleClickTab);

      initTabs.push(tab);
    });
  };

  const unInit = () => {
    initTabLists.forEach((tablist) => {
      tablist.removeEventListener('keydown', handleKeydownTabList);
    });

    initTabs.forEach((tab) => {
      tab.removeEventListener('click', handleClickTab);
    });

    initTabLists.length = 0;
    initTabs.length = 0;
  };

  const setupTab = (tab) => {
    const tabName = tab.dataset.name;
    const tabItem = tab.parentNode;
    const tabPanel = getTabPanelElement(tab);

    if (tabName && tabPanel) {
      if (!tab.id) {
        tab.id = '___TAB___' + tabName;
      }

      if (!tabPanel.id) {
        tabPanel.id = '___TABPANEL___' + tabName;
      }

      tab.setAttribute('aria-controls', tabPanel.id);
      tabPanel.setAttribute('aria-labelledby', tab.id);
    }

    if (tabItem.classList.contains('is-active')) {
      openTab(tab);
    } else {
      closeTab(tab);
    }
  };

  const getTabPanelElement = (tab) => {
    return Array.from(document.querySelectorAll(SELECTOR.TABPANEL)).filter(
      (tabpanel) => tabpanel.dataset.name === tab.dataset.name
    )[0];
  };

  const changeTab = (tab) => {
    const tabList = tab.closest(SELECTOR.TABLIST);
    const tabItem = tab.parentNode;
    const tabPanel = getTabPanelElement(tab);

    if (tabItem.classList.contains('is-active')) {
      return;
    }

    if (tab.hasAttribute('disabled')) {
      return;
    }

    if (!tabPanel) {
      return;
    }

    openTab(tab);
    scrollTab(tab);

    tabList.querySelectorAll(SELECTOR.TAB).forEach((el) => {
      if (el !== tab) {
        closeTab(el);
      }
    });
  };

  const openTab = (tab) => {
    const tabItem = tab.parentNode;
    const tabPanel = getTabPanelElement(tab);

    tab.tabIndex = 0;
    tab.setAttribute('aria-selected', true);
    tabItem.classList.add('is-active');

    if (tabPanel) {
      tabPanel.classList.add('is-active');
      tabPanel.setAttribute('aria-hidden', false);
    }
  };

  const closeTab = (tab) => {
    const tabItem = tab.parentNode;
    const tabPanel = getTabPanelElement(tab);

    tab.tabIndex = -1;
    tab.setAttribute('aria-selected', false);
    tabItem.classList.remove('is-active');

    if (tabPanel) {
      tabPanel.classList.remove('is-active');
      tabPanel.setAttribute('aria-hidden', true);
    }
  };

  const keyboardTabList = (event) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      const tab = event.target;
      const tabList = tab.closest(SELECTOR.TABLIST);
      const tabItem = tab.parentNode;
      const tabItems = Array.from(tabList.children);
      const enabledTabItems = tabItems.filter(
        (el) => !el.firstElementChild.hasAttribute('disabled')
      );

      let prevIndex = enabledTabItems.indexOf(tabItem);
      let activeIndex = 0;

      if (event.key === 'ArrowRight') {
        activeIndex = prevIndex + 1;

        if (activeIndex >= enabledTabItems.length) {
          activeIndex = 0;
        }
      }

      if (event.key === 'ArrowLeft') {
        activeIndex = prevIndex - 1;

        if (activeIndex < 0) {
          activeIndex = enabledTabItems.length - 1;
        }
      }

      enabledTabItems[activeIndex].firstElementChild.focus();
      enabledTabItems[activeIndex].firstElementChild.tabIndex = 0;
      enabledTabItems.forEach((el, index) => {
        if (index !== activeIndex) {
          el.firstElementChild.tabIndex = -1;
        }
      });
    }
  };

  const scrollTab = (tab) => {
    const tabItem = tab.parentNode;
    const tabList = tab.closest(SELECTOR.TABLIST);
    const tabNav = tabList.parentNode;

    let tabItemWidth = 0;
    let tabItemOffsetLeft = 0;
    let scrollLeft = 0;

    if (tabNav.clientWidth >= tabList.offsetWidth) {
      return;
    }

    tabItemWidth =
      tabItem.offsetWidth +
      parseFloat(window.getComputedStyle(tabItem).marginLeft) +
      parseFloat(window.getComputedStyle(tabItem).marginRight);

    tabItemOffsetLeft =
      tabItem.offsetLeft -
      parseFloat(window.getComputedStyle(tabItem).marginLeft);

    scrollLeft = tabItemOffsetLeft - tabNav.clientWidth / 2 + tabItemWidth / 2;

    tabNav.scrollTo({
      left: scrollLeft,
      behavior: 'smooth',
    });
  };

  return {
    init,
    unInit,
    change: changeTab,
  };
};

export default uiTab;
