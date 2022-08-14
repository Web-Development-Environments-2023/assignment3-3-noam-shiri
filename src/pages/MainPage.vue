<template>
  <div class="container">
    <!-- <h1 class="title">Main Page</h1> -->
    <div>
      <div id="divUser">
        <div v-if="!$root.store.username">
          <h1>Hello Guest!</h1>
          <router-link id="login-opt" class="sign-opt" to="/login"><b>Click Here to Login</b></router-link>
          <br/>
          <label id="register-opt">Do not have an account yet? 
            <router-link to="/register" class="sign-opt" >Click Here to Register</router-link>
          </label>
        </div>        
        <RecipePreviewList v-else
          title="Last Viewed Recipes"
          :class="{
            RandomRecipes: true,
            blur: !$root.store.username,
            center: true
          }"
          disabled
        ></RecipePreviewList>     
      </div>
        <div id="divRandom">
          <RecipePreviewList title="Random Recipes" class="RandomRecipes center" />
      </div>
    </div>
    <!-- <div
      style="position: absolute;top: 70%;left: 50%;transform: translate(-50%, -50%);"
    >
      Centeredasdasdad
    </div>-->
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
export default {
  components: {
    RecipePreviewList
  }
};
</script>

<style lang="scss" scoped>
.RandomRecipes {
  margin: 10px 0 10px;
}
.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}

#divRandom{
  background-color: #c1acac;
  padding: 30px;
  margin: 6px;
  border-radius: 50px;
}

#divUser{
  background-color: #f2dce0;
  padding: 30px;
  text-align: center;  
  margin: 6px;
  border-radius: 50px;
}

h1{
  font-size: 40px;
  font-family: cursive;
  color: #594545;
}

// .title{
//   font-family: cursive;
//   color: #54BAB9;
  
// }

.sign-opt{
  color: #8c6565;
  margin-right:30px;
}
.sign-opt:hover{
  color: #c1acac;
}

#register-opt{
  padding: 2%;
}

#login-opt{
  font-size: 20px;
}
</style>
