// This function changes the class value of table cells in accordance with the pattern of a 7 segment display. Refer hints 
function illuminate(num)
    {
        // REPLACE THIS CODE WITH YOUR illuminate() METHOD
        
        num = Number(num);
        
        var pattern = ["yyyyyyn", 
                       "nyynnnn", 
                       "yynyyny", 
                       "yyyynny", 
                       "nyynnyy", 
                       "ynyynyy", 
                       "ynyyyyy", 
                       "yyynnnn", 
                       "yyyyyyy", 
                       "yyyynyy"];
        
        return pattern[num];
    }

// This function extracts digits from an input text and illuminates based on the digits based
function getDigits(text)
    {
        res = [];
        
        for(var i = 0; i < text.length; i++){
            var character = text[i];
            
            if(character >= '0' && character <= '9')
                res.push(illuminate(character));
        }
        
        return res;
    }