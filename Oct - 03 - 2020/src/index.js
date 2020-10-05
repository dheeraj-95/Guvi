let headerTag = create_Class("header", "container");

let imageTag = create_img("src/img/me.JPG")
addClassName(imageTag, "circular-square");

let section = create_Class("section","my-section");

let name = create_Class("h1");
name.innerText = "g dheeraj";

let pTagAboveAddress = create_Class("p", "addr-bar-above");

let address = create_Class("p", "address");
address.innerText = "Ramky Enclave, Warangal 506002 | 701-336-9208 | gumudavellidheeraj@gmail.com";

let line = create_Class("hr");

let main = create_Class("main","my-main");

let table = create_Table();

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

function create_img (path) {
    let tag = document.createElement("img");
    if(path){
        tag.setAttribute("src",path);
    }
    return tag;
}

function create_list(tag,lengthOfList){
    let arr = [];
    for(let i=0; i<lengthOfList; i++){
        arr.push(document.createElement("li"));
        tag.appendChild(arr[i]);
    }
    return arr;
}

function skills_bar(value){
    let rangeSlider = create_Class("input", "slider");
    rangeSlider.setAttribute("type", "range");
    rangeSlider.setAttribute("disabled", "");
    rangeSlider.setAttribute("value",value);

    return rangeSlider;
}

function create_Table() {
    let table = create_Class("table");
    let tbody = create_Class('tbody');

    let tr = create_Class("tr");

    let td1 = create_Class('td', "horizontal-line");
    
    let profileData =  create_Class("p");
    profileData.innerText = "Innovative optimized solution seeker. Excited to be at the deployment phase of my new career as a web developer. I am ambitious, adventurous, assiduous, animated, and an literation advocate."
    
    let techSkills = create_Class("b","skills");

    techSkills.innerText = "Technical Skills"; 

    let divElement = create_Class("div","slidecontainer");
    
    let t_skill_1 = create_Class("label");
    t_skill_1.innerText = "Javascript";
    let t_rangeSlider_1 = skills_bar("84");

    let t_skill_2 = create_Class("label");
    t_skill_2.innerText = "CSS";
    let t_rangeSlider_2 = skills_bar("50");

    let t_skill_3 = create_Class("label");
    t_skill_3.innerText = "HTML";
    let t_rangeSlider_3 = skills_bar("75");

    let t_skill_4 = create_Class("label");
    t_skill_4.innerText = "React";
    let t_rangeSlider_4 = skills_bar("65");

    let t_skill_5 = create_Class("label");
    t_skill_5.innerText = "Mongo";
    let t_rangeSlider_5 = skills_bar("80");

    let t_skill_6 = create_Class("label");
    t_skill_6.innerText = "Deployment";
    let t_rangeSlider_6 = skills_bar("80");

    
    let addSkills = create_Class("b","skills");
    addSkills.innerText = "Additional Skills";

    let a_skill_1 = create_Class("label");
    a_skill_1.innerText = "Project Mangement";
    let a_rangeSlider_1 = skills_bar("84");

    let a_skill_2 = create_Class("label");
    a_skill_2.innerText = "Recruitment";
    let a_rangeSlider_2 = skills_bar("90");

    let a_skill_3 = create_Class("label");
    a_skill_3.innerText = "Business Development";
    let a_rangeSlider_3 = skills_bar("75");

    let a_skill_4 = create_Class("label");
    a_skill_4.innerText = "Editing";
    let a_rangeSlider_4 = skills_bar("95");

    let a_skill_5 = create_Class("label");
    a_skill_5.innerText = "Fundraising";
    let a_rangeSlider_5 = skills_bar("80");
   
    divElement.append(create_Class("br"),t_skill_1 ,t_rangeSlider_1, t_skill_2,t_rangeSlider_2,t_skill_3,t_rangeSlider_3,t_skill_4,t_rangeSlider_4,t_skill_5,t_rangeSlider_5,t_skill_6,t_rangeSlider_6, addSkills,create_Class("br"), create_Class("br"),a_skill_1 ,a_rangeSlider_1, a_skill_2,a_rangeSlider_2,a_skill_3,a_rangeSlider_3,a_skill_4,a_rangeSlider_4,a_skill_5,a_rangeSlider_5);

    let workExp1 = create_Class("p");
    workExp1.innerHTML = "<b style = 'margin-right : 80px'>Event Manager</b>  03/2014 - 02/2017";

    let work1Heading = create_Class("p");
    work1Heading.innerText = "C3 Presents, Washington DC";

    let activities1 = create_Class("ul");
    let eachActivity_1 = create_list(activities1,3);
    eachActivity_1[0].innerText = "Lead and execute all phases of event planning and production spanning committee recruitment, training, vendor relationships and on-site facilitation."
    eachActivity_1[1].innerText = "Brought new bushiest to the organization through relentless networking and stewardship which helped the company wn the bid for the State Department Summit on the Middle East and, the companies largest civic event to date, the United State of Women."
    eachActivity_1[2].innerText = "Exercise fiscal control over budget creation, tracking and reporting. Collaborate with employees at all organizational levels to advance cohesive operations."

    td1.append(create_img("src/img/profile.JPG"),profileData, create_img("src/img/skills.jpg"), create_Class("br"), techSkills,divElement,create_img("src/img/work.JPG"), workExp1, activities1);
    
    
    let td2 = create_Class('td');

    let workEx2 = create_Class("p");
    workEx2.innerHTML = "<b>Community Relations Manager</b> 06/2011 - 01/2014";

    let work2Heading = create_Class("p");
    work2Heading.innerText = "Elder Housing, Los Angels";

    let activities2 = create_Class("ul");
    let eachActivity_2 = create_list(activities2,4);
    eachActivity_2[0].innerText = "Arranging Presentations and pitch desk."
    eachActivity_2[1].innerText = "Designing a PR plan and establishing important focal points."
    eachActivity_2[2].innerText = "Designing, Creating and Managing content across multiple communication platforms."
    eachActivity_2[3].innerText = "Building relationships with key media players."

    let educationPrg = create_Class("p");
    educationPrg.innerHTML = "<b>Engineering Immersion Program</b> 11/2018 - 06/2018";  

    let educationPlace = create_Class("p")
    educationPlace.innerText = "Thinkful, Chicago, IL";

    let contentInEdu = create_Class("p");
    contentInEdu.innerText = "Project-focused intensive program with emphasis on Mongo, Express, React, and JavaScript (MERN) technical stack."

    let educationActivities = create_Class("ul");
    let eachEduActivity = create_list(educationActivities, 3);
    eachEduActivity[0].innerText = "Developed a full-stack web application, 'RenewU', using React that allows users to explore various aspects of meditation. User's progress is stored on a backend created using Node and MongoDB.";
    eachEduActivity[1].innerText = "Developed a language learning app, 'Foodie Phonetics' using spaced repetition and a Ihked list data structure. React was used to create the front end components while Node and Mongo were used to create a backend that stores user data.";
    eachEduActivity[2].innerText = "Developed a concierge app, 'Pley', for individuals looking for curated suggestions when visiting a new place. React was used to develop the front end which includes real-time chat, drag and drop and variety of advanced features. The backend, built using Node, Express, and Mongo, takes advantage of well-developed RESTful API, Geospatial searching, and user authentication with JWT.";

    let final_edu_activity = create_Class("p");
    final_edu_activity.innerHTML = "<b>BA, English</b>  University of California, Los Angels 09/2001 - 09/2005";
    
    td2.append(create_img("src/img/work.JPG"),workEx2, work2Heading,activities2, create_img("src/img/education.JPG"),educationPrg,educationPlace, create_Class("br"),contentInEdu,educationActivities, create_Class("br"),final_edu_activity);

    tr.appendChild(td1);
    tr.appendChild(td2);

    table.appendChild(tbody);
    tbody.appendChild(tr);

    return table;

}

document.body.append(headerTag,section,main);
headerTag.append(imageTag);
section.append(name,pTagAboveAddress,address,line);
main.append(table, create_Class("br"), create_Class("br"));