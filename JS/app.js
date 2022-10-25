// title h1

let title = document.querySelectorAll("h1");

function animate() {
    for (let i = 0; i < title.length; i++) {
        title[i].style.opacity = "0.5";
    }
}

setTimeout(animate,1000);

function animateCome() {
    for (let i = 0; i < title.length; i++) {
        title[i].style.opacity = "1";
    }
}
setTimeout(animateCome,2000);

// title h2 / h3

let titleSecondary = document.querySelectorAll("h2,h3");

function animateColor() {
    for (let i = 0; i < titleSecondary.length ; i++) {
        titleSecondary[i].style.color = "#332e2e";
        titleSecondary[i].style.transform = "scale(1.2)";
    }
}
setTimeout(animateColor,3000);

function zoomCome() {
    for (let i = 0; i < titleSecondary.length ; i++) {
        titleSecondary[i].style.color = "white";
        titleSecondary[i].style.transform = "scale(1)";
    }
}
setTimeout(zoomCome,3500);

// section

let animatedSection = document.querySelectorAll(".fa-arrow-down");
let sectionHidden = document.querySelectorAll(".section");

function foldUp() {
        for (let i = 0; i < sectionHidden.length; i++) {
            animatedSection[i].addEventListener("click", function() {
            sectionHidden[i].classList.toggle('hidden');
            });
    }
}

foldUp();

// animate Letters with mouse over

let span = document.querySelectorAll("label > span");

let color = ['red', 'blue', 'pink', 'yellow', 'green', 'orange', 'grey', 'indianred', 'aqua', 'brown', 'coral' ]
let fontFamily = ['Arial Black', 'Century', 'Lucida Sans Typewriter'];

function changeColor() {
    for (let i = 0; i < span.length; i++) {
        span[i].addEventListener("mouseover", function () {
            span[i].style.color = color[random(color)];
            span[i].style.fontFamily = fontFamily[random(fontFamily)];
            setTimeout(function () {
                span[i].style.color = "white";
                span[i].style.fontFamily = "Calibri,sans-serif";
            },1000);
        })
    }
}

function random(array) {
    return Math.floor(Math.random() * array.length);
}

changeColor();

// figure / figCaption

const card = document.getElementById('card');

card.addEventListener("click",flipCard);

function flipCard() {
    card.classList.toggle("flipCard");
}

flipCard();



// //JSON
//
// let jsonSocial = JSON.stringify(jsonDataObjectSocial);
// document.querySelector("ul").innerHTML = jsonSocial;
//
// let jsonDataObjectSocial = ` {
//     "listReseaux" : {
//         <a href="https://www.linkedin.com/in/ang%C3%A9lique-dehainaut-89ab49223/" target="_blank">
//
//         <i class="fab fa-linkedin"></i> /Angélique Dehainaut</a>-->
//     }
// }`