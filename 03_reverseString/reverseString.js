const reverseString = function(str) {
    let reverse_string = "", smaller_string = str; 
    if (str == '') return '';
    
    for (let i = str.length - 1; i >= 0; --i){ 
        reverse_string += str[i]; 
        // smaller_string = str.slice(0, str.length - 1);  
        // str = smaller_string; 
    } 
    // console.log(reverse_string);
    // console.log( reverse_string);
    return reverse_string; 
};


reverseString(""); 



// Do not edit below this line
module.exports = reverseString;
