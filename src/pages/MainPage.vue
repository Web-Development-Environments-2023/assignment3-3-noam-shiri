<template>
  <div class="container">
    <h1 class="title">Main Page</h1>
    <div>
      <div id="divUser">
        <div v-if="!$root.store.username">
          <h1>Hello Guest!</h1>
          <router-link to="/login">Click Here to Login</router-link>
          <br/>
          <label>You don't have an account? 
            <router-link to="/register">Click Here to Register</router-link>
          </label>
        </div>        
        <RecipePreviewList v-else
          title="Last Viewed Recipes"
          :class="{
            RandomRecipes: true,
            blur: !$root.store.username,
            center: true
          }"
          disabled
        ></RecipePreviewList>     
      </div>
        <div id="divRandom">
          <RecipePreviewList title="Random Recipes" class="RandomRecipes center" />
      </div>
    </div>
    <!-- <div
      style="position: absolute;top: 70%;left: 50%;transform: translate(-50%, -50%);"
    >
      Centeredasdasdad
    </div>-->
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
export default {
  components: {
    RecipePreviewList
  }
};
</script>

<style lang="scss" scoped>
.RandomRecipes {
  margin: 10px 0 10px;
}
.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}
// .wrapper {
//   display: flex;
// }
// .wrapped {
//   width: 50%;
// }

#divRandom{
  background-color: rgb(144, 135, 168);
  padding: 30px;
  margin: 6px;
}

#divUser{
  background-color: rgb(230, 222, 252);
  padding: 30px;
  text-align: center;  
  margin: 6px;
}
</style>
