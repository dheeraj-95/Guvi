/*
Problem:
Write a function called “getLengthOfWord”.
Given a word, “getLengthOfWord” returns the length of the given word.
Input:
*/
function getLengthOfWord(word1){
	return (typeof word1 === 'string')? word1.length : '-1'
}
console.log(getLengthOfWord('GUVI'));