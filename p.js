// const acc = document.getElementsByClassName("according");
// const pn = document.querySelector(".panel");
// acc.addEventListener("click", function () {
//   acc.classList.toggle("active");
//   if (pn.style.maxHeight) {
//     pn.style.maxHeight = null;
//   } else {
//     pn.style.maxHeight = pn.scrollHeight + "px";
//   }
// });

var acc = document.getElementsByClassName("according");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

const accordionHeaders = document.querySelectorAll(".accordion__header");
const accordion = document.querySelector(".accordion");
accordionHeaders.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.parentElement);
    e.target.parentElement.classList.toggle("accordion__expanded");
  });
});
// accordionHeaders.addEventListener("click", function () {
//   accordionHeaders.classList.toggle(".accordion__expanded");
//   if (accordion.style.maxHeight) {
//     accordion.style.maxHeight = null;
//   } else {
//     accordion.style.maxHeight = accordion.scrollHeight + "px";
//   }
// });
