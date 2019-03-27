<template>
  <div class="edit">
    <div class='container'>
      <h2 class="text-center">- Edit Character -</h2>
      <form autocomplete="off" v-on:submit.prevent="submit()">
        <div class="panel-group">
          <div class="panel panel-primary">
            <div class="panel-heading text-center">*Required*</div>
            <div class="panel-body">
              <div class="row">
                <div class="col-md-6">
                  <label v-if="errors.collect('name').length" class="text-danger">*Name*</label>
                  <label v-else>Name</label>
                  <input v-validate="'required|max:40|alpha_spaces'" class='form-control text-danger' name="name" type='text' v-model="character.name" placeholder="Character Name">
                </div>
                <div class="col-md-6">
                  <label v-if="errors.collect('player').length" class="text-danger">*Player*</label>
                  <label v-else>Player</label>
                  <input v-validate="'required|max:40|alpha_spaces'" class='form-control' name="player" type='text' v-model="character.player" placeholder="Your name">
                </div>
              </div>
              <div class="row">
                <div class="row-md-6">
                  <div class="col-md-1 text-center">
                    <label v-if="errors.collect('strength').length" class="text-danger">STR*</label>
                    <label v-else>STR</label>
                    <input v-validate="'required|max:2|numeric|max_value:30'" v-on:keypress="isNumber(event)" class='form-control text-center' name="strength" type='string' v-model="character.strength" placeholder="15">
                    <label>Mod</label>
                    <input v-validate="'required'" class='form-control text-center' name="strength_mod" type='string' v-model="strengthMod" disabled placeholder="+2">
                  </div>
                  <div class="col-md-1 text-center">
                    <label v-if="errors.collect('dexterity').length" class="text-danger">DEX*</label>
                    <label v-else>DEX</label>
                    <input v-validate="'required|max:2|numeric|max_value:30'" v-on:keypress="isNumber(event)" class='form-control text-center' name="dexterity" type='string' v-model="character.dexterity" placeholder="15">
                    <label>Mod</label>
                    <input v-validate="'required'" class='form-control text-center' name="dexterity_mod" type='string' v-model="dexterityMod" disabled placeholder="+2">
                  </div>
                  <div class="col-md-1 text-center">
                    <label v-if="errors.collect('constitution').length" class="text-danger">CON*</label>
                    <label v-else>CON</label>
                    <input v-validate="'required|max:2|numeric|max_value:30'" v-on:keypress="isNumber(event)" class='form-control text-center' name="constitution" type='string' v-model="character.constitution" placeholder="15">
                    <label>Mod</label>
                    <input v-validate="'required'" class='form-control text-center' name="constitution_mod" type='string' v-model="constitutionMod" disabled placeholder="+2">
                  </div>
                  <div class="col-md-1 text-center">
                    <label v-if="errors.collect('intelligence').length" class="text-danger">INT*</label>
                    <label v-else>INT</label>
                    <input v-validate="'required|max:2|numeric|max_value:30'" v-on:keypress="isNumber(event)" class='form-control text-center' name="intelligence" type='string' v-model="character.intelligence" placeholder="15">
                    <label>Mod</label>
                    <input v-validate="'required'" class='form-control text-center' name="intelligence_mod" type='string' v-model="intelligenceMod" disabled placeholder="+2">
                  </div>
                  <div class="col-md-1 text-center">
                    <label v-if="errors.collect('wisdom').length" class="text-danger">WIS*</label>
                    <label v-else>WIS</label>
                    <input v-validate="'required|max:2|numeric|max_value:30'" v-on:keypress="isNumber(event)" class='form-control text-center' name="wisdom" type='string' v-model="character.wisdom" placeholder="15">
                    <label>Mod</label>
                    <input v-validate="'required'" class='form-control text-center' name="wisdom_mod" type='string' v-model="wisdomMod" disabled placeholder="+2">
                  </div>
                  <div class="col-md-1 text-center">
                    <label v-if="errors.collect('charisma').length" class="text-danger">CHA*</label>
                    <label v-else>CHA</label>
                    <input v-validate="'required|max:2|numeric|max_value:30'" v-on:keypress="isNumber(event)" class='form-control text-center' name="charisma" type='string' v-model="character.charisma" placeholder="15">
                    <label>Mod</label>
                    <input v-validate="'required'" class='form-control text-center' name="charisma_mod" type='string' v-model="charismaMod" disabled placeholder="+2">
                  </div>
                </div>
                <div class="row-md-6">
                  <div class="col-md-2">
                    <label v-if="errors.collect('hp').length" class="text-danger">*HP*</label>
                    <label v-else>HP</label>
                    <input v-validate="'required|max:4|numeric|max_value:9000'" v-on:keypress="isNumber(event)" class='form-control' name="hp" type='text' v-model="character.hp" placeholder="56">
                  </div>
                  <div class="col-md-2">
                    <label v-if="errors.collect('armor_class').length" class="text-danger">*Armor Class*</label>
                    <label v-else>Armor Class</label>
                    <input v-validate="'required|max:2|numeric|max_value:50'" v-on:keypress="isNumber(event)" class='form-control' name="armor_class" type='text' v-model="character.armor_class" placeholder="17">
                  </div>
                  <div class="col-md-2">
                    <label v-if="errors.collect('level').length" class="text-danger">*Level*</label>
                    <label v-else>Level</label>
                    <input v-validate="'required|max:2|numeric|max_value:30'" v-on:keypress="isNumber(event)" class='form-control' name="level" type='text' v-model="character.level" placeholder="1-20">
                  </div>
                  <div class="col-md-2">
                    <label v-if="errors.collect('initiative').length" class="text-danger">*Initiative*</label>
                    <label>Initiative</label>
                    <input v-validate="'required'" class='form-control' name="initiative" type='text' v-model="dexterityMod" placeholder="+5" disabled>
                  </div>
                  <div class="col-md-2">
                    <label v-if="errors.collect('speed').length" class="text-danger">*Speed*</label>
                    <label v-else>Speed</label>
                    <input v-validate="'required|max:3|numeric|max_value:500'" v-on:keypress="isNumber(event)" class='form-control' name="speed" type='text' v-model="character.speed" placeholder="30">
                  </div>
                  <div class="col-md-2">
                    <label v-if="errors.collect('alignment').length" class="text-danger">*Alignment*</label>
                    <label v-else>Alignment</label>
                    <select class="form-control" name="alignment" type='text' v-model="character.alignment">
                      <option>LG</option>
                      <option>LN</option>
                      <option>LE</option>
                      <option>NG</option>
                      <option>TN</option>
                      <option>NE</option>
                      <option>CG</option>
                      <option>CN</option>
                      <option>CE</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <label v-if="errors.collect('weapon_1_name').length" class="text-danger">*Weapon 1 Name*</label>
                  <label v-else>Weapon 1 Name</label>
                  <input v-validate="'required|alpha_spaces|max:40'" class='form-control' name="weapon_1_name" type='text' v-model="character.weapon_1_name" placeholder="Longsword, Bow, Dragon Slayer etc...">
                  <label v-if="errors.collect('weapon_1_attack').length" class="text-danger">*Weapon 1 Attack Bonus*</label>
                  <label v-else>Weapon 1 Attack Bonus</label>
                  <input v-validate="'required'" class='form-control' name="weapon_1_attack" type='text' v-model="character.weapon_1_attack" placeholder="+5, -1, etc...">
                  <label v-if="errors.collect('weapon_1_dmg').length" class="text-danger">*Weapon 1 Damage*</label>
                  <label v-else>Weapon 1 Damage</label>
                  <input v-validate="{ required: true, regex: /\d+\s?[dD]\s?\d+\s?[\+\-]\s?\d+/ }" class='form-control' name="weapon_1_dmg" type='text' v-model="character.weapon_1_dmg" placeholder="1d6 + 3, 2D4-1">
                </div>
                <div class="col-md-4">
                  <label>Weapon 2 Name</label>
                  <input class='form-control' name="weapon_2_name" type='text' v-model="character.weapon_2_name" placeholder="Longsword, Bow, Dragon Slayer etc...">
                  <label>Weapon 2 Attack Bonus</label>
                  <input class='form-control' name="weapon_2_attack" type='text' v-model="character.weapon_2_attack" placeholder="+5, -1, etc...">
                  <label>Weapon 2 Damage</label>
                  <input class='form-control' name="weapon_2_dmg" type='text' v-model="character.weapon_2_dmg" placeholder="1d6 + 3, 2D4-1">
                </div>
                <div class="col-md-4">
                  <label>Weapon 3 Name</label>
                  <input class='form-control' name="weapon_3_name" type='text' v-model="character.weapon_3_name" placeholder="Longsword, Bow, Dragon Slayer etc...">
                  <label>Weapon 3 Attack Bonus</label>
                  <input class='form-control' name="weapon_3_attack" type='text' v-model="character.weapon_3_attack" placeholder="+5, -1, etc...">
                  <label>Weapon 3 Damage</label>
                  <input class='form-control' name="weapon_3_dmg" type='text' v-model="character.weapon_3_dmg" placeholder="1d6 + 3, 2D4-1">
                </div>
              </div>
            </div>
          </div>
          <div class="panel panel-warning">
            <div class="panel-heading text-center">Not Currently Essential </div>
            <div class="panel-body">
              <label>Profile URL</label>
              <input class='form-control' type='text' v-model="character.profile_url" placeholder="website.com/your_characters_profile_url">
              <label>Class</label>
              <input class='form-control' type='text' v-model="character.character_class" placeholder="Fighter, Wizard, etc...">
              <label>Race</label>
              <input class='form-control' type='text' v-model="character.race" placeholder="Human, Drow, Dwarf, etc...">
              <label>Deity</label>
              <input class='form-control' type='text' v-model="character.deity" placeholder="Lolth, Gruumsh, Kord, etc...">
              <label>Feats</label>
              <input class='form-control' type='text' v-model="character.feats" placeholder="feat_1, feat_2, feat_3, ect...">
              <label>Flaws</label>
              <input class='form-control' type='text' v-model="character.flaws" placeholder="flaw_1, flaw_2, flaw_3, ect...">
              <label>Background</label>
              <input class='form-control' type='text' v-model="character.background" placeholder="Acolyte, Folk Hero, Entertainers, etc...">
            </div>
          </div>
        </div>
        <div class="row text-center">
          <button :disabled='!isComplete' type="submit" class="btn btn-primary">Update</button>
          <div v-if="confirmDelete === false">
            <button v-on:click.prevent="confirm()" class="btn btn-warning">Delete</button>
          </div>
          <div v-else>
            <button v-on:click="kill()" class="btn btn-danger">Are You SURE?</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<style>
.edit .btn{
  position: relative;
  align-self: center;
  margin-bottom: 16px;
}
.edit {
  margin-top: 20px;
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
        alignment: "",
        profile_url: ""
      },
      confirmDelete: false
    };
  },
  created: function() {
    window.scrollTo(0, 0);
    axios.get("/api/characters/" + this.$route.params.id)
      .then(response => {
        this.character = response.data;
      })
  },
  computed: {
    isComplete() {
      return (
        this.character.name &&
        this.character.player &&
        this.character.strength &&
        this.character.dexterity &&
        this.character.constitution &&
        this.character.intelligence &&
        this.character.wisdom &&
        this.character.charisma &&
        this.character.hp &&
        this.character.armor_class &&
        this.character.level &&
        this.character.speed &&
        this.character.alignment &&
        this.character.weapon_1_name &&
        this.character.weapon_1_attack &&
        this.character.weapon_1_dmg &&
        !this.errors.items.length > 0
      )
    },
    strengthMod() {
      this.character.strength_mod = ~~((parseInt(this.character.strength)  - 10) / 2)
      return this.character.strength_mod
    },
    dexterityMod() {
      this.character.dexterity_mod = ~~((parseInt(this.character.dexterity)  - 10) / 2)
      this.character.initiative = this.character.dexterity_mod
      return this.character.dexterity_mod
    },
    constitutionMod() {
      this.character.constitution_mod = ~~((parseInt(this.character.constitution)  - 10) / 2)
      return this.character.constitution_mod
    },
    intelligenceMod() {
      this.character.intelligence_mod = ~~((parseInt(this.character.intelligence)  - 10) / 2)
      return this.character.intelligence_mod
    },
    wisdomMod() {
      this.character.wisdom_mod = ~~((parseInt(this.character.wisdom)  - 10) / 2)
      return this.character.wisdom_mod
    },
    charismaMod() {
      this.character.charisma_mod = ~~((parseInt(this.character.charisma)  - 10) / 2)
      return this.character.charisma_mod
    }
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
        alignment: this.character['alignment'],
        profile_url: this.character['profile_url']
      };
      axios.patch("/api/characters/" + this.character.id, params)
        .then(response => {
          this.$router.push("/profile/" + this.character.id);
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    kill: function() {
      axios.delete("/api/characters/" + this.character.id)
      .then(this.$router.push("/"))
    },
    confirm: function() {
      this.confirmDelete = true
    },
    isNumber: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        evt.preventDefault();;
      } else {
        return true;
      }
    }
  }
}
</script>