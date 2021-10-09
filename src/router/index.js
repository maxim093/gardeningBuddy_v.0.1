import { createRouter, createWebHashHistory } from "vue-router";
import LandingPage from "../pages/LandingPage.vue";
import Register from "../pages/Register.vue";
import News from "../pages/News.vue";
import GetStarted from "../pages/GetStarted.vue";
import NewDashboard from "../pages/NewDashboard.vue";
import RaisedBed from "../components/molecules/RaisedBed/NormalRaisedBed.vue";
import Login from "../pages/Login.vue";

//ADMIN PANEL
import CreatePlant from "../administration/pages/CreatePlant.vue";

const routes = [
  {
    path: "/",
    redirect: "/Landingpage",
  },
  {
    path: "/components",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../pages/About.vue"),
  },
  {
    path: "/Landingpage",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
  },
  {
    path: "/News",
    name: "News",
    component: News,
  },
  {
    path: "/CreatePlant",
    name: "CreatePlant",
    component: CreatePlant,
  },
  {
    path: "/RaisedBed",
    name: "RaisedBed",
    component: RaisedBed,
  },
  {
    path: "/GetStarted",
    name: "GetStarted",
    component: GetStarted,
  },
  {
    path: "/NewDashboard",
    name: "NewDashboard",
    component: NewDashboard,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
