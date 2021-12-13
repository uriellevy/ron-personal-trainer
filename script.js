//////TESTIMONIALS/////
const testimonialContainer = document.querySelector(".testimonial-container");
const testimonial = document.querySelector(".testimonial");
const userName = document.querySelector(".username");

const testimonials = [
  {
    name: "דורון שמש",
    text: "אם פעם הייתי סולד מכל דבר שקשור לספורט, היום זה הפך להיות אפילו קצת כיף. רון מעביר אימונים בצורה מאוד מקצועית ואם זאת גם בצורה מהנה ומגוונת (עם מוזיקה מעולה)",
  },
  {
    name: "נטלי אברהם",
    text: "אני מקבלת מרון הדרכות מקצועיות מאוד וממש מרוצה מהיחס שהוא נותן, כיף להתאמן איתו",
  },
  {
    name: "אסף בן-שמחון",
    text: "התחלתי את המסע עם רון כשהייתי עם אפס יכולת והיום, כמעט חצי שנה אחרי, אני מרגיש שליטה בכל שריר בגוף שלי, מעבר לאימון רון גם נותן הרבה ידע",
  },
  {
    name: "אביב מחלב",
    text: "אחרי 3 חודשים של אימונים עם רון אני מרגישה בריאה וחזקה יותר מאי פעם ",
  },
  {
    name: "נעמה ישי",
    text: "אין ספק שרון אחד המאמנים התותחים שפגשתי, ופגשתי לא מעט. הוא תמיד מנסה לגוון ולעשות אימונים שלא ישעממו אחרי כמה פעמים. בחור נהדר ללא ספק",
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
const auto = true;
const intervalTime = 7000;
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
