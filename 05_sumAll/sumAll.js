const sumAll = function(n, m) {
    if (n < 0 || m < 0 || typeof(n) != 'number' || typeof(m) != 'number') return "ERROR"; 
    
    let sum = 0, larger_num = m, smaller_num = n;
    if (m < n){
        n = larger_num;
        m = smaller_num; 
    }
    for (let i = n; i <= m; ++i ){ 
        sum += i; 
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
