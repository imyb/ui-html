const accordion = function () {
  const SELECTOR = {
    ACCORDION_GROUP: '.accordion',
    ACCORDION_ITEM: '.accordion-item',
    ACCORDION_HEADER: '.accordion-header',
    ACCORDION_PANEL: '.accordion-panel',
    ACCORDION_CONTENT: '.accordion-content',
    ACCORDION_TRIGGER: '.accordion-trigger',
  };

  const initAccordions = [];

  const handleClickAccordionTrigger = (e) => {
    toggleAccordion(e.target);
  };

  const init = () => {
    if (!document.querySelectorAll(SELECTOR.ACCORDION_TRIGGER).length) {
      return;
    }

    document
      .querySelectorAll(SELECTOR.ACCORDION_TRIGGER)
      .forEach((accordionTrigger) => {
        setupAccordion(accordionTrigger);

        accordionTrigger.addEventListener('click', handleClickAccordionTrigger);

        initAccordions.push(accordionTrigger);
      });
  };

  const unInit = () => {
    if (initAccordions.length) {
      initAccordions.forEach((accordionTrigger) => {
        accordionTrigger.removeEventListener(
          'click',
          handleClickAccordionTrigger
        );
      });

      initAccordions.length = 0;
    }
  };

  const setupAccordion = (accordionTrigger) => {
    const accordionItem = accordionTrigger.closest(SELECTOR.ACCORDION_ITEM);
    const accordionPanel = accordionItem.querySelector(
      SELECTOR.ACCORDION_PANEL
    );
    const accordionTriggerName = accordionTrigger.dataset.name;
    const isExpanded = accordionItem.classList.contains('is-active');

    if (!accordionTrigger.id) {
      accordionTrigger.id = '___ACCORDION_TRIGGER___' + accordionTriggerName;
    }

    if (!accordionPanel.id) {
      accordionPanel.id = '___ACCORDION_PANEL___' + accordionTriggerName;
    }

    accordionTrigger.setAttribute('aria-controls', accordionPanel.id);
    accordionPanel.setAttribute('aria-labelledby', accordionTrigger.id);

    if (isExpanded) {
      openAccordion(accordionTrigger);
    } else {
      closeAccordion(accordionTrigger);
    }
  };

  const toggleAccordion = (accordionTrigger) => {
    const accordionGroup = accordionTrigger.closest(SELECTOR.ACCORDION_GROUP);
    const accordionItem = accordionTrigger.closest(SELECTOR.ACCORDION_ITEM);
    const isExpanded = accordionItem.classList.contains('is-active');

    if (isExpanded) {
      closeAccordion(accordionTrigger);
    } else {
      openAccordion(accordionTrigger);
    }

    if (accordionGroup.dataset.type !== 'toggle') {
      accordionGroup
        .querySelectorAll(SELECTOR.ACCORDION_TRIGGER)
        .forEach((el) => {
          if (el !== accordionTrigger) {
            closeAccordion(el);
          }
        });
    }
  };

  const openAccordion = (accordionTrigger) => {
    const accordionItem = accordionTrigger.closest(SELECTOR.ACCORDION_ITEM);
    const accordionPanel = accordionItem.querySelector(
      SELECTOR.ACCORDION_PANEL
    );
    const accordionContent = accordionPanel.querySelector(
      SELECTOR.ACCORDION_CONTENT
    );
    const accordionPanelHeight =
      accordionContent.offsetHeight +
      parseFloat(window.getComputedStyle(accordionContent).marginTop) +
      parseFloat(window.getComputedStyle(accordionContent).marginBottom);

    accordionItem.classList.add('is-active');
    accordionTrigger.setAttribute('aria-expanded', true);
    accordionPanel.setAttribute('aria-hidden', false);
    accordionPanel.style.maxHeight = accordionPanelHeight + 'px';
  };

  const closeAccordion = (accordionTrigger) => {
    const accordionItem = accordionTrigger.closest(SELECTOR.ACCORDION_ITEM);
    const accordionPanel = accordionItem.querySelector(
      SELECTOR.ACCORDION_PANEL
    );

    accordionItem.classList.remove('is-active');
    accordionTrigger.setAttribute('aria-expanded', false);
    accordionPanel.setAttribute('aria-hidden', true);
    accordionPanel.style.maxHeight = '';
  };

  return {
    init,
    unInit,
  };
};

export default accordion;
