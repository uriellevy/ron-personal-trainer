//////TESTIMONIALS/////
const testimonialContainer = document.querySelector(".testimonial-container");
const testimonial = document.querySelector(".testimonial");
const userName = document.querySelector(".username");

const testimonials = [
  {
    name: "alice kein",
    text: "my name is thr fngdd love to read some stuff cause i dont have anythinf else to do. its not a cuincidence that i am right and i hate donald trump cause he is a stupis person .",
  },
  {
    name: "elvis presly",
    text: "my name is thr fngdd love to read some stuff cause i dont have anythinf else to do. its not a cuincidence that i am right and i hate donald trump cause he is a stupis person .",
  },
  {
    name: "naftali bennet",
    text: "my name is thr fngdd love to read some stuff cause i dont have anythinf  a cuincidence that i am right and i hate donald trump cause he is a stupis person .",
  },
  {
    name: "donald trump",
    text: "my name is thr fngdd love to read some stuff cause i dont have anythinf else to do. itsבהבהבסהסבהסבהסבה not a cuincidence that i am right and i hate donald trump cause he is a stupis person .",
  },
  {
    name: "kelvin klein",
    text: "my name is thr fngdd love to read some stuff cause i dont have anythinf elt and i hate donald trump cause he is a stupis person .",
  },
];

let idx = 1;

function updateTestimonial() {
  const { name, text } = testimonials[idx];
  testimonial.innerHTML = text;
  userName.innerHTML = name;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);

///NAVBAR///
const open_btn = document.querySelector(".open-btn");
const close_btn = document.querySelector(".close-btn");
const nav = document.querySelectorAll(".nav");
const logoOpen = document.querySelector(".logo-open");

open_btn.addEventListener("click", () => {
  nav.forEach((nav_el) => nav_el.classList.add("visible"));
  logoOpen.classList.add("none");
});

close_btn.addEventListener("click", () => {
  nav.forEach((nav_el) => nav_el.classList.remove("visible"));
  logoOpen.classList.remove("none");
});

///////SLIDER///////////
const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = false;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // get current class
  const current = document.querySelector(".current");
  //remove current class
  current.classList.remove(".current");

  //check for next slide

  if (current.nextElementSibling) {
    //add current to next sibling
    current.nextElementSibling.classList.add("current");
  } else {
    //add current to start
    slides[0].classList.add("current");
  }
  setTimeout(() => {
    current.classList.remove("current");
  });
};

const prevSlide = () => {
  // get current class
  const current = document.querySelector(".current");
  //remove current class
  current.classList.remove(".current");

  //check for next slide

  if (current.previousElementSibling) {
    //add current to next sibling
    current.previousElementSibling.classList.add("current");
  } else {
    //add current to last
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => {
    current.classList.remove("current");
  });
};

//button events
next.addEventListener("click", (e) => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);

    slideInterval = setInterval(nextSlide, intervalTime);
  }
});
prev.addEventListener("click", (e) => {
  prevSlide();
  clearInterval(slideInterval);

  slideInterval = setInterval(nextSlide, intervalTime);
});

///auto-slide
if (auto) {
  //run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}
