const accordion = function () {
  const SELECTOR = {
    ACCORDION: '[data-ui="accordion"]',
    ACCORDION_ITEM: '[data-accordion="item"]',
    ACCORDION_TRIGGER: '[data-accordion="trigger"]',
    ACCORDION_PANEL: '[data-accordion="panel"]',
  };

  const handleClickAccordionTrigger = (e) => {
    toggleAccordion(e.target);
  };

  const init = () => {
    if (!document.querySelectorAll(SELECTOR.ACCORDION).length) {
      return;
    }

    document.querySelectorAll(SELECTOR.ACCORDION).forEach((accordion) => {
      setupAccordion(accordion);
    });
  };

  const setupAccordion = (accordion) => {
    if (typeof accordion === 'string') {
      accordion = document.querySelector(accordion);
    }

    if (!accordion || accordion.dataset.ui !== 'accordion') {
      console.error('accordion : 유효한 DOM 요소인지 확인', accordion);
      return;
    }

    accordion.config = accordion.config || {
      init: false,
    };

    if (accordion.config.init) {
      return;
    }

    accordion
      .querySelectorAll(SELECTOR.ACCORDION_TRIGGER)
      .forEach((accordionTrigger) => {
        setupAccordionTrigger(accordionTrigger);
      });

    accordion.config.init = true;
  };

  const setupAccordionTrigger = (accordionTrigger) => {
    if (typeof accordionTrigger === 'string') {
      accordionTrigger = document.querySelector(accordionTrigger);
    }

    if (!accordionTrigger || accordionTrigger.dataset.accordion !== 'trigger') {
      console.error(
        'accordionTrigger : 유효한 DOM 요소인지 확인',
        accordionTrigger
      );
      return;
    }

    accordionTrigger.config = accordionTrigger.config || {
      init: false,
    };

    if (accordionTrigger.config.init) {
      return;
    }

    const accordion = accordionTrigger.closest(SELECTOR.ACCORDION);
    const accordionItem = accordionTrigger.closest(SELECTOR.ACCORDION_ITEM);
    const accordionPanel =
      accordionItem && accordionItem.querySelector(SELECTOR.ACCORDION_PANEL);
    const isExpanded =
      accordionItem && accordionItem.classList.contains('is-active');
    const isDisabled =
      accordionItem && accordionItem.classList.contains('is-disabled');
    const accordionTriggerName = accordionTrigger.dataset.name;

    if (!accordionItem) {
      console.error(`${SELECTOR.ACCORDION_ITEM} : 유효한 DOM 요소인지 확인`);
      return;
    }

    if (!accordionPanel) {
      console.warn(
        `연결 된 ${SELECTOR.ACCORDION_PANEL} 요소 없음`,
        accordionTrigger
      );
      // return;
    }

    if (accordionPanel) {
      if (!accordionTrigger.id) {
        accordionTrigger.id = '___ACCORDION_TRIGGER___' + accordionTriggerName;
      }

      if (!accordionPanel.id) {
        accordionPanel.id = '___ACCORDION_PANEL___' + accordionTriggerName;
      }

      accordionTrigger.setAttribute('aria-controls', accordionPanel.id);
      accordionPanel.setAttribute('aria-labelledby', accordionTrigger.id);

      if (isDisabled) {
        accordionTrigger.disabled = true;
      }

      if (isExpanded) {
        openAccordion(accordionTrigger);
      } else {
        closeAccordion(accordionTrigger);
      }
    }

    accordionTrigger.addEventListener('click', handleClickAccordionTrigger);

    accordionTrigger.config.init = true;
  };

  const toggleAccordion = (accordionTrigger) => {
    const accordion = accordionTrigger.closest(SELECTOR.ACCORDION);
    const accordionItem = accordionTrigger.closest(SELECTOR.ACCORDION_ITEM);
    const accordionPanel =
      accordionItem && accordionItem.querySelector(SELECTOR.ACCORDION_PANEL);
    const isDisabled =
      accordionItem && accordionItem.classList.contains('is-disabled');
    const isExpanded =
      accordionItem && accordionItem.classList.contains('is-active');

    if (isExpanded) {
      closeAccordion(accordionTrigger);
    } else {
      openAccordion(accordionTrigger);
    }
  };

  const openAccordion = (accordionTrigger) => {
    if (typeof accordionTrigger === 'string') {
      accordionTrigger = document.querySelector(accordionTrigger);
    }

    if (!accordionTrigger || accordionTrigger.dataset.accordion !== 'trigger') {
      console.error(
        'accordionTrigger : 유효한 DOM 요소인지 확인',
        accordionTrigger
      );
      return;
    }

    const accordion = accordionTrigger.closest(SELECTOR.ACCORDION);
    const accordionItem = accordionTrigger.closest(SELECTOR.ACCORDION_ITEM);
    const accordionPanel =
      accordionItem && accordionItem.querySelector(SELECTOR.ACCORDION_PANEL);
    const isDisabled =
      accordionItem && accordionItem.classList.contains('is-disabled');
    const isExpanded =
      accordionItem && accordionItem.classList.contains('is-active');

    const accordionContent = accordionPanel && accordionPanel.firstElementChild;
    const accordionPanelHeight = accordionPanel
      ? accordionContent.offsetHeight +
        parseFloat(window.getComputedStyle(accordionContent).marginTop) +
        parseFloat(window.getComputedStyle(accordionContent).marginBottom)
      : 0;

    if (!accordionItem) {
      console.error(`${SELECTOR.ACCORDION_ITEM} : 유효한 DOM 요소인지 확인`);
      return;
    }

    if (!accordionPanel) {
      console.warn(
        `연결 된 ${SELECTOR.ACCORDION_PANEL} 요소 없음`,
        accordionTrigger
      );
      return;
    }

    if (isDisabled && !isExpanded) {
      return;
    }

    accordionItem.classList.add('is-active');
    accordionTrigger.setAttribute('aria-expanded', true);

    if (accordionPanel) {
      accordionPanel.setAttribute('aria-hidden', false);
      accordionPanel.style.maxHeight = accordionPanelHeight + 'px';
    }

    if (!isDisabled && accordion.dataset.type !== 'toggle') {
      accordion.querySelectorAll(SELECTOR.ACCORDION_TRIGGER).forEach((el) => {
        if (el !== accordionTrigger) {
          closeAccordion(el);
        }
      });
    }
  };

  const closeAccordion = (accordionTrigger) => {
    if (typeof accordionTrigger === 'string') {
      accordionTrigger = document.querySelector(accordionTrigger);
    }

    if (!accordionTrigger || accordionTrigger.dataset.accordion !== 'trigger') {
      console.error(
        'accordionTrigger : 유효한 DOM 요소인지 확인',
        accordionTrigger
      );
      return;
    }

    const accordion = accordionTrigger.closest(SELECTOR.ACCORDION);
    const accordionItem = accordionTrigger.closest(SELECTOR.ACCORDION_ITEM);
    const accordionPanel =
      accordionItem && accordionItem.querySelector(SELECTOR.ACCORDION_PANEL);
    const isDisabled =
      accordionItem && accordionItem.classList.contains('is-disabled');
    const isExpanded =
      accordionItem && accordionItem.classList.contains('is-active');

    if (!accordionItem) {
      return;
    }

    if (!accordionPanel) {
      return;
    }

    if (isDisabled && isExpanded) {
      return;
    }

    accordionItem.classList.remove('is-active');
    accordionTrigger.setAttribute('aria-expanded', false);

    if (accordionPanel) {
      accordionPanel.setAttribute('aria-hidden', true);
      accordionPanel.style.maxHeight = '';
    }
  };

  return {
    init,
    open: openAccordion,
    close: closeAccordion,
  };
};

export default accordion;
