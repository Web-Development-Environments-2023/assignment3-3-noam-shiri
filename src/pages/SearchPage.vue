<template>
  <div class="container">
    <div id="div-wrapper">
      <b-form @submit.prevent="onSearch" @keyup.enter="onSearch" id="form-wrapper">
        <b-row>
          <h3>Type your search keywords here:</h3>
        </b-row>
        <b-row>
          <b-col cols="12">
            <b-form-group id="input-group-Keywords" label-cols-sm="2" label="Keywords:" label-for="Keywords">
              <b-form-input id="Keywords" v-model="form.keywords" type="text" placeholder="Enter keywords to search"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="6">
            <b-form-group id="input-group-Cuisine" label-cols-sm="4" label="Cuisine:" label-for="Cuisine">
              <b-form-select id="Cuisine" v-model="form.cuisine" type="text" >
                <option value="" selected>No Filtering</option>
                <option v-for="c in cuisine_options" :value="c.value" :key="c.id">{{c.value}}</option>
              </b-form-select>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group id="input-group-Diet " label-cols-sm="4" label="Diet :" label-for="Diet ">
              <b-form-select id="Diet " v-model="form.diet" type="text" >
                <option value="" selected>No Filtering</option>
                <option v-for="d in diet_options" :value="d.value" :key="d.id">{{d.value}}</option>
              </b-form-select>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="6">   
            <b-form-group id="input-group-Intolerances " label-cols-sm="4" label="Intolerances:" label-for="Intolerances ">
              <b-form-select id="Intolerances " v-model="form.intolerances" type="text" >
                <option value="" selected>No Filtering</option>
                <option v-for="i in intolerances_options" :value="i.value" :key="i.id">{{i.value}}</option>
              </b-form-select>
            </b-form-group>
          </b-col>      
          <b-col cols="6">
            <b-form-group id="input-group-Number " label-cols-sm="4" label="Number:" label-for="Number ">
              <b-form-select id="Number " v-model="form.number" type="text" >
                <option value="5" selected>5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </b-form-select>
            </b-form-group>
          </b-col> 
        </b-row>
        <b-row>  
          <b-col cols="12">
            <b-button type="submit" variant="primary" class="w-100 btn-submit" :disabled="!this.form.keywords &&
                !this.form.cuisine && !this.form.diet && !this.form.intolerances && !this.form.number">Search</b-button>
          </b-col>
        </b-row>
      </b-form>
      <div id="divLastSearch">
        <h3>Last Time You Found:</h3>
        <div v-if="Object.keys(this.lastSearch).length>0" id="exist-last-search">
          <RecipePreview class="recipePreview" :recipe="this.lastSearch" :isPrivateRecipe="false"/>
          <!-- <b-row v-if="$root.store.sessionLastSearch.keywords!=undefined">
            <label class="search-headers">Keywords: </label>
            <label class="search-content">{{$root.store.sessionLastSearch.keywords}}</label>
          </b-row>
          <b-row v-if="$root.store.sessionLastSearch.cuisine!=undefined">
            <label class="search-headers">Cuisine: </label>
            <label class="search-content">{{$root.store.sessionLastSearch.cuisine}}</label>
          </b-row>
          <b-row v-if="$root.store.sessionLastSearch.diet!=undefined">
            <label class="search-headers">Diet: </label>
            <label class="search-content">{{$root.store.sessionLastSearch.diet}}</label>
          </b-row>
          <b-row v-if="$root.store.sessionLastSearch.intolerances!=undefined">
            <label class="search-headers">Intolerances: </label>
            <label class="search-content">{{$root.store.sessionLastSearch.intolerances}}</label>
          </b-row>
          <b-row v-if="$root.store.sessionLastSearch.number!=undefined">
            <label class="search-headers">Number of results: </label>
            <label class="search-content">{{$root.store.sessionLastSearch.number}}</label>
          </b-row> -->
        </div>
        <div v-else>
          <label>You don't have any search history - Start Searching! </label>
        </div>
      </div>
    </div>
    <div id="divSearchRes">
      <RecipePreviewList id="searchRes" title="Search Results" ref="searchChildComp"></RecipePreviewList>
    </div>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
import RecipePreview from "../components/RecipePreview.vue";

export default {
  name: "SearchPage",
  components: {
    RecipePreviewList,
    RecipePreview
  },
  data() {
    return {
      lastSearch: {},
      form: {
        keywords: "",
        cuisine: "",
        diet: "",
        intolerances: "",
        number: "",
      },

      cuisine_options: [{id: 1, value: 'African'}, {id: 2, value:'American'}, {id: 3, value: 'British'},
                        {id: 4, value: 'Cajun'}, {id: 5, value: 'Caribbean'}, {id: 6, value: 'Chinese'},
                        {id: 7, value: 'Eastern European'}, {id: 8, value: 'European'}, {id: 9, value: 'French'},
                        {id: 10, value: 'German'}, {id: 11, value: 'Greek'}, {id: 12, value: 'Indian'},
                        {id: 13, value: 'Irish'}, {id: 14, value: 'Italian'}, {id: 15, value: 'Japanese'},
                        {id: 16, value: 'Jewish'}, {id: 17, value: 'Korean'}, {id: 18, value: 'Latin American'},
                        {id: 19, value: 'Mediterranean'}, {id: 20, value: 'Mexican'}, {id: 21, value: 'Middle Eastern'},
                        {id: 22, value: 'Nordic'}, {id: 23, value: 'Southern'}, {id: 24, value:'Spanish'},
                        {id: 25, value: 'Thai'}, {id: 26, value: 'Vietnamese'}],

      diet_options: [{id: 1, value: 'Gluten Free'}, {id: 2, value: 'Ketogenic'}, {id: 3, value: 'Vegetarian',},
                     {id: 4, value: 'Lacto-Vegetarian'}, {id: 5, value: 'Ovo-Vegetarian'}, {id: 6, value: 'Vegan'},
                        {id: 7, value: 'Pescetarian'}, {id: 8, value: 'Paleo'}, {id: 9, value: 'Primal'},
                        {id: 10, value: 'Low FODMAP'}, {id: 11, value: 'Whole30'}],

      intolerances_options:  [{id: 1, value: 'Dairy'}, {id: 2, value:'Egg'}, {id: 3, value: 'Gluten'},
                              {id: 4, value: 'Grain'}, {id: 5, value: 'Peanut'}, {id: 6, value: 'Seafood'},
                              {id: 7, value: 'Sesame'}, {id: 8, value: 'Shellfish'}, {id: 9, value: 'Soy'},
                              {id: 10, value: 'Sulfite'}, {id: 11, value: 'Tree Nut'}, {id: 12, value: 'Wheat'}],
    };
  },
  created(){
    this.lastSearch = this.$root.store.sessionLastSearch;
  },
  methods:{
    async onSearch(){
      if (this.form.keywords===""){
        this.form.keywords = undefined
      }
      if (this.form.cuisine===""){
        this.form.cuisine = undefined
      }
      if (this.form.diet===""){
        this.form.diet = undefined
      }
      if (this.form.intolerances===""){
        this.form.intolerances = undefined
      }
      if (this.form.number===""){
        this.form.number = undefined
      }
      this.$root.store.sessionLastSearch = await this.$refs.searchChildComp.changeSearchProps(this.form);
    },
  }
}
</script>

<style>
.container{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
#form-wrapper{
  width:60%;
  background-color: #dec1c1;
  padding: 30px;
  margin: 3px;
  border-radius: 50px;

}
#divLastSearch{
  width:40%;
  border: 2px;
  border-color: black;
  padding: 30px;
  background-color: #f2dce0;
  margin: 3px;
  text-align: center;
  border-radius: 50px;
}

#exist-last-search{
  padding-left: 15%;
}

.search-headers{
  color: #8c6565;  
  font-size: 20px;
}

.search-content{
  color: #c1acac;
  font-size: 20px;
  margin-left: 2%;
}

#div-wrapper{
  display: flex;
}

#divSearchRes{
  background-color: #c1acac;;  
  border-radius: 50px;
  margin: 3px;
  padding: 30px;
}

.form-control{
  background-color: #fffafb;
  border-radius: 10px;
  width:460px;
  margin-left:30px;
}

.custom-select{
  background-color: #fffafb;
  border-radius: 10px;  
  width:150px;
  margin-left:30px;
}

.btn-submit{
  background-color: #594545;
  border-color: #545b62;
}
.btn-submit:hover{
  background-color: #8c6565;
  border-color: #545b62;
}
.btn-submit:disabled{
  background-color: #8c6565;
  border-color: #545b62;
}

.btn-submit:focus{
  background-color: #f2bdc7;
  border-color: #545b62;
} 

h3{
  font-size: 30px;
  font-family: cursive;
  color: #594545;
  text-align: center;
}
form h3{
  margin-left:13%;
}

</style>