
var EXT_NAME = "my extension name"


let Dimmer = {
    inputElement: null,
    sendUpdate: () => {
        let currVal = Dimmer.inputElement.checked
        sendJSONToTab({src:EXT_NAME,from:"DIMMER", val:currVal})
    },
}

let FontControl = {
    inputElement: null,
    sendUpdate: () => {
        let currVal = FontControl.inputElement.value
        sendJSONToTab({src:EXT_NAME,from:"FONT_CONTROL", val:currVal})
    }
}






function init() {

    var DIMMER_ELEMENT = document.getElementById("dim");
    Dimmer.inputElement = DIMMER_ELEMENT;
    DIMMER_ELEMENT.addEventListener("change", () => {
        Dimmer.sendUpdate();
    })

    var FONT_ELEMENT = document.getElementById("fontval");
    FontControl.inputElement = FONT_ELEMENT;
    FONT_ELEMENT.addEventListener("change", () => {
        FontControl.sendUpdate()
    })


}





document.addEventListener("DOMContentLoaded", init)



function myFunction(){
	document.getElementById("myDropdown").classList.toggle("show");
}
window.onClick = function(event){
	if(!event.target.matches('.dropbtn')){
		var dropdowns = document.detElementsByClassName("dropdown-content");
		var i;
		for(i = 0;i < dropdowns.length;i++){
			var openDropdown = dropdowns[i];
			if(openDropdown.classList.contains('show')){
				openDropdown.classList.remove('show');
			}
		}
	}
}
