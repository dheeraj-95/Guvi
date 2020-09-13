//Playing with JSON object’s Values:

var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [
        {
            name: 'bar',
            activities: ['be grumpy', 'eat bread omblet'],
            weight: 8,
            furcolor: 'white'
        },
        {
            name: 'foo',
            activities: ['sleep', 'pre-sleep naps'],
            weight: 3
        }
    ]
}
cat.height = 3; 
cat.weight = 12;
cat.name = 'Fluffyy';
var totalActivities = cat.activities.length;
for(let i in cat["catFriends"]){
    totalActivities += (cat["catFriends"][i]["activities"]).length;
    console.log("Activities of Fluffyy’s catFriends :" , cat["catFriends"][i]["activities"]);
}
for(let i in cat["catFriends"]){
    console.log("catFriends names :" , cat["catFriends"][i]["name"]);
}
var totalWeight = 0;
for(let i in cat["catFriends"]){
    totalWeight += cat["catFriends"][i]["weight"]
}
console.log("Total weight of catFriends :" , totalWeight);

console.log("Total activities of all cats :", totalActivities);

for(let i in cat["catFriends"]){
    console.log(`Add 2 more activities to ${cat["catFriends"][i]["name"]} :` ,(cat["catFriends"][i]["activities"]).concat(['play', 'eat cat food']));
}

console.log(`Update the fur color of bar :` ,cat["catFriends"][0]["furcolor"] = "Black");

