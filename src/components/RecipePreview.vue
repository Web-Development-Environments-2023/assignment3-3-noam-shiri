/<template>
  <router-link :to="{ name: 'recipe', params: { recipeId: recipe.id } }" class="recipe-preview">
    <div class="recipe-body">
      <h5 :title="recipe.title" class="recipe-title">
        {{ recipe.title }}
      </h5>
      <img v-if="image_load" :src="recipe.image" class="recipe-image" />
        <label>
          <div class="short-details">
            <img src="https://cdn-icons-png.flaticon.com/512/3867/3867499.png" class="icon-img"/>
            {{ recipe.readyInMinutes }} minutes
          </div>
          <div class="short-details">
            <img src="https://cdn-icons-png.flaticon.com/512/126/126473.png" class="icon-img"/>
            {{ recipe.popularity }} likes
          </div>
        </label>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "RecipePreview",
  mounted() {
    this.axios.get(this.recipe.image).then((i) => {
      this.image_load = true;
    });
  },
  data() {
    return {
      image_load: false
    };
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
  }
};
</script>

<style scoped>
 .recipe-preview {
  /* display: inline-block; */
  width: 90%;
  height: 100%;
  position: relative;
  margin: 3px 3px;
}
.recipe-preview > .recipe-body {
  width: 100%;
  position: relative;
}

.recipe-preview .recipe-body .recipe-image {
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  display: block;
  width: 100%;
  height: auto;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}

.recipe-preview .recipe-title {
  width: 100%;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}

.recipe-preview .recipe-footer ul.recipe-overview {
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

.short-details{
  width:50%;
  text-align: center;
}
</style>
