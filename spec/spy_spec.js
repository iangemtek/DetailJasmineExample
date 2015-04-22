// toHaveBeenCalled and toHaveBeenCalledWith
describe('Spy 1', function() {
	var obj = {
		value : 0,
		setValue : function(value) {
			this.value = value;
		}
	};	

	beforeEach(function() {
		spyOn(obj, 'setValue');
		obj.setValue(123);
	});

	it('Called', function() {
		expect(obj.setValue).toHaveBeenCalled();
	});

	it('Called With', function() {
		expect(obj.setValue).toHaveBeenCalledWith(123);
	});

	it('The Real Function is not executed.', function() {
		expect(obj.value).toBe(0);
		expect(obj.value).not.toBe(123);
	});
});

// andCallThrough()
describe('Spy 2', function() {
	var obj = {
		value : 0,
		setValue : function(value) {
			this.value = value;
		}
	};	

	beforeEach(function() {
		spyOn(obj, 'setValue').andCallThrough();
		obj.setValue(123);
	});

	it('Called', function() {
		expect(obj.setValue).toHaveBeenCalled();
	});

	it('Called With', function() {
		expect(obj.setValue).toHaveBeenCalledWith(123);
	});

	it('The Real Function is executed.', function() {
		expect(obj.value).toBe(123);
	});
});

// andReturnValue
describe('Spy 3', function() {

	it('Fake Value is returned', function() {
		var obj = {
			getValue : function() {
				return 0;
			}
		};
		spyOn(obj, 'getValue').andReturn(456);
		expect(obj.getValue()).toBe(456);
	});
});

// andCallFake
describe('Spy 4', function() {

	it('Fake Function is used', function() {
		var obj = {
			value : 0,
			setValue : function(value) {
				this.value = value;
			}
		};
		spyOn(obj, 'setValue').andCallFake(function(){
			this.value = 123;
		});
		obj.setValue(456);
		expect(obj.value).toBe(123);
	});
});