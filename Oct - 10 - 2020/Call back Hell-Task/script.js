const create_class = function(elementName, className){
    let element = document.createElement(elementName);
    if(className){
        element.classList.add(className);
    }
    return element;
}

let bodyTag = document.querySelector("body");
bodyTag.classList.add("my-font");

let h1Tag = create_class("h1","center");

h1Tag.innerText = '';
document.body.append(h1Tag);


let update_counter = function(elementName,counter){
    elementName.innerText = counter;
    
}

let callbackHell = function(element) {
    let i = 10;
    

    setTimeout(function(){
        
        update_counter(h1Tag,i);
        setTimeout(function(){
            i--;
            update_counter(h1Tag,i);

            setTimeout(function(){
                i--;
                update_counter(h1Tag,i)

                setTimeout(function(){
                    i--;
                    update_counter(h1Tag,i);

                    setTimeout(function(){
                        i--;
                        update_counter(h1Tag,i);

                        setTimeout(function(){
                            i--;
                            update_counter(h1Tag, i);

                            setTimeout(function(){
                                i--;
                                update_counter(h1Tag,i);

                                setTimeout(function(){
                                    i--;
                                    update_counter(h1Tag,i);

                                    setTimeout(function(){
                                        i--;
                                        update_counter(h1Tag, i);

                                        setTimeout(function(){
                                            i--;
                                            update_counter(h1Tag, i);

                                            setTimeout(function(){
                                                update_counter(h1Tag, "Happy Independence Day");
                                            },1000);

                                        },1000);

                                    },1000);

                                },1000);

                            },1000);

                        },1000);

                    },1000);

                },1000);

            },1000);

        },1000);

    });
}

callbackHell();