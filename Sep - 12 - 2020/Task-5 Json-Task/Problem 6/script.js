//Parsing a list of lists and convert into a JSON object:

var arr = [
    [
        ['firstName', 'Vasanth'], 
        ['lastName', 'Raja'], 
        ['age', 24], 
        ['role', 'JSWizard']
    ], 
    [
        ['firstName', 'Sri'], 
        ['lastName', 'Devi'], 
        ['age', 28], 
        ['role', 'Coder']
    ]
];
function transformEmployeeData(arr) {
    var tranformEmployeeList = [];
    for(let i of arr){
        var obj = {};
        for(let j of i){
            if(obj[j] === undefined){
                obj[j[0]] = j[1];
            }  
        }
        tranformEmployeeList.push(obj);
    }
    return tranformEmployeeList;
}
console.log(transformEmployeeData(arr));
