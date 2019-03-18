<template>
<div class="characters">
  <div id="fh5co-page">
    <div id="fh5co-blog-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3 text-center fh5co-heading">
            <h2>Characters</h2>
            <h3>Select your combatant</h3>
          </div>
        </div>
        <div v-for="character in characters">
          <div class="col-md-4 text-center">
            <div class="blog-inner">
              <a href="#"><img class="img-responsive" src="images/image_4.jpg" alt="Blog"></a>
              <div class="desc">
                <h3><a href="#">{{ character["name"] }}</a></h3>
                <p><a href="#" class="btn btn-primary btn-outline with-arrow">Read More<i class="icon-arrow-right"></i></a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style>
</style>


<script>
var axios = require('axios')

export default {
  data: function() {
    return {
      characters: []
    };
  },
  created: function() {
    axios.get('/api/characters')
    .then(response => {
      this.characters = response.data;
    });
  },
  methods: {}
};
</script>