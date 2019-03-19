<template>
  <div class="new">
    <ul>
      <li v-for="error in errors"{{ error }}</li>
    </ul>
    <div class='container'>
      <h2>New Character</h2>
      <form v-on:submit.prevent="submit()">
        <div class="form-group">
          <label>Name</label>
          <input class='form-control' type='text' v-model="character.name" placeholder="Character Name">
        </div>
        <div class="form-group">
          <label>Player</label>
          <input class='form-control' type='text' v-model="character.player" placeholder="Your name">
        </div>
        <div class="form-group">
          <label>Class</label>
          <input class='form-control' type='text' v-model="character.character_class" placeholder="Fighter, Wizard, etc...">
        </div>
        <div class="form-group">
          <label>Race</label>
          <input class='form-control' type='text' v-model="character.race" placeholder="Human, Drow, Dwarf, etc...">
        </div>
        <div class="form-group">
          <label>Deity</label>
          <input class='form-control' type='text' v-model="character.deity" placeholder="Lolth, Gruumsh, Kord, etc...">
        </div>
        <div class="form-group">
          <label>hp</label>
          <input class='form-control' type='text' v-model="character.max_hp" placeholder="56">
        </div>
        <div class="form-group">
          <label>Armor Class</label>
          <input class='form-control' type='text' v-model="character.armor_class" placeholder="17">
        </div>
        <div class="form-group">
          <label>Level</label>
          <input class='form-control' type='text' v-model="character.level" placeholder="5">
        </div>
        <div class="form-group">
          <label>Base Strength</label>
          <input class='form-control' type='text' v-model="character.strength" placeholder="20">
        </div>
        <div class="form-group">
          <label>Base Dexterity</label>
          <input class='form-control' type='text' v-model="character.dexterity" placeholder="20">
        </div>
        <div class="form-group">
          <label>Base Constitution</label>
          <input class='form-control' type='text' v-model="character.constitution" placeholder="20">
        </div>
        <div class="form-group">
          <label>intelligence</label>
          <input class='form-control' type='text' v-model="character.intelligence" placeholder="5">
        </div>
        <div class="form-group">
          <label>wisdom</label>
          <input class='form-control' type='text' v-model="character.wisdom" placeholder="5">
        </div>
        <div class="form-group">
          <label>Base Charisma</label>
          <input class='form-control' type='text' v-model="character.charisma" placeholder="5">
        </div>
        <div class="form-group">
          <label>Strength Mod</label>
          <input class='form-control' type='text' v-model="character.strength_mod" placeholder="+5">
        </div>
        <div class="form-group">
          <label>Dexterity Mod</label>
          <input class='form-control' type='text' v-model="character.dexterity_mod" placeholder="+5">
        </div>
        <div class="form-group">
          <label>Constitution Mod</label>
          <input class='form-control' type='text' v-model="character.constitution_mod" placeholder="+5">
        </div>
        <div class="form-group">
          <label>Charisma Mod</label>
          <input class='form-control' type='text' v-model="character.charisma_mod" placeholder="-4">
        </div>
        <div class="form-group">
          <label>Wisdom Mod</label>
          <input class='form-control' type='text' v-model="character.wisdom_mod" placeholder="-4">
        </div>
        <div class="form-group">
          <label>Intelligence Mod</label>
          <input class='form-control' type='text' v-model="character.intelligence_mod" placeholder="-4">
        </div>
        <div class="form-group">
          <label>Initiative</label>
          <input class='form-control' type='text' v-model="character.initiative" placeholder="+5">
        </div>
        <div class="form-group">
          <label>Speed</label>
          <input class='form-control' type='text' v-model="character.speed" placeholder="30">
        </div>
        <div class="form-group">
          <label>Feats</label>
          <input class='form-control' type='text' v-model="character.feats" placeholder="feat_1, feat_2, feat_3, ect...">
        </div>
        <div class="form-group">
          <label>Flaws</label>
          <input class='form-control' type='text' v-model="character.flaws" placeholder="flaw_1, flaw_2, flaw_3, ect...">
        </div>
        <div class="form-group">
          <label>Weapon 1 Name</label>
          <input class='form-control' type='text' v-model="character.weapon_1_name" placeholder="Longsword">
        </div>
        <div class="form-group">
          <label>Weapon 1 Attack Bonus</label>
          <input class='form-control' type='text' v-model="character.weapon_1_attack" placeholder="+5, -1, etc...">
        </div>
        <div class="form-group">
          <label>Weapon 1 Damage</label>
          <input class='form-control' type='text' v-model="character.weapon_1_dmg" placeholder="1d6 + 3, 2D4-1">
        </div>
        <div class="form-group">
          <label>Background</label>
          <input class='form-control' type='text' v-model="character.background" placeholder="Acolyte, Folk Hero, Entertainers, etc...">
        </div>
        <div class="form-group">
          <label>Alignment</label>
          <input class='form-control' type='text' v-model="character.alignment" placeholder="LG, LN, LE, NG, TN, NE, CG, CN, CE">
        </div>
        <input type="submit" value="Create" class="btn btn-primary">
      </form>
    </div>
  </div>
</template>


<style>
div.new .btn{
  position: relative;
  align-self: center;
}
</style>


<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      character: {
              name: "",
              player: "",
              character_class: "",
              race: "",
              deity: "",
              max_hp: "",
              hp: "",
              armor_class: "",
              initiative: "",
              level: "",
              strength: "",
              dexterity: "",
              constitution: "",
              charisma: "",
              wisdom: "",
              intelligence: "",
              strength_mod: "",
              dexterity_mod: "",
              constitution_mod: "",
              charisma_mod: "",
              wisdom_mod: "",
              intelligence_mod: "",
              speed: "",
              feats: "",
              flaws: "",
              weapon_1_name: "",
              weapon_1_attack: "",
              weapon_1_dmg: "",
              background: "",
              alignment: ""
              },
      errors: []
    };
  },
  created: function() {
  },
  methods: {
    submit: function() {
      var params = {
                    name: this.character['name'],
                    player: this.character['player'],
                    character_class: this.character['character_class'],
                    race: this.character['race'],
                    deity: this.character['deity'],
                    max_hp: this.character['max_hp'],
                    hp: this.character['hp'],
                    armor_class: this.character['armor_class'],
                    initiative: this.character['initiative'],
                    level: this.character['level'],
                    strength: this.character['strength'],
                    dexterity: this.character['dexterity'],
                    constitution: this.character['constitution'],
                    charisma: this.character['charisma'],
                    wisdom: this.character['wisdom'],
                    intelligence: this.character['intelligence'],
                    strength_mod: this.character['strength_mod'],
                    dexterity_mod: this.character['dexterity_mod'],
                    constitution_mod: this.character['constitution_mod'],
                    charisma_mod: this.character['charisma_mod'],
                    wisdom_mod: this.character['wisdom_mod'],
                    intelligence_mod: this.character['intelligence_mod'],
                    speed: this.character['speed'],
                    feats: this.character['feats'],
                    flaws: this.character['flaws'],
                    weapon_1_name: this.character['weapon_1_name'],
                    weapon_1_attack: this.character['weapon_1_attack'],
                    weapon_1_dmg: this.character['weapon_1_dmg'],
                    background: this.character['background'],
                    alignment: this.character['alignment']
                    };
      axios.post("/api/characters", params)
        .then(response => {
          this.$router.push("/characters");
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
        // TODO - Once it exists, have this route to the new characters page
    }
  }
}
</script>