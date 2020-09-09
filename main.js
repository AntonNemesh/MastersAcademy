$(document).ready ( function(){

    var inputField = $('input');
    var outputField = $('h2');
    var regex = new RegExp('[^a-zA-Z0-9]+');

    $('button').on('click', function() {

        outputField.text(inputField.val());

        if (inputField.val().length > 3) { outputField.addClass('green') }
        else { outputField.removeClass('green') }
        if (regex.test(inputField.val())) { outputField.addClass('red') }
        else { outputField.removeClass('red') }

        inputField.val('');

    });

});