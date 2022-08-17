<template>
  <div class="container">
    <h1 class="title">Register</h1>
    <b-form @submit.prevent="onRegister" @reset.prevent="onReset" @addPhoto.prevent="onPic">

      <b-form-group
        id="input-group-username"
        label-cols-sm="3"
        label="Username:"
        label-for="username"
      >
        <b-form-input
          id="username"
          v-model="$v.form.username.$model"
          type="text"
          :state="validateState('username')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.username.required">
          Username is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-else-if="!$v.form.username.length">
          Username length should be between 3-8 characters long
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.username.alpha">
          Username should contain only letters
        </b-form-invalid-feedback>
      </b-form-group>
    
      <b-form-group
        id="input-group-firstname"
        label-cols-sm="3"
        label="First name:"
        label-for="firstname"
      >
        <b-form-input
          id="firstname"
          v-model="$v.form.firstname.$model"
          type="text"
          :state="validateState('firstname')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.firstname.required">
          First name is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-else-if="!$v.form.firstname.length">
          First name should be at least one character
        </b-form-invalid-feedback>
      </b-form-group>
 
      <b-form-group
        id="input-group-lastname"
        label-cols-sm="3"
        label="Last name:"
        label-for="lastname"
      >
        <b-form-input
          id="lastname"
          v-model="$v.form.lastname.$model"
          type="text"
          :state="validateState('lastname')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.lastname.required">
          Last name is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-else-if="!$v.form.lastname.length">
          Last name should be at least one character
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-country"
        label-cols-sm="3"
        label="Country:"
        label-for="country"
      >
        <b-form-select
          id="country"
          v-model="$v.form.country.$model"
          :options="countries"
          class="form-control"
          :state="validateState('country')"
        ></b-form-select>
        <b-form-invalid-feedback>
          Country is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-Password"
        label-cols-sm="3"
        label="Password:"
        label-for="password"
      >
        <b-form-input
          id="password"
          type="password"
          v-model="$v.form.password.$model"
          :state="validateState('password')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.password.required">
          Password is required
        </b-form-invalid-feedback>
        <b-form-text v-else-if="$v.form.password.$error" text-variant="info">
          Your password should be <strong>strong</strong>. <br />
          For that, your password should be also:
        </b-form-text>
        <b-form-invalid-feedback
          v-if="$v.form.password.required && !$v.form.password.length"
        >
          Have length between 5-10 characters long
        </b-form-invalid-feedback>
        <b-form-invalid-feedback
          v-if="$v.form.password.required && !$v.form.password.vaildPassword"
        >
          Containe at least one digit and special character
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-confirmedPassword"
        label-cols-sm="3"
        label="Confirm Password:"
        label-for="confirmedPassword"
      >
        <b-form-input
          id="confirmedPassword"
          type="password"
          v-model="$v.form.confirmedPassword.$model"
          :state="validateState('confirmedPassword')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.confirmedPassword.required">
          Password confirmation is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback
          v-else-if="!$v.form.confirmedPassword.sameAsPassword"
        >
          The confirmed password is not equal to the original password
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-email"
        label-cols-sm="3"
        label="E-mail:"
        label-for="email"
      >
        <b-form-input
          id="email"
          type="email"
          v-model="$v.form.email.$model"
          :state="validateState('email')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.email.required">
          E-mail is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback
          v-else-if="!$v.form.email.validEmail"
        >
          The E-mail address is invalid
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-profilePic"
        label-cols-sm="3"
        label="Profile picture:"
        label-for="profilePic"
      >
      <b-form-file
          id="profilePic"
          type="text"
          v-model="$v.form.profilePic.$model"
          :state="validateState('profilePic')"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
          accept="image/*"
          class="form-control"
        ></b-form-file>
        <b-form-invalid-feedback v-if="!$v.form.profilePic.required">
          Profile picture is required
        </b-form-invalid-feedback>
      </b-form-group>
    

      <b-button type="reset" variant="danger">Reset</b-button>
      <b-button
        type="submit"
        variant="primary"
        style="width:250px;"
        class="ml-5 w-75 btn-submit"
        >Register</b-button
      >
      <div class="mt-2" id="login-div">
        You have an account already?
        <router-link to="login" class="sign-opt"> <b>Log in here</b></router-link>
      </div>
    </b-form>
    <b-alert
      class="mt-2"
      v-if="form.submitError"
      variant="warning"
      dismissible
      show
    >
      Register failed: {{ form.submitError }}
    </b-alert>
    <!-- <b-card class="mt-3 md-3" header="Form Data Result">
      <pre class="m-0"><strong>form:</strong> {{ form }}</pre>
      <pre class="m-0"><strong>$v.form:</strong> {{ $v.form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
import countries from "../assets/countries";
import {
  required,
  minLength,
  maxLength,
  alpha,
  sameAs,
  email
} from "vuelidate/lib/validators";

export default {
  name: "Register",
  data() {
    return {
      form: {
        username: "",
        firstname: "",
        lastname: "",
        country: null,
        password: "",
        confirmedPassword: "",
        email: "",
        profilePic:"",
        submitError: undefined
      },
      countries: [{ value: null, text: "", disabled: true }],
      errors: [],
      validated: false
    };
  },
  validations: {
    form: {
      username: {
        required,
        length: (u) => minLength(3)(u) && maxLength(8)(u),
        alpha
      },
      firstname:{
        required,
        alpha
      },
      lastname:{
        required,
        alpha
      },
      country: {
        required
      },
      password: {
        required,
        length: (p) => minLength(5)(p) && maxLength(10)(p),
        vaildPassword: (value) =>/[0-9]/.test(value) && /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value)
      },
      confirmedPassword: {
        required,
        sameAsPassword: sameAs("password")
      },
      email: {
        required,
        email
      },
      profilePic: {
        required
      }
    }
  },
  mounted() {
    // console.log("mounted");
    this.countries.push(...countries);
    // console.log($v);
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Register() {
      try {
        //console.log(this.form.username,this.form.firstname,this.form.lastname, this.form.country, this.form.password, this.form.email,this.form.profilePic.name);
        const response = await this.axios.post(
          // "https://test-for-3-2.herokuapp.com/user/Register",
          this.$root.store.server_domain + "/Register",

          {
            username: this.form.username,
            firstname: this.form.firstname,
            lastname: this.form.lastname,
            country: this.form.country,
            password: this.form.password,
            email: this.form.email,
            profilePic: this.form.profilePic.name
          }
        );
        this.$router.push("/login");
        //console.log(response.data);
      } catch (err) {
        //console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },
    onPic() {
      
    },
    onRegister() {
      //console.log("register method called");
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      //console.log("register method go");
      this.Register();
    },
    onReset() {
      this.form = {
        username: "",
        firstname: "",
        lastname: "",
        country: null,
        password: "",
        confirmedPassword: "",
        email: "",
        profilePic: ""
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    }
  }
};
</script>
<style lang="scss" scoped>

.title{
    font-size: 40px;
	  font-family: cursive;
	  color: #594545;
	  text-align: center;
}

.container {
  width: 600px;
  background-color: #f2dce0;
  padding: 30px;
  text-align: left;  
  margin-top: 10px;
  border-radius: 50px;
}

.form-control{
  background-color: #fffafb;
  border-radius: 10px;
  width:90%;
  text-align:left;
}

.btn-submit{
  background-color: #594545;
  border-color: #545b62;
}
.btn-submit:hover{
  background-color: #8c6565;
  border-color: #545b62;
} 

.sign-opt{
  color: #8c6565;
  margin-right:30px;
}
.sign-opt:hover{
  color: #c1acac;
}

#login-div{
  text-align: center;
}
</style>
