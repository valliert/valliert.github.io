function makeHeader() {
    let header = document.querySelector("head");

    let pages = ["Main", "Resume", "Portfolio"];
    pages.foreach((page) => {
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

}