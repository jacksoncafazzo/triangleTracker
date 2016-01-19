debugger
var triangleSides = function(sideA, sideB, sideC) {
  return (sideA === sideB && sideB === sideC) || (sideA === sideB && sideB !== sideC) || (sideA === sideC && sideB !== sideC) || (sideA !== sideB && sideB !== sideC);
};

//
// $(document).ready(function() {
//   $("form#triangleSides").submit(function(event) {
//     var triangle = ([sideA, sideB, sideC])
//     var sideA = parseInt($("input#sideA").val());
//     var sideB = parseInt($("input#sideB").val());
//     var sideC = parseInt($("input#sideC").val());
//     event.preventDefault();
//   });
// });
