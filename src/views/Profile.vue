
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
                    <!-- TODO - Add charts below here -->
                    <highcharts :options="chartOptions"></highcharts>
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
                      <li>HP: {{ character['max_hp'] }}</li>
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
        chartOptions: {
          chart: {
              type: 'column'
          },
          title: {
              text: 'Browser market shares. January, 2018'
          },
          subtitle: {
              text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
          },
          xAxis: {
              type: 'category'
          },
          yAxis: {
              title: {
                  text: 'Total percent market share'
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
                      format: '{point.y:.1f}%'
                  }
              }
          },

          tooltip: {
              headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
              pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
          },

          "series": [
              {
                  "name": "Browsers",
                  "colorByPoint": true,
                  "data": [
                      {
                          "name": "Chrome",
                          "y": 62.74,
                          "drilldown": "Chrome"
                      },
                      {
                          "name": "Firefox",
                          "y": 10.57,
                          "drilldown": "Firefox"
                      },
                      {
                          "name": "Internet Explorer",
                          "y": 7.23,
                          "drilldown": "Internet Explorer"
                      },
                      {
                          "name": "Safari",
                          "y": 5.58,
                          "drilldown": "Safari"
                      },
                      {
                          "name": "Edge",
                          "y": 4.02,
                          "drilldown": "Edge"
                      },
                      {
                          "name": "Opera",
                          "y": 1.92,
                          "drilldown": "Opera"
                      },
                      {
                          "name": "Other",
                          "y": 7.62,
                          "drilldown": null
                      }
                  ]
              }
          ],
          "drilldown": {
              "series": [
                  {
                      "name": "Chrome",
                      "id": "Chrome",
                      "data": [
                          [
                              "v65.0",
                              0.1
                          ],
                          [
                              "v64.0",
                              1.3
                          ],
                          [
                              "v63.0",
                              53.02
                          ],
                          [
                              "v62.0",
                              1.4
                          ],
                          [
                              "v61.0",
                              0.88
                          ],
                          [
                              "v60.0",
                              0.56
                          ],
                          [
                              "v59.0",
                              0.45
                          ],
                          [
                              "v58.0",
                              0.49
                          ],
                          [
                              "v57.0",
                              0.32
                          ],
                          [
                              "v56.0",
                              0.29
                          ],
                          [
                              "v55.0",
                              0.79
                          ],
                          [
                              "v54.0",
                              0.18
                          ],
                          [
                              "v51.0",
                              0.13
                          ],
                          [
                              "v49.0",
                              2.16
                          ],
                          [
                              "v48.0",
                              0.13
                          ],
                          [
                              "v47.0",
                              0.11
                          ],
                          [
                              "v43.0",
                              0.17
                          ],
                          [
                              "v29.0",
                              0.26
                          ]
                      ]
                  },
                  {
                      "name": "Firefox",
                      "id": "Firefox",
                      "data": [
                          [
                              "v58.0",
                              1.02
                          ],
                          [
                              "v57.0",
                              7.36
                          ],
                          [
                              "v56.0",
                              0.35
                          ],
                          [
                              "v55.0",
                              0.11
                          ],
                          [
                              "v54.0",
                              0.1
                          ],
                          [
                              "v52.0",
                              0.95
                          ],
                          [
                              "v51.0",
                              0.15
                          ],
                          [
                              "v50.0",
                              0.1
                          ],
                          [
                              "v48.0",
                              0.31
                          ],
                          [
                              "v47.0",
                              0.12
                          ]
                      ]
                  },
                  {
                      "name": "Internet Explorer",
                      "id": "Internet Explorer",
                      "data": [
                          [
                              "v11.0",
                              6.2
                          ],
                          [
                              "v10.0",
                              0.29
                          ],
                          [
                              "v9.0",
                              0.27
                          ],
                          [
                              "v8.0",
                              0.47
                          ]
                      ]
                  },
                  {
                      "name": "Safari",
                      "id": "Safari",
                      "data": [
                          [
                              "v11.0",
                              3.39
                          ],
                          [
                              "v10.1",
                              0.96
                          ],
                          [
                              "v10.0",
                              0.36
                          ],
                          [
                              "v9.1",
                              0.54
                          ],
                          [
                              "v9.0",
                              0.13
                          ],
                          [
                              "v5.1",
                              0.2
                          ]
                      ]
                  },
                  {
                      "name": "Edge",
                      "id": "Edge",
                      "data": [
                          [
                              "v16",
                              2.6
                          ],
                          [
                              "v15",
                              0.92
                          ],
                          [
                              "v14",
                              0.4
                          ],
                          [
                              "v13",
                              0.1
                          ]
                      ]
                  },
                  {
                      "name": "Opera",
                      "id": "Opera",
                      "data": [
                          [
                              "v50.0",
                              0.96
                          ],
                          [
                              "v49.0",
                              0.82
                          ],
                          [
                              "v12.1",
                              0.14
                          ]
                      ]
                  }
              ]
          }
        },
        character: {}
      }
    },
    created: function() {
      axios.get("api/characters/" + this.$route.params['id'])
        .then(response => {
          this.character = response.data
        });
    },
    methods: {},
    components: {
      highcharts: Chart 
    }

  };











  // document.addEventListener('DOMContentLoaded', function () {
  //     var myChart = Highcharts.chart('some_bullshit_chart', {
    // chart: {
    //     type: 'column'
    // },
    // title: {
    //     text: 'Browser market shares. January, 2018'
    // },
    // subtitle: {
    //     text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
    // },
    // xAxis: {
    //     type: 'category'
    // },
    // yAxis: {
    //     title: {
    //         text: 'Total percent market share'
    //     }

    // },
    // legend: {
    //     enabled: false
    // },
    // plotOptions: {
    //     series: {
    //         borderWidth: 0,
    //         dataLabels: {
    //             enabled: true,
    //             format: '{point.y:.1f}%'
    //         }
    //     }
    // },

    // tooltip: {
    //     headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    //     pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    // },

    // "series": [
    //     {
    //         "name": "Browsers",
    //         "colorByPoint": true,
    //         "data": [
    //             {
    //                 "name": "Chrome",
    //                 "y": 62.74,
    //                 "drilldown": "Chrome"
    //             },
    //             {
    //                 "name": "Firefox",
    //                 "y": 10.57,
    //                 "drilldown": "Firefox"
    //             },
    //             {
    //                 "name": "Internet Explorer",
    //                 "y": 7.23,
    //                 "drilldown": "Internet Explorer"
    //             },
    //             {
    //                 "name": "Safari",
    //                 "y": 5.58,
    //                 "drilldown": "Safari"
    //             },
    //             {
    //                 "name": "Edge",
    //                 "y": 4.02,
    //                 "drilldown": "Edge"
    //             },
    //             {
    //                 "name": "Opera",
    //                 "y": 1.92,
    //                 "drilldown": "Opera"
    //             },
    //             {
    //                 "name": "Other",
    //                 "y": 7.62,
    //                 "drilldown": null
    //             }
    //         ]
    //     }
    // ],
    // "drilldown": {
    //     "series": [
    //         {
    //             "name": "Chrome",
    //             "id": "Chrome",
    //             "data": [
    //                 [
    //                     "v65.0",
    //                     0.1
    //                 ],
    //                 [
    //                     "v64.0",
    //                     1.3
    //                 ],
    //                 [
    //                     "v63.0",
    //                     53.02
    //                 ],
    //                 [
    //                     "v62.0",
    //                     1.4
    //                 ],
    //                 [
    //                     "v61.0",
    //                     0.88
    //                 ],
    //                 [
    //                     "v60.0",
    //                     0.56
    //                 ],
    //                 [
    //                     "v59.0",
    //                     0.45
    //                 ],
    //                 [
    //                     "v58.0",
    //                     0.49
    //                 ],
    //                 [
    //                     "v57.0",
    //                     0.32
    //                 ],
    //                 [
    //                     "v56.0",
    //                     0.29
    //                 ],
    //                 [
    //                     "v55.0",
    //                     0.79
    //                 ],
    //                 [
    //                     "v54.0",
    //                     0.18
    //                 ],
    //                 [
    //                     "v51.0",
    //                     0.13
    //                 ],
    //                 [
    //                     "v49.0",
    //                     2.16
    //                 ],
    //                 [
    //                     "v48.0",
    //                     0.13
    //                 ],
    //                 [
    //                     "v47.0",
    //                     0.11
    //                 ],
    //                 [
    //                     "v43.0",
    //                     0.17
    //                 ],
    //                 [
    //                     "v29.0",
    //                     0.26
    //                 ]
    //             ]
    //         },
    //         {
    //             "name": "Firefox",
    //             "id": "Firefox",
    //             "data": [
    //                 [
    //                     "v58.0",
    //                     1.02
    //                 ],
    //                 [
    //                     "v57.0",
    //                     7.36
    //                 ],
    //                 [
    //                     "v56.0",
    //                     0.35
    //                 ],
    //                 [
    //                     "v55.0",
    //                     0.11
    //                 ],
    //                 [
    //                     "v54.0",
    //                     0.1
    //                 ],
    //                 [
    //                     "v52.0",
    //                     0.95
    //                 ],
    //                 [
    //                     "v51.0",
    //                     0.15
    //                 ],
    //                 [
    //                     "v50.0",
    //                     0.1
    //                 ],
    //                 [
    //                     "v48.0",
    //                     0.31
    //                 ],
    //                 [
    //                     "v47.0",
    //                     0.12
    //                 ]
    //             ]
    //         },
    //         {
    //             "name": "Internet Explorer",
    //             "id": "Internet Explorer",
    //             "data": [
    //                 [
    //                     "v11.0",
    //                     6.2
    //                 ],
    //                 [
    //                     "v10.0",
    //                     0.29
    //                 ],
    //                 [
    //                     "v9.0",
    //                     0.27
    //                 ],
    //                 [
    //                     "v8.0",
    //                     0.47
    //                 ]
    //             ]
    //         },
    //         {
    //             "name": "Safari",
    //             "id": "Safari",
    //             "data": [
    //                 [
    //                     "v11.0",
    //                     3.39
    //                 ],
    //                 [
    //                     "v10.1",
    //                     0.96
    //                 ],
    //                 [
    //                     "v10.0",
    //                     0.36
    //                 ],
    //                 [
    //                     "v9.1",
    //                     0.54
    //                 ],
    //                 [
    //                     "v9.0",
    //                     0.13
    //                 ],
    //                 [
    //                     "v5.1",
    //                     0.2
    //                 ]
    //             ]
    //         },
    //         {
    //             "name": "Edge",
    //             "id": "Edge",
    //             "data": [
    //                 [
    //                     "v16",
    //                     2.6
    //                 ],
    //                 [
    //                     "v15",
    //                     0.92
    //                 ],
    //                 [
    //                     "v14",
    //                     0.4
    //                 ],
    //                 [
    //                     "v13",
    //                     0.1
    //                 ]
    //             ]
    //         },
    //         {
    //             "name": "Opera",
    //             "id": "Opera",
    //             "data": [
    //                 [
    //                     "v50.0",
    //                     0.96
    //                 ],
    //                 [
    //                     "v49.0",
    //                     0.82
    //                 ],
    //                 [
    //                     "v12.1",
    //                     0.14
    //                 ]
    //             ]
    //         }
    //     ]
    // }
// });
// });

</script>