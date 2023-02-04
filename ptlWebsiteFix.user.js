/**
 * @description This script fixes the PTL Wedel website.
 * @title PTL WEDEL FIX - Code Snippet for Tampermonkey
 * @version v1.1
 * @author Markellus, TheZitroX
 * @grant GM_addStyle
 * @include https://www.bfs-wedel.de/*
 * @include https://www.fh-wedel.de/*
 * @include https://raw.githubusercontent.com/TheZitroX/ptl-website-fix/feature/Better-Colors/ptlCssFix.js
 * @include https://raw.githubusercontent.com/TheZitroX/ptl-website-fix/feature/Better-Colors/baseFunctions.js
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
