

/**
 * BACKGROUND SCRIPT
 * 
 * Don't touch this code unless youre just adding more scripts to import
 */

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab){
    if (changeInfo.status == 'complete') {
        chrome.tabs.executeScript(tabId, { file: "contentListener.js" });
        chrome.tabs.executeScript(tabId, { file: "messageProcessor.js" });
        //you can copy the above line to import more scripts
    }
});