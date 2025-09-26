function makeHeader() {
    let header = document.createElement("header");

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
        header.append(link);
    });
    
    document.body.prepend(header);

}

window.addEventListener("load", (event) => {
    console.log(event)
    makeHeader();
})
