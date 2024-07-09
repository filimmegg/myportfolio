const downloadButton = document.getElementById("downloadCV")
const filmFlixCode = document.getElementById("viewcode1")
const weatherAppCode = document.getElementById("viewcode2")
const todoListCode = document.getElementById("viewcode3")
const rpsGameCode = document.getElementById("viewcode4")


/* Download button */
downloadButton.addEventListener("click", function() {

    const cv = '/myCV1.pdf';
    const downloadLink = document.createElement('a');
    downloadLink.href = cv;

    downloadLink.setAttribute("download", "/myCV1.pdf");

    downloadLink.click();
})



// /* Projects' links */


filmFlixCode.addEventListener("click", function() {
    window.open("https://github.com/filimmegg/project4");
})

weatherAppCode.addEventListener("click", function() {
    window.open("https://github.com/filimmegg/project3");
})

todoListCode.addEventListener("click", function() {
    window.open("https://github.com/filimmegg/project2");
})

rpsGameCode.addEventListener("click", function() {
    window.open("https://github.com/filimmegg/project1")
})

