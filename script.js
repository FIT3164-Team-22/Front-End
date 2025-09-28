var vg_1 = "vegaliteMapJSON.json";
vegaEmbed("#geographic_map", vg_1).then(function (result) {
}).catch(console.error);

var vg_2 = "vegaliteLineChart.json";
vegaEmbed("#linechart", vg_2).then(function (result) {
}).catch(console.error);


document.getElementById('regionselector').addEventListener('change',() => {
    currentMapUrl = document.getElementById('regionselector').value;
    const baseurl = "https://raw.githubusercontent.com/FIT3164-Team-22/Front-End/refs/heads/main/"
    fullurl = baseurl + currentMapUrl
    vegaEmbed('#geographic_map', fullurl).catch(console.error);
});
    


