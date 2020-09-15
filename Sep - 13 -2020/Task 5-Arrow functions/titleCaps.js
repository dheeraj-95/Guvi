//Convert all the strings to title caps in a string array
var string_arr = ['bahubali', 'john cena', 'ballala deva', 'kattappa'];

var titleCaps = string_arr.map(item => {
	item = item.split(" ");
	var result = item.map(splitedItem => {
		splitedItem = splitedItem.charAt(0).toUpperCase() + splitedItem.slice(1);
		return splitedItem;
	});
	return result.join(" ");
});
console.log(titleCaps);