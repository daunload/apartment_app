const routes = [
  {
    path: "/",
<<<<<<< HEAD
    name: "paddingLayout",
=======
    name: "PaddingLayout",
>>>>>>> 774775d94d82fc50d9b2fa4af7de98dcb32c9db2
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
<<<<<<< HEAD
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
=======
      {
        path: "/selectTime",
        name: "selectTime",
        component: () => import("@/router/views/DetailSelectTime"),
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
    ],
>>>>>>> 774775d94d82fc50d9b2fa4af7de98dcb32c9db2
  },
];

export default routes;
