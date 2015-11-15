var result = ["This is wrong set statement",
    "pish tegj glob glob is 42 Credits",
    "glob glob Silver is 34 Credits",
    "glob prok Gold is 57800 Credits",
    "glob prok Iron is 782 Credits",
    "Dont know what are you talking about?"];

// Testing sample input provided with the problem statement

QUnit.test("Testing sample input provided with the problem", function (assert) {
    //response=[];
    
    var response = interGalacticTransaction.init(input);
    console.log(response);
    assert.deepEqual(response, result, "The output matches the expected result");

});

//I" can be subtracted from "V" and "X" only.
// "X" can be subtracted from "L" and "C" only. 
// "C" can be subtracted from "D" and "M" only.
//  "V", "L", and "D" can never be subtracted.
//Testing validateSubtractionAPI
QUnit.test("Testing subtraction  such that second argument is smaller than first ", function (assert) {

    
    assert.equal(validator.validateSubtraction("V", "I"), false, "Invalid subtraction [I-V]");
});
QUnit.test("Testing subtraction for less arguments ", function (assert) {

    assert.equal(validator.validateSubtraction("I"), false, "Invalid subtraction [less number of arguments]");
});

QUnit.test("Testing subtraction for V,L,D", function (assert) {

    assert.equal(validator.validateSubtraction("V", "D"), false, "(V,L,D) cannot be deleted");
});

QUnit.test("Testing subtraction for L", function (assert) {

    assert.equal(validator.validateSubtraction("L", "C"), false, "L cannot be deleted");
});
QUnit.test("Testing subtraction for correct parameters", function (assert) {

    assert.equal(validator.validateSubtraction("C", "M"), true, "subtraction done successfully");
});
QUnit.test("Testing invalid parameters for subtraction", function (assert) {

    assert.equal(validator.validateSubtraction("l", "2"), false, "Invalid argument,failing subtraction");
});
QUnit.test("Testing validateSubtractionAPI for null ", function (assert) {

    assert.equal(validator.validateSubtraction(), false, "No arguments,failing the subtraction");
});



//The symbols "I", "X", "C", and "M" can be repeated three times in succession, but no more. (They may appear four times if the third and fourth are separated by a smaller value, such as XXXIX.)
//"D", "L", and "V" can never be repeated.
//Testing validateConsecutiveRepetitionAPI function.
QUnit.test("Testing validateConsecutiveRepetitionAPI for null", function (assert) {

    assert.equal(validator.validateConsecutiveRepetition(), false, "No arguments,No consecutive repetition of I,X,C,M");
});
QUnit.test("Testing validateConsecutiveRepetitionAPI for valid strings", function (assert) {

    assert.equal(validator.validateConsecutiveRepetition("IIVHG"), false, "Valid string,No consecutive repetition of I,X,C,M");
});
QUnit.test("Testing validateConsecutiveRepetitionAPI for invalid strings", function (assert) {

    assert.equal(validator.validateConsecutiveRepetition("IICCCCC"), true, "Invalid string,consecutive repetition of I,X,C,M");
});

QUnit.test("Testing validatecalculateCreditAPI for values when letters are in descending order of their values", function (assert) {
    var response=[];
    
    assert.equal(calculateCredit(["M", "C", "M", "X", "L", "I", "V"],response), 1944, "MCMXLIV evaluates to correct value");
});


//Testing calculate creditcalculator.
QUnit.test("Testing validatecalculateCreditAPI for blank or no arguments", function (assert) {
   var response=[];
    try{
     calculateCredit();
        
    }catch(err){
        assert.equal(err,"No input is provided","No argument is provided");
    }
});

QUnit.test("Testing validatecalculateCreditAPI for values when letters are in descending order of their values", function (assert) {
    var response=[];
    
    assert.equal(calculateCredit(["M", "C", "M", "X", "L", "I", "V"],response), 1944, "MCMXLIV evaluates to correct value");
});
QUnit.test("Testing validatecalculateCreditAPI for values when Roman letters unordered", function (assert) {
   var response=[];
    assert.equal(calculateCredit(["M", "C", "M", "I", "I", "I"],response), 1903, "MCMIII evaluates to correct value");
});
QUnit.test("Testing validatecalculateCreditAPI for values when Roman letters ordered in descending order", function (assert) {
    var response=[];
    assert.equal(calculateCredit(["M", "M","V","I"],response), 2006, "MMVI evaluates to correct value");
});
QUnit.test("Testing validatecalculateCreditAPI for blank array", function (assert) {
    var response=[];
    try{
        calculateCredit([],response);
    }catch(err){
        assert.equal(err, "Input array is blank,Wrong set statement", "Input array is blank,Wrong set statement");        
    }

    
});
QUnit.test("Testing validatecalculateCreditAPI for non-array type is sent", function (assert) {
    var response=[];
    try{
    calculateCredit({},response);
    }catch(err){
       assert.equal(err, "Input is not of type Array", "Non-array type is passed"); 
    }

    

});
//"243923fsdlkclsd edksp 3201-309"



QUnit.test("Testing processInput via init for wrong statements", function (assert) {
    //response=[];
    assert.equal(interGalacticTransaction.init(["243923fsdlkclsd edksp 3201-309"]), "This is wrong set statement","Wrong statement call to processInput");
    debugger;
});
QUnit.test("Testing processInput via init for wrong statements", function (assert) {
    //response=[];
    assert.equal(interGalacticTransaction.init(["..,,,,....."]), "This is wrong set statement","Wrong statement call to processInput");

});

