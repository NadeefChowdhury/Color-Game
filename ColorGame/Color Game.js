var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors = generateRandomColors(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length;i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
});
hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length;i++){
		
			squares[i].style.background = colors[i];
		
			squares[i].style.display = "block";
		
	}
});
resetButton.addEventListener("click", function(){
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length;i++){
		squares[i].style.background = colors[i];
	}
	messageDisplay.textContent = "";
	this.textContent = "New Colors";
});
colorDisplay.textContent = pickedColor;
for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function(){
	var clickedColor = this.style.background;
	if(pickedColor === clickedColor){
		messageDisplay.textContent="Correct";
		resetButton.textContent = "Play Again?";
		changeColors(clickedColor);
	}else{
		this.style.background = "#232323";
		messageDisplay.textContent = "Try Again"
	}
});
}


function changeColors(color){
	for(var i=0; i < squares.length;i++){
		squares[i].style.background = color;
	}
}
function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}

	return arr;
}
function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g= Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";

}