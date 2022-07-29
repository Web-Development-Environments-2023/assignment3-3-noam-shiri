<template>
  <div class="container">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <h1>{{ recipe.title }}</h1>
        <div v-if="recipe.hasWatched">
          <img src="https://cdn-icons-png.flaticon.com/512/3308/3308898.png" class="icon-img"/>
          <label>You already watched this recipe</label>
        </div>
        <img :src="recipe.image" class="center" />
      </div>
      <div class="recipe-body">
        <div class="wrapper">
          <div class="wrapped">
            <div class="mb-3">
              <div v-if="!recipe.hasFavorited">
                <img src="https://cdn-icons.flaticon.com/png/512/2589/premium/2589197.png?token=exp=1658949032~hmac=c3b968727cabd8c77171ab292d0f55d8" class="icon-img like-icon" @click="addToFavorites()"/>
                <label>Add to favorites</label>
              </div>
              <div v-else>
                <img src="https://cdn-icons.flaticon.com/png/512/2589/premium/2589054.png?token=exp=1658949029~hmac=c7e7d0f0df028189f2101863f6b72e0e" class="icon-img like-icon" @click="removeFromFavorites()"/>
                <label>Remove from favorites</label>
              </div>
              <div>Ready in {{ recipe.readyInMinutes }} minutes</div>
              <div>Servings: {{ recipe.servings }} dishes</div>
              <div>Likes: {{ recipe.aggregateLikes }} likes</div>
              <div>
                <img v-if="recipe.vegan" src="https://cdn-icons.flaticon.com/png/512/5129/premium/5129836.png?token=exp=1658947637~hmac=204b46b13de63f808eb07c461301ae93" class="icon-img">
                <img v-if="recipe.glutenFree" src="https://cdn-icons-png.flaticon.com/512/7312/7312801.png"  class="icon-img">
                <img v-else src="https://cdn-icons-png.flaticon.com/512/7312/7312798.png" class="icon-img"/>
                <img v-if="recipe.vegeterian" src="https://cdn-icons-png.flaticon.com/512/892/892917.png" class="icon-img">
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
      recipe: null
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
            params: { id: this.$route.params.recipeId },
            //session: { user_id: this.$root.store.user_id}
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
    } catch (error) {
      console.log(error);
    }
  },

  methods:{ // TO DO: save in db!!!
    addToFavorites(){
      /* to check: */
      // console.log(this.$root.store.user_id); //undefined
      // console.log(this.$root.store.username); //shiri - works
      /*  const response = this.axios.post(
          // "https://test-for-3-2.herokuapp.com/users/favorites",
          this.$root.store.server_domain + "/users/favorites",
          {
            body: { recipe_id: this.recipe.id },
            //session: { user_id: this.$root.store.user_id}
          }
        );
        if (response.status==201){
          console.log("favorite!");
          this.recipe.hasFavorited = true;
        }
        else{
          console.log("error accured while favorite " + response.status);
        }*/
    },

    removeFromFavorites(){
      /* to check: */
      /*const response = this.axios.delete(
        // "https://test-for-3-2.herokuapp.com/users/favorites",
        this.$root.store.server_domain + "/users/favorites/",
        {
          body: { recipe_id: this.recipe.id }
        }
      );
      if (response.status==201){
        console.log("not favorite!");
        this.recipe.hasFavorited = false;
      }
      else{
        console.log("error accured while unfavorite " + response.status);
      }*/
    }
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
