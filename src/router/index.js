import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    //component: HomeView
    component: () =>
      import(/* webpackChunkName: "page1" */ "../views/HomeView.vue"),
  },
  {
    path: "/page1",
    name: "page1",
    component: () =>
      import(/* webpackChunkName: "page1" */ "../views/Page1.vue"),
  },
	{
    path: "/page1-1",
    name: "page1-1",
    component: () =>
      import(/* webpackChunkName: "page1" */ "../views/Page1-1.vue"),
  },
	{
    path: "/page1-2",
    name: "page1-2",
    component: () =>
      import(/* webpackChunkName: "page1" */ "../views/Page1-2.vue"),
  },
	{
    path: "/page1-3",
    name: "page1-3",
    component: () =>
      import(/* webpackChunkName: "page1" */ "../views/Page1-3.vue"),
  },
	{
    path: "/page1-1-1",
    name: "page1-1-1",
    component: () =>
      import(/* webpackChunkName: "page1" */ "../views/Page1-1-1.vue"),
  },
	{
    path: "/page1-1-2",
    name: "page1-1-2",
    component: () =>
      import(/* webpackChunkName: "page1" */ "../views/Page1-1-2.vue"),
  },
	{
    path: "/page1-1-3",
    name: "page1-1-3",
    component: () =>
      import(/* webpackChunkName: "page1" */ "../views/Page1-1-3.vue"),
  },
  {
    path: "/page2",
    name: "page2",
    component: () =>
      import(/* webpackChunkName: "page2" */ "../views/Page2.vue"),
  },
  {
    path: "/page3",
    name: "page3",
    component: () =>
      import(/* webpackChunkName: "page3" */ "../views/Page3.vue"),
  },
  {
    path: "/page4",
    name: "page4",
    component: () =>
      import(/* webpackChunkName: "page4" */ "../views/Page4.vue"),
  },
  {
    path: "/page5",
    name: "page5",
    component: () =>
      import(/* webpackChunkName: "page5" */ "../views/Page5.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
