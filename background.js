

/**
 * BACKGROUND SCRIPT
 * 
 * Don't touch this code unless youre just adding more scripts to import
 */





chrome.extension.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(msg) {
        //msg is in the same format {src, from, val}
        let u = msg.from
        chrome.storage.sync.set({ u: msg})

    });
})

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab){
    if (changeInfo.status == 'complete') {
        // chrome.tabs.executeScript(tabId, { file: "contentListener.js" });
        // chrome.tabs.executeScript(tabId, { file: "messageProcessor.js" });
        
        //you can copy the above line to import more scripts


        chrome.storage.sync.get(null, function(items) {
            // console.log(items)
            for (let name in items) {
                chrome.tabs.executeScript(tabId, { code: `
                    Processor.process(${JSON.stringify(items[name])})
                `});
            }

        
        });
    }
});


