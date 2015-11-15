var validator={

    regexForQuestions : /(\?)$/i,
    regexForSplitWithSpaces : /\s/gi,
    regexForNumber : /\s+\d[0-9]*\s+(credit){1}s?/gi,
    regexForRomanSymbol : /\s{1}I|V|X|L|C|D\s*/,
    regexIs : /\s+is\s*/ig,
    validateSubtraction : function (elemFirst, elemSecond) {
        if (!elemFirst || !elemSecond) {
        return false;
        }
         return (RomanTable[elemFirst]!==undefined && RomanTable[elemFirst].canBeSubtractedFrom.indexOf(elemSecond)!==-1);

    },
    validateConsecutiveRepetition : function (str) {
        var regex1 = /I{4,}|C{4,}|X{4,}|M{4,}/g;
        return (typeof(str)!=="string" || str.search(regex1)!==-1 || arguments.length===0); 
        },
    isQuestion : function (str) {
        return (str.search(validator.regexForQuestions) !== -1);
        
    },
    validateSingleOccurence : function (str,response) {
        var forD = (str.match(/D/g) || []).length;
        var forL = (str.match(/L/g) || []).length;
        var forV = (str.match(/V/g) || []).length;
        if (forD>1 || forV>1 || forL>1) {
        response.push("Invalid string as [D,L,V] repeats");
        return false;
        }
        return true;

    }
   
};


