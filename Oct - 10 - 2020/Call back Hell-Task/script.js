const create_class = function(elementName, className){
    let element = document.getElementById(elementName);
    if(className){
        element.classList.add(className);
    }
    return element;
}

let h4Tag = create_class("h4");

h4Tag.innerText = '';


let callbackHell = function()