let title = document.querySelector("h1");

// function animateTitle(animate) {
//     let titleText = animate.textContent;
//     let speed= 100;
//     animate.innerHTML = "";
//
//     let index = 0;
//     function char() {
//         let span = animate.querySelectorAll(('span')[index]);
//         span.classList.add('disappears');
//         index++;
//         if (index === titleText.length) {
//             clearInterval(char);
//         }
//     }
//
//     let charInterval = setInterval(char,speed);
// }
//
// title.forEach(animateTitle);.

title.style.rotate = "5deg";