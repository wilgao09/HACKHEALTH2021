
/**
 * THIS WILL BE INJECTED INTO THE WEBPAGE
 */



// chrome.extension.onMessage.addEventListener("onMessage", (e) => {
//     console.log(e)
// })

chrome.runtime.onConnect.addListener((port) => {
    port.onMessage.addListener((msg) => {
        Processor.process(msg)
        //AT THIS POINT, MSG IS WHATEVER YOU PASSED IN 
    });
});







var CSS_OBJECT = {
    file: [],
    STYLE_TAG_ID: "myExtensionsStyleTagName",
    load: () => {},
    reset: () =>{},
    editRule: () => {}
}




CSS_OBJECT.load=()=> {
    var styleElement = null
    var style = "";
    for (let n = 0  ; n != CSS_OBJECT.file.length ; n++) {
        style += "\n" + CSS_OBJECT.file[n].val
    }
    if (!document.getElementById(CSS_OBJECT.STYLE_TAG_ID)) {
        //create and attach
        styleElement = document.createElement("style");
        styleElement.id = CSS_OBJECT.STYLE_TAG_ID
        styleElement.innerHTML = style
        document.head.appendChild(styleElement)
    } else {
        //does this actually work?
        document.getElementById(CSS_OBJECT.STYLE_TAG_ID).innerHTML = style
    }
}

CSS_OBJECT.reset = () => {
    CSS_OBJECT.file = []
    let el = null;
    if (el = document.getElementById(CSS_OBJECT.STYLE_TAG_ID)) {
        el.textContent = "";
    }
}

//USE THIS METHOD TO ADD RULES
/**
 * Note: if you only pass in an ID, it will just return the current rule settings for that ID
 * @param {String} id The ID for THE RULE IN THE ARRAY
 * @param {String} newVal The raw CSS (could be one rule or multiple rules)
 */
CSS_OBJECT.editRule = (id, newVal="NO_VAL") => {
    //pseudo-mongo
    var foundInArr = false;
    var ruleJSON = {"id":id, val:""};
    for (let n = 0 ; n != CSS_OBJECT.file.length ; n++) {
        if (CSS_OBJECT.file[n].id === id) {
            ruleJSON = CSS_OBJECT.file[n]
            foundInArr = true;
        }
    }

    if (newVal !== "NO_VAL") {
        ruleJSON.val = newVal;
    } 

    if (!foundInArr && newVal !== "NO_VAL") {
        CSS_OBJECT.file.push(ruleJSON)
    }

    return ruleJSON

}