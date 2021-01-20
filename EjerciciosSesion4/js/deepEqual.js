console.log('Primer ejercicio');
console.log('*****************************************');
function deepEqual(a, b) {
    if(a === b){
        return true;
    }

    var keys1 = Object.keys(a);
    var keys2 = Object.keys(b);

    var values1 = Object.values(a);
    var values2 = Object.values(b);

     if(keys1.length == keys2.length ){
        for(var i = 0; i < keys1.length; i++){
            if(typeof(a[keys1[i]]) == 'object' && typeof(b[keys2[i]]) == 'object'){
                deepEqual(a[keys1[i]], b[keys2[i]]);
            }
            else if(keys1[i] !== keys2[i] && values1[i] !== values2[i]){
                return false;
            }
        }
        return true;
    }else return false; 

  }

  
  var john = {
    firstName: 'John',
    lastName: 'Doe',
  }

  var john2 = {
    firstName: 'John',
    lastName: 'Doe',
    address: {street: 'qweeqw', number: 4}
  }
  


  console.log('Test 1:', deepEqual(1, 1)) // true
  console.log('Test 2:', deepEqual(1, '1')) // false
  console.log('Test 3:', deepEqual(john, john)) // true
  console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
  console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false 
  console.log('Test 6:', deepEqual(john, john2))  