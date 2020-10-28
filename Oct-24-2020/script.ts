type availablePets = 'Dog' | 'Parrot' | 'Cat' | 'Rabbit';

let insertedPets = [];

class Pets {
    petCount : number;
    petType : availablePets;
    breed : string
    constructor(count : number, petType : availablePets, petBreed : string){
        this.petCount = count;
        this.petType = petType;
        this.breed = petBreed;
    }
    // getPetType(petType : availablePets){
    //     return petType;
    // }
}

interface petData {
    petType : string
    petCount : number
}

// Availability Class

class AvailabilityOfPets {
    pets : Array<Pets> = new Array();

    constructor(availablePets : Array<Pets>){
        this.pets.push(...availablePets);
    }

    insertPetForAdoption(pet : Pets){
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
    }

    getPetCount(){
        let displayPet = <HTMLParagraphElement>document.getElementById('display-pets');
        
        for(let i=0; i<this.pets.length; i++){
            (displayPet).innerHTML += `${this.pets[i].petType}s - ${this.pets[i].petCount} <br>`;
        }
    }

    availabilityCheck(requestPet : Array<petData>){
        let divForPetStatus = <HTMLDivElement>document.getElementById('divForPetStatus');
        let showStatus = <HTMLParagraphElement>document.createElement('p');
        for(let i=0; i<requestPet.length; i++){
            let availablePetCount;
            for(let j=0; j<this.pets.length; j++){
                if(requestPet[i].petType.toLowerCase() === this.pets[j].petType.toLowerCase()){
                    availablePetCount = this.pets[j].petCount;
                    break;
                }
            }
            if(availablePetCount){
                
                showStatus.innerHTML = `Your requested pet ${requestPet[i].petType} is <b class = "green" >Available</b> and we have ${availablePetCount} of them`;
                // console.log('in here');
                divForPetStatus.append(showStatus);
                break;
                // console.log(`Your requested pet ${requestPet[i].petType} is Available and we have ${availablePetCount} of them`)
            }else{
                
                showStatus.innerHTML = `Your requested pet ${requestPet[i].petType} is <b class = "red" >Not Available</b>`;
                // console.log('in here');
                divForPetStatus.append(showStatus);
                break;
            }
        }
    }
}

let data : AvailabilityOfPets;
let handlerToInsertPet = () => {
    let pet_Type = (<HTMLFormElement>document.getElementById('pet-type')).value;
    let pet_breed  = (<HTMLFormElement>document.getElementById('breed')).value;
    let pet_Count  = (<HTMLFormElement>document.getElementById('count')).value;
    
    let availablePetsObj = new AvailabilityOfPets([
        // {petCount : parseInt(pet_Count), petType : pet_Type.toString(), breed : pet_breed.toString()}
    
    ]);
    // console.log(`pet-type : ${pet_Type}, breed : ${pet_breed}, count : ${pet_Count}`);
    availablePetsObj.insertPetForAdoption({petCount : parseInt(pet_Count), petType : pet_Type.toString(), breed : pet_breed.toString()});
    // availablePetsObj.insertPetForAdoption(new Pets(3, 'Cat', 'Persian'));
    availablePetsObj.getPetCount();
    data = availablePetsObj;
    // (<HTMLElement>document.getElementById('insertPet')).removeEventListener('click',handlerToInsertPet);

};

(<HTMLElement>document.getElementById('insertPet')).addEventListener('click',handlerToInsertPet);

// Request Class

class RequestForPet {
    requestPet : Array<petData> = new Array();

    constructor(reqPet : Array<petData>){
        this.requestPet.push(...reqPet);
    }

    insertPetEnquiry(insertPet : petData){
        this.requestPet.push(insertPet);
    }
    
    checkAvailablePetStatus(){
        
        data.availabilityCheck(this.requestPet);
    }
}

// let userCheckPetBtn = (<HTMLElement>document.getElementById('userCheckPet'));

let handler = () => {
    let petType = (<HTMLFormElement>document.getElementById('userPet')).value;
    if(petType.length !== 0 && petType.trim().length !== 0){
        
        let request = new RequestForPet([
            { 
                petType , 
                petCount: 3 
            }
        ]);
        request.insertPetEnquiry({petType, petCount : 3});
        request.checkAvailablePetStatus();
        // divForPetStatus?.append(petStatus);
        // (<HTMLElement>document.getElementById('userCheckPet')).removeEventListener('click',handler);
    }
}

(<HTMLElement>document.getElementById('userCheckPet')).addEventListener('click',handler);
// userCheckPetBtn.removeEventListener('click');
