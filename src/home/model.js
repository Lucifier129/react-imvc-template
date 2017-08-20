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
          url: "/base/static_view"
        },
        {
          title: "存在默认填充的 state 属性",
          url: "/base/basic_state"
        },
        {
          title: "需要用特定方式引用 CSS 文件",
          url: "/base/import_css"
        },
        {
          title: "用 action 来改变 state",
          url: "/base/use_action"
        },
        {
          title: "事件函数写在 Controller 里统筹处理",
          url: "/base/event_handler"
        },
        {
          title: "介绍有用的生命周期方法",
          url: "/base/life_cycle_method"
        },
        {
          title: "使用 fetch 方法同构地发起请求",
          url: "/base/isomorphic_fetch"
        },
        {
          title: "有最简单的 Mock 数据功能",
          url: "/base/simple_mock"
        },
        {
          title: "使用 cookie 方法同构地存取 cookie",
          url: "/base/isomorphic_cookie"
        },
        {
          title: "使用 redirect 方法同构地重定向",
          url: "/base/isomorphic_redirect?tips=1秒后重定向到首页"
        },
        {
          title: '介绍表单 Input 组件',
          url: '/base/input_component'
        },
        {
          title: '自定义 title、description 和 keywoards',
          url: '/base/custom_title_description_keywords'
        },
      ]
    }
  ]
};
