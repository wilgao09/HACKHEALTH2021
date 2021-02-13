

function processMessage(msg) {

}



function sendJSONToTab(msg){
    getCurrentTab((tab) => {
        // console.log(tab)
        // chrome.tabs.sendMessage(tab.id,msg,(res)=>{})
        const port = chrome.tabs.connect(tab.id);
        port.postMessage(msg);
        port.onMessage.addListener((response) => {

        });
    })

}



function getCurrentTab(cb) {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        console.log(tabs)
        let tab = tabs[0]; //there should only be one
        if (tab === undefined) throw "ERROR! NO CURRENT TAB"
        cb(tab)
    })
}