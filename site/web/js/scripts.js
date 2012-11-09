$(document).ready(function() {
    $("#slider").slider({
        value:2010,
        min: 2006,
        max: 2010,
        step: 1,
        slide: function(event, ui) {
            $( "#slider-current-year" ).html(ui.value);
        },
        change: function(event, ui) {
            recargarMapa();
        }
    });

    $("#filtros li a").click(function(e){
        e.preventDefault();
        $(this).tab('show');
    });

    $("#main-tabs li a").click(function(e){
        e.preventDefault();
        $(this).tab('show');
    });

    inicializarMapa();
});

google.load('visualization', '1', { packages: ['corechart'] });

var ftIdCausa = '1u1_H_d5X6DaGQHsIewtDYev1dsL8HWDhjj-NTP0';
var ftLocationColumnCausa = 'geometry';
var layer = null;

function inicializarMapa() {
    window.map = new google.maps.Map(document.getElementById('map-canvas'), {
        center: new google.maps.LatLng(-38.416097, -63.616672),
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL
        },
    });

    layer = new google.maps.FusionTablesLayer({
        map: map,
        styles: [
            {
                polygonOptions: {
                    fillColor: "#00FF00",
                    fillOpacity: 0.5
                }
            }
        ]
    });

    recargarMapa();
}

function recargarMapa() {
    layer.setOptions({
        query: {
            select: ftLocationColumnCausa,
            from: ftIdCausa,
            where: " anio = '" + $('#slider-current-year').html() + "'"
        }
    });

    drawVisualizationCausas($('#slider-current-year').html());
    drawVisualizationCausasTotales();
}

function drawVisualizationCausas(anio) {
    google.visualization.drawChart({
      containerId: "grafico_uno",
      dataSourceUrl: "http://www.google.com/fusiontables/gvizdata?tq=",
      query: "SELECT 'provincia', 'Otras_ind', 'Enf_por_VIH', 'Sepsis_y_O', 'Hemorragia_post', 'Otras_directas', 'T_Placenta', 'T_Hipert', 'Aborto' " +
      "FROM 1hCiTDcyuaZaqzQ11roxhvvL8cmVdZZxoLnTXQS4 WHERE anio = '" + anio + "' and provincia = 'total'",
      chartType: "ColumnChart",
      options: {

        animation:{
            duration: 10000,
            easing: 'linear'
        }   
    }
});
}

function drawVisualizationCausasTotales(){
    google.visualization.drawChart({
      containerId: "grafico_dos",
      dataSourceUrl: "http://www.google.com/fusiontables/gvizdata?tq=",
      query: "SELECT 'provincia', 'Aborto','T_Hipert','T_Placenta','Otras_directas','Hemorragia_post', 'Sepsis_y_O', 'Enf_por_VIH', 'Otras_ind' " +
      "FROM 1hCiTDcyuaZaqzQ11roxhvvL8cmVdZZxoLnTXQS4 WHERE provincia = 'total'",
      chartType: "AreaChart",
      options: {

        isStacked:true,
        animation:{
            duration: 10000,
            easing: 'linear'
        }   
    }
});
} 