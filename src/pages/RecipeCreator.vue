<template>
<div id="wrapper">
  <label id="openModal" v-b-modal.modal-id>Create New Recipe</label>
  <b-container class="container">
    <b-modal id="modal-id" title="Create New Recipe" size="xl" ok-only>
      <b-form @submit.prevent="onSave">

        <b-row>
          <b-col cols="6">
            <b-form-group id="input-group-title" label-cols-sm="4" label="Title:" label-for="title" >
              <b-form-input id="title" v-model="form.title" type="text"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-row>
            <b-col cols="3">
                <label>Diet:</label>
            </b-col>

            <b-col cols="3">
              <b-form-group id="input-group-vegan " label-for="vegan">
                <input id="vegan" v-model="form.vegan" type="checkbox" />
                <label for="vegan" class="checkboxes-diet-label">Vegan</label>
              </b-form-group>
            </b-col>

            <b-col cols="3">
              <b-form-group id="input-group-vegetarian " label-for="vegetarian">
                <input id="vegetarian" v-model="form.vegetarian" type="checkbox" />
                <label for="vegetarian" class="checkboxes-diet-label">Vegetarian</label>
              </b-form-group>
            </b-col>

            <b-col cols="3">
              <b-form-group id="input-group-glutenFree " label-for="glutenFree">
                <input id="glutenFree" v-model="form.glutenFree" type="checkbox" />
                <label for="glutenFree" class="checkboxes-diet-label">Gluten Free</label>
              </b-form-group>
            </b-col></b-row>
          </b-col>
        </b-row>
      
        <b-row>
          <b-col cols="6">
            <b-form-group id="input-group-readyInMinutes" label-cols-sm="4" label="Ready In Minutes:" label-for="readyInMinutes" >
              <b-form-input id="readyInMinutes" v-model="form.readyInMinutes" type="number" ></b-form-input>
            </b-form-group>
          </b-col>

          <b-col cols="6">
            <b-form-group id="input-group-servings" label-cols-sm="4" label="Servings:" label-for="servings" >
              <b-form-input id="servings" v-model="form.servings" type="number"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
      
        <b-form-group id="input-group-image" label-cols-sm="2" label="Image URL:" label-for="image" >
          <b-form-input id="image" v-model="form.image" type="text"></b-form-input>
        </b-form-group>

        <b-row>
          <b-col cols="2">
              <label>Ingredients:</label>
          </b-col>
          <b-col cols="8">
          </b-col>
          <b-col cols="2" class="btn-add">
            <b-button variant="outline-primary" @click="onAddRow">+ Add Ingredient</b-button>
          </b-col>
        </b-row>
        <ol>
          <li v-for="index in numberOfRows" :key="index" class="ingredient-row">
              <b-col cols="12">
                <b-row>
                  <b-col cols="5">
                    <b-form-group id="input-group-ingredientName" label-cols-sm="6" label="Ingredient Name:" label-for="ingredientName" >
                      <b-form-input id="ingredientName" type="text" v-model="form.ingredients[index-1].ingredientName"></b-form-input>
                    </b-form-group>
                  </b-col>

                  <b-col cols="4">
                    <b-form-group id="input-group-measuringTool" label-cols-sm="6" label="Measuring Tool:" label-for="measuringTool" >
                      <b-form-input id="measuringTool" type="text" v-model="form.ingredients[index-1].measuringTool"></b-form-input>
                    </b-form-group>
                  </b-col>

                  <b-col cols="3">
                    <b-form-group id="input-group-amount" label-cols-sm="6" label="Amount:" label-for="amount" >
                      <b-form-input id="amount" type="number" v-model="form.ingredients[index-1].amount"></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-col>
            </li>
        </ol>
      
        <b-form-group id="input-group-instructions" label-cols-sm="2" label="Instructions:" label-for="instructions" >
          <b-form-textarea id="instructions" v-model="form.instructions"
              rows="3" max-rows="6"></b-form-textarea>
        </b-form-group>

        <label :class="msgClass">{{msg}}</label>

        <b-button
          type="submit"
          variant="primary"
          style="width:100px;display:block;"
          class="mx-auto w-100"
          >Save Recipe
        </b-button>
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
        ingredients: [], //recipe_id, ingredientName, measuringTool, amount
        image: "",
        vegan: false,
        vegetarian: false,
        glutenFree: false,
        servings: "",
        instructions: ""//req.body.instructions,
        /*recipeOwner: "",
        timePreparedInFamily: "",*/
      },
      numberOfRows: 0,
      msg: "",
      msgClass:"error-msg"
    }
  },
  methods: {
    async onSave(){
      this.msg = "";
      const errors = this.ValidateForm();
      if (errors.length==0){
        try{
          const response = await this.axios.post(this.$root.store.server_domain +"/users/added", this.form);
          if (response.status !== 201){
            throw "";
          }
          else{
            this.msg = "Recipe was saved successfully!"
            this.msgClass = "success-msg";
          }
        }
        catch(error){
          this.msg = "A problem accured while saving the recipe."
          this.msgClass = "error-msg";
        }
      }
      else{
        let errorMsg = "You must fill-in all info in: ";
        for (let i = 0; i < errors.length; i++){
          errorMsg += errors[i];
          if (i+1!=errors.length){
            errorMsg += ", ";
          }
          else{
            errorMsg += ".";
          }
        }
        this.msgClass = "error-msg";
        this.msg = errorMsg;
      }
    },

    ValidateForm(){
      let errors = [];
      if (this.form.title.trim().length===0)
        errors.push("title");
      if (this.form.readyInMinutes.trim().length===0)
        errors.push("ready in minutes");
      if (this.form.servings.trim().length===0)
        errors.push("servings");
      if (this.form.image.trim().length===0)
        errors.push("image url");
      let goodIngredients = [...this.form.ingredients];
      let index_goodIngredients = 0;
      for (let i = 0; i < this.form.ingredients.length; i++){
        if (this.form.ingredients[i].ingredientName.trim().length===0 &&
          this.form.ingredients[i].measuringTool.trim().length===0 &&
          this.form.ingredients[i].amount.trim().length===0){
            goodIngredients.splice(i,1); // remove empty rows
            this.numberOfRows-=1;
            continue;
          }
        else if (this.form.ingredients[i].ingredientName.trim().length===0 || // at least one is empty, not good - alert!
          this.form.ingredients[i].measuringTool.trim().length===0 ||
          this.form.ingredients[i].amount.trim().length===0){
            errors.push("ingredient " + (index_goodIngredients+1));
          }
        index_goodIngredients+=1;
      }
      this.form.ingredients = goodIngredients;
      if (this.form.instructions.trim().length===0)
        errors.push("instructions");
      return errors;
    },
    onAddRow(){
      this.numberOfRows+=1;
      this.form.ingredients.push({ingredientName:"",
                              measuringTool:"",
                              amount:""});
      console.log(this.form.ingredients);
    }
  }
}
</script>


<style>
  #wrapper{
    height: 25px;
  }

  .btn-add{
    text-align: right;
    padding:5px;
  }

  .ingredient-row{
    margin-left:15%;
  }

  .checkboxes-diet-label{
    margin-left:10px;
  }

  .error-msg{
    color: red;
  }
  
  .success-msg{
    color:green;
  }
</style>