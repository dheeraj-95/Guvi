let container = create_Class('div','container');

let br = create_Class("br");
let main = create_Class("main");
let heading = create_Class('h1');
heading.setAttribute("class","diplay-4");
heading.classList.add("text-center");
heading.innerText = 'Simple Calculator App';

function create_table(){
    let table = create_Class('table');
    let tbody = create_Class('tbody');

    let row1 = create_Class('tr');

    let row1col1 = create_Class('td');
    row1col1.setAttribute('colspan','3')
    
    let result_field = create_Class('input','text-right');
    result_field.setAttribute('type', 'text');
    result_field.setAttribute('id', 'result');
    result_field.setAttribute('readonly', '');
    row1col1.appendChild(result_field);

    let row1col2 = create_Class('td');
    let btn_Mul = buttonFields('input','mul','*');
    row1col2.appendChild(btn_Mul);

    row1.append(row1col1,row1col2);

    // -----------------------row 1 complete----------------------------- //
    
    let row2 = create_Class('tr');

    let row2Col1 = create_Class('td');
    let btn7 = buttonFields('input','val_7','7');
    row2Col1.append(btn7);
    // row2.append(row2Col1);

    let row2Col2 = create_Class('td');
    let btn8 = buttonFields('input','val_8','8');
    row2Col2.append(btn8);
    // row2.append(row2Col2);

    let row2Col3 = create_Class('td');
    let btn9 = buttonFields('input','val_9','9');
    row2Col3.append(btn9);

    let row2Col4 = create_Class('td');
    let btnAdd = buttonFields('input','add','+');
    row2Col4.append(btnAdd);

    row2.append(row2Col1,row2Col2,row2Col3,row2Col4);

    // -----------------------row 2 complete----------------------------- //

    let row3 = create_Class('tr');

    let row3Col1 = create_Class('td');
    let btn4 = buttonFields('input','val_4','4');
    row3Col1.append(btn4);
    // row3.append(row3Col1);

    let row3Col2 = create_Class('td');
    let btn5 = buttonFields('input','val_5','5');
    row3Col2.append(btn5);
    // row3.append(row3Col2);

    let row3Col3 = create_Class('td');
    let btn6 = buttonFields('input','val_6','6');
    row3Col3.append(btn6);

    let row3Col4 = create_Class('td');
    let btn_Sub = buttonFields('input','sub','-');
    row3Col4.append(btn_Sub);

    row3.append(row3Col1,row3Col2,row3Col3,row3Col4);

    // -----------------------row 3 complete----------------------------- //

    let row4 = create_Class('tr');

    let row4Col1 = create_Class('td');
    let btn1 = buttonFields('input','val_1','1');
    row4Col1.append(btn1);
    // row3.append(row3Col1);

    let row4Col2 = create_Class('td');
    let btn2 = buttonFields('input','val_2','2');
    row4Col2.append(btn2);
    // row3.append(row3Col2);

    let row4Col3 = create_Class('td');
    let btn3 = buttonFields('input','val_3','3');
    row4Col3.append(btn3);

    let row4Col4 = create_Class('td');
    let btn_Divide = buttonFields('input','divide','/');
    row4Col4.append(btn_Divide);

    row4.append(row4Col1,row4Col2,row4Col3,row4Col4);

    // -----------------------row 4 complete----------------------------- //

    let row5 = create_Class('tr');

    let row5Col1 = create_Class('td');
    let btnClear = buttonFields('input','clear','C');
    row5Col1.append(btnClear);
    // row3.append(row3Col1);

    let row5Col2 = create_Class('td');
    let btn0 = buttonFields('input','val_0','0');
    row5Col2.append(btn0);
    // row3.append(row3Col2);

    let row5Col3 = create_Class('td');
    let btnDot = buttonFields('input','dot','.');
    row5Col3.append(btnDot);

    let row5Col4 = create_Class('td');
    let btn_Equal = buttonFields('input','equal','=');
    row5Col4.append(btn_Equal);

    row5.append(row5Col1,row5Col2,row5Col3,row5Col4);

    // -----------------------row 5 complete----------------------------- //
    let trow1 = create_Class("tr")
    let tcol1  = create_Class("td");
    trow1.append(tcol1);

    let trow2 = create_Class("tr")
    let tcol2  = create_Class("td");
    trow2.append(tcol2);

    let trow3 = create_Class("tr")
    let tcol3  = create_Class("td");
    trow3.append(tcol3);

    tbody.append(row1,row2,trow1,row3,trow2,row4,trow3,row5);
    table.appendChild(tbody);
    container.append(table);
}
main.append(heading,container);
document.body.appendChild(main);
create_table();

function buttonFields(elementName,idName,val){
    let element = document.createElement(elementName);

    element.setAttribute('type','button');
    element.setAttribute('value',val);
    element.setAttribute('id',idName);
    return element;

}

function create_Class (elementName, className) {
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

var $equal = document.querySelector('#equal');
var handler = function (event) {
    try {
        let result = solve();
        if (result === Infinity || isNaN(result) === true) {
            clear();
            displayValue("Can't divide by zero");
        }
    } catch (e) {
        clear();
        displayValue('Invalid Format');
    }
}
$equal.addEventListener("click", handler);

var $clear = document.querySelector("#clear");
$clear.addEventListener("click", function () {
    clear();
})

function createClickableEvent(id, val) {
    let $id = document.querySelector('#' + id);

    $id.addEventListener("click", function () {
        displayValue(val)
    });
}