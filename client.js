$(document).ready(function() {
    console.log('working');
    var colorCount = 0;
    var redCount = 0;
    var yellowCount = 0;
    var blueCount = 0;
    var greenCount = 0;

    var colorBox = [red, yellow, green, blue];

    $('.color-button').on('click', $(this).data('color'), function() {
        console.log('The ' + $(this).data('color') + ' color was clicked.');

        if ($(this).data('color')=='red') {
            $('body').append('<div class="color-cube red"></div>');
            redCount++;
            console.log(redCount);
            $('#red').html(redCount);
        } else if ($(this).data('color')=='yellow') {
            $('body').append('<div class="color-cube yellow"></div>');
            yellowCount++;
            console.log(yellowCount);
            $('#yellow').html(yellowCount);
        } else if ($(this).data('color')=='blue') {
            $('body').append('<div class="color-cube blue"></div>');
            blueCount++;
            console.log(blueCount);
            $('#blue').html(blueCount);
        } else if ($(this).data('color')=='green') {
            $('body').append('<div class="color-cube green"></div>');
            greenCount++;
            console.log(greenCount);
            $('#green').html(greenCount);
        }

    }); // end click
}); // end of document ready
