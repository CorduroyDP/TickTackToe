$(document).ready(function(){

  //welcome screen to collect names
  $("#submitBtn").click(function(){
    var player1 = $("#player1").val();
    $("#player1").val("");
    var player2 = $("#player2").val();
    $("#player2").val("");
    $("#p1Id").append(player1);
    $("#p2Id").append(player2);
    $("#welcome").hide();
    $("#playerDisplay").show();


  })
  var markerWins = (function(id0, id1, id2, marker) {
    if ($(id0).html() === marker && $(id1).html() === marker && $(id2).html() === marker)
    {
      return true;
    }
    else
    {
      return false;
    }
  });

  var currentPlayer = ' ';
  var currentPlayerName= player1;

  //var ' ' = playerOne
  var markerColor = "#FF99CC";
  var clickCounter = 0;


  $(".box").click(function(){

        $(this).text(currentPlayer).unbind();
        $(this).animate({backgroundColor: markerColor}, 1000);

//winning combos
    if (markerWins("#f0", "#f1", "#f2", currentPlayer) ||
        markerWins("#f3", "#f4", "#f5", currentPlayer) ||
        markerWins("#f6", "#f7", "#f8", currentPlayer) ||
        markerWins("#f0", "#f3", "#f6", currentPlayer) ||
        markerWins("#f1", "#f4", "#f7", currentPlayer) ||
        markerWins("#f2", "#f5", "#f8", currentPlayer) ||
        markerWins("#f0", "#f4", "#f8", currentPlayer) ||
        markerWins("#f2", "#f4", "#f6", currentPlayer))
    {
        setTimeout(function(){confirm("You win! Play again?"); window.location.reload();} , 1100);
    }

    clickCounter++
    if  (clickCounter === 10)
   {
       setTimeout(function(){confirm("Cat's Game! Play Again.");window.location.reload();},1000);
   }

//player colors
   if (currentPlayer === ' ')
   {
         currentPlayer = '  ';
         markerColor = "#663300";
   }
   else
   {
         currentPlayer = ' ';
         markerColor = "#FF99CC";
   }
});
});
