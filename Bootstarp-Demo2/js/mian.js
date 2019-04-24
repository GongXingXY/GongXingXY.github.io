$(function() {

    $('#casebtn').click(function() {
        $('#case').slideToggle('slow');
        $('#casebtn').toggleClass('btn-success')
        if(this.innerText == 'Close') {
            this.innerText = 'Open';
        } else {
            this.innerText = 'Close';
        }
    });

    $('#picture').click( function() {
        $('#carousel-example-generic').slideToggle(800);
        $('#picture').toggleClass('btn-success')
        if(this.innerText == 'Close') {
            this.innerText = 'Open';
        } else {
            this.innerText = 'Close';
        }
    });


  




});