<template>
  <div class="container">
    <h1 class="title">Login</h1>
    <b-form @submit.prevent="onLogin">
      <b-form-group
        id="input-group-Username"
        label-cols-sm="3"
        label="Username:"
        label-for="Username"
      >
        <b-form-input
          id="Username"
          v-model="$v.form.username.$model"
          type="text"
          :state="validateState('username')"
        ></b-form-input>
        <b-form-invalid-feedback>
          Username is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-Password"
        label-cols-sm="3"
        label="Password:"
        label-for="Password"
      >
        <b-form-input
          id="Password"
          type="password"
          v-model="$v.form.password.$model"
          :state="validateState('password')"
        ></b-form-input>
        <b-form-invalid-feedback>
          Password is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-button
        type="submit"
        variant="primary"
        style="width:100px;display:block;"
        class="mx-auto w-100 btn-submit"
        >Login</b-button
      >
      <div class="mt-2">
        Do not have an account?
        <router-link to="register" class="sign-opt"> <b>Register in here</b></router-link>
      </div>
    </b-form>
    <b-alert
      class="mt-2"
      v-if="form.submitError"
      variant="warning"
      dismissible
      show
    >
      Login failed: {{ form.submitError }}
    </b-alert>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
        submitError: undefined
      }
    };
  },
  validations: {
    form: {
      username: {
        required
      },
      password: {
        required
      }
    }
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Login() {
      try {
        const response = await this.axios.post(
          // "https://test-for-3-2.herokuapp.com/user/Login",
          this.$root.store.server_domain +"/Login", 
          // "http://132.72.65.211:80/Login",
          // "http://132.73.84.100:80/Login",
          {
            username: this.form.username,
            password: this.form.password
          }
        );
      // console.log(response);
        // this.$root.loggedIn = true;
        //console.log(this.$root.store.login);
        this.$root.store.login(this.form.username);
        this.$router.push("/");
      } catch (err) {
        //console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },
    onLogin() {
      // console.log("login method called");
      this.form.submitError = undefined;
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      // console.log("login method go");

      this.Login();
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 500px;
  background-color: #f2dce0;
  padding: 30px;
  text-align: center;  
  margin-top: 10%;
  border-radius: 50px;
}

.form-control{
  background-color: #fffafb;
  border-radius: 10px;
  width:300px
}

 .btn-submit{
  background-color: #594545;
  border-color: #545b62;
}
.btn-submit:hover{
  background-color: #8c6565;
  border-color: #545b62;
} 

.btn-submit:focus{
  background-color: #f2bdc7;
  border-color: #545b62;
} 

.sign-opt{
  color: #8c6565;
  margin-right:30px;
}
.sign-opt:hover{
  color: #c1acac;
}

.title{
    font-size: 40px;
	  font-family: cursive;
	  color: #594545;
	  text-align: center;
}
</style>
