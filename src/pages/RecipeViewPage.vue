<template>
  <div class="container">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <h1>{{ recipe.title }}</h1>
        <div v-if="recipe.hasWatched">
          <img :src=this.$root.store.iconsLinks.watched class="icon-img"/>
          <label>"You already watched this recipe"</label>
        </div>
        <img :src="recipe.image" class="center" />
      </div>
      <div class="recipe-body">
        <div class="wrapper">
          <div class="wrapped">
            <div class="mb-3">
              <div>
                <img :src="this.likeIcon" class="icon-img like-icon" @click="addToFavorites()"/>
                <label>{{likeText}}</label>
              </div>
              <div>Ready in {{ recipe.readyInMinutes }} minutes</div>
              <div>Servings: {{ recipe.servings }} dishes</div>
              <div>Likes: {{ recipe.aggregateLikes }} likes</div>
              <div>
                <img v-if="recipe.vegan"  class="icon-img">
                <img v-if="recipe.glutenFree" :src="this.$root.store.iconsLinks.glutenFree"  class="icon-img">
                <img v-else :src="this.$root.store.iconsLinks.gluten" class="icon-img"/>
                <img v-if="recipe.vegeterian" :src="this.$root.store.iconsLinks.vegeterian" class="icon-img">
              </div>
            </div>
            Ingredients:
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
            Instructions:
            <ol>
              <li v-for="s in recipe._instructions" :key="s.number">
                {{ s.step }}
              </li>
            </ol>
          </div>
        </div>
      </div>
      <!-- <pre>
      {{ $route.params }}
      {{ recipe }}
    </pre
      > -->
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
        response = await this.axios.get(
          // "https://test-for-3-2.herokuapp.com/recipes/info",
          this.$root.store.server_domain + "/recipes/" + this.$route.params.recipeId,
          {
            params: { recipe_id: this.$route.params.recipeId },
          }
        );
        console.log(response);
        // console.log("response.status", response.status);
        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }
      let {
        id,
        title,
        readyInMinutes,
        image, 
        vegan,
        vegetarian,
        glutenFree,
        aggregateLikes,
        hasWatched,
        hasFavorited,
        servings,
        analyzedInstructions,
        instructions,
        extendedIngredients, 
      } = response.data;
      let _instructions = analyzedInstructions
        .map((fstep) => {
          fstep.steps[0].step = fstep.name + fstep.steps[0].step;
          return fstep.steps;
        })
        .reduce((a, b) => [...a, ...b], []);
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
        id
      };
      this.recipe = _recipe;
      if (this.recipe.hasFavorited){ 
        this.changeToLikeIcon();
      }
    } catch (error) {
      console.log(error);
    }
  },

  async beforeDestroy(){
    // add to watched!
    try{
      response = await this.axios.post(
        this.$root.store.server_domain + "/users/watched", 
          { recipe_id: this.recipe.id },
      );
    }catch (err){
      //console.log("err.response.status, can't save as watched: ", err.response.status); ??????????
    }
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
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

h1{
  text-align: center;
}
/* .recipe-header{

} */

.icon-img {
  width: 30px;
  margin: 1%;
}

.like-icon {
  cursor: pointer;
}
</style>
