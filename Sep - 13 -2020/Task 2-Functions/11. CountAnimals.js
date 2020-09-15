/*
Problem:
Old macdonald Count legs of animals problem:

turkey = 2 legs
horse = 4 legs
pigs = 4 legs

*/

function CountAnimals(tur,horse,pigs) {
	return (tur * 2) + (horse * 4) + (pigs * 4);
}
var legs = CountAnimals(2,3,5);
console.log(legs);