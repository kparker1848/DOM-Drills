document.addEventListener("DOMContentLoaded", function () {

    let div = document.createElement("div");
    div.className = "header-container";

    let h1 = document.createElement("h1");
    let text = document.createTextNode("This is an h1");
    h1.className = "h1";

    let h2 = document.createElement("h2");
    let text2 = document.createTextNode("This is an h2");
    h2.className = "h2";

    let h3 = document.createElement("h3");
    let text3 = document.createTextNode("This is an h3");
    h3.className = "h3";

    let h4 = document.createElement("h4");
    let text4 = document.createTextNode("This is an h4");
    h4.className = "h4";

    let h5 = document.createElement("h5");
    let text5 = document.createTextNode("This is an h5");
    h5.className = "h5";

    let h6 = document.createElement("h6");
    let text6 = document.createTextNode("This is an h6");
    h6.className = "h6";

    h1.appendChild(text);
    h2.appendChild(text2);
    h3.appendChild(text3);
    h4.appendChild(text4);
    h5.appendChild(text5);
    h6.appendChild(text6);

    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(h5);
    div.appendChild(h6);

    document.body.appendChild(div);

    let colorChoice = ["darkolivegreen", "darkslategrey", "palevioletred", "midnightblue", "steelblue", "teal", "lightseagreen", "black"];

    h1.addEventListener("dblclick", function () {
        h1.style.color = colorChoice[Math.floor(Math.random() * colorChoice.length)];
    });
    h2.addEventListener("dblclick", function () {
        h2.style.color = colorChoice[Math.floor(Math.random() * colorChoice.length)];
    });
    h3.addEventListener("dblclick", function () {
        h3.style.color = colorChoice[Math.floor(Math.random() * colorChoice.length)];
    });
    h4.addEventListener("dblclick", function () {
        h4.style.color = colorChoice[Math.floor(Math.random() * colorChoice.length)];
    });
    h5.addEventListener("dblclick", function () {
        h5.style.color = colorChoice[Math.floor(Math.random() * colorChoice.length)];
    });
    h6.addEventListener("dblclick", function () {
        h6.style.color = colorChoice[Math.floor(Math.random() * colorChoice.length)];
    });

    let itemCount = 1;

    let button = document.getElementById("button");

    button.addEventListener("click", function (e) {
        let list = document.createElement("LI");
        let item = document.createTextNode("this is list item " + itemCount);
        list.appendChild(item);
        document.getElementById("myList").appendChild(list);
        itemCount++;
        
        list.addEventListener("click", function (e) {
            list.style.color = colorChoice[Math.floor(Math.random() * colorChoice.length)];
        });
        
        list.addEventListener("dblclick", function (e) {
            list.remove(item++)
        });
    });
});