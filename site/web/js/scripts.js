$(document).ready(function() {
    $("#slider").slider({
        value:2010,
        min: 2006,
        max: 2010,
        step: 1,
        slide: function(event, ui) {
            $( "#slider-current" ).html(ui.value);
        },
        change: function(event, ui) {
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
});