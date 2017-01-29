var timerMin = 0;
var timerSec = 0;
var timerHun = 0;
var timerMinStr = "00";
var timerSecStr = "00";
var timerHunStr = "00";
var lapMin = 0;
var lapSec = 0;
var lapHun = 0;
var lapMinStr = "00";
var lapSecStr = "00";
var lapHunStr = "00";
var lapsHTML = "";
var lapCount = 0;

function start(){
	document.getElementById("start-btn").classList.add("hidden");
	document.getElementById("reset-btn").classList.add("hidden");
	document.getElementById("lap-btn").classList.remove("hidden");
	document.getElementById("stop-btn").classList.remove("hidden");
	stopWatch = setInterval(function(){
		timerHun += 1;
		if(timerHun >= 100){
			timerSec += 1
			timerHun = 0
		}
		if(timerSec >= 60){
			timerMin += 1
			timerSec = 0
		}
		if(timerMin >= 60){
			stop();
		}
		if(timerHun < 10){
			timerHunStr = "0" + timerHun;
		}else{
			timerHunStr = timerHun.toString();
		}
		if(timerSec < 10){
			timerSecStr = "0" + timerSec;
		}else{
			timerSecStr = timerSec.toString();
		}
		if(timerMin < 10){
			timerMinStr = "0" + timerMin;
		}else{
			timerMinStr = timerMin.toString();
		}
		document.getElementById("time-min").innerHTML = timerMinStr;
		document.getElementById("time-sec").innerHTML = timerSecStr;
		document.getElementById("time-hun").innerHTML = timerHunStr;
	}, 10)
	lap();
}

function stop(){
	clearInterval(stopWatch);
	clearInterval(lapWatch);
	document.getElementById("stop-btn").classList.add("hidden");
	document.getElementById("lap-btn").classList.add("hidden");
	document.getElementById("start-btn").classList.remove("hidden");
	document.getElementById("reset-btn").classList.remove("hidden");
}

function reset(){
	timerMin = 0;
	timerSec = 0;
	timerHun = 0;
	timerMinStr = "00";
	timerSecStr = "00";
	timerHunStr = "00";
	lapMin = 0;
	lapSec = 0;
	lapHun = 0;
	lapMinStr = "00";
	lapSecStr = "00";
	lapHunStr = "00";
	lapsHTML = "";
	lapCount = 0;
	document.getElementById("time-min").innerHTML = timerMinStr;
	document.getElementById("time-sec").innerHTML = timerSecStr;
	document.getElementById("time-hun").innerHTML = timerHunStr;
	document.getElementById("lap-min").innerHTML = timerMinStr;
	document.getElementById("lap-sec").innerHTML = timerSecStr;
	document.getElementById("lap-hun").innerHTML = timerHunStr;
	document.getElementById("laps-wrapper").innerHTML = lapsHTML;
}

function lap(){
	lapWatch = setInterval(function(){
		lapHun += 1;
		if(lapHun >= 100){
			lapSec += 1
			lapHun = 0
		}
		if(lapSec >= 60){
			lapMin += 1
			lapSec = 0
		}
		if(lapMin >= 60){
			stop();
		}
		if(lapHun < 10){
			lapHunStr = "0" + lapHun;
		}else{
			lapHunStr = lapHun.toString();
		}
		if(lapSec < 10){
			lapSecStr = "0" + lapSec;
		}else{
			lapSecStr = lapSec.toString();
		}
		if(lapMin < 10){
			lapMinStr = "0" + lapMin;
		}else{
			lapMinStr = lapMin.toString();
		}
		document.getElementById("lap-min").innerHTML = lapMinStr;
		document.getElementById("lap-sec").innerHTML = lapSecStr;
		document.getElementById("lap-hun").innerHTML = lapHunStr;
	}, 10)
}

function laps(){
	lapCount += 1;
	lapsHTML += "<div class='indv-lap'><span class='lap-count'>" + "Lap " + lapCount + "</span><span class='lap-time'>"+ lapMinStr + ":" + lapSecStr + "." + lapHunStr + "</span></div>";
	document.getElementById("laps-wrapper").innerHTML = lapsHTML;
	lapMin = 0;
	lapSec = 0;
	lapHun = 0;
	lapMinStr = "00";
	lapSecStr = "00";
	lapHunStr = "00";
}