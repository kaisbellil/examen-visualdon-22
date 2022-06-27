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






// Les noms des cantons avec le moins de précipitation (minimum precipitation)






// La moyenne de précipitation en Suisse








/*
========================================================================================================================
3. Visualisations (45 points)
========================================================================================================================
*/

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






//--------------------------------------------------------

// --- 3.2 Bubble chart ---
const bubbleFigureSvg = d3.select('#scatter-plot')
    .append('svg')
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Continuez ci-dessous-----------------------------------






//--------------------------------------------------------



