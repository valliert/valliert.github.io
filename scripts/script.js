function makeHeader() {
    let header = document.createElement("header");

    let name = document.createTextNode("Riley Vallier");
    name.className = "tab";

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

window.addEventListener("load", (event) => {
    console.log(event)
    makeHeader();
})
