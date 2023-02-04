/**
 * @description This script fixes the PTL Wedel website.
 * @title PTL WEDEL FIX
 * @version v1.1
 * @author Markellus, TheZitroX
 * @grant GM_addStyle
 * @include https://www.bfs-wedel.de/*
 * @include https://www.fh-wedel.de/*
 */

import { fixLogo, fixHeader, fixArticle, fixMenubar, fixSearch, fixLoginButton, fixMenubarColor1 } from "https://raw.githubusercontent.com/TheZitroX/ptl-website-fix/feature/Better-Colors/ptlCssFix.js";
import { waitForKeyElements } from "https://raw.githubusercontent.com/TheZitroX/ptl-website-fix/feature/Better-Colors/baseFunctions.js";

/**
 * waitForKeyElements():  A utility function, for Greasemonkey scripts, that detects and handles AJAXed content.
 * @param {*} selectorTxt Required: The jQuery selector string that specifies the desired element(s).
 * @param {*} actionFunction Required: The code to run when elements are found. It is passed a jNode to the matched element.
 * @param {*} bWaitOnce Optional: If false, will continue to scan for new elements even after the first match is found.
 * @param {*} iframeSelector Optional: If set, identifies the iframe to search.
 */

// Style our newly fixed elements using CSS.
// we use the "waitForKeyElements()" function to do this.
// This ensures that the CSS is applied after the page has loaded.
waitForKeyElements(".layout-header__logo", fixLogo);
waitForKeyElements("#layout-header", fixHeader);
waitForKeyElements(".news", fixArticle);
waitForKeyElements(".l-content-row--nospace", fixArticle);
waitForKeyElements(".mainnav__first-level", fixMenubar);
waitForKeyElements(".search-toggle", fixSearch);
waitForKeyElements(".fe-login-button", fixLoginButton);
waitForKeyElements(".mainnav__stick-wrap", fixMenubarColor1);
