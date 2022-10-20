// title h1

let title = document.querySelectorAll("h1");

function animate() {
    for (let i = 0; i < title.length; i++) {
        // title[i].style.rotate = "90deg";
        // title[i].style.rotate = "180deg";
        // title[i].style.rotate = "260deg";
        // title[i].style.rotate = "360deg";
        // title[i].style.transform = "scale(1.5)";
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
let sectionHidden = document.querySelectorAll(".section")

function foldUp() {
        for (let i = 0; i < sectionHidden.length; i++) {
            animatedSection[i].addEventListener("click", function() {
            sectionHidden[i].style.display = "none";
            });
    }
}

function unFold() {
    for (let i = 0; i < sectionHidden.length; i++) {
        animatedSection[i].addEventListener("click", function() {
            sectionHidden[i].style.display = "block";
        });
    }
}

foldUp();
unFold();
