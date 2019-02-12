export default [
  {
    title: 'Home Page',
    icon: 'icon ion-ios-home',
    link: {
      to: '/dashboard'
    }
  },
  {
    title: 'FEATURES',
    group: true
  },
  {
    title: 'Extra Components',
    icon: 'icon ion-ios-star-outline',
    link: { to: '/extra-components' },
    children: [
      {
        title: 'Tabs',
        link: { to: '/extra-components/tabs' }
      },
      {
        title: 'Accordion',
        link: { to: '/extra-components/accordion' }
      },
      {
        title: 'Actions',
        link: { to: '/extra-components/actions' }
      },
      {
        title: 'Alert',
        link: { to: '/extra-components/alert' }
      },
      {
        title: 'List',
        link: { to: '/extra-components/list' }
      },
      {
        title: 'Spinner',
        link: { to: '/extra-components/spinner' }
      },
      {
        title: 'Progress Bar',
        link: { to: '/extra-components/progress' }
      },
      {
        title: 'Cards',
        link: { to: '/extra-components/cards' }
      },
      {
        title: 'Flip Card',
        link: { to: '/extra-components/flip-card' }
      },
      {
        title: 'Reveal Card',
        link: { to: '/extra-components/reveal-card' }
      }
    ]
  },
  {
    title: 'Forms',
    icon: 'icon ion-ios-switch',
    link: { to: '/forms' },
    children: [
      {
        title: 'Inputs',
        link: { to: '/forms/inputs' }
      },
      {
        title: 'Layout',
        link: { to: '/forms/form-layout' }
      },
      {
        title: 'Buttons',
        link: { to: '/forms/buttons' }
      }
    ]
  },
  {
    title: 'UI Features',
    icon: 'icon ion-ios-keypad',
    link: { to: '/ui-features' },
    children: [
      {
        title: 'Grid',
        link: { to: '/ui-features/grid' }
      },
      {
        title: 'Animated Searches',
        link: { to: '/ui-features/search' }
      }
    ]
  },
  {
    title: 'Modal & Overlays',
    icon: 'icon ion-ios-browsers',
    link: { to: '/modal-overlays' },
    children: [
      {
        title: 'Popover',
        link: { to: '/modal-overlays/popover' }
      },
      {
        title: 'Tooltip',
        link: { to: '/modal-overlays/tooltip' }
      }
    ]
  }
];
