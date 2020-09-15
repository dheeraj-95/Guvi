//Convert all the strings to title caps in a string array
var string_arr = ['bahubali', 'john cena', 'ballala deva', 'kattappa'];

var titleCaps = function(string_arr){
	var result_String = [];
	for(let i=0; i<string_arr.length; i++){
		var split_String = string_arr[i].split(" "); // Split the string if there are space separated
		for(j in split_String){
			split_String[j] = split_String[j].charAt(0).toUpperCase() + split_String[j].slice(1); //Change the first character of string to uppercase
		}
		result_String.push(split_String.join(" "));
	}
	return result_String;
}
console.log(titleCaps(string_arr));