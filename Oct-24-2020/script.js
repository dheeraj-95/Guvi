var insertedPets = [];
var Pets = /** @class */ (function () {
    function Pets(count, petType, petBreed) {
        this.petCount = count;
        this.petType = petType;
        this.breed = petBreed;
    }
    return Pets;
}());
// Availability Class
var AvailabilityOfPets = /** @class */ (function () {
    function AvailabilityOfPets(availablePets) {
        var _a;
        this.pets = new Array();
        (_a = this.pets).push.apply(_a, availablePets);
    }
    AvailabilityOfPets.prototype.insertPetForAdoption = function (pet) {
        this.pets.push(pet);
        // if(this.pets.length > 0 && Object.keys(pet).length > 0){
        //     let keys = Object.keys(pet);
        //     for(let i =0; i<this.pets.length; i++){
        //         // for(let j=0; j<keys.length; j++){
        //             if(this.pets[i].petType === pet["petType"]){
        //                 this.pets[i].petCount += pet['petCount'];
        //             }
        //         // }
        //     }
        // }
        // console.log(Object.keys(pet));
        // console.log(this.pets);
    };
    AvailabilityOfPets.prototype.getPetCount = function () {
        var displayPet = document.getElementById('display-pets');
        for (var i = 0; i < this.pets.length; i++) {
            (displayPet).innerHTML += this.pets[i].petType + "s - " + this.pets[i].petCount + " <br>";
        }
    };
    AvailabilityOfPets.prototype.availabilityCheck = function (requestPet) {
        var divForPetStatus = document.getElementById('divForPetStatus');
        var showStatus = document.createElement('p');
        for (var i = 0; i < requestPet.length; i++) {
            var availablePetCount = void 0;
            for (var j = 0; j < this.pets.length; j++) {
                if (requestPet[i].petType.toLowerCase() === this.pets[j].petType.toLowerCase()) {
                    availablePetCount = this.pets[j].petCount;
                    break;
                }
            }
            if (availablePetCount) {
                showStatus.innerHTML = "Your requested pet " + requestPet[i].petType + " is <b class = \"green\" >Available</b> and we have " + availablePetCount + " of them";
                // console.log('in here');
                divForPetStatus.append(showStatus);
                break;
                // console.log(`Your requested pet ${requestPet[i].petType} is Available and we have ${availablePetCount} of them`)
            }
            else {
                showStatus.innerHTML = "Your requested pet " + requestPet[i].petType + " is <b class = \"red\" >Not Available</b>";
                // console.log('in here');
                divForPetStatus.append(showStatus);
                break;
            }
        }
    };
    return AvailabilityOfPets;
}());
var data;
var handlerToInsertPet = function () {
    var pet_Type = document.getElementById('pet-type').value;
    var pet_breed = document.getElementById('breed').value;
    var pet_Count = document.getElementById('count').value;
    var availablePetsObj = new AvailabilityOfPets([
    // {petCount : parseInt(pet_Count), petType : pet_Type.toString(), breed : pet_breed.toString()}
    ]);
    // console.log(`pet-type : ${pet_Type}, breed : ${pet_breed}, count : ${pet_Count}`);
    availablePetsObj.insertPetForAdoption({ petCount: parseInt(pet_Count), petType: pet_Type.toString(), breed: pet_breed.toString() });
    // availablePetsObj.insertPetForAdoption(new Pets(3, 'Cat', 'Persian'));
    availablePetsObj.getPetCount();
    data = availablePetsObj;
    // (<HTMLElement>document.getElementById('insertPet')).removeEventListener('click',handlerToInsertPet);
};
document.getElementById('insertPet').addEventListener('click', handlerToInsertPet);
// Request Class
var RequestForPet = /** @class */ (function () {
    function RequestForPet(reqPet) {
        var _a;
        this.requestPet = new Array();
        (_a = this.requestPet).push.apply(_a, reqPet);
    }
    RequestForPet.prototype.insertPetEnquiry = function (insertPet) {
        this.requestPet.push(insertPet);
    };
    RequestForPet.prototype.checkAvailablePetStatus = function () {
        data.availabilityCheck(this.requestPet);
    };
    return RequestForPet;
}());
// let userCheckPetBtn = (<HTMLElement>document.getElementById('userCheckPet'));
var handler = function () {
    var petType = document.getElementById('userPet').value;
    if (petType.length !== 0 && petType.trim().length !== 0) {
        var request = new RequestForPet([
            {
                petType: petType,
                petCount: 3
            }
        ]);
        request.insertPetEnquiry({ petType: petType, petCount: 3 });
        request.checkAvailablePetStatus();
        // divForPetStatus?.append(petStatus);
        // (<HTMLElement>document.getElementById('userCheckPet')).removeEventListener('click',handler);
    }
};
document.getElementById('userCheckPet').addEventListener('click', handler);
// userCheckPetBtn.removeEventListener('click');
