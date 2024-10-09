window.onload = pageLoad;

function pageLoad(){
	var start = document.getElementById('start')
	start.onclick = startGame;
}

function startGame(){
	alert("Ready");
	var numbox = document.getElementById('numbox').value;
	var color = document.getElementById('color').value;

	addBox(numbox,color);
	timeStart();
}

var gamestarted;
var timer

function timeStart(){
	var TIMER_TICK = 1000;
	timer = document.getElementById('clock');
	//setting timer using setInterval function
	timer.innerHTML = 10;
	gamestarted = true

	function timeCount(){
		CheckLose();
		//CheckWin();
		var allbox = document.querySelectorAll("#layer div");
		if ((allbox.length > 0)){
			timer.innerHTML -= 1;
		}
	
		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
	}
	
	gamestarted = setInterval(timeCount,TIMER_TICK); 
}

function addBox(numbox,colorDrop){
	// สร้างกล่องตาม input ที่เราใส่ 
	// var numbox = val;
	var gameLayer = document.getElementById('layer');
	// var colorDrop = val;

	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement("div");
		tempbox.className = colorDrop;
		tempbox.id = i;
		tempbox.style.left = Math.random(0,10) * (450 + 25) + "px";
		tempbox.style.top = Math.random(0,10) * (450 + 25) + "px";
		tempbox.classList.add("square");
		//add element to HTML node
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function CheckWin(){
	var allbox = document.querySelectorAll("#layer div");
	if ((allbox.length == 0)){
		alert("You Win!");
		clearInterval(gamestarted);
		timer.innerHTML = null;
	}
}
function CheckLose(){
	if (timer.innerHTML == 0){
		clearInterval(gamestarted);
		clearScreen();
		alert("You Lose!");
		timer.innerHTML = null;
	}
}
function bindBox(box){
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
		box.parentNode.removeChild(box);
		setTimeout(CheckWin,10);
	}
}

function clearScreen(){
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ

	//delete all  div
	var allbox = document.querySelectorAll("#layer div");
	for (var i=0;i<allbox.length;i++){
		allbox[i].parentNode.removeChild(allbox[i])
	}
	
}




