$(document).ready(function(){

var choices = ["#f0", "#f1","#f2","#f3","#f4","#f5","#f6","#f7","#f8"]

  $(".box").click(function(){

    if($(this).text() === "X") {
      alert("Select a different square")
    } else {

        $(this).text("X");
    }




var checkWin = function() {
    var wins = [
    [0,1,2], [3,4,5], [6,7,8],
	  [0,3,6], [1,4,7], [2,5,8],
	  [0,4,8], [2,4,6]
    ]
}




    // alert($(this).text());





//     $(".box").click(function(){
//       $(this).text("O").show;
// });
//   if
//   ($(".box").click(function(){
//     $(this).text("X").show === "#f0 && #f4 && #f8"){
//         alert("Winner!");
//     }
//
//
// });


  });
});
