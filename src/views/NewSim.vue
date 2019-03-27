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
        <div class="panel-group row">
          <div class="col-md-4">
            <div class="text-center panel panel-primary">
              <h2 class="panel-heading">Your Fighter:</h2>
              <div class="panel-body">
                <router-link v-if="hero.profile_url" :to="'/profile/' + hero.id"><img class="img-responsive" :src="hero.profile_url"></router-link>
                <h3 id="fighter-title"><router-link :to="'/profile/' + hero.id">{{ hero.name }}</router-link></h3>
                <!-- TODO - Add character portrait here -->
                <button :disabled="!isComplete" v-on:click="fight()" class="btn btn-primary btn-outline with-arrow">FIGHT!<i class="icon-arrow-right"></i></button>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div v-if="selectedVillains.length > 0" class="text-center panel panel-success">
              <h2 class="panel-heading">Enemies:</h2>
              <div class="panel-body">
                <form>
                  <div class="form-group">
                    <label>Enemy Select</label>
                    <input class="form-control" type="text" v-on:keyup="runFilter()" v-model="nameFilter" list="names" placeholder="Goblin">
                    <datalist id="names">
                      <option v-for="villain in villains">{{ villain.name }}</option>
                    </datalist>
                  </div>
                  <button v-on:click.prevent="addMonster()" class="btn btn-primary btn-outline with-arrow addMonsterBtn">Add Enemy<i class="icon-arrow-down"></i></button>
                </form>
                <div class="panel panel-default text-left">
                  <div class="panel-heading">Selected Enemies:</div>
                  <ul>
                    <li v-for="villain in selectedVillains">{{ villain.name }}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div v-else class="text-center panel panel-danger">
              <h2 class="panel-heading">Enemies:</h2>
              <div class="panel-body">
                <form>
                  <div class="form-group">
                    <label>Enemy Select</label>
                    <input class="form-control" type="text" v-on:keyup="runFilter()" v-model="nameFilter" list="names" placeholder="Goblin">
                    <datalist id="names">
                      <option v-for="villain in villains">{{ villain.name }}</option>
                    </datalist>
                  </div>
                  <button v-on:click.prevent="addMonster()" class="btn btn-primary btn-outline with-arrow addMonsterBtn">Add Enemy<i class="icon-arrow-down"></i></button>
                </form>
                <div class="panel panel-default text-left">
                  <div class="panel-heading">Selected Enemies:</div>
                  <ul>
                    <li v-for="villain in selectedVillains">{{ villain.name }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div v-if="iterations && selectedVillains" class="text-center panel panel-success">
              <h2 class="panel-heading">Iterations:</h2>
              <div class="panel-body">
                <form>
                  <div class="form-group">
                    <label>Simulations Per Enemy</label>
                    <input v-validate="'required'" class="form-control text-center" type="number" v-model="iterations" placeholder="> 1">
                    <label>Estimated Simulation Time</label>
                    <h3>{{ timeEstimate() }}</h3>
                  </div>
                </form>
              </div>
            </div>
            <div v-else class="text-center panel panel-danger">
              <h2 class="panel-heading">Iterations:</h2>
              <div class="panel-body">
                <form>
                  <div class="form-group">
                    <label>Simulations Per Enemy</label>
                    <input v-validate="'required'" class="form-control text-center" type="number" v-model="iterations" placeholder="> 1">
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
.addMonsterBtn{
  margin-bottom: 15px;
}
#fighter-title{
  margin-top: 15px;
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
        nameFilter: "", 
        timeCoefficient: 0.0068
      };
    },
    created: function(){
      window.scrollTo(200, 180);
      axios.get("api/characters/" + this.$route.params['id'])
        .then(response => {
          this.hero = response.data
        });
      
    },
    computed: {
      isComplete() {
        return (
          this.iterations &&
          this.selectedVillains
        )
      }
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
      },
      timeEstimate: function(){
        var seconds = this.timeCoefficient * this.iterations * this.selectedVillains.length
        var minutes = Math.floor(seconds / 60);
        seconds = seconds%60;
        var hours = Math.floor(minutes/60)
        minutes = minutes%60;
        return `${hours}:${minutes}:${Math.round(seconds * 100) / 100}`;
      }
    }
  };
</script>