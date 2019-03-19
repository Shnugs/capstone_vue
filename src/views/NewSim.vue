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
            <ul class="contact-info">
              <li><h3><router-link :to="'/profile/' + hero.id">{{ hero["name"] }}</router-link></h3></li>
            </ul>
          </div>
          
          <div class="col-md-8 col-md-push-1 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <input class="form-control" placeholder="Enemy" type="text">
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

  export default {
    data: function() {
      return {
        hero: {},
        iterations: "",
        villains: []
      }
    },
    created: function() {
      axios.get("api/characters/" + this.$route.params['id'])
        .then(response => {
          this.hero = response.data
        });
    },
    methods: {}, 
    mixins: [Vue2Filters.mixin]
  };
</script>