debugger
  var triangleSides = function(sideA, sideB, sideC) {
  if (sideA <= (sideB + sideC) && sideB <= (sideC + sideA) && sideC <=(sideA +sideB)) {
    if (sideA === sideB && sideB===sideC) {
      return "equilateral";
    } else if (sideA===sideB || sideA===sideC || sideC===sideB) {
      return "isosceles";
    } else {
      return "scalene";
    }
  } else {
    return "These sides do not make a triangle."
  }
};

$(document).ready(function() {
  $("form#triangleSides").submit(function(event) {
    var sideA = parseInt($("input#sideA").val());
    var sideB = parseInt($("input#sideB").val());
    var sideC = parseInt($("input#sideC").val());
    var result = triangleSides(sideA, sideB, sideC);

    sideA = parseInt($("input#sideA").val());
    sideB = parseInt($("input#sideB").val());
    sideC = parseInt($("input#sideC").val());

    $(".result").append(result);

    event.preventDefault();
  });
});
