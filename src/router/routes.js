const routes = [
  {
    path: "/",
    name: "PaddingLayout",
    component: () => import("@/layouts/PaddingLayout.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("@/router/views/MainView"),
      },
    ],
  },
  {
    path: "/",
    name: "DefaultLayout",
    component: () => import("@/layouts/DefaultLayout.vue"),
    children: [
      {
        path: "/usageHistory",
        name: "usageHistory",
        component: () => import("@/router/views/UsageHistory"),
      },
      {
        path: "/detailView/:id",
        name: "detail",
        component: () => import("@/router/views/DetailView"),
      },
      {
        path: "/listView",
        name: "list",
        component: () => import("@/router/views/ListView"),
      },
      {
        path: "/selectProgram/:id",
        name: "selectProgram",
        component: () => import("@/router/views/DetailSelectProgram"),
      },
      {
        path: "/register",
        name: "register",
        component: () => import("@/router/views/DetailRegister"),
      },
      {
        path: "/selectTime",
        name: "selectTime",
        component: () => import("@/router/views/DetailSelectTime"),
      },
    ],
  },
];

export default routes;
