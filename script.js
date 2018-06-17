var numSquare = 6;
var colors = generateArray(numSquare); //6 because we want an array with 6 colors
var squares = document.querySelectorAll(".square");
var colorToGuess = randomColorToGuess();
var colorDisplay = document.querySelector("#rgb");
var messageDisplay = document.querySelector("#message");
var title = document.querySelector(".title");
var reset = document.querySelector(".reset");
var easy = document.querySelector(".easy");
var hard = document.querySelector(".hard");

/*reset.classList.add("hidden");*/
colorDisplay.textContent = colorToGuess;

//loop through the list of squares individually and assign one color of the array colors
for( var i = 0; i < squares.length; i++) {
	//add colors to squares
	squares[i].style.backgroundColor = colors[i];
	//add event to each squares
	squares[i].addEventListener("click", function() {
	//grab color of clicked square
	var choice = this.style.backgroundColor;
	//compare color clicked square with colortoguess
		if(choice === colorToGuess) {
		messageDisplay.textContent = "Correct!"
		changeColor();	
		reset.textContent = "PLAY AGAIN?";
		}else {
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again!"
		
		}
});
}

//reset button
reset.addEventListener("click", function() {
	//generate new colors
	colors = generateArray(numSquare);
	//pick color to guess
	colorToGuess = randomColorToGuess();
	//change color display to be color to guess
	colorDisplay.textContent = colorToGuess;
	for( var i = 0; i < squares.length; i++) {
	//add colors to squares
	squares[i].style.backgroundColor = colors[i];
	}
	//title colors come back to balck
	title.style.backgroundColor = "steelblue";
	//come back to new color button
	reset.textContent = "NEW COLORS";
	//erase correct message
	messageDisplay.textContent = "";
});

easy.addEventListener("click", function() {
	easy.classList.add("clicked");
	hard.classList.remove("clicked");
	//generate an array 
	numSquare = 3;
	colors = generateArray(numSquare);
	//pick a random color to guess
	colorToGuess = randomColorToGuess();
	//change color display to be color to guess
	colorDisplay.textContent = colorToGuess;
	for( var i = 0; i < squares.length; i++) {
		if( i < 3 ) { //or if(color[i])
	//add colors to 3 squares
	squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].classList.add("hidden");
		}
	}
});

hard.addEventListener("click", function() {
	hard.classList.add("clicked");
	easy.classList.remove("clicked");
	//create new array
	numSquare = 6;
	colors = generateArray(numSquare);
	//pick a colorToGuess
	colorToGuess = randomColorToGuess();
	//change color display to be color to guess
	colorDisplay.textContent = colorToGuess;
	for( var i = 0; i < squares.length; i++) {
	squares[i].classList.remove("hidden");
	//add colors to squares
	squares[i].style.backgroundColor = colors[i];
	}
});



//separate function that will display features if wrong or right
function changeColor() {
	//loop through all squares
	for( var i = 0; i < squares.length; i++) {
	//change each color to match given color
	squares[i].style.backgroundColor = colorToGuess;
	title.style.backgroundColor = colorToGuess;
	}
}

//separate function that will push random colors in an array
function generateArray(num) {
	//make an array
	var arr = [];
	for( var i = 0; i < num; i++) {
		//get random color and push into array
		arr.push(generateRandomColor());
	}
	return arr;
}

//separate function that will generate random number to create random rgb colors
function generateRandomColor() {
	//pick red from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick green from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick blue from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"
}


//separate function that pick a random color in the array
function randomColorToGuess() {
	//generate a random number
	var random = Math.floor(Math.random() * colors.length);
	//apply this number as index to the colors array
	return colors[random];
}








	