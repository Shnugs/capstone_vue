<template>
<div class="characters">
  <div id="fh5co-blog-section">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 text-center fh5co-heading">
          <h2>Characters</h2>
          <h3>Select your combatant:</h3>
        </div>
      </div>
      <div v-for="character in characters">
        <div class="col-md-4 text-center" id="charCards">
          <div class="blog-inner">
            <router-link v-if="character.profile_url" :to="'/profile/' + character.id"><img class="img-responsive" :src="character.profile_url"></router-link>
            <router-link v-else :to="'/profile/' + character.id"><img class="img-responsive" src="images/image_4.jpg"></router-link>
            <div class="desc">
              <h3><router-link :to="'/profile/' + character.id">{{ character["name"] }}</router-link></h3>
              <p><router-link :to="'/new_sim/' + character.id" class="btn btn-primary btn-outline with-arrow">New Sim<i class="icon-arrow-up"></i></router-link></p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 text-center">
        <div class="blog-inner">
          <a href="/new"><img class="img-responsive" id="newChar" src="images/add_icon.png" alt="Blog"></a>
          <div class="desc">
            <h3><a href="/new">Add New</a></h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style>
#charCards {
  height: 500px;
}
#newChar {
  margin-left: auto;
  margin-right: auto;
}
#fh5co-blog-section {
  padding-top: 50px;
}
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
    axios.get('/api/characters/user_characters')
    .then(response => {
      this.characters = response.data;
    });
  },
  methods: {}
};
</script>