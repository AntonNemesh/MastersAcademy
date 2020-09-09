$(document).ready ( function(){
    var inputField = $('input');
    var outputField = $('h2');
    $('button').on('click', function() {
        outputField.text(inputField.val());
        if (inputField.val().length > 3) {
            outputField.addClass('green')
        } else {
            outputField.removeClass('green')
        }
        inputField.val('');
    });
});