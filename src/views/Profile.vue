
<template>
  <!-- TODO - Clean up the formatting on this so it's not such an eyesore -->
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
                    <p>Owner: {{ character["player"] }}</p>
                    <p>Class: {{ character["character_class"] }}</p>
                    <p>Race: {{ character["race"] }}</p>
                    <p>Deity: {{ character["deity"] }}</p>
                    <p>Level: {{ character["level"] }}</p>
                    <p>Feats:</p>
                    <p> {{ character["feats"] }}</p>
                    <p>Flaws:</p>
                    <p> {{ character["flaws"] }}</p>
                    <h3>Simulation Data:</h3>
                    <!-- TODO - Add loading box for while the page is waiting -->
                    <highcharts :options="chartOptions" ></highcharts>
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
                <p><router-link :to="'/edit/' + character['id']" class="btn btn-primary btn-outline with-arrow">Edit Character<i class="icon-arrow-up"></i></router-link></p>
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
import {Chart} from 'highcharts-vue'

export default {
  data: function() {
    return{
      character: {},
      simCharts: [],
      updateArgs: [true, true, true],
      chartOptions: {
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
            text: 'Win Rate (%)'
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
              format: '{point.y:.2f}%'
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
    }
  },
  created: function() {
    axios.get("api/characters/" + this.$route.params.id)
    .then(response => {
      this.character = response.data
      axios.get("api/simulations/get/" + this.character.id)
      .then(sims => {
        axios.get("api/battle_clusters/get/" + sims.data[0].character_id)
        .then(battle_clusters => {
          battle_clusters.data.forEach(battle_cluster => {
            axios.get("api/characters/" + battle_cluster.opponent_id)
            .then(villain => {
              this.chartOptions.series[0].data.push(
                {
                  "name": villain.data.name,
                  "y": parseFloat(battle_cluster.win_rate),
                  "drilldown": villain.data.name
                }
              )
              this.chartOptions.drilldown.series.push(
                {
                  "name": villain.data.name,
                  "id": villain.data.name,
                  "data": [
                    [
                      "Win Rate",
                      parseFloat(battle_cluster.win_rate)
                    ],
                    [
                      "Average Turns",
                      parseFloat(battle_cluster.avg_turns)
                    ],
                    [
                      "Initiative Win Rate",
                      parseFloat(battle_cluster.initiative_rate)
                    ],
                    [
                      "Hit Rate",
                      parseFloat(battle_cluster.hit_rate)
                    ],
                    [
                      "Crit Rate",
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
      });
    });
  },
  methods: {}
};
</script>
