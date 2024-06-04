// Array of all themes
var themes = ["light-theme", "botanical-theme", "olivia-theme", "bento-theme", "mizu-theme", "emilia-theme"];

// load random theme when opening the page
window.onload = function() {
    //iterateTheme();
    randTheme();
}

// selects random theme from array themes
function selectRandomTheme() {
    var randomIndex = Math.floor(Math.random() * themes.length);
    return themes[randomIndex];
    //console.log(themes);
}

// iterates through the themes in themes array
var i = 0;

function iterateTheme() {
    var themes = ["light-theme", "botanical-theme", "olivia-theme", "bento-theme", "mizu-theme", "emilia-theme"];
    var i = parseInt(localStorage.getItem('themeIndex'), 10);
    if (isNaN(i)) {
        i = 0;
    }
    var current = themes[i];
    // ensuring if there is a prev theme 
    if (typeof iterateTheme.prev === 'undefined') {
        iterateTheme.prev = null;
    }
    // removing prev theme
    if (iterateTheme.prev) {
         document.body.classList.remove(iterateTheme.prev);
    }
    document.body.classList.add(current);
    iterateTheme.prev = current;
    i++;

    // cycles back to beggining of array
    if (i == themes.length+1) {
        i = 0;
    }
    localStorage.setItem('themeIndex', i);
    //console.log(current);
    //console.log(i);
}

// loads a random theme from the themes array
function randTheme() {
    var themes = ["light-theme", "botanical-theme", "olivia-theme", "bento-theme", "mizu-theme", "emilia-theme"];
    var i = Math.floor(Math.random() * themes.length);

    var current = themes[i];
    // ensuring if there is a prev theme 
    if (typeof iterateTheme.prev === 'undefined') {
        iterateTheme.prev = null;
    }
    // removing prev theme
    if (iterateTheme.prev) {
         document.body.classList.remove(iterateTheme.prev);
    }
    document.body.classList.add(current);
    iterateTheme.prev = current;

    //console.log(current);
    //console.log(i);
}

function dropdownShow(element) {
    var dropdown = element.nextElementSibling;
    if (dropdown.style.opacity === "1") {
        dropdown.style.opacity = "0";
    } else {
        dropdown.style.opacity = "1";
    }
}

function copyText(htmlElement){
    if (!htmlElement) {
        return;
    } 
    // temp input element stored
    let elementText = htmlElement.innerText;

    // creating input
    let inputElement = document.createElement('input');
    inputElement.setAttribute('value', elementText); // setting the value to elementText
    document.body.appendChild(inputElement);
    inputElement.select(); // selecting value in the input
    document.execCommand('copy');
    inputElement.parentNode.removeChild(inputElement); // removes input dom
}

// working on implementing custom doms rather than alerts

// centre icon 
document.querySelector('#disc').onclick = 
function () {
    copyText(document.querySelector('#disc-value'));
    alert("copied");
}
// from link dropdown
document.querySelector('#discord-id').onclick = 
function () {
    copyText(document.querySelector('#disc-value'));
    alert("copied");
}
