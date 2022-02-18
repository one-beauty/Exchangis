export default {
  html: {
    title: 'Exchangis',
    favicon: './src/assets/img/E.jpg',
  },
  publicPath: "./",
  access: {
    roles: {
      admin: ["*"],
    },
  },
  router: {
    mode: "hash",
    routes: [
      {
        path: "/",
        redirect: "/projectManage",
      },
      {
        path: "/projectManage",
        component: "@/pages/projectManage",
        meta: {
          name: "projectManage",
          title: "globalMenu.projectManage",
        },
      },
      {
        path: "/dataSourceManage",
        component: "@/pages/dataSourceManage",
        meta: {
          name: "dataSourceManage",
          title: "globalMenu.dataSourceManage",
        },
      },
      {
        path: "/jobManagement",
        component: "@/pages/jobManagement",
        meta: {
          name: "jobManagement",
          title: "globalMenu.jobManagement",
        },
      },
      {
        path: "/synchronizationHistory",
        component: "@/pages/synchronizationHistory",
        meta: {
          name: "synchronizationHistory",
          title: "globalMenu.synchronizationHistory",
        },
      },
      {
        path: "/homePage",
        component: "@/pages/homePage",
        meta: {
          name: "homePage",
          title: "globalMenu.homePage",
        },
      },
      {
        path: "/childJobManagement",
        component: "@/pages/jobManagementItem",
        meta: {
          name: "synchronizationHistory",
          title: "globalMenu.synchronizationHistory",
        }
      }
    ],
  },
  request: {
    dataField: "data",
  },
  extraBabelPlugins: [
    [
      "import",
      { libraryName: "ant-design-vue", libraryDirectory: "es", style: "css" },
    ],
  ],
  layout: {
    navigation: 'side',
    theme: 'light',
    title: "",
    logo: 'data:image/jpeg;base64,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',
    footer: "",
    multiTabs: false,
    menus: [
      /*{
        name: "homePage",
        icon: 'home'
      },*/
      {
        name: "projectManage",
        icon: 'project'
      },
      {
        name: "dataSourceManage",
        icon: 'database'
      },
      {
        name: "synchronizationHistory",
        icon: 'history'
      },
    ],
  },
  devServer: {
    host: "0.0.0.0",
    port: 8000
  },
  proxy: {
    "/api": {
      //target: "http://192.168.0.157:9321/",
      //target: "http://172.24.8.51:9321/",
      target: "http://124.70.31.149:20088",
      changeOrigin: true,
      pathRewrite: { "^/api": "/api" },
    },
  },
  locale: {
    locale: "zh-CN", // default locale
    fallbackLocale: "zh-CN", // set fallback locale
    baseNavigator: true, // 开启浏览器语言检测
    share: true, // 用户是否需要手动改变语言
  },
};
