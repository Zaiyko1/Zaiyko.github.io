var counter = 0;

// allows for dropdown to somewhat work on mobile view
function dropdownShow(element) {
    var dropdown = element.nextElementSibling;
    if (dropdown.style.opacity === "1") {
        dropdown.style.opacity = "0";
    } else {
        dropdown.style.opacity = "1";
    }
}

// copies text to clipboard
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


// working on a dynamic solution that allows me to add new themes in the future
// this is temporarily hardcoded

// cycles through onclick and changes the theme colours. This is temporary I promise
function changeMode() {

    if(counter == 0){
        document.body.classList.toggle("light-theme");
        console.log(counter);
    } 
    else if(counter == 1){
        document.body.classList.toggle("light-theme");
        document.body.classList.toggle("botanical-theme");
        document.getElementById("botanical-dom").style.display= 'inline';
    }
    else if(counter == 2){
        document.body.classList.toggle("botanical-theme");
        document.getElementById("botanical-dom").style.display= 'none';
        document.getElementById("olivia-dom").style.display= 'inline';
        document.body.classList.toggle("olivia-theme"); 
    }
    else if(counter == 3){
        document.body.classList.toggle("olivia-theme"); 
        document.getElementById("olivia-dom").style.display= 'none';
        document.getElementById("bento-dom").style.display= 'inline';
        document.body.classList.toggle("bento-theme");
    }
    else if(counter == 4) {
        document.body.classList.toggle("bento-theme");
        document.getElementById("bento-dom").style.display= 'none';
        document.getElementById("mizu-dom").style.display= 'inline';
        document.body.classList.toggle("mizu-theme");
    }
    else if(counter == 5) {
        document.body.classList.toggle("mizu-theme");
        document.getElementById("mizu-dom").style.display= 'none';
        document.getElementById("emilia-dom").style.display= 'inline';
        document.body.classList.toggle("emilia-theme");
    }
    else {
        document.body.classList.toggle("emilia-theme");
        document.getElementById("emilia-dom").style.display= 'none';
        counter = -1;
    }
    counter++;
}
// working on dynamic solution
