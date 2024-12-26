alert("Hello");

document.querySelector("h1").innerHTML = "GoodBye"

/*  document.firstElementChild; //within <html> tags
    document.firstElementChild.firstElementChild;
    document.firstElementChild.lastElementChild;

    var heading = document.firstElementChild.lastElementChild.firstElementChild;
    heading.innerHTML = "New heading";
    heading.style.color = "red";

    document.querySelector("input").click() //checks the checkbox
*/

/*  document.getElementsByTagName("li"); //get an array of items
    document.getElementsByTagName("li")[1].style.color = "purple";
    document.getElementsByTagName("li").length; //items in array
    
    document.getElementsByClassName("mybtn"); //get an array
    document.getElementById("title").innerHTML = "New heading";

    document.querySelector("#title"); //for an id
    document.querySelector(".item"); //for a class
    document.querySelector("h1"); //for a tag

    document.querySelector("#list .item"); //first instance of result
    document.querySelectorAll("#list .item"); //list of all instances of result
*/

/*  Separation of concerns
    document.querySelector("button").classList;
    document.querySelector("button").classList.add("invisible"); //add class invisible
    document.querySelector("button").classList.remove("invisible");
    document.querySelector("button").classList.toggle("invisible");
*/

/*  document.querySelector("h1").innerHTML = "<em>New Heading</em>";
    document.querySelector("h1").textContent;
*/

/*  document.querySelector("h1").attributes;
    document.querySelector("h1").getAttribute("href"); //there is also setAttribute
*/