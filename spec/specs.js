describe('isTriangle', function() {
  it("is triangle", function() {
    expect(isTriangle(4, 1, 2)).to.equal(false);
 });

 it("is triangle", function() {
   expect(isTriangle(2, 2, 2)).to.equal(true);
});
});

describe('triangleType', function(){
  it("is Equilateral", function() {
    expect(triangleType(3, 3, 3)).to.equal('equilateral triangle');
  });
  it("is Isosceles", function() {
    expect(triangleType(3, 2, 3)).to.equal('isosceles triangle');
  });
  it("is Scalene", function() {
    expect(triangleType(1, 2, 3)).to.equal('scalene triangle');
  });
});

describe('triangleSides', function() {
  it("is Scalene", function() {
    expect(triangleSides(1, 2, 3)).to.equal('scalene triangle');
  });
  it("is not triangle", function() {
    expect(triangleSides(4, 1, 2)).to.equal("These sides do not make a triangle.");
  });
});
