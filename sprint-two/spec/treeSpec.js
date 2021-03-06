describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree(100);
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should start with parent value null', function() {
    expect(tree.parent).to.equal(null);
  });

  it('should add a parent value to a new child', function() {
    tree.addChild(5);
    expect(tree.children[0].parent.value).to.equal(100);
  });

  it('should add a child to a child with proper parent values', function() {
    tree.addChild(5);
    tree.children[0].addChild(9);
    expect(tree.children[0].children[0].parent.value).to.equal(5);
  });

  it('should remove a parent from a child and remove that child from the parent', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    expect(tree.removeFromParent(5).parent).to.equal(null);
    expect(tree.removeFromParent(6).value).to.equal(6);
    // tree.removeFromParent(5);
    expect(tree.contains(5)).to.equal(false);
    // expect(tree.children.length).to.equal(1);

  });

  it('should use a traverse method to execute a callback on every value in tree', function() {
    tree.addChild(5);
    tree.addChild(45);
    tree.children[0].addChild(25);
    tree.traverse(function(node) {
      node.value = node.value / 5;
    });
    expect(tree.contains(20)).to.equal(true);
    expect(tree.contains(1)).to.equal(true);
    expect(tree.contains(9)).to.equal(true);
    expect(tree.contains(5)).to.equal(true);
    expect(tree.contains(45)).to.equal(false);
    expect(tree.contains(100)).to.equal(false);
    expect(tree.contains(25)).to.equal(false);

  });

});
