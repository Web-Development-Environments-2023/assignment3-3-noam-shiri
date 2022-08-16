<template>
  <b-container>
    <b-row>
      <b-col>
        <h3 id="page-title"> {{ title }}: <slot></slot></h3>
      </b-col>
      <b-col class="search-btn-div" v-if="title=='Search Results'">
        <b-button class="sort-btn" @click="sortByPreparationTime">Sort by preparation time</b-button>
        <b-button class="sort-btn" @click="sortByPopularity">Sort by popularity</b-button>
      </b-col>
    </b-row>
    <h5 v-if="title==='Random Recipes'"> Explore this recipes </h5>
    <div id="recipes-to-show" class="recipeList">
      <b-row>
        <b-col cols="4" v-for="r in recipes" :key="r.id">
          <RecipePreview class="recipePreview" :recipe="r" :isPrivateRecipe="isPrivateRecipe"/>
        </b-col>        
      </b-row>
    </div>
    <div id="divRandomBtn" v-if="title==='Random Recipes'">
        <b-button @click="updateRecipes()">Get Another Random Recipes</b-button>
    </div>
    <div id="divSearchNoResults" style="display: none;">
      <label>There are no recipes that matches your search :(</label>
    </div>
    <div id="divProblemWithServer" style="display: none;">
      <label>An Error accured while conneting to server :(</label>
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
  },
  data() {
    return {
      recipes: [],
      searchForm: {},
      isPrivateRecipe: false,
    };
  },
  mounted() {
    this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      document.getElementById("divProblemWithServer").style.display="none";
      try {
        let response;
        if (this.title==="Random Recipes"){
          response = await this.axios.get(
            this.$root.store.server_domain + "/recipes/random",
            // "https://test-for-3-2.herokuapp.com/recipes/random"
          );
        }
        else if (this.title==="Last Viewed Recipes" && this.$root.store.username){
            response = await this.axios.get(
            this.$root.store.server_domain + "/users/watched",
            // "https://test-for-3-2.herokuapp.com//users/watched"
          );
        }
        else if (this.title==="Family Recipes" && this.$root.store.username){
            response = await this.axios.get(
            this.$root.store.server_domain + "/users/family",
            // "https://test-for-3-2.herokuapp.com//users/family"
          );          
          this.isPrivateRecipe = true;
        }
        else if (this.title==="Favorite Recipes" && this.$root.store.username){
            response = await this.axios.get(
            this.$root.store.server_domain + "/users/favorites",
            // "https://test-for-3-2.herokuapp.com//users/favorites"
          );          
          this.isPrivateRecipe = false;
        }
        else if (this.title==="Search Results" && Object.keys(this.searchForm).length != 0 && ( this.searchForm.keywords ||
                  this.searchForm.cuisine || this.searchForm.diet || this.searchForm.intolerances || this.searchForm.number)){
          response = await this.axios.put(this.$root.store.server_domain + "/recipes/search",
            {
              query: this.searchForm.keywords,
              cuisine: this.searchForm.cuisine,
              diet: this.searchForm.diet,
              intolerances: this.searchForm.intolerances,
              number: this.searchForm.number
            }
          )
          if (Object.keys(response.data).length===0){
            document.getElementById('divSearchNoResults').style.display='';
            document.getElementById('recipes-to-show').style.display='none';
            return
          }
          else{
            document.getElementById('divSearchNoResults').style.display='none';
            document.getElementById('recipes-to-show').style.display='';
          }
        }
        else if(this.title=="Added Recipes"){
          response = await this.axios.get(this.$root.store.server_domain +"/users/added");
          this.isPrivateRecipe = true;
          // console.log(response.data);
          // return;
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
        document.getElementById("divProblemWithServer").style.display='';
        document.getElementById('divSearchNoResults').style.display='none';
      }
    },
    async changeSearchProps(formInfo){
      this.searchForm = formInfo;
      await this.updateRecipes();
      console.log(this.recipes[0]);
      return this.recipes[0];
    },
    sortByPreparationTime(){
      this.recipes = this.recipes.sort((a,b) => a.readyInMinutes-b.readyInMinutes);    
    },
    sortByPopularity(){
      this.recipes = this.recipes.sort((a,b) => -(a.popularity-b.popularity));
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

.sort-btn{
  margin: 1%
}
.search-btn-div{
  text-align: right;
}

.btn-secondary{
  background-color: #594545;
}

.btn-secondary:hover{
  background-color: #8c6565;
}

#page-title{
  font-size: 40px;
  font-family: cursive;
  color: #594545;
  text-align: center;
}

h5{
  text-align: center;
  color: white;
}
</style>
