<template>
  <b-container>
    <h3> {{ title }}: <slot></slot> </h3>
    <h5 v-if="title==='Random Recipes'"> Explore this recipes </h5>
    <div class="recipeList">
      <b-row>
        <b-col cols="4" v-for="r in recipes" :key="r.id">
          <RecipePreview class="recipePreview" :recipe="r" />
        </b-col>        
      </b-row>

    </div>
    <div id="divRandomBtn">
      <b-button @click="updateRecipes()" v-if="title==='Random Recipes'">Get Another Random Recipes</b-button>
    </div>
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
    },
/*    searchKeywords: {
      type: String,
      required: false
    },
    searchCuisine: {
      type: String,
      required: false
    },
    searchDiet: {
      type: String,
      required: false
    },
    searchIntolerances: {
      type: String,
      required: false
    }, */
  },
  data() {
    return {
      recipes: [],
      searchForm: {}
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
        else if (this.title==="Search Results" && Object.keys(this.searchForm).length != 0 && ( this.searchForm.keywords ||
                  this.searchForm.cuisine || this.searchForm.diet || this.searchForm.intolerances || this.searchForm.number)){
          console.log(this.searchForm);
          response = await this.axios.put(this.$root.store.server_domain + "/recipes/search",
            {
              query: this.searchForm.keywords,
              cuisine: this.searchForm.cuisine,
              diet: this.searchForm.diet,
              intolerances: this.searchForm.intolerances,
              number: this.searchForm.number
            }
          )
        }
        else{ // no request matches 
          // response = {data:{}};
          return;
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
    },
    async changeSearchProps(formInfo){
      this.searchForm = formInfo;
      await this.updateRecipes();
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}

.recipePreview{
  padding-top: 5%;
  padding-left: 10%;
}

#divRandomBtn{
  margin: 2%;
  text-align: center;
}
</style>
