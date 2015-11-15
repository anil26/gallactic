var calculateCredit = function (arr,response) {
    debugger;
    if (arguments.length === 0 || !arr ) {
    throw "No input is provided";
    }  
    if (!Array.isArray(arr)) {
        response.push("Input is not of type Array");
        throw "Input is not of type Array";
    }  
    if(arr.length === 0) {
       debugger;
        response.push("Input array is blank,Wrong set statement");
        throw "Input array is blank,Wrong set statement";
    }
    var str = arr.join("");
    if (validator.validateConsecutiveRepetition(str)) {
        
        response.push("[I,C,X,M] repeats more than 3 times consecutively");
        throw "[I,C,X,M] repeats more than 3 times consecutively";

    }

    if (validator.validateSingleOccurence(str,response)) {
        return calculateCreditHelper(arr,response);
    }
};
var calculateCreditHelper = function (arr,response) {
    var j = arr.length - 1;
    var ans = 0;
    var str = arr.join("");
    if(!(validator.validateSingleOccurence(str,response))){
        response.push("Invalid statement");
        return;
    }
    while (j >= 0) {
            debugger;
            if (j - 1 < 0) {
                
                    ans += RomanTable[arr[j]].value;
                    
                    return ans;

            }  
             
            if(RomanTable[arr[j - 1]].value >= RomanTable[arr[j]].value){
                    ans+=RomanTable[arr[j]].value;
                    j--;
                    continue;
            }

            if(!validator.validateSubtraction(arr[j-1],arr[j]))
            return;
            ans += RomanTable[arr[j]].value - RomanTable[arr[j - 1]].value;
                j = j - 2;
                
            
           
                
                        
        }
        return ans;
};