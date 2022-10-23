const routes = [
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
    path: "/detailView",
    name: "detail",
    component: () => import("@/router/views/DetailView"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/router/views/DetailRegister"),
  },
];

export default routes
