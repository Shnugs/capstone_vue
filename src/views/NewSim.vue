<template>
  <div class="new-sim">
    <div id="fh5co-contact-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3 text-center fh5co-heading">
            <h1>New Simulation</h1>
            <h3>Select your opponents and how many times to fight each</h3>

          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <h2>Your Fighter:</h2>
            <h3><router-link :to="'/profile/' + hero.id">{{ hero["name"] }}</router-link></h3>
          </div>
          <div>
          </div>
            <div class="col-md-8 col-md-push-1 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0">
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    Enemy: <input v-on:keyup="runFilter()" v-model="nameFilter" list="names">
                    <datalist id="names">
                      <option v-for="villain in villains">{{ villain.name }}</option>
                    </datalist>
                  </div>
                </div>
              </div>
            </div>
          </div>        
        </div>
      </div>
    </div>
    <!-- <div id="map" data-animate-effect="fadeIn"></div> -->
  </div>
</template>

<script>
  var axios = require('axios')
  import Vue2Filters from "vue2-filters";

  export default {
    data: function() {
      return {
        hero: {},
        iterations: "",
        villains: [],
        nameFilter: ""
      };
    },
    created: function() {
      axios.get("api/characters/" + this.$route.params['id'])
        .then(response => {
          this.hero = response.data
        });
      
    },
    methods: {
      runFilter: function(){
        axios.get("api/characters/filter?filters=" + this.nameFilter)
          .then(response => {
            this.villains = response.data
          });
      }
    }
  };
</script>