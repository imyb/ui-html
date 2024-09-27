/**
 * css transition 속성 중 가장 마지막 transition 가져오기
 * @param {Array} element
 * @returns
 */
const getElementTransition = (element) => {
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
 * css transition 이 완료 된 후 callback 함수 실행
 * @param {function} callback
 */
Element.prototype.onTransitionComplete = function (callback) {
  const element = this;
  const elementTransition = getElementTransition([element]);

  const handleTransitionEnd = (event) => {
    if (
      event.propertyName !== elementTransition.propertyName ||
      event.target !== elementTransition.element
    ) {
      return;
    }

    callback();

    element.removeEventListener('transitionend', handleTransitionEnd);
  };

  if (elementTransition) {
    element.addEventListener('transitionend', handleTransitionEnd);
  } else {
    callback();
  }
};

/**
 * 탭키 이동 시 포커스가 element 밖으로 나가지 않게 함
 * @param {string} action
 */
Element.prototype.focusTrap = function (action) {
  const element = this;

  const handleKeydownLockFocus = (event) => {
    if (event.key !== 'Tab') {
      return;
    }

    const elements = element.querySelectorAll(
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

  const lock = () => {
    element.addEventListener('keydown', handleKeydownLockFocus);
  };

  const unlock = () => {
    element.removeEventListener('keydown', handleKeydownLockFocus);
  };

  switch (action) {
    case 'lock':
      lock();
      break;
    case 'unlock':
      unlock();
      break;
    default:
      break;
  }
};
