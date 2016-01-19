describe('triangleSides', function() {
  it("is Equilateral", function() {
    expect(triangleSides(3, 3, 3)).to.equal('equilateral');
  });
  it("is Isosceles", function() {
    expect(triangleSides(3, 2, 3)).to.equal('isosceles');
  });
  it("is Scalene", function() {
    expect(triangleSides(1, 2, 3)).to.equal('scalene');
  });
  it("is not triangle", function() {
    expect(triangleSides(4, 1, 2)).to.equal('These sides do not make a triangle.');
  });
});
