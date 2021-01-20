function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  const key1 = Object.keys(a);
  const key2 = Object.keys(b);

  if (key1 !== key2) {
    return false
  }


}

var john = {
  firstName: 'John',
  lastName: 'Doe'
}

console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
console.log('Test 3:', deepEqual(john, john)) // true
console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false