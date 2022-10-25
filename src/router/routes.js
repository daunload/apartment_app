const routes = [
  {
    path: "/",
    name: "paddingLayout",
    component: () => import("@/layouts/PaddingLayout.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("@/router/views/MainView"),
      },
      {
        path: "/listView",
        name: "list",
        component: () => import("@/router/views/ListView"),
      },
      {
        path: "/detailView/:id",
        name: "detail",
        component: () => import("@/router/views/DetailView"),
      },
      {
        path: "/register",
        name: "register",
        component: () => import("@/router/views/DetailRegister"),
      },
      {
        path: "/selectProgram/:id",
        name: "selectProgram",
        component: () => import("@/router/views/DetailSelectProgram"),
      },
    ],
  },
  {
    path: "/selectTime",
    name: "selectTime",
    component: () => import("@/router/views/DetailSelectTime"),
  },
  {
    path: "/usageHistory",
    name: "usageHistory",
    component: () => import("@/router/views/UsageHistory"),
  },
];

export default routes;
