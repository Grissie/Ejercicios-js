function frequency(string) {
    var freq = {};
    
    for(var i = 0; i < string.length; i++){
        freq[string[i]] = (freq[string[i]] || 0) + 1;
    }

    var keys = Object.keys(freq);
    var array = [];

    for(var i = 0; i < keys.length; i++){
        array.push([ keys[i], freq[keys[i]] ]);
    }
    
    var orderArray = array.sort();
    var orderFreq = {};

    for(var i =0; i < orderArray.length; i++){
        orderFreq[orderArray[i][0]] = orderArray[i][1];
    }
    return orderFreq;

}
   
   console.log('Test 1:', frequency('cccbbbaaa'))
   // {a: 3, b: 3, c: 3}
   console.log('Test 2:', frequency('www.bedu.org'))
   // {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
   console.log('Test 3:', frequency('john.doe@domain.com'))
   // {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}