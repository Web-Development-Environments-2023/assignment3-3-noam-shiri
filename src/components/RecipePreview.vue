<template>
  <div>
    <router-link :to="{ name: 'recipe', params: { recipeId: recipe.id } }" class="recipe-preview">
      <div class="recipe-body">
        <div :title="recipe.title" class="recipe-title">
          {{ recipe.title }}
        </div>
        <img :src="recipe.image" class="recipe-image" />
      </div>
      <div class="recipe-footer">
        <ul class="recipe-overview">
          <li>
            <img :src="this.$root.store.iconsLinks.readyInMinutes" class="icon-img"/>
            <span class="span-short-details">{{ recipe.readyInMinutes }} min</span>
          </li>
          <li>
            <img :src="this.$root.store.iconsLinks.popularity" class="icon-img"/>
            <span class="span-short-details">{{ recipe.popularity }} likes</span>
          </li>
        </ul>
      </div>
    </router-link>
    <b-row>
      <b-col v-if="this.$root.store.username">
        <img :src="this.likeIcon" class="icon-img like-icon" @click="addToFavorites"/>
        <span class="span-short-details">{{this.likeText}}</span>
      </b-col>
      <b-col v-if="this.recipe.vegan">
        <img :src="this.$root.store.iconsLinks.vegan" class="icon-img"/>
      </b-col>
      <b-col v-if="this.recipe.vegetarian">
        <img :src="this.$root.store.iconsLinks.vegetarian" class="icon-img"/>
      </b-col>
      <b-col v-if="this.recipe.glutenFree">
        <img :src="this.$root.store.iconsLinks.glutenFree" class="icon-img"/>
      </b-col>
      <b-col v-else>
        <img :src="this.$root.store.iconsLinks.gluten" class="icon-img"/>
      </b-col>
      <b-col v-if="this.recipe.hasWatched">
        <img :src="this.$root.store.iconsLinks.watched" class="icon-img"/>
        <span class="span-short-details">Watched</span>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "RecipePreview",
  // mounted() {
  //   this.axios.get(this.recipe.image).then((i) => {
  //     this.image_load = true;
  //   });
  // },
  data() {
    return {
      // image_load: false
      likeIcon : this.$root.store.iconsLinks.notFavorite,
      likeText : "Not Favorited"
    };
  },
  created() {
    if (this.recipe.hasFavorited){
      this.changeToLikeIcon();
    }
  },
  props: {
    recipe: {
      type: Object,
      required: true
    }

    // id: {
    //   type: Number,
    //   required: true
    // },
    // title: {
    //   type: String,
    //   required: true
    // },
    // readyInMinutes: {
    //   type: Number,
    //   required: true
    // },
    // image: {
    //   type: String,
    //   required: true
    // },
    // aggregateLikes: {
    //   type: Number,
    //   required: false,
    //   default() {
    //     return undefined;
    //   }
    // }
  },
  methods:{
    changeToLikeIcon(){
      this.likeIcon = this.$root.store.iconsLinks.favorite;
      this.likeText = "Favorited"
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
.recipe-preview {
  display: inline-block;
  width: 90%;
  height: 100%;
  position: relative;
  margin: 10px 10px;
}
.recipe-preview > .recipe-body {
  width: 100%;
  height: 200px;
  position: relative;
}
.recipe-preview .recipe-body .recipe-image {
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  display: block;
  width: 98%;
  height: auto;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}
.recipe-preview .recipe-footer {
  width: 100%;
  height: 50%;
  overflow: hidden;
}
.recipe-preview .recipe-footer .recipe-title {
  padding: 10px 10px;
  width: 100%;
  font-size: 12pt;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}

.recipe-title{
    display: inline-block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
}

.recipe-preview .recipe-footer ul.recipe-overview {
  padding: 5px 10px;
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  box-flex: 1;
  -webkit-flex: 1 auto;
  -ms-flex: 1 auto;
  flex: 1 auto;
  table-layout: fixed;
  margin-bottom: 0px;
}
.recipe-preview .recipe-footer ul.recipe-overview li {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  -ms-box-flex: 1;
  box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  width: 90px;
  display: table-cell;
  text-align: center;
}

.icon-img {
  width: 25px;
  margin: 1%;
}

label{
  display: flex;
  font-size: 20px;
}

.span-short-details{
  width:50%;
  text-align: center;
}

.like-icon {
  cursor: pointer;
}
</style>
