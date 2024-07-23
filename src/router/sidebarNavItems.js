const sidebarNavItems = [
  {
    path: '/button',
    name: 'Button',
    component: () => import('@/views/Button.vue'),
    // meta: {
    //   layout: 'Layout2',
    // },
    disabled: false,
  },
  {
    path: '/input',
    name: 'Input',
    component: () => import('@/views/Input.vue'),
    disabled: false,
  },
  {
    path: '/select',
    name: 'Select',
    component: () => import('@/views/Select.vue'),
    disabled: false,
  },
  {
    path: '/checkbox-radio',
    name: 'Checkbox / Radio',
    component: () => import('@/views/CheckboxRadio.vue'),
    disabled: false,
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('@/views/Form.vue'),
    disabled: false,
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('@/views/List.vue'),
    disabled: false,
  },
  {
    path: '/table',
    name: 'Table',
    component: () => import('@/views/Table.vue'),
    disabled: false,
  },
  {
    path: '/tab',
    name: 'Tab',
    component: () => import('@/views/Tab.vue'),
    disabled: false,
  },
  {
    path: '/accordion',
    name: 'Accordion',
    component: () => import('@/views/Accordion.vue'),
    disabled: false,
  },
  {
    path: '/modal',
    name: 'Modal',
    component: () => import('@/views/Modal.vue'),
    disabled: false,
  },
  {
    path: '/toast',
    name: 'Toast',
    component: () => import('@/views/Toast.vue'),
    disabled: false,
  },
  {
    path: '/dorpdown',
    name: 'Dropdown',
    component: () => import('@/views/Dropdown.vue'),
    disabled: true,
  },
  {
    path: '/tooltip',
    name: 'Tooltip',
    component: () => import('@/views/Tooltip.vue'),
    disabled: true,
  },
];

export default sidebarNavItems;
