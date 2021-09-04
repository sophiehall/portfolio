window.addEventListener("load", function (event) {
  lazyload();
});

// toggle open side menu when click hamburger
$(".menu-toggle").on("click", function () {
  $(".slide-menu").toggleClass("open");
  return false;
});

$("nav a").on("click", function () {
  $(".slide-menu").removeClass("open");
  $(".hamburger").removeClass("is-active");
  $("body").removeClass("lock-scroll");
});

// lock the body when menu is open
function lockScroll() {
  if ($("body").hasClass("lock-scroll")) {
    $("body").removeClass("lock-scroll");
  } else {
    $("body").addClass("lock-scroll");
  }
}
// add animation to hamburger when clicked
$(document).ready(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
    $(".line").css("background-color", "black");
  });
});

// Active state on numbered project menu
const sections = $("section"),
  nav = $("nav"),
  navHeight = nav.innerHeight();

$(window).on("scroll", function () {
  const curPos = $(this).scrollTop();

  sections.each(function () {
    const top = $(this).offset().top - navHeight,
      bottom = top + $(this).innerHeight();

    if (curPos >= top && curPos <= bottom) {
      nav.find("a").removeClass("active");
      sections.removeClass("active");

      $(this).addClass("active");
      nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
    }
  });
});

// 1. whenever we click a js scroll link, we want to run a function
// 2. we want to stop the link from jumping straight to our section (its default behaviour)
// 3. we want to find out the href attribute and then grab that element
// 4. then scroll to it using scrollIntoView
const scrollLinks = document.querySelectorAll(".js-scroll");

// console.log(scrollLinks)

scrollLinks.forEach((link) => {
  // addEventListener is just the same as jQuerys .on()
  // we can listen for events on elements and then run a function
  link.addEventListener("click", (event) => {
    // using the event keyword we get access to a snapshot when we click on our link

    console.log(event);
    // this is equivalent to return false in jQuery
    // it will block the dafault browser behaviour of the link jumping to the href attribute
    event.preventDefault();

    const href = link.getAttribute("href");
    console.log(href);

    // here we use the new scrollIntoView feature to scroll to our desired element in a smooth fashion
    document.querySelector(href).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// run a function for sections with a white background,
// when section has a class .white-header, nav elements change colour from black to white
$(window).scroll(function () {
  if (
    Array.prototype.some.call($(".white-header"), function (element) {
      scrollPosition = $(window).scrollTop();
      elementTop = $(element).offset().top;
      elementBottom = $(element).outerHeight() + elementTop;

      if (
        scrollPosition > elementTop - 48 &&
        scrollPosition < elementBottom - 60
      ) {
        return true;
      } else {
        return false;
      }
    })
  ) {
    $(".sitetitle, .btn").css("color", "#fff"),
      $(".line").css("background-color", "#fff"),
      $(".scroll-down-div").css("background-color", "#fff"),
      $(".arrow-cursor").css("background-color", "#fff");
  } else {
    $(".sitetitle, .btn").css("color", "#222"),
      $(".line").css("background-color", "currentColor"),
      $(".scroll-down-div").css("background-color", "#222"),
      $(".arrow-cursor").css("background-color", "#222");
  }
});

// custom cursors
$(document).bind("mousemove", function (e) {
  $("div.arrow-cursor").css({
    left: e.pageX + 5,
    top: e.pageY,
  });
});
// All Work page
$(document).ready(function () {
  $(".clickable-area a").mouseover(function () {
    $("div.arrow-cursor").css("display", "block");
    $("div.arrow-cursor").css("background-color", "#fff");
    $;
  });
  $(".clickable-area").mouseout(function () {
    $("div.arrow-cursor").css("display", "none");
  });
});
// Homepage
$(document).ready(function () {
  $(".list a").mouseover(function () {
    $("div.arrow-cursor").css("display", "block");
    $("div.arrow-cursor").css("background-color", "#fff");
  });
  $(".list a").mouseout(function () {
    $("div.arrow-cursor").css("display", "none");
  });
});

// All Work page
// change bg on mouseover
$(document).ready(function () {
  $(".image-9").mouseover(function () {
    $("div.image-9").css("background-color", "#150f3c");
  });
  $(".image-9").mouseout(function () {
    $("div.image-9").css("background-color", "#256BF9");
  });
});

// All Project Pages
// On mouseover, update the previous and next project span content with the name of the previous and next projects
$(document).ready(function () {
  const text = $("span.previous-project").attr("data-id");
  $("span.previous-project").mouseover(function () {
    $("span.previous-project").html(text);
  });
  $("span.previous-project").mouseout(function () {
    $("span.previous-project").html("Previous");
  });
});

$(document).ready(function () {
  const text = $("span.next-project").attr("data-id");
  $("span.next-project").mouseover(function () {
    $("span.next-project").html(text);
  });
  $("span.next-project").mouseout(function () {
    $("span.next-project").html("Next");
  });
});

// Simple Slideshow
// Reference: https://www.sitepoint.com/make-a-simple-javascript-slideshow-without-jquery/
// TODO: check if still using the slide carousel or delete
var slides = document.querySelectorAll("#slides .slide");
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 6000);

function nextSlide() {
  slides[currentSlide].className = "slide";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = "slide showing";
}

// Marketplace Design System - Header Theme
const mqDark = window.matchMedia("(prefers-color-scheme: dark)");

const darkModeToggle = document.querySelector("a.dark-mode-toggle");
const darkModeToggleText = darkModeToggle.querySelector("span");

const bodyTag = document.querySelector("body");

darkModeToggle.addEventListener("click", function () {
  bodyTag.classList.toggle("dark-theme");

  if (bodyTag.classList.contains("dark-theme")) {
    darkModeToggleText.innerHTML = "Dark theme";
  } else {
    darkModeToggleText.innerHTML = "Light theme";
  }
});

const updateDarkMode = function () {
  if (mqDark.matches) {
    console.log("dark mode");
    bodyTag.classList.add("dark-theme");
    darkModeToggleText.innerHTML = "Dark theme";
  } else {
    console.log("light mode");
    bodyTag.classList.remove("dark-theme");
    darkModeToggleText.innerHTML = "Light theme";
  }
};

updateDarkMode();
mqDark.addListener(function () {
  updateDarkMode();
});
