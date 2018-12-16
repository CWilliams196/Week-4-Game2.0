$(document).ready(function() {
   
//   function randomNumber() {
    var randomNum = Math.floor(Math.random() * 101 + 19);
    $('#ranNum').html('Random Number: ' + randomNum);
//   };
    var crystals = $('#crystals');
    
    for (var i = 0; i < 4; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass('crystal-image');
        imageCrystal.attr("src", "/Projects/Week-4-Game2.0/assets/images/crystal.jpg");
        imageCrystal.attr('data-crystalvalue', Math.floor(Math.random() * 12 + 1));
        crystals.append(imageCrystal);
    }
    
    var total = 0;
    var wins = 0;
    var losses = 0;
    
//    randomNumber();
    
    crystals.on('click', ".crystal-image", function() {
         var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
        total += crystalValue;
        $('#total').html('Your total score is: ' + total);
        $('#crystalValue').html(crystalValue)
        
        if (total == randomNum) {
            wins++;
            $('#wins').html('Wins: ' + wins);
            total = 0;
        } else if (total > randomNum) {
            losses++;
            $('#losses').html('Losses: ' + losses);
            total = 0;
         
        };
    });
    
    
});