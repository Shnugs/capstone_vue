<template>
  <div class="signup">
    <div class="container">
      <div class="col-md-6 col-md-offset-3 text-center">
        <div id="signupPanel" class="panel panel-body shadow rounded">
          <form v-on:submit.prevent="submit()">
            <h1 id="signupHeadline">- Signup -</h1>
            <div class="form-group">
              <label>Name:</label> 
              <input v-validate="'required'" name="name" type="text" class="form-control" v-model="name">
              <ul>
                <li class="text-danger" v-for="error in errors.collect('name')">{{ error }}</li>
              </ul>
            </div>
            <div class="form-group">
              <label>Email:</label>
              <input v-validate="'required|email'" name="email" type="email" class="form-control" v-model="email">
              <ul>
                <li class="text-danger" v-for="error in errors.collect('email')">{{ error }}</li>
              </ul>
            </div>
            <div class="form-group">
              <label>Password:</label>
              <input type="password" class="form-control" v-model="password">
            </div>
            <div class="form-group">
              <label>Password confirmation:</label>
              <input type="password" class="form-control" v-model="passwordConfirmation">
              <div v-if="passwordConfirmation.length > 0">
                <p class="text-danger" v-if="passwordConfirmation != password">Passwords don't match</p>
                <p class="text-success" v-if="passwordConfirmation === password">Passwords match</p>
              </div>
            </div>
            <input :disabled='!isComplete' id="signupButton" type="submit" class="btn btn-primary" value="Submit">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  #signupButton{
    margin-bottom: 16px;
  }
  #signupHeadline{
    margin-top: 10px;
  }
  #signupPanel{
    margin-top: 20px;
  }
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: ""
    };
  },
  computed: {
    isComplete () {
      return this.name && this.email && this.password && this.passwordConfirmation;
    }
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        // .catch(error => {
        //   this.errors = error.response.data.errors;
        // });
    }
  }
};
</script>