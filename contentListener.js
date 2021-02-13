
/**
 * THIS WILL BE INJECTED INTO THE WEBPAGE
 */



// chrome.extension.onMessage.addEventListener("onMessage", (e) => {
//     console.log(e)
// })

chrome.runtime.onConnect.addListener((port) => {
    port.onMessage.addListener((msg) => {
        console.log(msg)
        //AT THIS POINT, MSG IS WHATEVER YOU PASSED IN 
    });
});

