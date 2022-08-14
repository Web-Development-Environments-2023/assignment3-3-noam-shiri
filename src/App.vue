<template>
  <div id="app">
    <!-- NEW -->
    <div>
      <!-- <b-navbar toggleable="lg" type="dark" variant="info" id="new-nav"> -->
      <b-navbar toggleable="lg" type="dark" variant="info" id="new-nav">

        <b-navbar-brand>
          <img :src="this.$root.store.iconsLinks.nav_icon" id="nav-icon"/>
        </b-navbar-brand>
        <b-navbar-brand style="color: rgba(255, 255, 255, 0.75);"  onMouseOver="this.style.color='rgba(255, 255, 255)'" 
          onMouseOut="this.style.color='rgba(255, 255, 255, 0.75)'" :to="{ name: 'main' }">Home</b-navbar-brand>
        <b-navbar-brand style="color: rgba(255, 255, 255, 0.75);"  onMouseOver="this.style.color='rgba(255, 255, 255)'" 
          onMouseOut="this.style.color='rgba(255, 255, 255, 0.75)'"  :to="{ name: 'search' }">Search</b-navbar-brand>
        <b-navbar-brand style="color: rgba(255, 255, 255, 0.75);"  onMouseOver="this.style.color='rgba(255, 255, 255)'" 
          onMouseOut="this.style.color='rgba(255, 255, 255, 0.75)'"  :to="{ name: 'about' }">About</b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav> <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
              <!-- No user: -->
            <b-nav-item-dropdown right v-if="!$root.store.username">
              <template #button-content>
                <em>Hello Guest</em>
              </template>
              <b-dropdown-item :to="{ name: 'register' }">Register</b-dropdown-item>
              <b-dropdown-item :to="{ name: 'login' }">Login</b-dropdown-item>
            </b-nav-item-dropdown>
            <!-- else, user entered: -->
            <b-nav-item-dropdown right v-else> 
              <template #button-content>
                <em>Hello {{ $root.store.username }}</em>
              </template>
              <b-dropdown-item :to="{ name: 'favorite'}">Favorites</b-dropdown-item>
              <b-dropdown-item :to="{ name: 'added'}">My Recipes</b-dropdown-item>
              <b-dropdown-item :to="{ name: 'family'}">My Family Recipes</b-dropdown-item>
              <b-dropdown-item @click="Logout">Log Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <!-- OLD -->
    <!-- <div id="nav"> -->
      <!-- <router-link :to="{ name: 'main' }">Main</router-link>| -->
      <!-- <router-link :to="{ name: 'search' }">Search</router-link>|
      <router-link :to="{ name: 'about' }">About</router-link>| -->
      <!-- <span v-if="!$root.store.username">
        Hello Guest:
        <router-link :to="{ name: 'register' }">Register</router-link>|
        <router-link :to="{ name: 'login' }">Login</router-link>|
      </span>
      <span v-else>
        Hello {{ $root.store.username }}:
        <b-dropdown id="private-for-user" offset="25" variant="primary" text="Personal">
          <b-dropdown-item> 
            <router-link :to="{ name: 'favorite'}">Favorites</router-link>
          </b-dropdown-item>
          <b-dropdown-item> 
            <router-link :to="{ name: 'added'}">My Recipes</router-link>
          </b-dropdown-item>
          <b-dropdown-item> 
            <router-link :to="{ name: 'family'}">My Family Recipes</router-link>
          </b-dropdown-item>
        </b-dropdown>
        <button @click="Logout">Logout</button>|
      </span> 
    </div>-->
    <router-view/>
  </div>
</template>

<script>
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
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";

#app {
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #f2edeb;
}

// #nav {
//   padding: 30px;
// }

// #nav a {
//   font-weight: bold;
//   color: #2c3e50;
// }

// #nav a.router-link-exact-active {
//   color: #42b983;
// }

#new-nav{
  font-size: 20px;
  font-family: cursive;
  background-color: #594545 !important;
}

#nav-icon{
  height: 50px;
  margin-left: 30px;
  margin-right: 30px;
}

a{
  margin-left: 30px;
}


</style>
