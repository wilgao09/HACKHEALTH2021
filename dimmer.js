var down = document.getElementById('dim');
down.innerHTML = "Click if user has visual impairments with bright screens.";
function makeDim(){
	down.classList.add('dim');
	down.innerHTML = "Screen is now dim for user convenience.";
}
