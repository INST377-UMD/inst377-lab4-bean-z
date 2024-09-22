const pageColorCycle = ["rgb(0, 64, 79)", "rgb(6, 40, 0)"];
let currentPageColor = 0;
function changePageColor() {
    currentPageColor = currentPageColor ^ 1;
    document
        .getElementsByTagName("body")[0]
        .style
        .backgroundColor = pageColorCycle[currentPageColor];
}

const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
function checkText() {
    const inputtedArbText = document
        .getElementById("validationForm")
        .elements["arbText"]
        .value;
    if (validation.test(inputtedArbText)) {
        alert("Special characters are not allowed in the Text Tester.");
        return false;
    }
    document
        .getElementById("validationForm")
        .elements["arbText"]
        .value = "";
    return false;
}

const textToAdd = " Add Text"
document
    .getElementById("addTextButton")
    .addEventListener("click", addText);
function addText() {
    document
        .getElementById("growableHeading")
        .innerHTML += textToAdd;
}