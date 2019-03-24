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
          <div class="col-md-4 text-center">
            <h2>Your Fighter:</h2>
            <h3><router-link :to="'/profile/' + hero.id">{{ hero.name }}</router-link></h3>
            <button v-on:click="fight()" class="btn btn-primary btn-outline with-arrow">FIGHT!<i class="icon-arrow-right"></i></button>
            <h1 class="versus">- VS -</h1>
            <div class="panel panel-default text-left">
              <div class="panel-heading">Selected Enemies:</div>
              <ul>
                <li v-for="villain in selectedVillains">{{ villain.name }}</li>
              </ul>
            </div>
          </div>

          <div class="col-md-8 panel panel-default">
            <div class="panel-body">
              <div class="col-md-6 text-center">
                <h2>Enemies:</h2>
                <form>
                  <div class="form-group">
                    <label>Enemy</label>
                    <input class="form-control" type="text" v-on:keyup="runFilter()" v-model="nameFilter" list="names" placeholder="Goblin">
                    <datalist id="names">
                      <option v-for="villain in villains">{{ villain.name }}</option>
                    </datalist>
                  </div>
                  <button v-on:click.prevent="addMonster()" class="btn btn-primary btn-outline with-arrow">Add Enemy<i class="icon-arrow-left"></i></button>
                </form>
              </div>

              <div class="col-md-6 text-center">
                <h2>Iterations:</h2>
                <form>
                  <div class="form-group">
                    <label>Simulations Per Enemy</label>
                    <input class="form-control text-center" type="integer" v-model="iterations" placeholder="1-3000">
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>        
      </div>
    </div>
  </div>
</template>

<style>
  h1.versus{
    margin-top: 26px;
  }
</style>

<script>
  var axios = require('axios')

  export default {
    data: function(){
      return {
        hero: {},
        iterations: "",
        villains: [],
        selectedVillains: [],
        nameFilter: ""
      };
    },
    created: function(){
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
      },
      addMonster: function(){
        if (this.villains[0] != undefined) {
          var alreadyInList = true
          this.selectedVillains.forEach(villain => {
            if (villain.name == this.villains[0].name){
              alreadyInList = false
              return
            }else {
              alreadyInList = true
            }
          });
          if (alreadyInList){
            this.selectedVillains.push(this.villains[0]);
            this.nameFilter = "";
            this.villains = [];
          }
        }
      },
      fight: function(){
        var villainIds = []
        this.selectedVillains.forEach(villain => {
          villainIds.push(villain.id)
        });
        var params = {
          hero: this.hero.id,
          villains: villainIds,
          iterations: this.iterations
        }
        axios.post("api/characters/run_sim", params)
        .then(this.$router.push("/profile/" + this.hero.id)
        )
      }
    }
  };
</script>