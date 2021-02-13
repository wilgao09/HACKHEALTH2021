



let Dimmer = {
    inputElement: null,
    sendUpdate: () => {
        let currVal = Dimmer.inputElement.value
        sendJSONToTab({src:"MYEXT",from:"DIMMER", val:currVal})
    }
}






function init() {

    var DIMMER_ELEMENT = document.getElementById("dim")

    Dimmer.inputElement = DIMMER_ELEMENT
    DIMMER_ELEMENT.addEventListener("change", () => {
        Dimmer.sendUpdate();
    })



}


document.addEventListener("DOMContentLoaded", init)



