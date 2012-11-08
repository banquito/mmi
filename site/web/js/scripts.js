$(document).ready(function() {
    $("#slider").slider({
        value:2006,
        min: 2006,
        max: 2010,
        step: 1,
        slide: function(event, ui) {
            $( "#slider-current" ).html(ui.value);
        },
        change: function(event, ui) {
        }
    });
});