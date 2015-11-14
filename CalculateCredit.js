var calculateCredit = function (arr,response) {

    if (arguments.length === 0 || !arr) {

        //response.push("No input is provided");
        throw "No input is provided";
    } else if (!Array.isArray(arr)) {
        response.push("Input is not of type Array");
        throw "Input is not of type Array";
    } else if (arr.length === 0) {
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
    if (validator.validateSingleOccurence(str,response)) {
        while (j >= 0) {
            if (j - 1 < 0) {
                if (isNaN(arr[j])) {
                    ans += RomanTable[arr[j]].value;
                    j--;
                } else {
                    ans += arr[j];
                    j--;
                }

            } else if (isNaN(arr[j]) && isNaN(arr[j - 1])) {
                if (RomanTable[arr[j - 1]].value < RomanTable[arr[j]].value) {
                    if (validator.validateSubtraction(arr[j - 1], arr[j])) {
                        ans += RomanTable[arr[j]].value - RomanTable[arr[j - 1]].value;
                        j = j - 2;
                    } else {
                        ans += arr[j];
                        j--;
                    }

                } else {
                    ans += RomanTable[arr[j]].value;
                    j--;
                }

            } else if (!isNaN(arr[j]) && isNaN(arr[j - 1])) {
                if (arr[j] > RomanTable[arr[j - 1]].value) {
                    ans = ans + arr[j] - RomanTable[arr[j - 1]].value;
                    j = j - 2;
                } else {
                    ans += arr[j];
                    j--;
                }
            } else if (isNaN(arr[j]) && !isNaN(arr[j - 1])) {
                if (RomanTable[arr[j]].value > arr[j - 1]) {
                    ans += RomanTable[arr[j]].value - arr[j - 1];
                    j = j - 2;
                } else {
                    ans += RomanTable[arr[j]].value;
                }
            } else if (!isNaN(arr[j]) && !isNaN(arr[j - 1])) {
                if (arr[j] > arr[j - 1]) {
                    ans += arr[j] - arr[j - 1];
                    j = j - 2;
                } else {
                    ans += arr[j];
                    j--;
                }
            }




        }
    }
    return ans;
};