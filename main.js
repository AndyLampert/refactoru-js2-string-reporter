var userInput = prompt("Enter something and I'll tell you all about it!");
var userInputSliced = userInput.slice(1,3);

alert(
	"You entered: " + userInput + "!" + "\n" + 
	"There are " + userInput.length + " characters in this word" +
	"The third character you input is: " + userInput.charAt(2) + "\n" +
	"The word in lowercase is: " + userInput.toLowerCase() + "!" + "\n" +
	"The word in uppercase is: " + userInput.toUpperCase() + "!" + "\n" +
	"The word in a sentence: " + userInput + " is the coolest!" + "\n" +
	"The 2nd to the 4th letter in your word is: " + userInputSliced
);