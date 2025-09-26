function makeHeader() {
    let header = document.createElement("header");

    let pages = ["Main", "Resume", "Portfolio"];
    pages.foreach((page) => {
        let link = header.createElement("a");
        let file = "";
        if (page == "Main") {
            file = "index.html"
        } else {
            file = page.toLowerCase() + ".html";
        }
        link.href = file;
        header.appendChild(link);
    })
    let main_link = header.createElement("a");
    let resume_link = header.createElement("a");
    let portfolio_link = header.createElement("a");

    header.appendChild(main_link);
    header.appendChild(resume_link);
    header.appendChild(portfolio_link);


}