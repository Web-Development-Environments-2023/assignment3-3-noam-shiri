<template>
  <div class="container">
    <h1 class="title">Family Recipes Page</h1>
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