
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
function makeDim(){
    let bg = document.body.style.backgroundColor
    let new_bg = pSBC(-0.5,bg)
    document.body.style.backgroundColor = new_bg
    document.querySelectorAll('*').forEach(function(node){
        bg = node.style.background
        new_bg = pSBC(-0.5,bg)
        node.style.background = new_bg
    })
}
function makeDim(){
    let bg = document.body.style.backgroundColor
    let new_bg = pSBC(0.5,bg)
    document.body.style.backgroundColor = new_bg
    document.querySelectorAll('*').forEach(function(node){
        bg = node.style.background
        new_bg = pSBC(0.5,bg)
        node.style.background = new_bg
    })
}
Processor.DIMMER = (val) => {
    console.log(val)
    if (val) {
        console.log("TIME TO DIM")
        makeDim()
    } else {
        makeUnDim()
    }

    
}

var PAGE_FONT = (font, isImportant=true) => {return(`
    body * {
        font-family: ${font}   ${(isImportant)?"!important":""} ;
    }
`)}
