var vg_1 = "vegaliteMapJSON.json";
vegaEmbed("#geographic_map", vg_1).then(function (result) {
}).catch(console.error);

var vg_2 = "vegaliteLineChart.json";
vegaEmbed("#linechart", vg_2).then(function (result) {
}).catch(console.error);
