/**
 * Created by colin on 2017/7/7.
 */

const initialState = {
  list: [
    {
      title: 'DashBoards',
      link: '/dashboard',
      icon: 'fa-th-large',
    },
    {
      title: 'Layouts',
      link: '/layout',
      icon: 'fa-diamond',
    },
    {
      title: 'Graphs',
      link: '/graph',
      icon: 'fa-bar-chart-o',
    },
    {
      title: 'Mailbox',
      link: '/mailbox',
      icon: 'fa-envelope',
    },
    {
      title: 'Metrics',
      link: '/metrics',
      icon: 'fa-pie-chart',
    },
    {
      title: 'Widgets',
      link: '/widget',
      icon: 'fa-flask',
    },
    {
      title: 'Forms',
      link: '/form',
      icon: 'fa-edit',
    },
    {
      title: 'App Views',
      link: '/apps',
      icon: 'fa-desktop',
    },
    {
      title: 'UI Elements',
      link: '/#',
      icon: 'fa-flask',
      sub: [
        {
          title: 'Typography',
          link: '/uis/typography'
        },
        {
          title: 'Icons',
          link: '/uis/icons'
        },
        {
          title: 'Buttons',
          link: '/uis/buttons'
        },
        {
          title: 'Video',
          link: '/uis/video'
        },
        {
          title: 'Panels',
          link: '/uis/panels'
        },
        {
          title: 'Tabs',
          link: '/uis/tabs'
        },
        {
          title: 'Notifications&Tooltips',
          link: '/uis/notifications'
        },
        {
          title: 'Helper Css Classes',
          link: '/uis/csshelpers'
        },
        {
          title: 'Badges, Labels, Progress',
          link: '/uis/badges'
        }
      ]
    },
    {
      title: 'Tables',
      link: '/#',
      icon: 'fa-table',
      sub: [
        {
          title: 'Static Tables',
          link: '/tables/static'
        },
        {
          title: 'Data Tables',
          link: '/tables/data'
        },
        {
          title: 'Foo Tables',
          link: '/tables/foo'
        },
        {
          title: 'jqGrid',
          link: '/tables/jqgrid'
        }
      ]
    }
  ]
};

export function menu(state = initialState, {type = '', data = {}}) {

  switch (type) {
    case 'Set':
      return {
        ...state,
        ...data
      };
    default:
      return state;
  }
}