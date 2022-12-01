const repeatString = function(str, iter) {
    let ini_str = str;
    if (iter == 0) str = ''; 
    else if (iter < 0) str = 'ERROR';
    else{
        for (let count = 0; count < iter - 1; ++count){
            str += ini_str; 
        }
    }
    console.log(str); 
    return str; 
};

repeatString("hey", 3); 

// Do not edit below this line
module.exports = repeatString;
