<template>
  <div class="container">
    <RecipeCreator/>
    <RecipePreviewList title="Added Recipes"></RecipePreviewList>
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
</style>
