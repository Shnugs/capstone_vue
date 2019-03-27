
<template>
  <!-- TODO - Clean up the formatting on this so it's not such an eyesore -->
  <div class="profile">
    <div class="container">
      <div id="fh5co-page">
        <div id="fh5co-about-section">
          <div class="row">
            <div class="col-md-6 col-md-offset-3 text-center fh5co-heading">
              <h2>{{ character["name"] }}</h2>
              <img :src=character.profile_url :alt=character.name>
              <p>For all your individual character needs</p>
            </div>
          </div>
          <hr></hr>
          <div class="row">
            <div class="col-md-8">
              <div class="row">
                <div class="col-md-12">
                  <div class="about-inner">
                    <h2>Fluff:</h2>
                    <ul>
                      <li>Owner: {{ character["player"] }}</li>
                      <li>Race: {{ character["race"] }}</li>
                      <li>Deity: {{ character["deity"] }}</li>
                      <li>Feats: {{ character["feats"] }}</li>
                      <li>Flaws: {{ character["flaws"] }}</li>
                    </ul>
                  <hr></hr>
                    <!-- TODO - Add loading box for while the page is waiting -->
                    <p><router-link :to="'/new_sim/' + character['id']" class="btn btn-primary btn-outline with-arrow">New Sim<i class="icon-arrow-down"></i></router-link></p>
                    <h3>Simulation Data:</h3>
                    <div v-for="chart in simCharts">
                      <highcharts class="chart" :updateArgs="updateArgs" :options="chart"></highcharts>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <aside class="sidebar">
                <div class="row">
                  <div class="col-md-12 side">
                    <h1>Stats</h1>
                    <ul>
                      <li><h3>Attributes:</h3></li>
                      <li>Level: {{ character["level"] }}</li>
                      <li>Class: {{ character["character_class"] }}</li>
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

                  </div>
                </div>
                <p><router-link :to="'/edit/' + character.id" class="btn btn-primary btn-outline with-arrow">Edit Character<i class="icon-arrow-up"></i></router-link></p>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
div#fh5co-about-section{
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-top: 50px;
}
#fh5co-page: {
  padding-top: 20px;
}
</style>

<script>
var axios = require('axios')

export default {
  data: function() {
    return{
      character: {},
      simCharts: [],
      updateArgs: [true, true, true]
    }
  },
  created: function() {
    window.scrollTo(0, 0);
    axios.get("api/characters/" + this.$route.params.id)
    .then(response => {
      this.character = response.data
      axios.get("api/simulations/get/" + this.character.id)
      .then(sims => {
        sims.data.forEach(sim => {
          var chartOptions = {
            chart: {
              type: 'column'
            },
            title: {
              text: 'Opponents'
            },
            subtitle: {
              text: 'Click column for details'
            },
            xAxis: {
              type: 'category'
            },
            yAxis: {
              title: {
                text: ''
              }
            },
            legend: {
              enabled: false
            },
            plotOptions: {
              series: {
                borderWidth: 0,
                dataLabels: {
                  enabled: true,
                  format: '{point.y:.2f}'
                }
              }
            },
            tooltip: {
              headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
              pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
            },
            series: [{
              name: "Opponents",
              colorByPoint: true,
              data: []
            }],
            drilldown: {
              series: []
            }
          }
          axios.get("api/battle_clusters/get/" + sim.id)
          .then(battle_clusters => {
            battle_clusters.data.forEach(battle_cluster => {
              axios.get("api/characters/" + battle_cluster.opponent_id)
              .then(villain => {
                chartOptions.series[0].data.push(
                  {
                    "name": villain.data.name,
                    "y": parseFloat(battle_cluster.win_rate),
                    "drilldown": villain.data.name
                  }
                )
                chartOptions.drilldown.series.push(
                  {
                    "name": villain.data.name,
                    "id": villain.data.name,
                    "data": [
                      [
                        "Win Rate (%)",
                        parseFloat(battle_cluster.win_rate)
                      ],
                      [
                        "Average Turns",
                        parseFloat(battle_cluster.avg_turns)
                      ],
                      [
                        "Initiative Win Rate (%)",
                        parseFloat(battle_cluster.initiative_rate)
                      ],
                      [
                        "Hit Rate (%)",
                        parseFloat(battle_cluster.hit_rate)
                      ],
                      [
                        "Crit Rate (%)",
                        parseFloat(battle_cluster.crit_rate)
                      ],
                      [
                        "Average Damage Dealt",
                        parseFloat(battle_cluster.avg_dmg_dealt)
                      ],
                      [
                        "Average Damage Taken",
                        parseFloat(battle_cluster.avg_dmg_taken)
                      ],
                      [
                        "Average Damage Dealt Per turn",
                        parseFloat(battle_cluster.avg_dmg_dealt_per_turn)
                      ],
                      [
                        "Average Damage Taken Per Round",
                        parseFloat(battle_cluster.avg_dmg_taken_per_turn)
                      ]
                    ]
                  }
                )
              });
            });
          });
          this.simCharts.push(chartOptions)
        });
      });
    });
  },
  methods: {}
};
</script>
