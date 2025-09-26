function makeHeader() {
    let header = document.createElement("header");

    let pages = ["Main", "Resume", "Portfolio"];
    pages.foreach((page) => {
        let link = document.createElement("a");
        let file = "";
        if (page == "Main") {
            file = "index.html"
        } else {
            file = page.toLowerCase() + ".html";
        }
        link.href = file;
        header.appendChild(link);
    })
    

}