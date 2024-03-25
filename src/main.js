let iconNav = document.querySelector("#icon-arow");
let btnNav = document.querySelector("#btn-nav");
let details = document.querySelector("#details");

let details2 = document.querySelector("#details-2");
let btnNav2 = document.querySelector("#btn-nav-2");
let iconNav2 = document.querySelector("#icon-arow-2");

let details3 = document.querySelector("#details-3");
let btnNav3 = document.querySelector("#btn-nav-3");
let iconNav3 = document.querySelector("#icon-arow-3");

let details4 = document.querySelector("#details-4");
let btnNav4 = document.querySelector("#btn-nav-4");
let iconNav4 = document.querySelector("#icon-arow-4");

btnNav.addEventListener("click", () => {
  btnNav.classList.add("bg-cyan-500");
  btnNav.classList.replace("text-cyan-500", "text-white");
  iconNav.classList.remove("fa-chevron-down");
  iconNav.classList.add("fa-chevron-up");
  console.log(btnNav);

  if (!details == details.getAttribute("open")) {
    iconNav.classList.remove("fa-chevron-up");
    iconNav.classList.add("fa-chevron-down");
    btnNav.classList.remove("text-white");
    btnNav.classList.add("text-cyan-500");
    btnNav.classList.remove("bg-cyan-500");
  }
});

btnNav2.addEventListener("click", () => {
  btnNav2.classList.add("bg-cyan-500");
  btnNav2.classList.replace("text-cyan-500", "text-white");
  iconNav2.classList.remove("fa-chevron-down");
  iconNav2.classList.add("fa-chevron-up");
  console.log(btnNav);

  if (!details2 == details2.getAttribute("open")) {
    iconNav2.classList.remove("fa-chevron-up");
    iconNav2.classList.add("fa-chevron-down");
    btnNav2.classList.remove("text-white");
    btnNav2.classList.add("text-cyan-500");
    btnNav2.classList.remove("bg-cyan-500");
  }
});

btnNav3.addEventListener("click", () => {
  btnNav3.classList.add("bg-cyan-500");
  btnNav3.classList.replace("text-cyan-500", "text-white");
  iconNav3.classList.remove("fa-chevron-down");
  iconNav3.classList.add("fa-chevron-up");
  if (!details3 == details3.getAttribute("open")) {
    iconNav3.classList.remove("fa-chevron-up");
    iconNav3.classList.add("fa-chevron-down");
    btnNav3.classList.remove("text-white");
    btnNav3.classList.add("text-cyan-500");
    btnNav3.classList.remove("bg-cyan-500");
  }
});

btnNav4.addEventListener("click", () => {
  btnNav4.classList.add("bg-cyan-500");
  btnNav4.classList.replace("text-cyan-500", "text-white");
  iconNav4.classList.remove("fa-chevron-down");
  iconNav4.classList.add("fa-chevron-up");
  if (!details4 == details4.getAttribute("open")) {
    iconNav4.classList.remove("fa-chevron-up");
    iconNav4.classList.add("fa-chevron-down");
    btnNav4.classList.remove("text-white");
    btnNav4.classList.add("text-cyan-500");
    btnNav4.classList.remove("bg-cyan-500");
  }
});

// click di luar content
var d = [...document.querySelectorAll("details")];
document.addEventListener("click", function (e) {
  if (!d.some((f) => f.contains(e.target))) {
    d.forEach((f) => f.removeAttribute("open"));
    // details 1
    iconNav.classList.remove("fa-chevron-up");
    iconNav.classList.add("fa-chevron-down");
    btnNav.classList.replace("text-white", "text-cyan-500");
    btnNav.classList.remove("bg-cyan-500");

    // details 2
    iconNav2.classList.remove("fa-chevron-up");
    iconNav2.classList.add("fa-chevron-down");
    btnNav2.classList.replace("text-white", "text-cyan-500");
    btnNav2.classList.remove("bg-cyan-500");

    // details 3
    iconNav3.classList.remove("fa-chevron-up");
    iconNav3.classList.add("fa-chevron-down");
    btnNav3.classList.replace("text-white", "text-cyan-500");
    btnNav3.classList.remove("bg-cyan-500");

    // details 4
    iconNav4.classList.remove("fa-chevron-up");
    iconNav4.classList.add("fa-chevron-down");
    btnNav4.classList.replace("text-white", "text-cyan-500");
    btnNav4.classList.remove("bg-cyan-500");
  } else {
    d.forEach((f) => (!f.contains(e.target) ? f.removeAttribute("open") : ""));
    if (
      details2.addEventListener("click", () => {
        btnNav.classList.replace("text-white", "text-cyan-500");
        btnNav.classList.remove("bg-cyan-500");
        iconNav.classList.remove("fa-chevron-up");
        iconNav.classList.add("fa-chevron-down");

        btnNav3.classList.replace("text-white", "text-cyan-500");
        btnNav3.classList.remove("bg-cyan-500");
        iconNav3.classList.remove("fa-chevron-up");
        iconNav3.classList.add("fa-chevron-down");

        iconNav4.classList.remove("fa-chevron-up");
        iconNav4.classList.add("fa-chevron-down");
        btnNav4.classList.replace("text-white", "text-cyan-500");
        btnNav4.classList.remove("bg-cyan-500");
      })
    ) {
    } else if (
      details.addEventListener("click", () => {
        btnNav2.classList.replace("text-white", "text-cyan-500");
        btnNav2.classList.remove("bg-cyan-500");
        iconNav2.classList.remove("fa-chevron-up");
        iconNav2.classList.add("fa-chevron-down");

        btnNav3.classList.replace("text-white", "text-cyan-500");
        btnNav3.classList.remove("bg-cyan-500");
        iconNav3.classList.remove("fa-chevron-up");
        iconNav3.classList.add("fa-chevron-down");

        iconNav4.classList.remove("fa-chevron-up");
        iconNav4.classList.add("fa-chevron-down");
        btnNav4.classList.replace("text-white", "text-cyan-500");
        btnNav4.classList.remove("bg-cyan-500");
      })
    ) {
    } else if (
      details4.addEventListener("click", () => {
        console.log("details 4 click");
        btnNav.classList.replace("text-white", "text-cyan-500");
        btnNav.classList.remove("bg-cyan-500");
        iconNav.classList.remove("fa-chevron-up");
        iconNav.classList.add("fa-chevron-down");

        btnNav2.classList.replace("text-white", "text-cyan-500");
        btnNav2.classList.remove("bg-cyan-500");
        iconNav2.classList.remove("fa-chevron-up");
        iconNav2.classList.add("fa-chevron-down");

        iconNav3.classList.remove("fa-chevron-up");
        iconNav3.classList.add("fa-chevron-down");
        btnNav3.classList.replace("text-white", "text-cyan-500");
        btnNav3.classList.remove("bg-cyan-500");
      })
    ) {
    } else if (
      !details3.addEventListener("click", () => {
        btnNav.classList.replace("text-white", "text-cyan-500");
        btnNav.classList.remove("bg-cyan-500");
        iconNav.classList.remove("fa-chevron-up");
        iconNav.classList.add("fa-chevron-down");

        btnNav2.classList.replace("text-white", "text-cyan-500");
        btnNav2.classList.remove("bg-cyan-500");
        iconNav2.classList.remove("fa-chevron-up");
        iconNav2.classList.add("fa-chevron-down");

        iconNav4.classList.remove("fa-chevron-up");
        iconNav4.classList.add("fa-chevron-down");
        btnNav4.classList.replace("text-white", "text-cyan-500");
        btnNav4.classList.remove("bg-cyan-500");
      })
    ) {
    }
  }
});

// humberger
let humberger = document.querySelector("#humberger");
let navbar = document.querySelector("#navbar")
humberger.addEventListener("click", () => {
  humberger.classList.toggle("humberger-active")
  navbar.classList.toggle("navbar-active")
  humberger.classList.toggle("bg-cyan-500")
})


// diluar navbar
document.addEventListener("click", (e) => {
  if(!navbar.contains(e.target) && !humberger.contains(e.target)) {
    navbar.classList.remove("navbar-active")
  }
})


// navbar fixed
window.onscroll = () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
}