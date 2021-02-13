# HACKHEALTH2021
HackHealth2021 repo


## Technical Details

 - Messages that are passed from popup to content must be in the form ``` {src:EXT_NAME,from:<name of setting>, val:<some value>} ``` ; this makes message parsing much easier in the "front end"
 - ``` backgruond.js ``` should be the only background script and is responsible for JS injection; you can add more scritps to inject, but right now, it just injects <code> contentListener.js </code> and <code> messageProcessor.js </code>

 
### messageProcessor.js

 - includes the main message receiver 
 - Holds the CSS_OBJECT object: the CSS_OBJECT object is just there to organize all the CSS modification related methods and variables; ALL modifications should be through methods
   - When you add a rule, you will need to provide an ID. The ID is just so that we can modify rules after we've put them in; they have no relation to the actual IDs for anything else other than my organizing
   - editRule takes an ID and a value; the value MUST be a valid CSS block (e.g. ```body { color: red }```)
   - editing rules DOES NOT automatically implement the rules; each edit should be succeeded by a CSS_OBJECT.load()

