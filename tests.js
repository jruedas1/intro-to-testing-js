// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


describe('sayHello', function(){
   it('should be a defined function', function(){
       expect(typeof sayHello).toBe('function');
   });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return "Hello, Jane" when passed "Jane"', function(){
        expect(sayHello("Jane")).toBe("Hello, Jane");
    });
    it('should return "Hello, World!" when passed true', function(){
        expect(sayHello(true)).toBe("Hello, World!");
    });
});

describe('isFive', function(){
    it('should be a defined function', function(){
       expect(typeof isFive).toBe('function');
    });
    it('should return a boolean', function(){
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true when passed five', function(){
       expect(isFive(5)).toBe(true);
    });
    it('should return false when passed anything other than five', function(){
       expect(isFive(6)).toBe(false);
    });
    it('should return false when passed a numeric string', function(){
        expect(isFive("5")).toBe(false);
    })
});

describe('experiment', function(){
    it('should be a defined function', function(){
        expect(typeof experiment).toBe('function');
    });
});

describe('isEven', function(){
   it('should be a defined function', function(){
      expect(typeof isEven).toBe('function');
   });
   it('should return a boolean', function(){
      expect(typeof isEven()).toBe('boolean');
   });
   it('should return true when passed an even number', function(){
      expect(isEven(2)).toBe(true);
   });
   it('should return true when passed -4', function(){
       expect(isEven(-4)).toBe(true);
   });
   it('should return false when passed 3', function(){
       expect(isEven(3)).toBe(false);
   });
   it('should return false when passed a string', function(){
       expect(isEven("banana")).toBe(false);
   });
   it('should return true when passed 8', function(){
       expect(isEven(8)).toBe(true);
   });
   it('should return false when passed Infinity', function(){
       expect(isEven(Infinity)).toBe(false);
   });
   it('should return false when passed a boolean', function(){
       expect(isEven(true)).toBe(false);
   });
   it('should return false when passed nothing', function(){
       expect(isEven()).toBe(false);
   });
});

describe('isVowel', function(){
    it('should be a defined function', function(){
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean', function(){
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return false if passed undefined', function(){
        expect(isVowel()).toBe(false);
    });
    it('should return true if passed the letter a', function(){
       expect(isVowel('a')).toBe(true);
    });
    it('should return true if passed the letter A', function(){
       expect(isVowel('A')).toBe(true);
    });
    it('should return false if passed a boolean', function(){
       expect(isVowel(true)).toBe(false);
    });
    it('should return false if passed any letter other than a, e, i, o, or u', function(){
       expect(isVowel('y')).toBe(false);
    });
    it('should return false if passed more than one letter', function(){
       expect(isVowel('banana')).toBe(false);
    });
    it('should return false if passed anything that is not a string', function(){
       expect(isVowel(4)).toBe(false);
    });
});