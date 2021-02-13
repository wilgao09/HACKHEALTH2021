
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

Processor.FONT_CONTROL = (val) => {
    var rawCSS = PAGE_FONT(val);
    CSS_OBJECT.editRule("globalFont",rawCSS);
    CSS_OBJECT.load()
}

Processor.DIMMER = (val) => {
    if (val && !CSS_OBJECT.isDark) {
        
        makeDim()
        CSS_OBJECT.isDark = true;
    } 
    if (!val && CSS_OBJECT.isDark) {
        makeUnDim()
        CSS_OBJECT.isDark = false;
    }

    
}

var PAGE_FONT = (font, isImportant=true) => {return(`
    body * {
        font-family: ${font}   ${(isImportant)?"!important":""} ;
    }
`)}
