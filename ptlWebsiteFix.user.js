// ==UserScript==
// @name PTL WEDEL FIX - Code Snippet for Tampermonkey
// @namespace https://www.bfs-wedel.de/*
// @version v1.2
// @author Markellus, TheZitroX
// @grant GM_addStyle
// @match https://www.bfs-wedel.de/*
// @match https://www.fh-wedel.de/*
// @require "https://raw.githubusercontent.com/TheZitroX/ptl-website-fix/feature/Better-Colors/ptlCssFix.js"
// @require "https://raw.githubusercontent.com/TheZitroX/ptl-website-fix/feature/Better-Colors/baseFunctions.js"
// @description This script fixes the PTL Wedel website.
// ==/UserScript==

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
