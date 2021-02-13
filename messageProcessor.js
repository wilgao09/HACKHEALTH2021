
/**
 * THIS IS FOR FRONTEND MESSAGE PROCESSING
 * 
 * 
 */
/**
 * JSON for how each message type should be processed
 */
var Processor = {
    process: (msg) => {
        //msg should be the JSON with attr src, from, val
        try {
            Processor[msg.from](msg.val);
        } catch (e) {}
        
    },
    "DIMMER": function (val) {},
    "FONT_CONTROL": function (val) {}
}

Processor.DIMMER = (val) =>{
    //Function declaration to dim screen based on boolean value
	function dim(bool)
	{
    if(typeof bool=='undefined')bool=true;
    document.getElementById('dimmer').style.display=(bool?'block':'none');
}
    //Request user input to determine brightness option
var shade = prompt("Do you have vision impairments?");
var determine;
if(shade == "yes"|| shade == "Yes"){
	determine = true;
}else{
	determine=false;
}
    //Pass user choice to screen.
dim(determine);
}

Processor.FONT_CONTROL = (val) => {
    var rawCSS = PAGE_FONT(val);
    CSS_OBJECT.editRule("globalFont",rawCSS);
    CSS_OBJECT.load()
}


var PAGE_FONT = (font, isImportant=true) => {return(`
    body * {
        font-family: ${font}   ${(isImportant)?"!important":""} ;
    }
`)}
