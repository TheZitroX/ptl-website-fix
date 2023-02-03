// ==UserScript==
// @name     PTL WEDEL FIX
// @version  1
// @grant    GM_addStyle
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js
// @include  https://www.bfs-wedel.de/*
// @include  https://www.fh-wedel.de/*
// @author   Markellus
// @author   TheZitroX
// ==/UserScript==
/*--- waitForKeyElements():  A utility function, for Greasemonkey scripts,
    that detects and handles AJAXed content.
    Usage example:
        waitForKeyElements (
            "div.comments"
            , commentCallbackFunction
        );
        //--- Page-specific function to do what we want when the node is found.
        function commentCallbackFunction (jNode) {
            jNode.text ("This comment changed by waitForKeyElements().");
        }
    IMPORTANT: This function requires your script to have loaded jQuery.
*/
function waitForKeyElements (
    selectorTxt,    /* Required: The jQuery selector string that
                        specifies the desired element(s).
                    */
    actionFunction, /* Required: The code to run when elements are
                        found. It is passed a jNode to the matched
                        element.
                    */
    bWaitOnce,      /* Optional: If false, will continue to scan for
                        new elements even after the first match is
                        found.
                    */
    iframeSelector  /* Optional: If set, identifies the iframe to
                        search.
                    */
) {
    var targetNodes, btargetsFound;
    if (typeof iframeSelector == "undefined")
        targetNodes     = $(selectorTxt);
    else
        targetNodes     = $(iframeSelector).contents ()
                                           .find (selectorTxt);
    if (targetNodes  &&  targetNodes.length > 0) {
        btargetsFound   = true;
        /*--- Found target node(s).  Go through each and act if they
            are new.
        */
        targetNodes.each ( function () {
            var jThis        = $(this);
            var alreadyFound = jThis.data ('alreadyFound')  ||  false;
            if (!alreadyFound) {
                //--- Call the payload function.
                var cancelFound     = actionFunction (jThis);
                if (cancelFound)
                    btargetsFound   = false;
                else
                    jThis.data ('alreadyFound', true);
            }
        } );
    }
    else {
        btargetsFound   = false;
    }
    //--- Get the timer-control variable for this selector.
    var controlObj      = waitForKeyElements.controlObj  ||  {};
    var controlKey      = selectorTxt.replace (/[^\w]/g, "_");
    var timeControl     = controlObj [controlKey];
    //--- Now set or clear the timer as appropriate.
    if (btargetsFound  &&  bWaitOnce  &&  timeControl) {
        //--- The only condition where we need to clear the timer.
        clearInterval (timeControl);
        delete controlObj [controlKey]
    }
    else {
        //--- Set a timer, if needed.
        if ( ! timeControl) {
            timeControl = setInterval ( function () {
                    waitForKeyElements (    selectorTxt,
                                            actionFunction,
                                            bWaitOnce,
                                            iframeSelector
                                        );
                },
                300
            );
            controlObj [controlKey] = timeControl;
        }
    }
    waitForKeyElements.controlObj   = controlObj;
}
function fixLogo (jNode) {
  jNode.css ("height", "3em");
  jNode.css ("min-height", "0px");
  jNode.css("margin", "0 auto");
  jNode.children().css( "height", "3em" );
  jNode.css("position", "fixed");
  jNode.css("left", "1em");
  jNode.css("top", "3.5em");
  if(window.location.hostname == "www.bfs-wedel.de") {
  	jNode.children().attr("src", "https://upload.wikimedia.org/wikipedia/commons/d/da/Private-Berufsfachschule-PTL-Wedel-Logo.svg");
  }
}
function fixHeader(jNode) {
  jNode.css ("min-height", "0px");
  jNode.css ("height", "0em");
}
function fixArticle(jNode) {
  jNode.css ("max-width", "1200px");
  jNode.css ("width", "100%");
  jNode.css("margin", "0 auto");
}
function fixMenubar(jNode) {
  jNode.children().css( "padding", "5px 32px 5px" );
}
function fixSearch(jNode) {
  jNode.css( "padding", "5px 32px 5px" );
  jNode.css("background", "transparent");
}
function fixLoginButton(jNode) {
  jNode.css( "padding", "5px 32px 5px" );
  jNode.css("background", "transparent");
}
function fixMenubarColor1(jNode) {
  jNode.css("background", "#1C2764");
}
waitForKeyElements (".layout-header__logo", fixLogo);
waitForKeyElements ("#layout-header", fixHeader);
waitForKeyElements(".news", fixArticle);
waitForKeyElements(".l-content-row--nospace", fixArticle);
waitForKeyElements(".mainnav__first-level", fixMenubar);
waitForKeyElements(".search-toggle", fixSearch);
waitForKeyElements(".fe-login-button", fixLoginButton);
waitForKeyElements(".mainnav__stick-wrap", fixMenubarColor1);
