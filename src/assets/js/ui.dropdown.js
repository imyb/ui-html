const dropdown = () => {
  const SELECTOR = {
    DROPDOWN: '[data-ui="dropdown"]',
    DROPDOWN_TOGGLE: '[data-dropdown="toggle"]',
    DROPDOWN_MENU: '[data-dropdown="menu"]',
    DROPDOWN_MENUITEM: '.dropdown-item',
  };

  let manualDropdown = {};

  /**
   * 드롭다운 토글버튼 클릭
   * @param {clickEvent} e
   */
  const handleClickDropdownToggle = (e) => {
    const dropdown = e.target.closest(SELECTOR.DROPDOWN);

    toggleDropdown(dropdown);
  };

  /**
   * 드롭다운 아웃사이드 클릭
   * @param {clickEvent} e
   */
  const handleClickDropdownOutside = (e) => {
    document.querySelectorAll(SELECTOR.DROPDOWN).forEach((dropdown) => {
      if (dropdown.config && !dropdown.config.init) {
        return;
      }

      const dropdownToggle = dropdown.querySelector(SELECTOR.DROPDOWN_TOGGLE);
      const dropdownMenu = dropdown.querySelector(SELECTOR.DROPDOWN_MENU);
      const isExpanded = dropdownToggle.getAttribute('aria-expanded') == 'true';

      if (!isExpanded) {
        return;
      }

      if (
        dropdownToggle.contains(e.target) ||
        dropdownMenu.contains(e.target)
      ) {
        return;
      }

      // manual open 호출 시 : 다른 드롭다운이 열려있으면 닫힘
      if (
        manualDropdown.open &&
        manualDropdown.open === dropdown &&
        manualDropdown.activeElement === document.activeElement
      ) {
        return;
      }
      // manual close 호출 시 : 다른 다롭다운이 열려있어도 호출된 드롭다운만 닫힘
      if (
        manualDropdown.close &&
        manualDropdown.close !== dropdown &&
        manualDropdown.activeElement === document.activeElement
      ) {
        return;
      }

      closeDropdown(dropdown);
    });
  };

  /**
   * 드롭다운 오픈 시 스크롤
   */
  const handleScrollDropdownWindow = () => {
    document.querySelectorAll(SELECTOR.DROPDOWN).forEach((dropdown) => {
      if (dropdown.config && !dropdown.config.init) {
        return;
      }
      const dropdownToggle = dropdown.querySelector(SELECTOR.DROPDOWN_TOGGLE);
      const isExpanded = dropdownToggle.getAttribute('aria-expanded') == 'true';

      if (!isExpanded) {
        return;
      }

      updateDropdownDirection(dropdown, dropdown.state.direction);
    });
  };

  /**
   * 드롭다운 키보드 다운
   * @param {KeydownEvent} e
   */
  const handleKeydownDropdown = (e) => {
    keyboardDropdown(e);
  };

  /**
   * 드롭다운 init
   */
  const init = () => {
    if (!document.querySelectorAll(SELECTOR.DROPDOWN).length) {
      return;
    }

    document.querySelectorAll(SELECTOR.DROPDOWN).forEach((dropdown) => {
      setupDropdown(dropdown);
    });

    // let testHtml = `<div id="testbox" style="z-index: 9000000; position: fixed; top: 0; right: 0; min-width: 180px; padding: 10px; background: rgba(255, 255, 255, 0.7); font-size: 12px; pointer-events: none;"></div>`;
    // document.querySelector('#app').insertAdjacentHTML('afterbegin', testHtml);
  };

  /**
   * 드롭다운 설정
   * @param {HTMLElement} dropdown
   */
  const setupDropdown = (dropdown) => {
    if (typeof dropdown === 'string') {
      dropdown = document.querySelector(dropdown);
    }

    if (!dropdown || dropdown.dataset.ui !== 'dropdown') {
      console.error('dropdown : 유효한 DOM 요소인지 확인', dropdown);
      return;
    }

    dropdown.config = dropdown.config || {
      init: false,
      direction: {},
    };

    if (dropdown.config.init) {
      return;
    }

    dropdown.config.direction = {
      down: true,
      up: false,
      left: false,
      right: false,
      center: false,
      alignstart: true,
      alignend: false,
      full: false,
    };

    if (dropdown.dataset.direction) {
      dropdown.dataset.direction.split(',').forEach((direction) => {
        direction = direction.trim();
        if (dropdown.config.direction.hasOwnProperty(direction)) {
          dropdown.config.direction[direction] = true;
          dropdown.config.direction.down = dropdown.config.direction.up
            ? false
            : true;

          dropdown.config.direction.alignstart = dropdown.config.direction
            .alignend
            ? false
            : true;

          if (dropdown.config.direction.center) {
            dropdown.config.direction.left = false;
            dropdown.config.direction.right = false;
            dropdown.config.direction.alignstart = false;
            dropdown.config.direction.alignend = false;
            dropdown.config.direction.full = false;
          }

          if (dropdown.config.direction.full) {
            dropdown.config.direction.left = false;
            dropdown.config.direction.right = false;
            dropdown.config.direction.center = false;
            dropdown.config.direction.alignstart = false;
            dropdown.config.direction.alignend = false;
          }
        }
      });
    }

    dropdown.state = dropdown.state || {};
    dropdown.state.direction = Object.assign({}, dropdown.config.direction);

    const dropdownToggle = dropdown.querySelector(SELECTOR.DROPDOWN_TOGGLE);
    const dropdownMenu = dropdown.querySelector(SELECTOR.DROPDOWN_MENU);

    if (!dropdownToggle) {
      console.error(
        `${SELECTOR.DROPDOWN_TOGGLE} : 유효한 DOM 요소인지 확인`,
        dropdown
      );
      return;
    }

    if (!dropdownMenu) {
      console.error(
        `${SELECTOR.DROPDOWN_MENU} : 유효한 DOM 요소인지 확인`,
        dropdown
      );
      return;
    }

    dropdownToggle.setAttribute('aria-expanded', false);
    dropdownMenu.setAttribute('aria-hidden', true);

    dropdownToggle.addEventListener('click', handleClickDropdownToggle);

    dropdown.removeEventListener('keydown', handleKeydownDropdown);
    dropdown.addEventListener('keydown', handleKeydownDropdown);

    dropdown.config.init = true;
  };

  /**
   * 드롭다운 토글(열고닫기)
   * @param {HTMLElement} dropdown
   * @param {string} action
   * @returns
   */
  const toggleDropdown = (dropdown, action) => {
    if (typeof dropdown === 'string') {
      dropdown = document.querySelector(dropdown);
    }

    if (!dropdown || dropdown.dataset.ui !== 'dropdown') {
      console.error('dropdown : 유효한 DOM 요소인지 확인', dropdown);
      return;
    }

    const dropdownToggle = dropdown.querySelector(SELECTOR.DROPDOWN_TOGGLE);
    const dropdownMenu = dropdown.querySelector(SELECTOR.DROPDOWN_MENU);
    const isExpanded = dropdownToggle.getAttribute('aria-expanded') == 'true';

    if (action) {
      manualDropdown.activeElement = document.activeElement;

      if (action === 'open') {
        manualDropdown.open = dropdown;
        manualDropdown.close = null;

        openDropdown(manualDropdown.open);
      } else {
        manualDropdown.open = null;
        manualDropdown.close = dropdown;

        closeDropdown(manualDropdown.close);
      }
    } else {
      manualDropdown = {};

      if (isExpanded) {
        closeDropdown(dropdown);
      } else {
        openDropdown(dropdown);
      }
    }
  };

  /**
   * 드롭다운 열기
   * @param {HTMLElement} dropdown
   * @returns
   */
  const openDropdown = (dropdown) => {
    const dropdownToggle = dropdown.querySelector(SELECTOR.DROPDOWN_TOGGLE);
    const dropdownMenu = dropdown.querySelector(SELECTOR.DROPDOWN_MENU);
    const isExpanded = dropdownToggle.getAttribute('aria-expanded') == 'true';

    if (isExpanded) {
      return;
    }

    Object.keys(dropdown.config.direction).forEach((key) => {
      if (dropdown.config.direction[key]) {
        dropdown.classList.add(`drop-${key}`);
      }
    });

    dropdown.state.menuWidth = dropdownMenu.offsetWidth;
    dropdown.state.menuHeight = dropdownMenu.offsetHeight;

    updateDropdownDirection(dropdown, dropdown.config.direction);
    // dropdown.offsetHeight;
    dropdown.classList.add('is-expanded');

    dropdownToggle.setAttribute('aria-expanded', true);
    dropdownMenu.setAttribute('aria-hidden', false);

    const handleTransitionEnd = () => {
      dropdown.removeEventListener('transitionend', handleTransitionEnd);
    };
    dropdown.addEventListener('transitionend', handleTransitionEnd);

    const expandedDropdowns = Array.from(
      document.querySelectorAll(SELECTOR.DROPDOWN)
    ).filter((el) => el.classList.contains('is-expanded'));

    if (expandedDropdowns.length) {
      document.addEventListener('click', handleClickDropdownOutside);
      window.addEventListener('scroll', handleScrollDropdownWindow);
      window.addEventListener('resize', handleScrollDropdownWindow);
    }
  };

  /**
   * 드롭다운 닫기
   * @param {HTMLElement} dropdown
   */
  const closeDropdown = (dropdown) => {
    const dropdownToggle = dropdown.querySelector(SELECTOR.DROPDOWN_TOGGLE);
    const dropdownMenu = dropdown.querySelector(SELECTOR.DROPDOWN_MENU);
    const isExpanded = dropdownToggle.getAttribute('aria-expanded') == 'true';

    if (!isExpanded) {
      return;
    }

    dropdown.classList.remove('is-expanded');

    const handleTransitionEnd = () => {
      dropdownToggle.setAttribute('aria-expanded', false);
      dropdownMenu.setAttribute('aria-hidden', true);

      Object.keys(dropdown.config.direction).forEach((key) => {
        dropdown.classList.remove(`drop-${key}`);
      });

      dropdownMenu.style.transform = ``;
      dropdownMenu.style.right = ``;

      dropdown.removeEventListener('transitionend', handleTransitionEnd);
    };
    dropdown.addEventListener('transitionend', handleTransitionEnd);

    const expandedDropdowns = Array.from(
      document.querySelectorAll(SELECTOR.DROPDOWN)
    ).filter((el) => el.classList.contains('is-expanded'));

    if (!expandedDropdowns.length) {
      document.removeEventListener('click', handleClickDropdownOutside);
      window.removeEventListener('scroll', handleScrollDropdownWindow);
      window.removeEventListener('resize', handleScrollDropdownWindow);
    }
  };

  /**
   * 드롭다운 방향 업데이트
   * @param {HTMLElement} dropdown
   * @param {object} direction
   */
  const updateDropdownDirection = (dropdown, direction) => {
    const dropdownToggle = dropdown.querySelector(SELECTOR.DROPDOWN_TOGGLE);
    const dropdownMenu = dropdown.querySelector(SELECTOR.DROPDOWN_MENU);
    const currentDirectionState = Object.assign({}, direction);
    const newDirectionState = getDropdownDirectionState(
      dropdown,
      currentDirectionState
    );

    Object.keys(newDirectionState).forEach((key) => {
      dropdown.classList.toggle(`drop-${key}`, newDirectionState[key]);
    });

    const position = getDropdownMenuPosition(dropdown, newDirectionState);
    const translateX = position.translateX;
    const translateY = position.translateY;
    const positionRight = position.positionRight;

    dropdownMenu.style.transform = `translate(${translateX}, ${translateY})`;
    dropdownMenu.style.right = `${positionRight}`;

    dropdown.state.direction = newDirectionState;
  };

  /**
   * 드롭 될 방향 정보 가져오기
   * @param {HTMLElement} dropdown
   * @param {object} direction
   * @returns {object}
   */
  const getDropdownDirectionState = (dropdown, direction) => {
    const DEFAULT_DIRECTION = dropdown.config.direction;
    const directionState = direction;
    const dropdownToggle = dropdown.querySelector(SELECTOR.DROPDOWN_TOGGLE);
    const dropdownMenu = dropdown.querySelector(SELECTOR.DROPDOWN_MENU);

    let viewportWidth = document.documentElement.clientWidth;
    let viewportHeight = window.innerHeight;

    let toggleData = getDropdownData(dropdownToggle);
    let menuData = getDropdownData(dropdownMenu);

    menuData.width = dropdown.state.menuWidth;
    menuData.height = dropdown.state.menuHeight;

    directionState.left = DEFAULT_DIRECTION['left'];
    directionState.right = DEFAULT_DIRECTION['right'];
    directionState.alignend = DEFAULT_DIRECTION['alignend'];
    directionState.alignstart = DEFAULT_DIRECTION['alignstart'];
    directionState.center = DEFAULT_DIRECTION['center'];
    directionState.full = DEFAULT_DIRECTION['full'];

    const upDownDirectionState = (topOut, bottomOut) => {
      if (bottomOut) {
        directionState.up = true;
        directionState.down = false;
      }
      if (topOut) {
        directionState.up = false;
        directionState.down = true;
      }
      if (!bottomOut && !topOut) {
        directionState.down = DEFAULT_DIRECTION['down'];
        directionState.up = DEFAULT_DIRECTION['up'];
      }
      if (bottomOut && topOut) {
        directionState.down = DEFAULT_DIRECTION['down'];
        directionState.up = DEFAULT_DIRECTION['up'];
      }
    };

    /**
     * DIRECTION STATE :  DOWN / UP
     */
    if (directionState['down'] || directionState['up']) {
      let bottomOut = toggleData.bottom + menuData.height > viewportHeight;
      let topOut = toggleData.top - menuData.height < 0;
      let leftOut = toggleData.left < menuData.width - toggleData.width;
      let rightOut =
        viewportWidth - toggleData.right < menuData.width - toggleData.width;

      upDownDirectionState(topOut, bottomOut);

      if (rightOut && !leftOut) {
        console.log('UP/DOWN : rightOut && !leftOut');

        directionState.alignend = true;
        directionState.alignstart = false;
      }
      if (leftOut && !rightOut) {
        console.log('UP/DOWN : leftOut && !rightOut');

        directionState.alignend = false;
        directionState.alignstart = true;
      }
      if (leftOut && rightOut) {
        console.log('UP/DOWN : leftOut && rightOut');

        directionState.center = true;
      }
      if (!rightOut && !leftOut) {
        console.log('UP/DOWN : left/right In');
      }
    }

    /**
     * DIRECTION STATE :  LEFT / RIGHT
     */
    if (directionState['left'] || directionState['right']) {
      let bottomOut = toggleData.top + menuData.height > viewportHeight;
      let topOut = toggleData.bottom - menuData.height < 0;
      let leftOut = toggleData.left < menuData.width;
      let rightOut = viewportWidth - toggleData.right < menuData.width;

      upDownDirectionState(topOut, bottomOut);

      if (leftOut && !rightOut) {
        console.log('LEFT/RIGHT : leftOut');

        directionState.left = false;
        directionState.right = true;
        directionState.alignend = false;
        directionState.alignstart = false;
      }

      if (rightOut && !leftOut) {
        console.log('LEFT/RIGHT : rightOut');

        directionState.left = true;
        directionState.right = false;
        directionState.alignend = false;
        directionState.alignstart = false;
      }

      if (leftOut && rightOut) {
        console.log('LEFT/RIGHT : leftOut && rightOut');

        directionState.left = false;
        directionState.right = false;
      }
      if (!leftOut && !rightOut) {
        console.log('LEFT/RIGHT : left/right In');
      }
    }

    /**
     * DIRECTION STATE :  CENTER
     */
    if (directionState.center) {
      let bottomOut = toggleData.bottom + menuData.height > viewportHeight;
      let topOut = toggleData.top - menuData.height < 0;
      let leftOut =
        toggleData.left + (toggleData.width - menuData.width) / 2 < 0;
      let rightOut =
        toggleData.right - (toggleData.width - menuData.width) / 2 >
        viewportWidth;

      upDownDirectionState(topOut, bottomOut);

      if (rightOut && !leftOut) {
        console.log('CENTER : rightOut && !leftOut');

        directionState.alignend = true;
        directionState.alignstart = false;
      }

      if (leftOut && !rightOut) {
        console.log('CENTER : leftOut && !rightOut');

        directionState.alignend = false;
        directionState.alignstart = true;
      }

      if (!rightOut && !leftOut) {
        console.log('CENTER : left/right In');

        directionState.alignend = false;
        directionState.alignstart = false;
      }

      if (leftOut && rightOut) {
        console.log('CENTER : leftOut && rightOut');

        directionState.alignend = false;
        directionState.alignstart = false;
        directionState.full = true;
      }
    }

    /**
     * DIRECTION STATE :  ALIGN END / ALIGN START
     */
    if (directionState.alignend || directionState.alignstart) {
      let bottomOut = toggleData.bottom + menuData.height > viewportHeight;
      let topOut = toggleData.top - menuData.height < 0;
      let leftOut = toggleData.left < menuData.width - toggleData.width;
      let rightOut =
        viewportWidth - toggleData.right < menuData.width - toggleData.width;

      upDownDirectionState(topOut, bottomOut);

      if (rightOut && !leftOut) {
        console.log('ALIGN : rightOut');

        directionState.alignend = true;
        directionState.alignstart = false;
        directionState.center = false;
      }

      if (leftOut && !rightOut) {
        console.log('ALIGN : leftOut');

        directionState.alignend = false;
        directionState.alignstart = true;
        directionState.center = false;
      }

      if (leftOut && rightOut) {
        console.log('ALIGN : leftOut && rightOut');

        directionState.alignend = false;
        directionState.alignstart = false;
        directionState.center = false;
        directionState.full = true;
      }

      if (!rightOut && !leftOut) {
        console.log('ALIGN : left/right In');

        directionState.center = false;
      }
    }

    /**
     * DIRECTION STATE : FULL
     */
    if (directionState.full) {
      directionState.center = false;
    }

    return directionState;
  };

  /**
   * 드롭 될 방향에 따른 위치 정보 가져오기
   * @param {HTMLElement} dropdown
   * @param {object} direction
   * @returns {object}
   */
  const getDropdownMenuPosition = (dropdown, direction) => {
    const directionState = direction;
    const dropdownToggle = dropdown.querySelector(SELECTOR.DROPDOWN_TOGGLE);
    const dropdownMenu = dropdown.querySelector(SELECTOR.DROPDOWN_MENU);

    let viewportWidth = document.documentElement.clientWidth;
    let viewportHeight = window.innerHeight;

    let toggleData = getDropdownData(dropdownToggle);
    let menuData = getDropdownData(dropdownMenu);

    let translateX = 0;
    let translateY = 0;
    let positionRight = '';

    if (directionState['left'] || directionState['right']) {
      if (directionState.left) {
        translateX = '-100%';
      }

      if (directionState.right) {
        translateX = toggleData.width + 'px';
      }

      if (directionState.up) {
        translateY = toggleData.height + 'px';
      }

      if (directionState.down) {
        translateY = -toggleData.height + 'px';
      }
    }

    if (directionState['center']) {
      translateX = '-50%';
    }

    if (directionState['alignend']) {
      translateX = toggleData.width - menuData.width + 'px';
    }

    if (directionState['full']) {
      translateX = -toggleData.left + 'px';
      translateY = 0;

      positionRight = toggleData.width - viewportWidth + 'px';
    }

    return {
      translateX,
      translateY,
      positionRight,
    };
  };

  /**
   *  드롭다운 사이즈 정보 가져오기
   * @param {HTMLElement} element
   * @returns
   */
  const getDropdownData = (element) => {
    const data = {};

    data.width = element.offsetWidth;
    data.height = element.offsetHeight;

    data.outerWidth =
      element.offsetWidth +
      parseFloat(window.getComputedStyle(element).marginLeft) +
      parseFloat(window.getComputedStyle(element).marginRight);
    data.outerHeight =
      element.offsetHeight +
      parseFloat(window.getComputedStyle(element).marginTop) +
      parseFloat(window.getComputedStyle(element).marginBottom);

    data.left = element.getBoundingClientRect().left;
    data.right = element.getBoundingClientRect().right;
    data.top = element.getBoundingClientRect().top;
    data.bottom = element.getBoundingClientRect().bottom;

    return data;
  };

  /**
   * 드롭다운 키보드 제어
   * @param {KeydownEvent} e
   */
  const keyboardDropdown = (e) => {
    const dropdown = e.target.closest(SELECTOR.DROPDOWN);
    const dropdownToggle = dropdown.querySelector(SELECTOR.DROPDOWN_TOGGLE);
    const dropdownMenu = dropdown.querySelector(SELECTOR.DROPDOWN_MENU);
    const dropdownMenuItems = dropdownMenu.querySelectorAll(
      SELECTOR.DROPDOWN_MENUITEM
    );
    const enabledDropdownMenuItems = Array.from(dropdownMenuItems).filter(
      (el) => !el.hasAttribute('disabled')
    );
    const firstDropdownMenuItem = enabledDropdownMenuItems[0];
    const lastDropdownMenuItem =
      enabledDropdownMenuItems[enabledDropdownMenuItems.length - 1];

    let activeIndex = enabledDropdownMenuItems.indexOf(document.activeElement);

    if (e.key === 'ArrowDown') {
      e.preventDefault();

      if (activeIndex < 0) {
        openDropdown(dropdown);
        firstDropdownMenuItem.focus();
      } else if (activeIndex < enabledDropdownMenuItems.length - 1) {
        activeIndex++;
        enabledDropdownMenuItems[activeIndex].focus();
      }
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();

      if (activeIndex < 0) {
        openDropdown(dropdown);
        lastDropdownMenuItem.focus();
      } else if (activeIndex > 0) {
        activeIndex--;
        enabledDropdownMenuItems[activeIndex].focus();
      }
    }

    if (e.key === 'Tab') {
      if (
        (e.target === dropdownToggle && e.shiftKey) ||
        (e.target === lastDropdownMenuItem && !e.shiftKey)
      ) {
        closeDropdown(dropdown);
      }
    }

    if (e.key === 'Escape') {
      closeDropdown(dropdown);
      dropdownToggle.focus();
    }
  };

  return {
    init,
    setup: setupDropdown,
    toggle: toggleDropdown,
  };
};

export default dropdown;
