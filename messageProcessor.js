
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
        Processor[msg.from](msg.val);
    },
    "DIMMER": function (val) {},
    "FONT_CONTROL": function (val) {}
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