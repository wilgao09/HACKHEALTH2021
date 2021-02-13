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
