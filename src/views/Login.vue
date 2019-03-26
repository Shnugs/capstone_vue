<template>
  <div class="login">
    <div class="container">
      <div class="col-md-6 col-md-offset-3 text-center">
        <div id="loginPanel" class="panel panel-body shadow rounded">
          <form v-on:submit.prevent="submit()">
            <h1>- Login -</h1>
            <div class="form-group">
              <label>Email:</label>
              <input name="email" type="email" class="form-control" v-model="email">
            </div>
            <div class="form-group">
              <label>Password:</label>
              <input type="password" class="form-control" v-model="password">
            </div>
            <input :disabled='!isComplete' type="submit" class="btn btn-primary" value="Submit">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  #loginPanel{
    margin-top: 20px;
  }
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    isComplete () {
      return this.email && this.password;
    }
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>