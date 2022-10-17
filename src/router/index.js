/**
 * @author https://gitee.com/chu1204505056/vue-admin-better （不想保留author可删除）
 * @description router全局配置，如有必要可分文件抽离，其中asyncRoutes只有在intelligence模式下才会用到，vip文档中已提供路由的基础图标与小清新图标的配置方案，请仔细阅读
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layouts'
import EmptyLayout from '@/layouts/EmptyLayout'
import { publicPath, routerMode } from '@/config'

Vue.use(VueRouter)
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true,
  },
  {
    path: '/register',
    component: () => import('@/views/register/index'),
    hidden: true,
  },
  {
    path: '/401',
    name: '401',
    component: () => import('@/views/401'),
    hidden: true,
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404'),
    hidden: true,
  },
  {
    path: '/history',
    name: 'history',
    component: () => import('@/views/history/index'),
    hidden: true,
  },
]

export const asyncRoutes = [
  {
    path: '/pagetTest',
    component: Layout,
    redirect: 'noRedirect',
    name: 'pagetTest',
    meta: {
      title: '开发中',
      icon: 'dice',
      permissions: ['admin'],
    },
    children: [
      {
        path: 'pagetTest1',
        name: 'pagetTest1',
        component: () => import('@/views/ycd/pagetTest'),
        meta: {
          title: 'pagetTest',
          icon: 'marker',
          KeepAlive: true,
          permissions: ['admin'],
        },
      },
      {
        path: 'sent',
        name: 'sent',
        component: () => import('@/views/ycd/sent'),
        meta: {
          title: '传值',
          icon: 'dice',
          permissions: ['admin'],
        },
      },
      {
        path: 'accept',
        name: 'accept',
        component: () => import('@/views/ycd/accept'),
        meta: {
          title: '收值',
          icon: 'dice',
          permissions: ['admin'],
        },
      },
    ],
  },

  {
    path: '/perfect',
    component: Layout,
    redirect: 'noRedirect',
    name: 'perfect',
    meta: {
      title: '完善中',
      icon: 'dice',
      permissions: ['admin'],
    },
    children: [
      // {
      //   path: 'collection',
      //   name: 'collection',
      //   component: () => import('@/views/ycd/collection'),
      //   meta: {
      //     title: '收藏页面',
      //     icon: 'marker',
      //     permissions: ['admin'],
      //   },
      // },
      {
        path: 'recommended',
        name: 'recommended',
        component: () => import('@/views/ycd/recommended'),
        meta: {
          title: '随机推荐',
          icon: 'dice',
          permissions: ['admin'],
        },
      },
      {
        path: 'bookTable',
        name: 'bookTable',
        component: () => import('@/views/ycd/bookTable'),
        meta: {
          title: '小说列表',
          icon: 'marker',
          KeepAlive: true,
          permissions: ['admin'],
        },
      },
      {
        path: 'created',
        name: 'created',
        component: () => import('@/views/ycd/created'),
        meta: {
          title: '生成页面',
          icon: 'marker',
          KeepAlive: true,
          permissions: ['admin'],
        },
      },
      {
        path: 'historyRule',
        name: 'historyRule',
        component: () => import('@/views/ycd/historyRule'),
        meta: {
          title: '历史任务',
          icon: 'marker',
          KeepAlive: true,
          permissions: ['admin'],
        },
      },
      {
        path: 'analysisResult',
        name: 'analysisResult',
        component: () => import('@/views/ycd/analysisResult'),
        meta: {
          title: '分析结果',
          icon: 'marker',
          KeepAlive: true,
          permissions: ['admin'],
        },
      },
      {
        path: 'book',
        name: 'book',
        component: () => import('@/views/ycd/book'),
        meta: {
          title: '小说详情',
          icon: 'marker',
          KeepAlive: true,
          permissions: ['admin'],
        },
      },
      {
        path: 'author',
        name: 'author',
        component: () => import('@/views/ycd/author'),
        meta: {
          title: '作者详情',
          icon: 'marker',
          KeepAlive: true,
          permissions: ['admin'],
        },
      },
    ],
  },

  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('@/views/index/index'),
        meta: {
          title: '首页',
          icon: 'home',
          affix: true,
        },
      },
    ],
  },

  // {
  //   path: '/vab',
  //   component: Layout,
  //   redirect: 'noRedirect',
  //   name: 'Vab',
  //   alwaysShow: true,
  //   meta: { title: '组件', icon: 'box-open' },
  //   children: [
  //     {
  //       path: 'permissions',
  //       name: 'Permission',
  //       component: () => import('@/views/vab/permissions/index'),
  //       meta: {
  //         title: '角色权限',
  //         permissions: ['admin', 'editor'],
  //       },
  //     },
  //     {
  //       path: 'icon',
  //       component: EmptyLayout,
  //       redirect: 'noRedirect',
  //       name: 'Icon',
  //       meta: {
  //         title: '图标',
  //         permissions: ['admin'],
  //       },
  //       children: [
  //         {
  //           path: 'awesomeIcon',
  //           name: 'AwesomeIcon',
  //           component: () => import('@/views/vab/icon/index'),
  //           meta: { title: '常规图标' },
  //         },
  //         {
  //           path: 'colorfulIcon',
  //           name: 'ColorfulIcon',
  //           component: () => import('@/views/vab/icon/colorfulIcon'),
  //           meta: { title: '多彩图标' },
  //         },
  //       ],
  //     },
  //     {
  //       path: 'table',
  //       component: () => import('@/views/vab/table/index'),
  //       name: 'Table',
  //       meta: {
  //         title: '表格',
  //         permissions: ['admin'],
  //       },
  //     },
  //     {
  //       path: 'map',
  //       component: () => import('@/views/vab/map/index'),
  //       name: 'Map',
  //       meta: {
  //         title: '地图',
  //         permissions: ['admin'],
  //       },
  //     },

  //     {
  //       path: 'webSocket',
  //       name: 'WebSocket',
  //       component: () => import('@/views/vab/webSocket/index'),
  //       meta: { title: 'webSocket', permissions: ['admin'] },
  //     },
  //     {
  //       path: 'form',
  //       name: 'Form',
  //       component: () => import('@/views/vab/form/index'),
  //       meta: { title: '表单', permissions: ['admin'] },
  //     },
  //     {
  //       path: 'element',
  //       name: 'Element',
  //       component: () => import('@/views/vab/element/index'),
  //       meta: { title: '常用组件', permissions: ['admin'] },
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/vab/tree/index'),
  //       meta: { title: '树', permissions: ['admin'] },
  //     },
  //     {
  //       path: 'verify',
  //       name: 'Verify',
  //       component: () => import('@/views/vab/verify/index'),
  //       meta: { title: '验证码', permissions: ['admin'] },
  //     },
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/vab/nested/menu1/index'),
  //       name: 'Menu1',
  //       alwaysShow: true,
  //       meta: {
  //         title: '嵌套路由 1',
  //         permissions: ['admin'],
  //       },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           name: 'Menu1-1',
  //           alwaysShow: true,
  //           meta: { title: '嵌套路由 1-1' },
  //           component: () => import('@/views/vab/nested/menu1/menu1-1/index'),

  //           children: [
  //             {
  //               path: 'menu1-1-1',
  //               name: 'Menu1-1-1',
  //               meta: { title: '嵌套路由 1-1-1' },
  //               component: () =>
  //                 import('@/views/vab/nested/menu1/menu1-1/menu1-1-1/index'),
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       path: 'magnifier',
  //       name: 'Magnifier',
  //       component: () => import('@/views/vab/magnifier/index'),
  //       meta: { title: '放大镜', permissions: ['admin'] },
  //     },
  //     {
  //       path: 'loading',
  //       name: 'Loading',
  //       component: () => import('@/views/vab/loading/index'),
  //       meta: { title: 'loading', permissions: ['admin'] },
  //     },
  //     {
  //       path: 'player',
  //       name: 'Player',
  //       component: () => import('@/views/vab/player/index'),
  //       meta: { title: '视频播放器', permissions: ['admin'] },
  //     },
  //     {
  //       path: 'markdownEditor',
  //       name: 'MarkdownEditor',
  //       component: () => import('@/views/vab/markdownEditor/index'),
  //       meta: { title: 'markdown编辑器', permissions: ['admin'] },
  //     },
  //     {
  //       path: 'editor',
  //       name: 'Editor',
  //       component: () => import('@/views/vab/editor/index'),
  //       meta: {
  //         title: '富文本编辑器',
  //         permissions: ['admin'],
  //         badge: 'New',
  //       },
  //     },
  //     {
  //       path: 'backToTop',
  //       name: 'BackToTop',
  //       component: () => import('@/views/vab/backToTop/index'),
  //       meta: { title: '返回顶部', permissions: ['admin'] },
  //     },
  //     {
  //       path: 'lodash',
  //       name: 'Lodash',
  //       component: () => import('@/views/vab/lodash/index'),
  //       meta: { title: 'lodash', permissions: ['admin'] },
  //     },
  //     {
  //       path: 'smallComponents',
  //       name: 'SmallComponents',
  //       component: () => import('@/views/vab/smallComponents/index'),
  //       meta: { title: '小组件', permissions: ['admin'] },
  //     },

  //     {
  //       path: 'upload',
  //       name: 'Upload',
  //       component: () => import('@/views/vab/upload/index'),
  //       meta: { title: '上传', permissions: ['admin'] },
  //     },
  //     {
  //       path: 'log',
  //       name: 'Log',
  //       component: () => import('@/views/vab/errorLog/index'),
  //       meta: { title: '错误日志模拟', permissions: ['admin'] },
  //     },
  //     {
  //       path: 'https://github.com/chuzhixin/vue-admin-beautiful?utm_source=gold_browser_extension',
  //       name: 'ExternalLink',
  //       meta: {
  //         title: '外链',
  //         target: '_blank',
  //         permissions: ['admin', 'editor'],
  //         badge: 'New',
  //       },
  //     },
  //     {
  //       path: 'more',
  //       name: 'More',
  //       component: () => import('@/views/vab/more/index'),
  //       meta: { title: '关于', permissions: ['admin'] },
  //     },
  //   ],
  // },
  // {
  //   path: '/personnelManagement',
  //   component: Layout,
  //   redirect: 'noRedirect',
  //   name: 'PersonnelManagement',
  //   meta: { title: '配置', icon: 'users-cog', permissions: ['admin'] },
  //   children: [
  //     {
  //       path: 'userManagement',
  //       name: 'UserManagement',
  //       component: () =>
  //         import('@/views/personnelManagement/userManagement/index'),
  //       meta: { title: '用户管理' },
  //     },
  //     {
  //       path: 'roleManagement',
  //       name: 'RoleManagement',
  //       component: () =>
  //         import('@/views/personnelManagement/roleManagement/index'),
  //       meta: { title: '角色管理' },
  //     },
  //     {
  //       path: 'menuManagement',
  //       name: 'MenuManagement',
  //       component: () =>
  //         import('@/views/personnelManagement/menuManagement/index'),
  //       meta: { title: '菜单管理', badge: 'New' },
  //     },
  //   ],
  // },
  // {
  //   path: '/mall',
  //   component: Layout,
  //   redirect: 'noRedirect',
  //   name: 'Mall',
  //   meta: {
  //     title: '商城',
  //     icon: 'shopping-cart',
  //     permissions: ['admin'],
  //   },

  //   children: [
  //     {
  //       path: 'pay',
  //       name: 'Pay',
  //       component: () => import('@/views/mall/pay/index'),
  //       meta: {
  //         title: '支付',
  //         noKeepAlive: true,
  //       },
  //       children: null,
  //     },
  //     {
  //       path: 'goodsList',
  //       name: 'GoodsList',
  //       component: () => import('@/views/mall/goodsList/index'),
  //       meta: {
  //         title: '商品列表',
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: '/collect',
  //   component: Layout,
  //   redirect: 'noRedirect',
  //   name: '收藏首页面',
  //   meta: {
  //     title: '收藏页面',
  //     icon: 'shopping-cart',
  //     permissions: ['admin'],
  //   },
  //   children: [
  //     {
  //       path: 'collect',
  //       name: '收藏页面',
  //       component: () => import('@/views/collect/index'),
  //       meta: {
  //         title: '收藏页面',
  //         noKeepAlive: true,
  //       },
  //       children: null,
  //     },
  //   ],
  // },
  // {
  //   path: '/create1',
  //   component: Layout,
  //   redirect: 'noRedirect',
  //   name: '生成首页面',
  //   meta: {
  //     title: '生成页面',
  //     icon: 'shopping-cart',
  //     permissions: ['admin'],
  //   },

  //   children: [
  //     {
  //       path: 'create',
  //       name: '生成页面',
  //       component: () => import('@/views/create/index'),
  //       meta: {
  //         title: '生成页面',
  //         noKeepAlive: true,
  //       },
  //       children: null,
  //     },
  //   ],
  // },
  // {
  //   path: '/history1',
  //   component: Layout,
  //   redirect: 'noRedirect',
  //   name: '历史首任务',
  //   meta: {
  //     title: '历史任务',
  //     icon: 'shopping-cart',
  //     permissions: ['admin'],
  //   },

  //   children: [
  //     {
  //       path: 'history1',
  //       name: '历史任务',
  //       component: () => import('@/views/history/index'),
  //       meta: {
  //         title: '历史任务',
  //         noKeepAlive: true,
  //       },
  //       children: null,
  //     },
  //   ],
  // },
  // {
  //   path: '/show',
  //   component: Layout,
  //   redirect: 'noRedirect',
  //   name: '展示首页面',
  //   meta: {
  //     title: '展示页面',
  //     icon: 'shopping-cart',
  //     permissions: ['admin'],
  //   },

  //   children: [
  //     {
  //       path: 'show',
  //       name: '展示选择页面',
  //       component: () => import('@/views/show/index'),
  //       meta: {
  //         title: '展示选择页面',
  //         noKeepAlive: true,
  //       },
  //       children: null,
  //     },
  //   ],
  // },
  // {
  //   path: '/bline1',
  //   component: Layout,
  //   redirect: 'noRedirect',
  //   name: 'bline1',
  //   meta: {
  //     title: '折线',
  //     // icon: 'shopping-cart',
  //     permissions: ['admin'],
  //   },

  //   children: [
  //     {
  //       path: 'bline',
  //       name: '折线首页',
  //       component: () => import('@/views/bline/index'),
  //       meta: {
  //         title: '折线',
  //         noKeepAlive: true,
  //       },
  //       children: null,
  //     },
  //   ],
  // },
  // {
  //   path: '/circle1',
  //   component: Layout,
  //   redirect: 'noRedirect',
  //   name: 'circle首页',
  //   meta: {
  //     title: 'circle',
  //     // icon: 'shopping-cart',
  //     permissions: ['admin'],
  //   },

  //   children: [
  //     {
  //       path: 'circle',
  //       name: 'circle',
  //       component: () => import('@/views/circle/index'),
  //       meta: {
  //         title: 'circle',
  //         noKeepAlive: true,
  //       },
  //       children: null,
  //     },
  //   ],
  // },
  // {
  //   path: '/histogram1',
  //   component: Layout,
  //   redirect: 'noRedirect',
  //   name: '柱状图首页',
  //   meta: {
  //     title: '柱状图',
  //     // icon: 'shopping-cart',
  //     permissions: ['admin'],
  //   },

  //   children: [
  //     {
  //       path: 'histogram',
  //       name: '柱状图',
  //       component: () => import('@/views/histogram/index'),
  //       meta: {
  //         title: '小说作者柱状图',
  //         noKeepAlive: true,
  //       },
  //       children: null,
  //     },
  //   ],
  // },
  // {
  //   path: '/pie1',
  //   component: Layout,
  //   redirect: 'noRedirect',
  //   name: '饼图首页',
  //   meta: {
  //     title: '饼图',
  //     // icon: 'shopping-cart',
  //     permissions: ['admin'],
  //   },

  //   children: [
  //     {
  //       path: 'pie',
  //       name: '饼图',
  //       component: () => import('@/views/pie/index'),
  //       meta: {
  //         title: '饼图',
  //         noKeepAlive: true,
  //       },
  //       children: null,
  //     },
  //   ],
  // },
  // {
  //   path: '/try',
  //   component: Layout,
  //   redirect: 'noRedirect',
  //   name: 'try1',
  //   meta: {
  //     title: 'try',
  //     // icon: 'shopping-cart',
  //     permissions: ['admin'],
  //   },

  //   children: [
  //     {
  //       path: 'try',
  //       name: 'try',
  //       component: () => import('@/views/try/index'),
  //       meta: {
  //         title: 'try',
  //         noKeepAlive: true,
  //       },
  //       children: null,
  //     },
  //   ],
  // },

  {
    path: '/exhibition',
    component: Layout,
    redirect: 'noRedirect',
    name: 'exhibition',
    meta: {
      title: '可视化',
      icon: 'dice',
      permissions: ['admin'],
    },
    children: [
      {
        path: 'numRanklist',
        name: 'numRanklist',
        component: () => import('@/views/exhibition/numRanklist'),
        meta: {
          title: '字数排行榜',
          icon: 'marker',
          KeepAlive: true,
          permissions: ['admin'],
        },
      },
      {
        path: 'recommendedRanklist',
        name: 'recommendedRanklist',
        component: () => import('@/views/exhibition/recommendedRanklist'),
        meta: {
          title: '总推荐排行榜',
          icon: 'dice',
          permissions: ['admin'],
        },
      },
      {
        path: 'clickRanklist',
        name: 'clickRanklist',
        component: () => import('@/views/exhibition/clickRanklist'),
        meta: {
          title: '点击数排行榜',
          icon: 'dice',
          permissions: ['admin'],
        },
      },
      {
        path: 'weekRecommendedRanklist',
        name: 'weekRecommendedRanklist',
        component: () => import('@/views/exhibition/weekRecommendedRanklist'),
        meta: {
          title: '周推荐排行榜',
          icon: 'dice',
          permissions: ['admin'],
        },
      },
      {
        path: 'authorRanklist',
        name: 'authorRanklist',
        component: () => import('@/views/exhibition/authorRanklist'),
        meta: {
          title: '小说作者排行榜',
          icon: 'dice',
          permissions: ['admin'],
        },
      },
      {
        path: 'categorypie',
        name: 'categorypie',
        component: () => import('@/views/exhibition/categorypie'),
        meta: {
          title: '类别分析图',
          icon: 'dice',
          permissions: ['admin'],
        },
        children: null,
      },
    ],
  },

  {
    path: '*',
    redirect: '/404',
    hidden: true,
  },
]

const router = new VueRouter({
  base: publicPath,
  mode: routerMode,
  scrollBehavior: () => ({
    y: 0,
  }),
  routes: constantRoutes,
})

export function resetRouter() {
  location.reload()
}

export default router
