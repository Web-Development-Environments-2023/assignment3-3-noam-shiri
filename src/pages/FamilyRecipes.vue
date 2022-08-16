<template>
  <div class="container">
    <p></p>
      <RecipePreviewList
      title="Family Recipes"
      :class="{
        RandomRecipes: false,
        blur: !$root.store.username,
        center: true
      }"
      disabled
      ></RecipePreviewList>     
  </div>
</template>s

<script>
import RecipePreviewList from "../components/RecipePreviewList";
export default {
  components: {
    RecipePreviewList
  }
};
</script>

<style scoped>
.container{
    background-color: #f2dce0;
	  text-align: center;  
    margin-top:5%;
	  border-radius: 50px;
}

.btn-secondary{
  background-color: #594545;
  margin-top:2%;
}
.btn-secondary:hover{
  background-color: #8c6565;
}
</style>