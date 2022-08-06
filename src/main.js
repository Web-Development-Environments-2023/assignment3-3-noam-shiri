import Vue from "vue";
import App from "./App.vue";
import VueAxios from "vue-axios";
import axios from "axios";

axios.defaults.withCredentials = true;

import routes from "./routes";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
});

import Vuelidate from "vuelidate";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import {
  FormGroupPlugin,
  FormPlugin,
  FormInputPlugin,
  ButtonPlugin,
  CardPlugin,
  NavbarPlugin,
  FormSelectPlugin,
  AlertPlugin,
  ToastPlugin,
  LayoutPlugin,
  ModalPlugin,
  FormTextareaPlugin
} from "bootstrap-vue";
[
  FormGroupPlugin,
  FormPlugin,
  FormInputPlugin,
  ButtonPlugin,
  CardPlugin,
  NavbarPlugin,
  FormSelectPlugin,
  AlertPlugin,
  ToastPlugin,
  LayoutPlugin,
  ModalPlugin,
  FormTextareaPlugin
].forEach((x) => Vue.use(x));
Vue.use(Vuelidate);

axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

const shared_data = {
  username: localStorage.username,
  sessionLastSearch:{},
  login(username) {
    localStorage.setItem("username", username);
    this.username = username;
    console.log("login", this.username);
  },
  logout() {
    console.log("logout");
    localStorage.removeItem("username");
    this.username = undefined;
    this.sessionLastSearch = {};
  },
  
  server_domain: 'http://localhost:80',
  iconsLinks : {
    notFavorite: "https://cdn-icons-png.flaticon.com/512/833/833300.png",
    favorite: "https://cdn-icons-png.flaticon.com/512/833/833472.png",
    watched: "https://cdn-icons-png.flaticon.com/512/3308/3308898.png",
    vegan:"https://cdn-icons.flaticon.com/png/512/5129/premium/5129836.png?token=exp=1659778350~hmac=a084dd569e5d6801e10e84f7fc69ea99",
    glutenFree:"https://cdn-icons-png.flaticon.com/512/7312/7312801.png",
    gluten:"https://cdn-icons-png.flaticon.com/512/7312/7312798.png",
    vegeterian:"https://cdn-icons-png.flaticon.com/512/892/892917.png",
    readyInMinutes:"https://cdn-icons-png.flaticon.com/512/3867/3867499.png",
    popularity:"https://cdn-icons-png.flaticon.com/512/126/126473.png",
    }
};
console.log(shared_data);
// Vue.prototype.$root.store = shared_data;

new Vue({
  router,
  data() {
    return {
      store: shared_data,
    };
  },
  methods: {
    toast(title, content, variant = null, append = false) {
      this.$bvToast.toast(`${content}`, {
        title: `${title}`,
        toaster: "b-toaster-top-center",
        variant: variant,
        solid: true,
        appendToast: append,
        autoHideDelay: 3000,
      });
    },
  },
  render: (h) => h(App),
}).$mount("#app");
