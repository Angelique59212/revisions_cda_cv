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

// JSON  ul

const requestUrl = "/JSON/ul.json";
let xhr = new XMLHttpRequest();
xhr.open("GET",requestUrl);
xhr.responseType = "json";

let nav = document.querySelector("nav");

function createLi(id) {
    let li = document.createElement("li");
    li.id = id;
    return li ;
}
    //Gérer la réponse
xhr.onload = () => {
    if (xhr.status === 200) {
        let response = xhr.response;
        let ul = document.createElement("ul");

        let liFace = createLi("Facebook");
        let liLink = createLi("Linkedin");
        let liGit = createLi("GitHub");

        let linkFace = document.createElement("a");
        linkFace.href = response.Ul.hrefFacebook;
        linkFace.innerHTML = response.Ul.nameFacebook;
        linkFace.target = response.Ul.targetHref;

        let linkLinkedin = document.createElement("a");
        linkLinkedin.href = response.Ul.hrefLinkedin;
        linkLinkedin.innerHTML = response.Ul.nameLinkedin;
        linkLinkedin.target = response.Ul.targetHref;

        let linkGit = document.createElement("a");
        linkGit.href = response.Ul.hrefGitHub;
        linkGit.innerHTML = response.Ul.nameGitHub;
        linkGit.target = response.Ul.targetHref;

        liFace.append(linkFace);
        ul.append(liFace);
        nav.append(ul);

        liLink.append(linkLinkedin);
        ul.append(liLink);
        nav.append(ul);

        liGit.append(linkGit);
        ul.append(liGit);
        nav.append(ul);

    }
}
xhr.send();


// JSON DD

const requestUrlDd = "/JSON/dd.json";
let xhrDd = new XMLHttpRequest();
xhrDd.open("GET",requestUrlDd);
xhrDd.responseType = "json";

let divHTML = document.getElementById("HTML");
let divCSS = document.getElementById("CSS");
let divJS = document.getElementById("JS");
let divPHP = document.getElementById("PHP");
let divSQL = document.getElementById("SQL");

xhrDd.onload = () => {
    if (xhrDd.status === 200) {
        let response = xhrDd.response;

        let ddHTML = document.createElement("dd");
        ddHTML.innerHTML = response.Dd.nameHTML;

        let ddCSS = document.createElement("dd");
        ddCSS.innerHTML = response.Dd.nameCSS;

        let ddJS = document.createElement("dd");
        ddJS.innerHTML = response.Dd.nameJS;

        let ddPHP = document.createElement("dd");
        ddPHP.innerHTML = response.Dd.namePHP;

        let ddSQL = document.createElement("dd");
        ddSQL.innerHTML = response.Dd.nameSQL;

        divHTML.append(ddHTML);
        divCSS.append(ddCSS);
        divJS.append(ddJS);
        divPHP.append(ddPHP);
        divSQL.append(ddSQL);
    }
}

xhrDd.send();


