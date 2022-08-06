<template>
<div id="wrapper">
  <label id="openModal" v-b-modal.modal-id>Create New Recipe</label>
  <b-container class="container">
    <b-modal id="modal-id" title="Create New Recipe" size="lg">
      <b-form @submit.prevent="onSave">

        <b-form-group id="input-group-title" label-cols-sm="3" label="Title:" label-for="title" >
          <b-form-input id="title" v-model="form.title" type="text" :state="validateState('title')" placeholder="Title"></b-form-input>
          <b-form-invalid-feedback> Title is required </b-form-invalid-feedback>
        </b-form-group>
      
        <b-row>
          <b-col cols="6">
            <b-form-group id="input-group-readyInMinutes" label-cols-sm="6" label="Ready In Minutes:" label-for="readyInMinutes" >
              <b-form-input id="readyInMinutes" v-model="form.readyInMinutes" type="number" :state="validateState('readyInMinutes')"></b-form-input>
              <b-form-invalid-feedback> Ready In Minutes is required </b-form-invalid-feedback>
            </b-form-group>
          </b-col>

          <b-col cols="6">
            <b-form-group id="input-group-servings" label-cols-sm="6" label="Servings:" label-for="servings" >
              <b-form-input id="servings" v-model="form.servings" type="number" :state="validateState('servings')"></b-form-input>
              <b-form-invalid-feedback> Servings is required </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
        </b-row>
      
        <b-form-group id="input-group-image" label-cols-sm="3" label="Image URL:" label-for="image" >
          <b-form-input id="image" v-model="form.image" type="text" :state="validateState('image')"></b-form-input>
          <b-form-invalid-feedback> Image is required </b-form-invalid-feedback>
        </b-form-group>

        <b-row>
          <b-col cols="3">
              <label>Diet:</label>
          </b-col>

          <b-col cols="3">
            <b-form-group id="input-group-vegan " label-for="vegan ">
              <input id="vegan" v-model="form.vegan" type="checkbox" :state="validateState('vegan')"/>
              <label for="vegan">Vegan</label>
            </b-form-group>
          </b-col>

          <b-col cols="3">
            <b-form-group id="input-group-vegetarian " label-for="vegetarian ">
              <input id="vegetarian" v-model="form.vegetarian" type="checkbox" :state="validateState('vegetarian')"/>
              <label for="vegetarian">Vegetarian</label>
            </b-form-group>
          </b-col>

          <b-col cols="3">
            <b-form-group id="input-group-glutenFree " label-for="glutenFree ">
              <input id="glutenFree" v-model="form.glutenFree" type="checkbox" :state="validateState('glutenFree')"/>
              <label for="glutenFree">Gluten Free</label>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="3">
              <label>Ingredients:</label>
          </b-col>
          <b-col cols="9">
            <!-- <b-row>
              <b-col cols="3">
                <b-form-group id="input-group-ingredientName" label-cols-sm="3" label="Ingredient Name:" label-for="ingredientName" >
                  <b-form-input id="title" v-model="form.ingredients.title" type="text" :state="validateState('ingredientName')" placeholder="Ingredient Name"></b-form-input>
                  <b-form-invalid-feedback> Title is required </b-form-invalid-feedback>
                </b-form-group>
              </b-col>

              <b-col cols="3">
                <b-form-group id="input-group-title" label-cols-sm="3" label="Title:" label-for="title" >
                  <b-form-input id="title" v-model="form.title" type="text" :state="validateState('title')" placeholder="Title"></b-form-input>
                  <b-form-invalid-feedback> Title is required </b-form-invalid-feedback>
                </b-form-group>
              </b-col>

              <b-col cols="3">
                <b-form-group id="input-group-title" label-cols-sm="3" label="Title:" label-for="title" >
                  <b-form-input id="title" v-model="form.title" type="text" :state="validateState('title')" placeholder="Title"></b-form-input>
                  <b-form-invalid-feedback> Title is required </b-form-invalid-feedback>
                </b-form-group>
              </b-col>

              <b-col cols="2">
                <b-button variant="outline-primary">Add Row</b-button>
              </b-col>
            </b-row> -->
          </b-col>
        </b-row>
      
        <b-form-group id="input-group-instructions" label-cols-sm="3" label="Instructions:" label-for="instructions" >
          <b-form-textarea id="instructions" v-model="form.instructions" :state="validateState('instructions')"
              rows="3" max-rows="6"></b-form-textarea>
          <b-form-invalid-feedback> Instructions is required </b-form-invalid-feedback>
        </b-form-group>

        <b-button
          type="submit"
          variant="primary"
          style="width:100px;display:block;"
          class="mx-auto w-100"
          >Save Recipe</b-button
        >
      </b-form>
    </b-modal>
  </b-container>
</div>
  
</template>

<script>
export default {
  data(){
    return{
      form:{
        title: "",
        readyInMinutes: "",
        ingredients: {}, //recipe_id, ingredientName, measuringTool, amount
        image: "",
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        servings: "",
        instructions: ""//req.body.instructions,
        /*recipeOwner: "",
        timePreparedInFamily: "",*/
      }
    }
  },
  methods: {
    onSave(){
      console.log("onSave to implement!")
    },
    validateState(){
      console.log("validateState to implement!")
    }
  }
}
</script>


<style>
  #wrapper{
    height: 25px;
  }
</style>