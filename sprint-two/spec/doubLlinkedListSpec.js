describe('DoublyLinkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it('should have methods named "addToHead", "removeTail"', function() {
    expect(linkedList.addToHead).to.be.a('function');
    expect(linkedList.removeTail).to.be.a('function');
  });

  it('should designate a new head when new head is added', function() {
    linkedList.addToHead(4);
    expect(linkedList.head.value).to.equal(4);
  });

  it('should remove the tail from the list when removeTail is called', function() {
    linkedList.addToHead(4);
    linkedList.addToHead(5);
    linkedList.addToHead(6);
    expect(linkedList.head.value).to.equal(6);
    linkedList.removeTail();
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should return the value of the former tail when removeTail is called', function() {
    linkedList.addToHead(4);
    expect(linkedList.removeTail()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    linkedList.addToHead(4);
    linkedList.addToHead(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    linkedList.addToHead(4);
    linkedList.addToHead(5);
    linkedList.removeTail();
    expect(linkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of linkedList
});
