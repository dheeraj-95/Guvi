//Parsing two JSON objects and Compare:

var expected = {foo: 6, bar: 5};
var actual = {foo: 5, bar: 6}
function assertObjectsEqual(actual, expected, testName){
    var result = JSON.stringify(actual) == JSON.stringify(expected);
    return (result)? 'Passed': `FAILED [${testName}] Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(actual)}`;    
}

console.log(assertObjectsEqual(actual, expected, 'my test'));