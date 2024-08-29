const uiTab = function () {
  const SELECTOR = {
    TABNAV: '[data-ui="tabnav"]',
    TABLIST: '[role="tablist"]',
    TAB: '[role="tab"]',
    TABPANEL: '[role="tabpanel"]',
  };

  /**
   * 탭 클릭
   * @param {clickEvent} e
   */
  const handleClickTab = (e) => {
    changeTab(e.target);
  };

  /**
   * 탭네비 키다운
   * @param {keydownEvent} e
   */
  const handleKeydownTabNav = (e) => {
    keyboardTabNav(e);
  };

  /**
   *  탭네비 포커스아웃
   * @param {focusoutEvent} e
   */
  const handleFocusoutTabNav = (e) => {
    focusoutTabNav(e);
  };

  /**
   * 탭네비 init
   */
  const init = () => {
    if (!document.querySelectorAll(SELECTOR.TABNAV).length) {
      return;
    }

    document.querySelectorAll(SELECTOR.TABNAV).forEach((tabNav) => {
      setupTabNav(tabNav);
    });
  };

  /**
   * 탭네비 설정
   * @param {HTMLElement} tabNav
   */
  const setupTabNav = (tabNav) => {
    if (typeof tabNav === 'string') {
      tabNav = document.querySelector(tabNav);
    }

    if (!tabNav || tabNav.dataset.ui !== 'tabnav') {
      console.error('tabNav : 유효한 DOM 요소인지 확인', tabNav);
      return;
    }

    tabNav.config = tabNav.config || { init: false };

    if (tabNav.config.init) {
      return;
    }

    tabNav.querySelectorAll(SELECTOR.TAB).forEach((tab) => {
      setupTab(tab);
    });

    tabNav.addEventListener('keydown', handleKeydownTabNav);
    tabNav.addEventListener('focusout', handleFocusoutTabNav);

    tabNav.config.init = true;
  };

  /**
   *  탭 설정
   * @param {HTMLElement} tab
   */
  const setupTab = (tab) => {
    if (typeof tab === 'string') {
      tab = document.querySelector(tab);
    }

    if (!tab || tab.getAttribute('role') !== 'tab') {
      console.error('tab : 유효한 DOM 요소인지 확인', tab);
      return;
    }

    tab.config = tab.config || { init: false };

    if (tab.config.init) {
      return;
    }

    const tabName = tab.dataset.name;
    const tabItem = tab.parentNode;
    const tabPanel = getTabPanelElement(tab);
    const isSelected = tabItem.classList.contains('is-active');

    if (!tabPanel) {
      console.warn(`연결 된 ${SELECTOR.TABPANEL} 요소 없음`, tab);
    }

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

    if (isSelected) {
      openTab(tab);
    } else {
      closeTab(tab);
    }

    tab.addEventListener('click', handleClickTab);

    tab.config.init = true;
  };

  /**
   * 탭과 연결 된 탭패널 요소 가져오기
   * @param {HTMLElement} tab
   * @returns {HTMLElement}
   */
  const getTabPanelElement = (tab) => {
    return document.querySelector(
      `${SELECTOR.TABPANEL}[data-name="${tab.dataset.name}"]`
    );
  };

  /**
   * 탭 변경
   * @param {HTMLElement} tab
   */
  const changeTab = (tab) => {
    if (typeof tab === 'string') {
      tab = document.querySelector(tab);
    }

    if (!tab || tab.getAttribute('role') !== 'tab') {
      console.error('tab : 유효한 DOM 요소인지 확인', tab);
      return;
    }

    const tabList = tab.closest(SELECTOR.TABLIST);
    const tabItem = tab.parentNode;
    const tabPanel = getTabPanelElement(tab);
    const isSelected = tabItem.classList.contains('is-active');
    const isDisabled = tab.hasAttribute('disabled');

    if (!tabList) {
      console.error(`${SELECTOR.TABLIST} : 유효한 DOM 요소인지 확인`, tabList);
      return;
    }

    if (isSelected || isDisabled) {
      return;
    }

    if (!tabPanel) {
      console.warn(`연결 된 ${SELECTOR.TABPANEL} 요소 없음`, tab);
    }

    openTab(tab);
    scrollTab(tab);

    tabList.querySelectorAll(SELECTOR.TAB).forEach((el) => {
      if (el !== tab) {
        closeTab(el);
      }
    });
  };

  /**
   * 탭 열기
   * @param {HTMLElement} tab
   */
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

  /**
   * 탭 닫기
   * @param {HTMLElement} tab
   */
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

  /**
   * 탭네비 키보드 제어
   * @param {keydownEvent} e
   */
  const keyboardTabNav = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();

      const tab = e.target;
      const tabList = tab.closest(SELECTOR.TABLIST);
      const tabItem = tab.parentNode;
      const tabItems = tabList && Array.from(tabList.children);
      const enabledTabItems =
        tabList &&
        tabItems.filter((el) => !el.firstElementChild.hasAttribute('disabled'));

      if (!tabList) {
        console.error(
          `${SELECTOR.TABLIST} : 유효한 DOM 요소인지 확인`,
          tabList
        );
        return;
      }

      let prevIndex = enabledTabItems.indexOf(tabItem);
      let activeIndex = 0;

      if (e.key === 'ArrowRight') {
        activeIndex = prevIndex + 1;

        if (activeIndex >= enabledTabItems.length) {
          activeIndex = 0;
        }
      }

      if (e.key === 'ArrowLeft') {
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

  /**
   * 탭네비 포커스될때 열려있는 탭으로 포커스 될 수 있도록 포커스아웃될때 탭의 tabindex 변경
   * @param {focusoutEvent} e
   */
  const focusoutTabNav = (e) => {
    const tabNav = e.currentTarget;

    if (!tabNav.contains(e.relatedTarget)) {
      tabNav.querySelectorAll(SELECTOR.TAB).forEach((tab) => {
        if (tab.getAttribute('aria-selected') === 'true') {
          tab.tabIndex = 0;
        } else {
          tab.tabIndex = -1;
        }
      });
    }
  };

  /**
   * 탭네비가 스크롤이 생기면 탭클릭시 위치 조정
   * @param {HTMLElement} tab
   */
  const scrollTab = (tab) => {
    const tabNav = tab.closest(SELECTOR.TABNAV);
    const tabList = tab.closest(SELECTOR.TABLIST);
    const tabItem = tab.parentNode;

    if (tabNav.clientWidth >= tabList.offsetWidth) {
      return;
    }

    const tabItemWidth =
      tabItem.offsetWidth +
      parseFloat(window.getComputedStyle(tabItem).marginLeft) +
      parseFloat(window.getComputedStyle(tabItem).marginRight);

    const tabItemOffsetLeft =
      tabItem.offsetLeft -
      parseFloat(window.getComputedStyle(tabItem).marginLeft);

    const scrollLeft =
      tabItemOffsetLeft - tabNav.clientWidth / 2 + tabItemWidth / 2;

    tabNav.scrollTo({
      left: scrollLeft,
      behavior: 'smooth',
    });
  };

  return {
    init,
    setupTab,
    setupTabNav,
    change: changeTab,
  };
};

export default uiTab;
