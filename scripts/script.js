let header = document.createElement("header");
let footer = document.createElement("footer");

function makeHeader() {   
    let name = document.createTextNode("Riley Vallier");
    name.className = "tab";
    header.append(name);

    let pages = ["Main", "Resume", "Portfolio"];
    pages.forEach((page) => {
        let link = document.createElement("a");
        link.textContent = page;
        let file = "";
        if (page == "Main") {
            file = "index.html"
        } else {
            file = "./" + page.toLowerCase() + ".html";
        }
        link.href = file;
        link.className = "tab";
        header.append(link);
    });

    header.append(document.createElement("hr"));
    header.append(document.createElement("hr"));
    
    document.body.prepend(header);

}

function makeFooter() {
    footer.append(document.createElement("hr"));
    footer.append(document.createElement("hr"));

    let socials = {"LinkedIn": "https://www.linkedin.com/in/riley-vallier-1a0649293", "Handshake": "https://rose-hulman.joinhandshake.com/profiles/fb7bgd"};
    for ((page, site) in socials) {
        let link = document.createElement("a");
        link.textContent = page;
        let file = site;
        link.href = file;
        link.className = "tab";
        footer.append(link);
    };

    document.body.append(footer);
}

window.addEventListener("load", (event) => {
    console.log(event)
    makeHeader();
    makeFooter();
})
