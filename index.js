// Basic math functions
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  function increment(n) {
    return ++n;
  }
  
  function decrement(n) {
    return --n;
  }
  
  // makeInt function
  function makeInt(n) {
    return parseInt(n, 10);
  }
  
  // preserveDecimal function
  function preserveDecimal(n) {
    return parseFloat(n);
  }
  
  // Mocha tests
  describe('Basic math functions', function() {
    it('add() is a valid function', function() {
      expect(add).to.be.a('function');
    });
  
    it('subtract() is a valid function', function() {
      expect(subtract).to.be.a('function');
    });
  
    it('multiply() is a valid function', function() {
      expect(multiply).to.be.a('function');
    });
  
    it('divide() is a valid function', function() {
      expect(divide).to.be.a('function');
    });
  
    it('add(a, b) adds two numbers and returns the result', function() {
      expect(add(2, 3)).to.equal(5);
    });
  
    it('subtract(a, b) subtracts b from a and returns the result', function() {
      expect(subtract(5, 3)).to.equal(2);
    });
  
    it('multiply(a, b) multiplies two numbers and returns the result', function() {
      expect(multiply(2, 3)).to.equal(6);
    });
  
    it('divide(a, b) divides a by b and returns the result', function() {
      expect(divide(6, 3)).to.equal(2);
    });
  
    it('increment(n) increments n and returns the result', function() {
      expect(increment(5)).to.equal(6);
    });
  
    it('decrement(n) decrements n and returns the result', function() {
      expect(decrement(5)).to.equal(4);
    });
  });
  
  describe('makeInt(n)', function() {
    it('parses n as an integer and returns the parsed integer', function() {
      expect(makeInt('5')).to.equal(5);
    });
  
    it('assumes base 10', function() {
      expect(makeInt('0x2328')).to.equal(0);
    });
  
    it('returns NaN as appropriate', function() {
      expect(isNaN(makeInt('sldkjflksjf'))).to.equal(true);
    });
  });
  
  describe('preserveDecimal(n)', function() {
    it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
      expect(preserveDecimal('2.222')).to.equal(2.222);
    });
  
    it('returns NaN as appropriate', function() {
      expect(isNaN(preserveDecimal('sldkjflksjf'))).to.equal(true);
    });
  });
  
  // Run Mocha tests
  mocha.run();
  