/* Script de las gráficas */

function draw(){

	var ctx1 = document.getElementById("graf").getContext("2d");
    var grafico = new Chart(ctx1).Bar(datosBarras,opcionesBarras);
    
  	legend(document.getElementById("leyenda"), datosBarras);
    
   /* var ctx2 = document.getElementById("amGraf").getContext("2d");
    var amGrafico = new Chart(ctx2).Bar(datosAM,opcionesAM);
 
    legend(document.getElementById("leyendaAM"), datosAM);
    
    var ctx3 = document.getElementById("asGraf").getContext("2d");
    var asGrafico = new Chart(ctx3).bar(datosAS,opcionesAS);
 
    legend(document.getElementById("leyendaAS"), datosAS);
	
	var ctx4 = document.getElementById("afGraf").getContext("2d");
    var afGrafico = new Chart(ctx4).Bar(datosAF,opcionesAF);
    
    legend(document.getElementById("leyendaAF"), datosAF);
    
    var ctx5 = document.getElementById("ocGraf").getContext("2d");
    var ocGrafico = new Chart(ctx5).Bar(datosOC,opcionesOC);
 
    legend(document.getElementById("leyendaOC"), datosOC);*/
    
    /*var ctx6 = document.getElementById("espGraf").getContext("2d");
    var espGrafico = new Chart(ctx6).Bar(datosESP,opcionesESP);
 
    legend(document.getElementById("leyendaESP"), datosESP);*/

};

var datosBarras = {
    labels: ["Genero 1", "Genero 2", "Genero 3", "genero 4", "genero 5", "genero 6"],
    datasets:[
        {
            label: "Europa",
            fillColor: "blue",
            strokeColor: "rgba(220,220,220,0.8)",
            data: [500, 300, 550, 726, 600, 400]
        },
		{
            label: "América",
            fillColor: "red",
            strokeColor: "rgba(220,220,220,0.8)",
            data: [500, 300, 550, 726, 600, 400]
        },
		{
            label: "Asia",
            fillColor: "yellow",
            strokeColor: "rgba(220,220,220,0.8)",
            data: [500, 300, 550, 726, 600, 400]
        },
		{
            label: "África",
            fillColor: "brown",
            strokeColor: "rgba(220,220,220,0.8)",
            data: [500, 300, 550, 726, 600, 400]
        },
		{
            label: "Oceanía",
            fillColor: "green",
            strokeColor: "rgba(220,220,220,0.8)",
            data: [500, 300, 550, 726, 600, 400]
        }
    ]
};

var opcionesBarras ={
   //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero : true,

    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,

    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.05)",

    //Number - Width of the grid lines
    scaleGridLineWidth : 1,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,

    //Boolean - If there is a stroke on each bar
    barShowStroke : true,

    //Number - Pixel width of the bar stroke
    barStrokeWidth : 2,

    //Number - Spacing between each of the X value sets
    barValueSpacing : 5,

    //Number - Spacing between data sets within X values
    barDatasetSpacing : 1,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

};




