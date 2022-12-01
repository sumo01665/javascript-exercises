const reverseString = function(str) {
    let reverse_string, smaller_string = str; 
    if (str == '') return '';
    
    for (let i = 0; i < str.length; ++i){ 
        reverse_string += smaller_string.slice(-1); 
        smaller_string = str.slice(0, str.length - 1);  
        str = smaller_string; 
    } 
    console.log(smaller_string);
    // console.log( reverse_string);
};


reverseString("Hello"); 



// Do not edit below this line
module.exports = reverseString;
