
<template>
  <div class="profile">
    <div id="fh5co-page">
      <div id="fh5co-about-section">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-md-offset-3 text-center fh5co-heading">
              <h2>{{ character["name"] }}</h2>
              <p>For all your individual character needs</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8">
              <div class="row">
                <div class="col-md-12">
                  <div class="about-inner">
                    <img class="img-responsive" src="images/image_about.jpg" alt="About">
                    <h3>Fluff:</h3>
                    <p>Far far away.</p>
                    <p>Owner: {{ character["player"] }}</p>
                    <p>Class {{ character["character_class"] }}</p>
                    <p>Race {{ character["race"] }}</p>
                    <p>Deity {{ character["deity"] }}</p>
                    <p>Level {{ character["level"] }}</p>
                    <p>Feats:</p>
                    <p> {{ character["feats"] }}</p>
                    <p>Flaws:</p>
                    <p> {{ character["flaws"] }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <aside class="sidebar">
                <div class="row">
                  <div class="col-md-12 side">
                    <h3>Stat Block</h3>
                    <ul>
                      <li><h3>Attributes:</h3></li>
                      <li>Str: {{ character['strength'] }} (mod: {{ character['strength_mod'] }})</li>
                      <li>Dex: {{ character['dexterity'] }} (mod: {{ character['dexterity_mod'] }})</li>
                      <li>Con: {{ character['constitution'] }} (mod: {{ character['constitution_mod'] }})</li>
                      <li>Wis: {{ character['wisdom'] }} (mod: {{ character['wisdom_mod'] }})</li>
                      <li>Int: {{ character['intelligence'] }} (mod: {{ character['intelligence_mod'] }})</li>
                      <li>Cha: {{ character['charisma'] }} (mod: {{ character['charisma_mod'] }})</li>
                      <li>HP: {{ character['hp'] }}</li>
                      <li>AC: {{ character['armor_class'] }}</li>
                      <li>Initiative Bonus: {{ character['initiative'] }}</li>
                      <li>Speed: {{ character['speed'] }}</li>
                      <li></li>
                    </ul>
                  </div>
                  <div class="col-md-12 side">
                    <h3>Paragraph</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
                <p><a href="#" class="btn btn-primary btn-outline with-arrow">Edit Character<i class="icon-arrow-right"></i></a></p>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  var axios = require('axios')

  export default {
    data: function() {
      return{
        character: {}
      }
    },
    created: function() {
      axios.get("api/characters/" + this.$route.params['id'])
        .then(response => {
          this.character = response.data
        });
    },
    methods: {}
  }
</script>