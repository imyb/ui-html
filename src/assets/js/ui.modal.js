const uiModal = function () {
  const SELECTOR = {
    POTAL: '#app',
    MODAL: '[data-ui="modal"]',
    MODAL_CLOSE: '[data-modal="close"]',
    MODAL_LABEL: '[data-modal="label"]',
  };

  /**
   * '[data-modal="close"]' 요소를 클릭 닫기
   * @param {clickEvent} event
   */
  const handleClickModalClose = (event) => {
    const modal = event.target.closest(SELECTOR.MODAL);

    closeModal(modal);
  };

  /**
   * 모달 바깥쪽 클릭 닫기
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
   * Esc키로 닫기
   * @param {clickEvent} event
   */
  const handleKeydownModalEscape = (event) => {
    const modal = event.target.closest(SELECTOR.MODAL);

    if (event.key === 'Escape') {
      if (modal.classList.contains('lock')) {
        animationLockShake(modal);
      } else {
        closeModal(modal);
      }
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
    modal.focusTrap('lock');

    modal.dispatchEvent(new CustomEvent('modal:open'));

    modal.onTransitionComplete(() => {
      modal.dispatchEvent(new CustomEvent('modal:opened'));
    });

    modal.querySelectorAll(SELECTOR.MODAL_CLOSE).forEach((modalClose) => {
      modalClose.addEventListener('click', handleClickModalClose);
    });
    modal.addEventListener('click', handleClickModalOutside);
    modal.addEventListener('keydown', handleKeydownModalEscape);
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

    modal.focusTrap('unlock');
    modal.state.activeElement.focus();

    modal.dispatchEvent(new CustomEvent('modal:close'));

    modal.onTransitionComplete(() => {
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
    modal.removeEventListener('keydown', handleKeydownModalEscape);
  };

  return {
    open: openModal,
    close: closeModal,
  };
};

export default uiModal;
