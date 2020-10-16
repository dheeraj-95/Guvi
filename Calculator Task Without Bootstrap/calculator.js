let container = createClass('div','my-container');
container.classList.add("my-container-sm");
container.classList.add("my-container-md");
container.classList.add("my-container-lg");
container.classList.add("my-container-lg");
container.classList.add("my-container-xl");

let main = createClass("main");
let parentDiv = createClass('div','parent');
let heading = createClass('h1');
heading.innerText = 'Simple Calculator Application';

function create_table(){
    let table = createClass('table');
    // table.classList.add('w-auto')
    let tbody = createClass('tbody');

    let row1 = createClass('tr');

    let row1col1 = createClass('td');
    row1col1.setAttribute('colspan','4')
    
    let result_field = createClass('input','text-right');
    result_field.setAttribute('type', 'text');
    result_field.setAttribute('id', 'result');
    result_field.setAttribute('readonly', '');
    row1col1.appendChild(result_field);
    row1.append(row1col1);

    // -----------------------row 1 complete----------------------------- //
    
    let row2 = createClass('tr');

    let row2Col1 = createClass('td');
    let btn7 = buttonFields('input','val_7','7');
    row2Col1.append(btn7);
    // row2.append(row2Col1);

    let row2Col2 = createClass('td');
    let btn8 = buttonFields('input','val_8','8');
    row2Col2.append(btn8);
    // row2.append(row2Col2);

    let row2Col3 = createClass('td');
    let btn9 = buttonFields('input','val_9','9');
    row2Col3.append(btn9);

    let row2Col4 = createClass('td');
    let btn_Mul = buttonFields('input','mul','*');
    row2Col4.appendChild(btn_Mul);

    row2.append(row2Col1,row2Col2,row2Col3,row2Col4);

    // -----------------------row 2 complete----------------------------- //

    let row3 = createClass('tr');

    let row3Col1 = createClass('td');
    let btn4 = buttonFields('input','val_4','4');
    row3Col1.append(btn4);
    // row3.append(row3Col1);

    let row3Col2 = createClass('td');
    let btn5 = buttonFields('input','val_5','5');
    row3Col2.append(btn5);
    // row3.append(row3Col2);

    let row3Col3 = createClass('td');
    let btn6 = buttonFields('input','val_6','6');
    row3Col3.append(btn6);

    let row3Col4 = createClass('td');
    let btnAdd = buttonFields('input','add','+');
    row3Col4.append(btnAdd);

    // let row2Col4 = createClass('td');
    // let btnAdd = buttonFields('input','add','+');
    // row2Col4.append(btnAdd);
    row3.append(row3Col1,row3Col2,row3Col3,row3Col4);

    // -----------------------row 3 complete----------------------------- //

    let row4 = createClass('tr');

    let row4Col1 = createClass('td');
    let btn1 = buttonFields('input','val_1','1');
    row4Col1.append(btn1);
    // row3.append(row3Col1);

    let row4Col2 = createClass('td');
    let btn2 = buttonFields('input','val_2','2');
    row4Col2.append(btn2);
    // row3.append(row3Col2);

    let row4Col3 = createClass('td');
    let btn3 = buttonFields('input','val_3','3');
    row4Col3.append(btn3);

    let row4Col4 = createClass('td');
    // let btn_Divide = buttonFields('input','divide','/');
    let btn_Sub = buttonFields('input','sub','-');

    row4Col4.append(btn_Sub);

    row4.append(row4Col1,row4Col2,row4Col3,row4Col4);

    // -----------------------row 4 complete----------------------------- //

    let row5 = createClass('tr');

    let row5Col1 = createClass('td');
    let btnClear = buttonFields('input','clear','C');
    row5Col1.append(btnClear);
    // row3.append(row3Col1);

    let row5Col2 = createClass('td');
    let btn0 = buttonFields('input','val_0','0');
    row5Col2.append(btn0);
    // row3.append(row3Col2);

    let row5Col3 = createClass('td');
    let btnDot = buttonFields('input','dot','.');
    row5Col3.append(btnDot);

    let row5Col4 = createClass('td');
    // let btn_Equal = buttonFields('input','equal','=');
    let btn_Divide = buttonFields('input','divide','/');
    row5Col4.append(btn_Divide);

    row5.append(row5Col1,row5Col2,row5Col3,row5Col4);

    // -----------------------row 5 complete----------------------------- //
    let row6 = createClass("tr")
    // let tcol1  = createClass("td");

    let row6Col0 = createClass('td');
    let clearAll = buttonFields('input','allClear','AC');
    row6Col0.append(clearAll);

    let row6Col1 = createClass('td');
    let clear_single_element = buttonFields('input','backspace','\u2190');
    row6Col1.append(clear_single_element);

    let row6Col2 = createClass('td');
    let btn_modulus = buttonFields('input','modulus','%');
    row6Col2.append(btn_modulus);

    let row6Col3 = createClass('td');
    let btn_Equal = buttonFields('input','equal','=');
    row6Col3.append(btn_Equal);
    

    row6.append(row6Col0,row6Col1,row6Col2,row6Col3);

    // let trow2 = createClass("tr")
    // let tcol2  = createClass("td");
    // trow2.append(tcol2);

    // let trow3 = createClass("tr")
    // let tcol3  = createClass("td");
    // trow3.append(tcol3);

    tbody.append(row1,row2,row3,row4,row5,row6);
    table.appendChild(tbody);
    // table.classList.add("table");
    // table.classList.add("table-borderless");
    

    let divForTable = createClass("div",'child');
    // divForTable.classList.add('w-auto');
    // let col = createClass("div","col");
    // row.append(col)
    // divForTable.classList.add("table-responsive-sm")
    // divForTable.classList.add("table-responsive-md")
    // divForTable.classList.add("table-responsive-lg")
    // divForTable.classList.add("table-responsive-x1")
    // col.append(table);
    
    divForTable.append(heading,table);
    parentDiv.append(divForTable);
}
container.append(parentDiv);
// parentDiv.appendChild(heading);
main.append(container);
document.body.appendChild(main);
create_table();

function buttonFields(elementName,idName,val){
    let element = document.createElement(elementName);

    element.setAttribute('type','button');
    element.setAttribute('value',val);
    element.setAttribute('id',idName);
    return element;

}

function createClass (elementName, className) {
    let tag = document.createElement(elementName);
    if(className){
        tag.classList.add(className);
    }
    return tag;
}

function addClassName (tag, className) {
    return tag.classList.add(className); 
}

function displayValue(val) {
    document.getElementById("result").value += val
}

function solve() {
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
    return y;
}

function clear() {
    document.getElementById("result").value = ""
}

var keyboardHandler = function(event) {
    // console.log(event.which)
    var char = String.fromCharCode(event.which);
    if(!(/[0-9]/.test(char))){
        event.preventDefault();
    }else{  
        displayValue(char);
    }
}

let $inputFromKeyboard = document.getElementById('result');
$inputFromKeyboard.addEventListener("keypress", keyboardHandler);

var $val_0 = createClickableEvent('val_0', '0');
var $val_1 = createClickableEvent('val_1', '1')
var $val_2 = createClickableEvent('val_2', '2')
var $val_3 = createClickableEvent('val_3', '3')
var $val_4 = createClickableEvent('val_4', '4')
var $val_5 = createClickableEvent('val_5', '5')
var $val_6 = createClickableEvent('val_6', '6')
var $val_7 = createClickableEvent('val_7', '7');
var $val_8 = createClickableEvent('val_8', '8');
var $val_9 = createClickableEvent('val_9', '9');
var $mul = createClickableEvent('mul', '*');
var $sub = createClickableEvent('sub', '-');
var $add = createClickableEvent('add', '+');
var $divide = createClickableEvent('divide', '/');
var $dot = createClickableEvent('dot','.');
var $modulus = createClickableEvent('modulus','%');

var $equal = document.querySelector('#equal');
var handler = function () {
    try {
        let result = solve();
        let val = document.getElementById("result").value;
        // console.log(val)
        
        if (result === Infinity || isNaN(result)) {
            clear();
            displayValue("Can't divide by zero");
        }
        if( val === "undefined" ){
            clear();
        }
        
    } catch (e) {
        let val = document.querySelector("#result").value;
        console.log(val.split(" ")[0])
        // clear();
        // displayValue('Invalid Format');
        document.querySelector("#result").value = 'Invalid Format';
        if(val.split(" ")[0] === "Can't")
            clear();
        
    }
}
$equal.addEventListener("click", handler);

var $clear = clearEvent("clear");
let $allClear = clearEvent("allClear");


function clearEvent(id){
    let $id = document.querySelector('#' + id);

    $id.addEventListener("click", function () {
        clear();
    })
}


function createClickableEvent(id, val) {
    let $id = document.querySelector('#' + id);

    $id.addEventListener("click", function () {
        displayValue(val)
    });
}

let $backspace  = document.querySelector("#backspace");
$backspace.addEventListener('click', function() {
    backSpace();
})
function backSpace() {
    let x = document.getElementById("result").value;

    let ifError = false;
    try{
        eval(x);
        
    }catch(e){
        ifError = true;
        x = x.split("").slice(0,x.length-1).join("");
        document.getElementById("result").value = x;

    }

    if(!ifError){
        let y = x.split("");
        y.pop();
        document.getElementById("result").value = y.join("");
    }
    // return y;
}