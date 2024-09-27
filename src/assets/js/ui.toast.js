const uiToast = () => {
  const SELECTOR = {
    TOAST: '[data-ui="toast"]',
    TOAST_CONTAINER: '[data-toast="container"]',
    TOAST_CLOSE: '[data-toast="close"]',
  };

  const toastQueue = [];

  /**
   * 닫기 버튼 클릭
   * @param {ClickEvent} event
   */
  const handleClickToastClose = (event) => {
    const toast = event.target.closest(SELECTOR.TOAST);

    immediateCloseToast(toast);
  };

  /**
   * 토스트 컨테이너 생성
   * @returns
   */
  const createToastContainer = () => {
    const toastContainer = document.querySelector(SELECTOR.TOAST_CONTAINER);

    if (toastContainer) {
      return toastContainer;
    }

    const createToastContainer = document.createElement('div');

    createToastContainer.dataset.toast = 'container';
    createToastContainer.classList.add('toast-container');
    createToastContainer.tabIndex = -1;

    document.body.insertAdjacentElement('beforeend', createToastContainer);

    return createToastContainer;
  };

  /**
   * 토스트 생성
   * @param {String} message
   * @param {Object} options
   * @returns
   */
  const createToast = (message, options) => {
    const createToast = document.createElement('div');
    const createToastHtml = `
      <div class="toast-window">
        <div class="toast-msg">${message}</div>
          <button type="button" class="toast-close" data-toast="close" aria-label="close"></button>
      </div>
    `;

    createToast.dataset.ui = 'toast';
    createToast.classList.add('toast');

    if (options.stack) {
      createToast.classList.add('is-stack');
    }

    if (options.addClass) {
      createToast.classList.add(options.addClass);
    }

    createToast.setAttribute('role', 'alret');
    createToast.setAttribute('aria-live', 'assertive');
    createToast.setAttribute('aria-atomic', true);
    createToast.tabIndex = 0;

    createToast.insertAdjacentHTML('beforeend', createToastHtml);

    if (!options.addClose) {
      createToast.querySelector(SELECTOR.TOAST_CLOSE).remove();
    }

    return createToast;
  };

  /**
   * 열려있는 토스트 가져오기
   * @returns
   */
  const getOpenedToasts = () => {
    const openedToasts = [];

    document.querySelectorAll(SELECTOR.TOAST).forEach((toast) => {
      if (toast.classList.contains('is-open')) {
        openedToasts.push(toast);
      }
    });

    return openedToasts;
  };

  /**
   * 열려있는 토스트 전체 닫기
   */
  const closeToastAll = () => {
    const openedToasts = getOpenedToasts();

    openedToasts.forEach((openedToast) => {
      immediateCloseToast(openedToast);
    });
  };

  /**
   * 토스트 즉시 닫기
   * @param {HTMLElement} toast
   * @returns
   */
  const immediateCloseToast = (toast) => {
    if (!toast) {
      closeToastAll();
      return;
    }

    toast.isImmediate = true;
    closeToast(toast);
  };

  /**
   * 토스트 닫기
   * @param {HTMLElement} toast
   * @returns
   */
  const closeToast = (toast) => {
    const toastContainer = toast.closest(SELECTOR.TOAST_CONTAINER);
    const currentIndex = toastQueue.indexOf(toast);

    toast.timer = null;

    if (toast.requstClose) {
      // console.log('이미 닫기 요청됨');
      return;
    }

    if (currentIndex !== 0 && !toast.isImmediate) {
      // console.log(
      //   '아직 첫번째로 오지 않음 : ',
      //   currentIndex,
      //   toastQueue[currentIndex]
      // );
      return;
    }

    toast.requstClose = true;

    toast.style.maxHeight = 0;
    toast.classList.remove('is-open');

    if (toast.isImmediate) {
      toastQueue.splice(currentIndex, 1);
    }

    toast.onTransitionComplete(() => {
      if (!toast.isImmediate) {
        toastQueue.splice(currentIndex, 1);
      }

      const nextToast = toastQueue[currentIndex];

      if (nextToast && !nextToast.timer && !toast.isImmediate) {
        closeToast(nextToast);
      }

      toast.remove();

      if (toastContainer && !toastQueue.length) {
        toastContainer.remove();
      }

      if (
        toast.config.onClosed &&
        typeof toast.config.onClosed === 'function'
      ) {
        toast.config.onClosed();
      }

      toast.querySelectorAll(SELECTOR.TOAST_CLOSE).forEach((toastClose) => {
        toastClose.addEventListener('click', handleClickToastClose);
      });
    });
  };

  /**
   * 토스트 열기
   * @param {String} massage
   * @param {Object} options
   */
  const openToast = (massage, options) => {
    const config = {
      addClass: '',
      addClose: false,
      stack: false,
      timeout: 5000,
      onOpened: function () {},
      onClosed: function () {},
    };

    options = Object.assign({}, config, options);

    const toastContainer = createToastContainer();
    const toast = createToast(massage, options);

    toast.config = toast.config || {};
    toast.timer = null;
    toast.activeElement = document.activeElement;
    toast.isImmediate = false;

    toast.config = Object.assign({}, options);

    toastContainer.insertAdjacentElement('beforeend', toast);

    toastQueue.push(toast);

    toast.offsetHeight;
    toast.classList.add('is-open');
    toast.style.maxHeight = toast.offsetHeight + 'px';
    toast.onTransitionComplete(() => {
      if (
        toast.config.onOpened &&
        typeof toast.config.onOpened === 'function'
      ) {
        toast.config.onOpened();
      }
    });

    if (!toast.config.stack) {
      const openedToasts = getOpenedToasts();

      openedToasts.forEach((openedToast) => {
        if (openedToast !== toast) {
          immediateCloseToast(openedToast);
        }
      });
    }

    toast.timer = setTimeout(() => {
      closeToast(toast);
    }, toast.config.timeout);

    toast.querySelectorAll(SELECTOR.TOAST_CLOSE).forEach((toastClose) => {
      toastClose.addEventListener('click', handleClickToastClose);
    });
  };

  return {
    open: openToast,
    close: immediateCloseToast,
    closeAll: closeToastAll,
  };
};

export default uiToast;
