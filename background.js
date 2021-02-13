


// chrome.browserAction.onClicked.addListener(function (tab) {
//     // for the current tab, inject the "inject.js" file & execute it
//     console.log("TURUURUR")
// 	chrome.tabs.executeScript(tab.ib, {
// 		file: 'contentListener.js'
// 	});
// });

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab){
    if (changeInfo.status == 'complete') {
        chrome.tabs.executeScript(tabId, { file: "contentListener.js" });
    }
});