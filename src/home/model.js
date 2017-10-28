/**
 * Model of IMVC
 */

export const initialState = {
  html: {
    title: 'react-imvc'
  },
  contents: [
    {
      type: "基本用法",
      list: [
        {
          title: "单独展示静态 React 组件",
          url: "/basic_usage/static_view"
        },
        {
          title: "使用 Link 组件用不刷新页面的方式跳转页面",
          url: "/basic_usage/use_link_component"
        },
        {
          title: "存在默认填充的 state 属性",
          url: "/basic_usage/basic_state"
        },
        {
          title: "需要用特定方式引用 CSS 文件",
          url: "/basic_usage/import_css"
        },
        {
          title: "用 action 来改变 state",
          url: "/basic_usage/use_action"
        },
        {
          title: "事件函数写在 Controller 里统筹处理",
          url: "/basic_usage/event_handler"
        },
        {
          title: "介绍有用的生命周期方法",
          url: "/basic_usage/life_cycle_method"
        },
        {
          title: "使用 fetch 方法同构地发起请求",
          url: "/basic_usage/isomorphic_fetch"
        },
        {
          title: "有最简单的 Mock 数据功能",
          url: "/basic_usage/simple_mock"
        },
        {
          title: "使用 cookie 方法同构地存取 cookie",
          url: "/basic_usage/isomorphic_cookie"
        },
        {
          title: "使用 redirect 方法同构地重定向",
          url: "/basic_usage/isomorphic_redirect?tips=1秒后重定向到首页"
        },
        {
          title: '介绍表单 Input 组件',
          url: '/basic_usage/input_component'
        },
        {
          title: '自定义 title、description 和 keywoards',
          url: '/basic_usage/custom_title_description_keywords'
        },
      ]
    },
    {
      type: '进阶用法',
      list: [
        {
          title: '利用 context 属性实现自定义同构方法',
          url: "/advanced_usage/custom_isomorphic_method"
        },
        {
          title: '运用 KeepAlive 属性复用 controller',
          url: "/advanced_usage/use_keep_alive/a"
        },
        {
          title: "使用 NavLink 组件响应当前 url 的匹配样式",
          url: "/advanced_usage/use_nav_link_component/a"
        },
      ]
    }
  ]
};
