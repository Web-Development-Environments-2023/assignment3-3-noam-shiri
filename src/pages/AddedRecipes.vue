<template>
  <div class="container">
    <RecipeCreator/>
    <div id="div-added">
      <RecipePreviewList title="Added Recipes"></RecipePreviewList>
    </div>
  </div>
</template>

<script>
import RecipeCreator from './RecipeCreator.vue';
import RecipePreviewList from "../components/RecipePreviewList";
export default {
    components: {
    RecipePreviewList,
    RecipeCreator
  }
}
</script>

<style>
#div-added{
    background-color: #f2dce0;
	  padding: 30px;
	  text-align: center;  
	  margin: 6px;
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
