<template>
    <div class="container">
    <h1 class="title">Search Page</h1>
    <b-form @submit.prevent="onSerach">
      <b-form-group id="input-group-Keywords" label-cols-sm="3" label="Keywords:" label-for="Keywords">
        <b-form-input id="Keywords" v-model="form.keywords" type="text" ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-Cuisine" label-cols-sm="3" label="Cuisine:" label-for="Cuisine">
        <b-form-select id="Cuisine" v-model="form.cuisine" type="text" >
          <option v-for="c in cuisine_options" :value="c.value" :key="c.id">
            {{c.value}}
          </option>
        </b-form-select>
      </b-form-group>

    </b-form>

    <div id="lastSearch">
      
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchPage",
  data() {
    return {
      form: {
        keywords: "",
        cuisine: "",
      },
      cuisine_options: [{id: 1, value: 'African'}, {id: 2, value:'American'}, {id: 3, value: 'British'},
                        {id: 4, value: 'Cajun'}, {id: 5, value: 'Caribbean'}, {id: 6, value: 'Chinese'},
                        {id: 7, value: 'Eastern European'}, {id: 8, value: 'European'}, {id: 9, value: 'French'},
                        {id: 10, value: 'German'}, {id: 11, value: 'Greek'}, {id: 12, value: 'Indian'},
                        {id: 13, value: 'Irish'}, {id: 14, value: 'Italian'}, {id: 15, value: 'Japanese'},
                        {id: 16, value: 'Jewish'}, {id: 17, value: 'Korean'}, {id: 18, value: 'Latin American'},
                        {id: 19, value: 'Mediterranean'}, {id: 20, value: 'Mexican'}, {id: 21, value: 'Middle Eastern'},
                        {id: 22, value: 'Nordic'}, {id: 23, value: 'Southern'}, {id: 24, value:'Spanish'},
                        {id: 25, value: 'Thai'}, {id: 26, value: 'Vietnamese'}]
    };
  },
  methods:{
    onSerach(){

    }
  }
}
</script>

<style>

</style>