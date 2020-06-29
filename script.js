window.addEventListener("load", () => {
  const preload = document.querySelector(".preload");

  preload.classList.add("preload-finish");
});

//navbars setting
const open = document.getElementById("open");
const close = document.getElementById("close");
const newheader = document.querySelector(".newheader");

const openFixed = document.getElementsByClassName("open");

//navbar list active when clicked
const navbarList = document.querySelectorAll(".list");
const navbarText = document.querySelectorAll(".list a");
const underline = document.querySelectorAll(".newheader .unordered .underline");

navbarList[0].addEventListener("click", () => {
  underline[0].classList.add(`list-active${0}`);
  navbarText[0].classList.add("list-clicked");
  for (var i = 0; i < navbarList.length; i++) {
    if (i === 0) {
      continue;
    }
    if (underline[0].classList.contains(`list-active${i}`)) {
      underline[0].classList.remove(`list-active${i}`);
      navbarText[i].classList.remove("list-clicked");
    }
  }
});

navbarList[1].addEventListener("click", () => {
  underline[0].classList.add(`list-active${1}`);
  navbarText[1].classList.add("list-clicked");
  for (var i = 0; i < navbarList.length; i++) {
    if (i === 1) {
      continue;
    }
    if (underline[0].classList.contains(`list-active${i}`)) {
      underline[0].classList.remove(`list-active${i}`);
      navbarText[i].classList.remove("list-clicked");
    }
  }
});

navbarList[2].addEventListener("click", () => {
  underline[0].classList.add(`list-active${2}`);
  navbarText[2].classList.add("list-clicked");
  for (var i = 0; i < navbarList.length; i++) {
    if (i === 2) {
      continue;
    }
    if (underline[0].classList.contains(`list-active${i}`)) {
      underline[0].classList.remove(`list-active${i}`);
      navbarText[i].classList.remove("list-clicked");
    }
  }
});

navbarList[3].addEventListener("click", () => {
  underline[0].classList.add(`list-active${3}`);
  navbarText[3].classList.add("list-clicked");
  for (var i = 0; i < navbarList.length; i++) {
    if (i === 3) {
      continue;
    }
    if (underline[0].classList.contains(`list-active${i}`)) {
      underline[0].classList.remove(`list-active${i}`);
      navbarText[i].classList.remove("list-clicked");
    }
  }
});
navbarList[4].addEventListener("click", () => {
  underline[0].classList.add(`list-active${4}`);
  navbarText[4].classList.add("list-clicked");
  for (var i = 0; i < navbarList.length; i++) {
    if (i === 4) {
      continue;
    }
    if (underline[0].classList.contains(`list-active${i}`)) {
      underline[0].classList.remove(`list-active${i}`);
      navbarText[i].classList.remove("list-clicked");
    }
  }
});
navbarList[5].addEventListener("click", () => {
  underline[0].classList.add(`list-active${5}`);
  navbarText[5].classList.add("list-clicked");
  for (var i = 0; i < navbarList.length; i++) {
    if (i === 5) {
      continue;
    }
    if (underline[0].classList.contains(`list-active${i}`)) {
      underline[0].classList.remove(`list-active${i}`);
      navbarText[i].classList.remove("list-clicked");
    }
  }
});

//Collapse Navbar
const listItems = document.querySelectorAll(".list a");
const lines = document.querySelectorAll(".line");

const go = () => {
  document.addEventListener("scroll", e => {
    var scrollY = window.scrollY;
    var scrollHeight = newheader.scrollHeight;

    if (scrollY > scrollHeight) {
      newheader.classList.add("collapse");
      listItems.forEach(list => {
        list.classList.add("change-color");
      });
      lines.forEach(line => {
        line.classList.add("change-bg");
      });
    } else {
      newheader.classList.remove("collapse");
      listItems.forEach(list => {
        list.classList.remove("change-color");
      });
      lines.forEach(line => {
        line.classList.remove("change-bg");
      });
    }
  });
};
go();

//Navlinks when the hamburger is clicked
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".unordered");
const links = document.querySelectorAll(".unordered li");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  lines.forEach(line => {
    line.classList.toggle("change-bg");
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      if (navLinks.classList.contains("open")) {
        navLinks.classList.remove("open");
      }
    });
  });
});

var scroll =
  window.requestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };

// console.log(scroll);

var elementsToShow = document.querySelectorAll(".show-on-scroll");
var titlesToShow = document.querySelectorAll(".show-on-scroll-title");
const skillToShow = document.querySelectorAll(".skill");

var showNavbar = document.querySelectorAll(".show-navbar");
var header = document.querySelectorAll(".newheader");
const active = document.querySelectorAll(".active");

var loop = () => {
  elementsToShow.forEach(element => {
    if (isElementInViewport(element)) {
      element.classList.add("is-visible");
      skillToShow[0].classList.add("move-1");
      skillToShow[1].classList.add("move-2");
      skillToShow[2].classList.add("move-3");
      skillToShow[3].classList.add("move-4");
      skillToShow[4].classList.add("move-5");
      skillToShow[5].classList.add("move-6");
    }
  });
  titlesToShow.forEach(element => {
    if (isElementInViewport(element)) {
      return element.classList.add("is-visible-title");
    }
  });

  if (isElementInViewport(active[0])) {
    underline[0].classList.add(`list-active${0}`);
    navbarText[0].classList.add("list-clicked");
    for (var i = 0; i < navbarList.length; i++) {
      if (i === 0) {
        continue;
      }
      if (underline[0].classList.contains(`list-active${i}`)) {
        underline[0].classList.remove(`list-active${i}`);
        navbarText[i].classList.remove("list-clicked");
      }
    }
  } else if (isElementInViewport(active[1])) {
    underline[0].classList.add(`list-active${1}`);
    navbarText[1].classList.add("list-clicked");
    for (var i = 0; i < navbarList.length; i++) {
      if (i === 1) {
        continue;
      }
      if (underline[0].classList.contains(`list-active${i}`)) {
        underline[0].classList.remove(`list-active${i}`);
        navbarText[i].classList.remove("list-clicked");
      }
    }
  } else if (isElementInViewport(active[2])) {
    underline[0].classList.add(`list-active${2}`);
    navbarText[2].classList.add("list-clicked");
    for (var i = 0; i < navbarList.length; i++) {
      if (i === 2) {
        continue;
      }
      if (underline[0].classList.contains(`list-active${i}`)) {
        underline[0].classList.remove(`list-active${i}`);
        navbarText[i].classList.remove("list-clicked");
      }
    }
  } else if (isElementInViewport(active[3])) {
    underline[0].classList.add(`list-active${3}`);
    navbarText[3].classList.add("list-clicked");
    for (var i = 0; i < navbarList.length; i++) {
      if (i === 3) {
        continue;
      }
      if (underline[0].classList.contains(`list-active${i}`)) {
        underline[0].classList.remove(`list-active${i}`);
        navbarText[i].classList.remove("list-clicked");
      }
    }
  } else if (isElementInViewport(active[4])) {
    underline[0].classList.add(`list-active${4}`);
    navbarText[4].classList.add("list-clicked");
    for (var i = 0; i < navbarList.length; i++) {
      if (i === 4) {
        continue;
      }
      if (underline[0].classList.contains(`list-active${i}`)) {
        underline[0].classList.remove(`list-active${i}`);
        navbarText[i].classList.remove("list-clicked");
      }
    }
  } else if (isElementInViewport(active[5])) {
    underline[0].classList.add(`list-active${5}`);
    navbarText[5].classList.add("list-clicked");
    for (var i = 0; i < navbarList.length; i++) {
      if (i === 5) {
        continue;
      }
      if (underline[0].classList.contains(`list-active${i}`)) {
        underline[0].classList.remove(`list-active${i}`);
        navbarText[i].classList.remove("list-clicked");
      }
    }
  }

  scroll(loop);
};

loop();

//Checking if the element is in the viewport
// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  //check if jquery is defined
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  // console.log(el);
  var rect = el.getBoundingClientRect(); // rectangle around the element
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
}
