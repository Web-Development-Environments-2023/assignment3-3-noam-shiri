<template>
  <div class="container">
    <h1 class="title">Search Page</h1>
    <b-row>
      <b-col cols="6">
        <b-form @submit.prevent="onSearch" @keyup.enter="onSearch">
        
          <b-form-group id="input-group-Keywords" label-cols-sm="3" label="Keywords:" label-for="Keywords">
            <b-form-input id="Keywords" v-model="form.keywords" type="text" placeholder="Enter keywords to search"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-Cuisine" label-cols-sm="3" label="Cuisine:" label-for="Cuisine">
            <b-form-select id="Cuisine" v-model="form.cuisine" type="text" >
              <option value="" selected>No Filtering</option>
              <option v-for="c in cuisine_options" :value="c.value" :key="c.id">{{c.value}}</option>
            </b-form-select>
          </b-form-group>

          <b-form-group id="input-group-Diet " label-cols-sm="3" label="Diet :" label-for="Diet ">
            <b-form-select id="Diet " v-model="form.diet" type="text" >
              <option value="" selected>No Filtering</option>
              <option v-for="d in diet_options" :value="d.value" :key="d.id">{{d.value}}</option>
            </b-form-select>
          </b-form-group>

          <b-form-group id="input-group-Intolerances " label-cols-sm="3" label="Intolerances :" label-for="Intolerances ">
            <b-form-select id="Intolerances " v-model="form.intolerances" type="text" >
              <option value="" selected>No Filtering</option>
              <option v-for="i in intolerances_options" :value="i.value" :key="i.id">{{i.value}}</option>
            </b-form-select>
          </b-form-group>

          <b-row>            
            <b-col cols="6">
              <b-form-group id="input-group-Number " label-cols-sm="6" label="Number :" label-for="Number ">
                <b-form-select id="Number " v-model="form.number" type="text" >
                  <option value="5" selected>5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                </b-form-select>
              </b-form-group>
            </b-col>

            <b-col cols="6">
              <b-button type="submit" variant="primary" class="mx-auto w-100" :disabled="!this.form.keywords &&
                  !this.form.cuisine && !this.form.diet && !this.form.intolerances && !this.form.number">Search</b-button>
            </b-col>
          </b-row>
        </b-form>
      </b-col>

      <b-col cols="6" id="lastSearch">
        <RecipePreviewList id="searchRes" title="Search Recipes" ref="searchChildComp"></RecipePreviewList>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
export default {
  name: "SearchPage",
  components: {
    RecipePreviewList
  },
  data() {
    return {
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
      await this.$refs.searchChildComp.changeSearchProps(this.form);
    }
  }
}
</script>

<style>

</style>