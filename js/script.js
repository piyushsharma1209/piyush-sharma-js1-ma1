const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];




// Question 2,3 and 4
const heading3 = document.querySelector("h3"); {
    heading3.innerHTML = "Updated Title";
    heading3.style.fontSize = "2em";
    heading3.classList = "subheading";
}


// Question 5
const paragraphItems = document.querySelectorAll("p");

console.log(paragraphItems);

for (let i = 0; i < paragraphItems.length; i++) {
    paragraphItems[i].style.color = "red";
}


// Question 6
const resultsContainers = document.getElementsByClassName("results");

console.log(resultsContainers);

for (let i = 0; i < resultsContainers.length; i++) {
    resultsContainers[i].style.color = "yellow";
    resultsContainers[i].innerHTML = "<p>New Paragraph<p>";
}
