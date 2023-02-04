export function fixLogo(jNode) {
    jNode.css("height", "3em");
    jNode.css("min-height", "0px");
    jNode.css("margin", "0 auto");
    jNode.children().css("height", "3em");
    jNode.css("position", "fixed");
    jNode.css("left", "1em");
    jNode.css("top", "3.5em");
    if (window.location.hostname == "www.bfs-wedel.de") {
        jNode.children().attr("src", "https://upload.wikimedia.org/wikipedia/commons/d/da/Private-Berufsfachschule-PTL-Wedel-Logo.svg");
    }
}

export function fixHeader(jNode) {
    jNode.css("min-height", "0px");
    jNode.css("height", "0em");
}

export function fixArticle(jNode) {
    jNode.css("max-width", "1200px");
    jNode.css("width", "100%");
    jNode.css("margin", "0 auto");
}

export function fixMenubar(jNode) {
    jNode.children().css("padding", "5px 32px 5px");
}

export function fixSearch(jNode) {
    jNode.css("padding", "5px 32px 5px");
    jNode.css("background", "transparent");
}

export function fixLoginButton(jNode) {
    jNode.css("padding", "5px 32px 5px");
    jNode.css("background", "transparent");
}

export function fixMenubarColor1(jNode) {
    jNode.css("background", "#1C2764");
}