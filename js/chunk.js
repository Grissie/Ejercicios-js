console.log('Segundo ejercicio');
console.log('*****************************************');
function chunk(array, size) {
    var arrayTemp = new Array();
    let k = 0;
    let longArray = array.length / size;
    for (let i = 0; i < longArray; i++) {
        var temp = [];
        for (let j = 0; j < size; j++) {
            temp[j] = array[k];
            k++;
        }
        if (i < k) {
            arrayTemp.push(temp);
        }
    }
    console.log(arrayTemp);
};
var data = [1, 2, 3, 4, 5, 6, 7, 8]

console.log('Test 1:', chunk(data, 1))
console.log('Test 2:', chunk(data, 2))
console.log('Test 3:', chunk(data, 3))