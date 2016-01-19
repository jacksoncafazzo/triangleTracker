var triangleSides = function(sideA, sideB, sideC) {
  if (isTriangle(sideA, sideB, sideC)) {
    return triangleType(sideA, sideB, sideC)
  } else {
    return "These sides do not make a triangle."
  }
};

var isTriangle = function(sideA, sideB, sideC){
  return sideA <= (sideB + sideC) && sideB <= (sideC + sideA) && sideC <=(sideA + sideB)
}

var triangleType = function(sideA, sideB, sideC){
  if (sideA === sideB && sideB === sideC) {
    return "equilateral triangle";
  } else if (sideA === sideB || sideA === sideC || sideC === sideB) {
    return "isosceles triangle";
  } else {
    return "scalene triangle";
  }
}

$(document).ready(function() {
  $("form#triangleSides").submit(function(event) {
    var sideA = parseInt($("input#sideA").val());
    var sideB = parseInt($("input#sideB").val());
    var sideC = parseInt($("input#sideC").val());
    var result = triangleSides(sideA, sideB, sideC);

    $(".result").text(result);
    $("#result").show();

    event.preventDefault();
  });
});
