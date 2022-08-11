import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage"),
  },
  {
    path: "/recipe/:recipeId/:private",
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
    //props: {private: false},
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./pages/About"),
  },
  {
    path: "/family",
    name: "family",
    component: () => import("./pages/FamilyRecipes"),
  },
  {
    path: "/added",
    name: "added",
    component: () => import("./pages/AddedRecipes"),
  },
  {
    path: "/favorite",
    name: "favorite",
    component: () => import("./pages/FavoriteRecipes"),
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
];

export default routes;
