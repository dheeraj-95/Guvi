/*
Problem
Frames Per Second
Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
*/

function frames(num1,num2) {
	return num1 * num2 * 60;
}
var fps = frames(1,2);
console.log(fps);