describe('triangleSides', function() {
  it("is Equilateral", function() {
    expect(triangleSides(3, 3, 3)).to.equal(true);
  });
  it("is Isosceles", function() {
    expect(triangleSides(3, 2, 3)).to.equal(true);
  });
  it("is Scalene", function() {
    expect(triangleSides(1, 2, 3)).to.equal(true);
  });
  it("is not a triangle", function() {
    expect(triangleSides(4, 1, 2)).to.equal(true);
  });
});
