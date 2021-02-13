let Dimmer = {
  inputElement: null,
  sendUpdate: () => {
    let currVal = Dimmer.inputElement.value;
    sendJSONToTab({ src: "MYEXT", from: "DIMMER", val: currVal });
  },
};

function init() {
  var DIMMER_ELEMENT = document.getElementById("dim");

  Dimmer.inputElement = DIMMER_ELEMENT;
  DIMMER_ELEMENT.addEventListener("change", () => {
    Dimmer.sendUpdate();
  });
}

document.addEventListener("DOMContentLoaded", init);

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onClick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.detElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
