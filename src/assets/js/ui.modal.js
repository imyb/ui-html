const uiModal = function () {
  const SELECTOR = {
    POTAL: '#app',
    MODAL: '[data-ui="modal"]',
    MODAL_CLOSE: '[data-modal="close"]',
    MODAL_LABEL: '[data-modal="label"]',
  };

  /**
   * '[data-modal="close"]' 요소를 클릭
   * @param {clickEvent} event
   */
  const handleClickModalClose = (event) => {
    const modal = event.target.closest(SELECTOR.MODAL);

    closeModal(modal);
  };

  /**
   * 모달 바깥쪽 클릭
   * @param {clickEvent} event
   */
  const handleClickModalOutside = (event) => {
    const modal = event.target.closest(SELECTOR.MODAL);

    if (modal.querySelector('.modal-window').contains(event.target)) {
      return;
    }

    if (modal.classList.contains('lock')) {
      animationLockShake(modal);
      return;
    }

    closeModal(modal);
  };

  /**
   * 모달 키보드 입력
   * @param {clickEvent} event
   */
  const handleKeydownModal = (event) => {
    const modal = event.target;

    if (event.key === 'Escape') {
      if (modal.classList.contains('lock')) {
        animationLockShake(modal);
      } else {
        closeModal(modal);
      }
    }

    if (event.key === 'Tab') {
      focusTrapModal(event);
    }
  };

  /**
   * close lock 상태일때 모달창 흔들림 효과
   */
  const animationLockShake = (modal) => {
    modal.classList.add('lockShake');

    const handleAnimationEndLockShake = () => {
      modal.classList.remove('lockShake');
      modal.removeEventListener('animationend', handleAnimationEndLockShake);
    };
    modal.addEventListener('animationend', handleAnimationEndLockShake);
  };

  /**
   * 스크롤바 넓이 가져오기
   * @returns
   */
  const getScrollbarWidth = () => {
    return window.innerWidth - document.documentElement.clientWidth;
  };

  /**
   * 열려있는 모달 가져오기
   * @returns
   */
  const getOpenedModals = () => {
    let openedModals = [];

    document.querySelectorAll(SELECTOR.MODAL).forEach((modal) => {
      if (modal.classList.contains('is-open')) {
        openedModals.push(modal);
      }
    });

    return openedModals;
  };

  /**
   * css transition 속성 중 가장 마지막 transition 가져오기
   * @param {Array} element
   * @returns
   */
  const getModalTransition = (element) => {
    const elements = Array.isArray(element) ? element : [element];
    const transitions = [];

    elements.forEach((element) => {
      const transitionPropertyNames =
        getComputedStyle(element).transitionProperty.split(',');
      const transitionDurations =
        getComputedStyle(element).transitionDuration.split(',');
      const transitionDelays =
        getComputedStyle(element).transitionDelay.split(',');

      transitionPropertyNames.forEach((transitionPropertyName, index) => {
        const propertyName = transitionPropertyNames[index].trim();
        const duration = parseFloat(transitionDurations[index].trim());
        const delay = parseFloat(transitionDelays[index].trim());
        const totalTime = duration + delay;

        transitions.push({
          element,
          propertyName,
          duration,
          delay,
          totalTime,
        });
      });
    });

    const lastTime = Math.max(
      ...transitions.map((transition) => transition.totalTime)
    );

    const lastTransition = transitions.filter(
      (transition) => transition.totalTime == lastTime
    )[0];

    if (!lastTime) {
      return;
    }

    return lastTransition;
  };

  /**
   * 모달 열고 닫을 때 transition 이 완료 된 후 callback 호출
   * @param {HTMLElement} modal
   * @param {function} callback
   */
  const completeTransitionModal = (modal, callback) => {
    const modalTransition = getModalTransition([
      modal,
      modal.firstElementChild,
    ]);

    const handleTransitionEndModal = (event) => {
      if (
        event.propertyName !== modalTransition.propertyName ||
        event.target !== modalTransition.element
      ) {
        return;
      }

      callback();

      modal.removeEventListener('transitionend', handleTransitionEndModal);
    };

    if (modalTransition) {
      modal.addEventListener('transitionend', handleTransitionEndModal);
    } else {
      callback();
    }
  };

  /**
   * 모달 열기
   * @param {HTMLElement} modal
   * @returns
   */
  const openModal = (modal) => {
    if (typeof modal === 'string') {
      modal = document.querySelector(modal);
    }

    if (!modal || modal.dataset.ui !== 'modal') {
      console.error('modal : 유효한 DOM 요소인지 확인', modal);
      return;
    }

    modal.state = modal.state || {};

    modal.state.activeElement = document.activeElement;

    const modalLabel = modal.querySelector(SELECTOR.MODAL_LABEL);
    const isOpened = modal.classList.contains('is-open');
    const scrollbarWidth = getScrollbarWidth();

    if (isOpened) {
      return;
    }

    document
      .querySelector(SELECTOR.POTAL)
      .insertAdjacentElement('beforeend', modal);

    if (modalLabel && !modalLabel.id) {
      modalLabel.id = '__MODAL_LABEL__' + modal.id;
    }

    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', true);
    modal.setAttribute('aria-labelledby', modalLabel.id);
    modal.tabIndex = -1;

    modal.classList.add('is-show');
    modal.offsetHeight;
    modal.classList.add('is-open');

    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';

    if (scrollbarWidth) {
      document.body.style.paddingRight = scrollbarWidth + 'px';
    }

    modal.focus();

    modal.dispatchEvent(new CustomEvent('modal:open'));

    completeTransitionModal(modal, () => {
      modal.dispatchEvent(new CustomEvent('modal:opened'));
    });

    modal.querySelectorAll(SELECTOR.MODAL_CLOSE).forEach((modalClose) => {
      modalClose.addEventListener('click', handleClickModalClose);
    });
    modal.addEventListener('click', handleClickModalOutside);
    modal.addEventListener('keydown', handleKeydownModal);
  };

  /**
   * 모달 닫기
   * @param {HTMLElement} modal
   * @returns
   */
  const closeModal = (modal) => {
    if (typeof modal === 'string') {
      modal = document.querySelector(modal);
    }

    if (!modal || modal.dataset.ui !== 'modal') {
      console.error('modal : 유효한 DOM 요소인지 확인', modal);
      return;
    }

    modal.state = modal.state || {};

    const isOpened = modal.classList.contains('is-open');

    if (!isOpened) {
      return;
    }

    modal.classList.remove('is-open');

    modal.state.activeElement.focus();

    modal.dispatchEvent(new CustomEvent('modal:close'));

    completeTransitionModal(modal, () => {
      modal.classList.remove('is-show');

      modal.dispatchEvent(new CustomEvent('modal:closed'));

      if (!getOpenedModals().length) {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        document.body.classList.remove('modal-open');
      }
    });

    modal.querySelectorAll(SELECTOR.MODAL_CLOSE).forEach((modalClose) => {
      modalClose.removeEventListener('click', handleClickModalClose);
    });
    modal.removeEventListener('click', handleClickModalOutside);
    modal.removeEventListener('keydown', handleKeydownModal);
  };

  /**
   * 모달에서 탭키 이동 시 포커스가 모달 밖으로 나가지 않게 함
   * @param {keydownEvent} event
   */
  const focusTrapModal = (event) => {
    if (event.key !== 'Tab') {
      return;
    }

    const modal = event.target.closest(SELECTOR.MODAL);
    const elements = modal.querySelectorAll(
      'a, area, input, select, textarea, button, iframe, object, embed, [tabindex], [contenteditable]'
    );
    const focusableElements = [];

    elements.forEach((element) => {
      if (
        !element.hasAttribute('disabled') &&
        element.tabIndex >= 0 &&
        getComputedStyle(element).visibility !== 'hidden'
      ) {
        focusableElements.push(element);
      }
    });

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  };

  return {
    open: openModal,
    close: closeModal,
  };
};

export default uiModal;
