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
  FormTextareaPlugin,
  FormFilePlugin
} from "bootstrap-vue";
[
  FormGroupPlugin,
  FormFilePlugin,
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
/* import all icons from src/assets/icons */
import dislike from '../src/assets/icons/dislike.png'
import like from '../src/assets/icons/like.png'
import watched from '../src/assets/icons/watched.png'
import vegan from '../src/assets/icons/Vegan-removebg-preview.png'
import nowheat from '../src/assets/icons/Gluten_Free-removebg-preview.png'
import gluten from '../src/assets/icons/Has_Gluten-removebg-preview.png'
import plantbased from '../src/assets/icons/Vegetarian-removebg-preview.png'
import hourglass from '../src/assets/icons/hourglass.png'
import trending from '../src/assets/icons/trending.png'
import cooking from '../src/assets/icons/cooking.png'
import dish from '../src/assets/icons/dish.png'
import thumb from '../src/assets/icons/thumb.png'


Vue.config.productionTip = false;
const shared_data = {
  username: localStorage.username,
  sessionLastSearch:{},
  sessionLastSearchResults:{},
  login(username) {
    localStorage.setItem("username", username);
    this.username = username;
    console.log("login", this.username);
  },
  logout() {
    console.log("logout");
    localStorage.removeItem("username");
    this.username = undefined;
    this.sessionLastSearchResults = {};
  },
  
  server_domain: 'http://localhost:80',
  iconsLinks : {
    notFavorite: dislike,
    favorite: like,
    watched: watched,
    vegan: vegan,
    glutenFree: nowheat,
    gluten: gluten,
    vegetarian: plantbased,
    readyInMinutes: hourglass,
    popularity:trending,
    thumbs_up: thumb,
    dishes: dish,
    nav_icon: cooking,
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
