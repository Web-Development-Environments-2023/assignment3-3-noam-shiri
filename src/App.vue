<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'main' }">Main</router-link>|
      <router-link :to="{ name: 'search' }">Search</router-link>|
      <router-link :to="{ name: 'about' }">About</router-link>|
      <span v-if="!$root.store.username">
        Hello Guest:
        <router-link :to="{ name: 'register' }">Register</router-link>|
        <router-link :to="{ name: 'login' }">Login</router-link>|
      </span>
      <span v-else>
        Hello {{ $root.store.username }}:
        <b-dropdown id="private-for-user" offset="25" variant="primary" text="Personal">
          <b-dropdown-item> 
            <router-link :to="{ name: 'favorite'}">My Favorite Recipes</router-link>
          </b-dropdown-item>
          <b-dropdown-item href=""> 
            <RecipeCreator/>
          </b-dropdown-item>
          <b-dropdown-item> 
            <router-link :to="{ name: 'added'}">Recipes I Created</router-link>
          </b-dropdown-item>
          <b-dropdown-item> 
            <router-link :to="{ name: 'family'}">My Family Recipes</router-link>
          </b-dropdown-item>
        </b-dropdown>
        <button @click="Logout">Logout</button>|
      </span>
    </div>
    <router-view />
  </div>
</template>

<script>
import RecipeCreator from './pages/RecipeCreator.vue';
export default {
    name: "App",
    methods: {
        async Logout() {
            try {
                const response = await this.axios.post(
                // "https://test-for-3-2.herokuapp.com/user/Login",
                this.$root.store.server_domain + "/Logout");
                this.$root.store.logout();
                this.$root.toast("Logout", "User logged out successfully", "success");
                this.$router.push("/").catch(() => {
                    this.$forceUpdate();
                });
            }
            catch (err) {
                console.log(err.response);
            }
        }
    },
    components: { RecipeCreator }
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
