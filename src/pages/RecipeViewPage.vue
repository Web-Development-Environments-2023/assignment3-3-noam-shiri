<template>
  <div class="container">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <h1>{{ recipe.title }}</h1>
        <img :src="recipe.image" class="center recipe-image" />
        <div v-if="recipe.hasWatched && !this.$route.params.private">
          <img :src=this.$root.store.iconsLinks.watched class="icon-img"/>
          <label>You already watched this recipe</label>
        </div>
      </div>
      <div class="recipe-body">
        <b-row class="about-row">
          <b-col v-if="!this.$route.params.private">
            <img :src="this.likeIcon" class="icon-img like-icon more-icon" @click="addToFavorites()"/>
            <label>{{likeText}}</label>
          </b-col>
          <b-col>
            <img :src="this.$root.store.iconsLinks.readyInMinutes" class="icon-img more-icon"/>
            {{ recipe.readyInMinutes }} min
          </b-col>
          <b-col>
            {{ recipe.servings }} 
            <img :src="this.$root.store.iconsLinks.dishes" class="icon-img more-icon"/>
          </b-col>
          <b-col v-if="!this.$route.params.private">
            {{ recipe.aggregateLikes }}
            <img :src="this.$root.store.iconsLinks.thumbs_up" class="icon-img more-icon"/>
          </b-col>
          <b-col>
            <img v-if="recipe.vegan"  class="icon-img">
            <img v-if="recipe.glutenFree" :src="this.$root.store.iconsLinks.glutenFree"  class="icon-img">
            <img v-else :src="this.$root.store.iconsLinks.gluten" class="icon-img"/>
            <img v-if="recipe.vegeterian" :src="this.$root.store.iconsLinks.vegeterian" class="icon-img">
          </b-col>
        </b-row>
        <div class="wrapper">
          <div class="wrapped">
            <h3>Ingredients:</h3>
            <ul>
              <li
                v-for="(r, index) in recipe.extendedIngredients"
                :key="index + '_' + r.id"
              >
                {{ r.original }}
              </li>
            </ul>
          </div>
          <div class="wrapped">
            <h3>Instructions:</h3>
            <ol>
              <li v-for="s in recipe._instructions" :key="s.number">
                {{ s.step }}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: null,
      likeIcon: this.$root.store.iconsLinks.notFavorite,
      likeText: "Add to Favorites",
    };
  },

  async created() {
    try {
      let response;
      // response = this.$route.params.response;
      //this.$root.store.user_id = 3;
      try {
        if (this.$route.params.private){ // redirectTitle????
          response = await this.axios.get(
            // "https://test-for-3-2.herokuapp.com/recipes/info",
            this.$root.store.server_domain + "/users/" + this.$route.params.recipeId,
            {
              params: { recipe_id: this.$route.params.recipeId },
            }
          );
          console.log(response.data);
          //return;
        }
        else{
          response = await this.axios.get(
            // "https://test-for-3-2.herokuapp.com/recipes/info",
            this.$root.store.server_domain + "/recipes/" + this.$route.params.recipeId,
            {
              params: { recipe_id: this.$route.params.recipeId },
            }
          );
        }
        console.log(response);
        // console.log("response.status", response.status);
        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }
      console.log(response.data);
      let {
        id,
        title,
        image, 
        readyInMinutes,
        aggregateLikes,
        glutenFree,
        vegan,
        vegetarian,
        hasWatched,
        hasFavorited,
        servings,
        analyzedInstructions,
        instructions,
        extendedIngredients,
        recipeOwner,
        timePreparedInFamily
      } = response.data;
      var _instructions;
      if (!this.$route.params.private){
        _instructions = analyzedInstructions
          .map((fstep) => {
            fstep.steps[0].step = fstep.name + fstep.steps[0].step;
            return fstep.steps;
          })
          .reduce((a, b) => [...a, ...b], []);        
      }
      else{
        _instructions = instructions;
      }

      let _recipe = {
        instructions,
        _instructions,
        analyzedInstructions,
        extendedIngredients,
        aggregateLikes,
        readyInMinutes,
        image,
        title,
        servings,
        vegan,
        vegetarian,
        glutenFree,
        hasWatched,
        hasFavorited,
        recipeOwner,
        timePreparedInFamily,
        id
      };
      this.recipe = _recipe;
      if (this.recipe.hasFavorited){ 
        this.changeToLikeIcon();
      }
      console.log(!this.$route.params.private)
      if (!this.$route.params.private){
        response = await this.axios.post(
          this.$root.store.server_domain + "/users/watched", 
            { recipe_id: this.recipe.id },
        );
    }
    } catch (error) {
      console.log(error);
    }
  },

  async beforeDestroy(){
    // add to watched!
    console.log(!this.$route.params.private);

  },

  methods:{ 
    changeToLikeIcon(){
      this.likeIcon = this.$root.store.iconsLinks.favorite;
      this.likeText = "Favorited!"
    },
    async addToFavorites(){
        const response = await this.axios.post(
          // "https://test-for-3-2.herokuapp.com/users/favorites",
          this.$root.store.server_domain + "/users/favorites",
          {
             recipe_id: this.recipe.id,
          }
        );
        if (response.status==201){
          this.recipe.hasFavorited = true;
          this.changeToLikeIcon();
        }
        else{
          console.log("error accured while favorite " + response.status);
        }
      },
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
}
.wrapped {
  width: 50%;
  background-color:#c1acac;
  margin-right: 1%;
  margin-left: 1%; 
  padding: 30px;
  margin: 6px;
  border-radius: 50px;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.recipe-header{
text-align: center;
}

.icon-img {
  width: 30px;
  margin: 1%;
}

.like-icon {
  cursor: pointer;
}

.more-icon{
  padding:1%;
  margin-right: 5%;
}

h1{
  font-size: 40px;
  font-family: cursive;
  color: #594545;
  text-align: center;
}

h3{
  font-family: cursive;
  color: #594545;
  text-align: center;
}

.recipe-image{
  border-radius: 30px;
  border: 5px solid #f2bdc7;
}

.about-row{
  text-align: center;
  padding-left:5%;
  padding-right:5%;
  background-color: #f2dce0;
  padding: 15px;
  margin: 15px;
  border-radius: 50px;
}
</style>
