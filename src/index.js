import * as d3 from 'd3'

// Import des données
import data from '../data/cantons_data.geojson'

/*
========================================================================================================================
1. Dessin SVG (15 points)
========================================================================================================================
Vous pouvez dessiner la figure soit à partir d'ici ou directement dans l'HTML (public/index.html).
*/





/*
========================================================================================================================
2. Manipulation des données (20 points)
========================================================================================================================
*/

// Le nom du canton avec le plus d'ensoleillement (maximum radiation)

 
const canton = data.features.filter((d, i) => {
    return d.properties.radiation
  })

d3.select("div#scatter-plot").append('p').text(' Le canton le plus ensoleillé de Suisse est : ' + d3.max(canton, d => d.properties.name));

// Les noms des cantons avec le moins de précipitation (minimum precipitation)


const canton2 = data.features.filter((d, i) => {
    return d.properties.precipitation
  })

d3.select("div#scatter-plot").append('p').text(' Le canton avec le moins de précipitations de Suisse est : ' + d3.min(canton2, d => d.properties.name));


// La moyenne de précipitation en Suisse

    
const Suisse = data.features.filter((d, i) => {
    return d.properties.precipitation 
  })
  
  d3.select("div#scatter-plot").append('p').text(' La moyenne de précipitation en Suisse : ' + d3.mean(Suisse, d => d.properties.precipitation));

  
 




/*
========================================================================================================================
3. Visualisations (45 points)
========================================================================================================================
*/
/* 
// Constantes
 const margin = {top : 10, right: 40, bottom: 20, left: 40},
    width = 0.8*window.innerWidth - margin.left - margin.right,
    height = 0.5*window.innerHeight + margin.top + margin.bottom;


// --- 3.1 Carte ---
const mapSvg = d3.select('#map')
    .append('svg')
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


const projection = d3.geoMercator()
    .translate([width/2, height/2])
    .rotate([-7.43864, -46.95108, 0])
    .center([0.54, -0.1])
    .scale(8000);

// Continuez ci-dessous-----------------------------------




var colorScale = d3.scaleThreshold()
  .domain([100000, 1000000, 10000000, 30000000, 100000000, 500000000])
  .range(d3.schemeBlues[7]);



var path = d3.geoPath();


  let card = d3.select("body").append("div")	
  .attr("class", "card")				
  .style("opacity", 0); 

  


  mapSvg.selectAll("path")
    .data(data.features) // <-----------
    .enter()
    .append("path")
      .attr("d", d3.geoPath()
        .projection(projection)
      )
      .attr("fill", function (d) {
        return colorScale(d.properties.precipitation); // <-----------
    }) // afficher la précipitation lorsqu'on passe dessus avec la souris
      .on('mouseover', function (c,d) {
        card.transition()
             .duration('50')
             card.html("<p>" + d.properties.precipitation + "</p>") // <-----------
             .style("height", "auto")
             .style("left", window.event.clientX + "px")		
             .style("top", window.event.clientY + "px")
             .style("opacity", 1)
             
    })
    .on('mouseout', function () {
        card.transition()
             .duration('50')
             .style("opacity", 0);
    });

   */
 


//--------------------------------------------------------

// --- 3.2 Bubble chart ---
/* const bubbleFigureSvg = d3.select('#scatter-plot')
    .append('svg')
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")"); */

// Continuez ci-dessous-----------------------------------

// /!\ Je n'ai pas réussi à afficher quelque chose avec votre code, j'ai donc repris à zéro ci-dessous :

// set the dimensions and margins of the graph
var margin = {top: 10, right: 20, bottom: 30, left: 50},
    width = 500 - margin.left - margin.right,
    height = 420 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#scatter-plot")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");



  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 2500])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    // .attr("class", "myXaxis")
   

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([35, 55])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // Add a scale for bubble size
  var z = d3.scaleLinear()
    .domain([1, 400])
    .range([ 1, 40]);


  // Add dots
  svg.append('g')
    .selectAll("dot")
    .data(data.features)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.properties.precipitation); } )
      .attr("cy", function (d) { return y(d.properties.radiation); } )
      .attr("r", function (d) { return z(d.properties.latitude); } )
      .style("fill", "#69b3a2")
      .style("opacity", "0.7")
      .attr("stroke", "black")
     

/* // Animation des cercles
      x.domain([0, 2500])
      svg.select(".myXaxis")
        .transition()
        .duration(2000)
        .attr("opacity", "1")
        .call(d3.axisBottom(x));
    
      svg.selectAll("circle")
        .transition()
        .delay(function(d,i){return(i*3)})
        .duration(2000)
        .attr("cx", function (d) { return x(d.properties.precipitation); } )
        .attr("cy", function (d) { return y(d.properties.radiation); } ) */
    

      // Add X axis label:
svg.append("text")
.attr("text-anchor", "end")
.attr("x", width)
.attr("y", height + margin.top + 20)
.text("Précipitations");

// Y axis label:
svg.append("text")
.attr("text-anchor", "end")
.attr("transform", "rotate(-90)")
.attr("y", -margin.left+20)
.attr("x", -margin.top)
.text("Radiation")

      svg.selectAll("dot")
  d3.transition()
  .duration(2000)
  .attr("width", "10000")


// /!\ REPONSE QUESTION : Le type d'échelle le plus pertinent à utiliser pour la précipitation serait une échelle exponentielle, car visuellement de 0 à 800 il n'y a rien donc il faudrait combler le vide


//--------------------------------------------------------


