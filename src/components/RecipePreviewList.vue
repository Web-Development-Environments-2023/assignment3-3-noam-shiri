<template>
  <b-container>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>
    <h5 v-if="title==='Random Recipes'"> Explore this recipes </h5>
    <b-row>
      <b-col v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-col>
    </b-row>
    <b-button @click="updateRecipes()" v-if="title==='Random Recipes'">Get Another Random Recipes</b-button>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      recipes: []
    };
  },
  mounted() {
    this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      try {
        let response;
        if (this.title==="Random Recipes"){
          response = await this.axios.get(
            this.$root.store.server_domain + "/recipes/random",
            // "https://test-for-3-2.herokuapp.com/recipes/random"
          );
        }
        else if (this.title==="Last Viewed Recipes" && this.$root.store.username){ // TO DO: check why there's problem with authentication!
            response = await this.axios.get(
            this.$root.store.server_domain + "/users/watched",
            // "https://test-for-3-2.herokuapp.com//user/watched"
          );
        }
        // console.log(response);
        const recipes = response.data;//.recipes;
        // console.log(recipes);
        this.recipes = [];
        this.recipes.push(...recipes);
        // console.log(this.recipes);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
</style>
