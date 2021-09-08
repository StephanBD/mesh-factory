function query(node, from = document) {
  return from.querySelector(node);
}
function queryAll(node) {
  return document.querySelectorAll(node);
}

const mouseCircle = document.querySelector(".mouse-circle");
const mouseDot = document.querySelector(".mouse-dot");
const circles = document.querySelectorAll(".circle");
const mainImg = document.querySelector(".main-circle img");

// ------------
let mouseCircleBool = true;

const mouseCircleFn = (x, y) => {
  mouseCircleBool &&
    (mouseCircle.style.cssText = `top:${y}px;left:${x}px;opacity:1`);

  mouseDot.style.cssText = `top:${y}px;left:${x}px;opacity:1`;
};

// const mouseDotFn = (x, y) => {
// };

let hoverElPosition = [];

const stickyElement = (x, y, hoverEl) => {
  // sticky
  // console.log(hoverEl);
  if (hoverEl.classList.contains("sticky")) {
    // console.log("sticky");
    hoverElPosition.length < 1 &&
      (hoverElPosition = [hoverEl.offsetTop, hoverEl.offsetLeft]);

    hoverEl.style.cssText = `top:${y}px;left:${x}px;`;
    if (
      hoverEl.offsetTop <= hoverElPosition[0] - 100 ||
      hoverEl.offsetTop >= hoverElPosition[0] + 100 ||
      hoverEl.offsetLeft <= hoverElPosition[1] - 100 ||
      hoverEl.offsetLeft >= hoverElPosition[1] + 100
    ) {
      hoverEl.style.cssText = "";
      hoverElPosition = [];
    }
    hoverEl.onmouseleave = () => {
      hoverEl.style.cssText = "";
      hoverElPosition = [];
    };
  }
  // console.log(hoverElPosition);
};

// mouse circle -----------------------------

const mouseCircleTransform = (hoverEl) => {
  if (hoverEl.classList.contains("pointer-enter")) {
    hoverEl.onmousemove = () => {
      mouseCircleBool = false;
      mouseCircle.style.cssText = `
        width:${hoverEl.getBoundingClientRect().width}px;
        height:${hoverEl.getBoundingClientRect().height}px;
        top:${hoverEl.getBoundingClientRect().top}px;
        left:${hoverEl.getBoundingClientRect().left}px;
        opacity:1;
        transform:translate(0,0);
        animation:none;
        border-radius:${
          getComputedStyle(hoverEl).borderBottomLeftRadius
        };       
      `;
    };

    hoverEl.onmouseleave = () => {
      mouseCircleBool = true;
    };

    document.onscroll = () => {
      if (!mouseCircleBool) {
        mouseCircle.style.top = `${hoverEl.getBoundingClientRect().top}px`;
      }
    };
  }
};

// -----------------------------------
document.body.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  mouseCircleFn(x, y);
  // mouseDotFn(x, y);
  animateCircles(e, x, y);

  const hoverEl = document.elementFromPoint(x, y);
  stickyElement(x, y, hoverEl);

  mouseCircleTransform(hoverEl);
});

document.body.addEventListener("mouseleave", (e) => {
  mouseCircle.style.opacity = "0";
  mouseDot.style.opacity = "0";
});

// ----------------
let mX = 0;
let mY = 0;
const z = 100;
const animateCircles = (e, x, y) => {
  if (x < mX) {
    circles.forEach((circle) => {
      circle.style.left = `${z}px`;
    });
    mainImg.style.left = `${z}px`;
  } else if (x > mX) {
    circles.forEach((circle) => {
      circle.style.left = `-${z}px`;
    });
    mainImg.style.left = `-${z}px`;
  }
  if (y < mY) {
    circles.forEach((circle) => {
      circle.style.top = `${z}px`;
    });
    mainImg.style.top = `${z}px`;
  } else if (y > mY) {
    circles.forEach((circle) => {
      circle.style.top = `-${z}px`;
    });
    mainImg.style.top = `-${z}px`;
  }

  mX = e.clientX;
  mY = e.clientY;
};

// main btn -----------------------
const mainBtns = document.querySelectorAll(".main-btn");
mainBtns.forEach((mainBtn) => {
  let ripple;
  mainBtn.addEventListener("mouseenter", (e) => {
    const left = e.clientX - e.target.getBoundingClientRect().left;
    const top = e.clientY - e.target.getBoundingClientRect().top;
    // console.log(left, top);

    ripple = document.createElement("div");
    ripple.classList.add("ripple");
    ripple.style.left = `${left}px`;
    ripple.style.top = `${top}px`;
    mainBtn.append(ripple);
  });

  mainBtn.addEventListener("mouseleave", () => {
    mainBtn.removeChild(ripple);
  });
});

// ------------------

const aboutMeText = query(".about-me-text");
const aboutMeTextContent =
  "I am a designer & I create awards winning websites with the best user experience & I do not talk much, just contact me. :)";

Array.from(aboutMeTextContent).forEach((char) => {
  const span = document.createElement("span");
  span.textContent = char;
  aboutMeText.appendChild(span);
  span.addEventListener("mouseenter", (e) => {
    e.target.style.animation = "aboutMeTextAnim 10s infinite";
  });
});

// projects-----------------------
const projects = queryAll(".project");
const container = query(".container");
const projectHideBtn = query(".project-hide-btn");

projects.forEach((project, i) => {
  project.addEventListener("mouseenter", () => {
    project.firstElementChild.style.top = `-${
      project.firstElementChild.offsetHeight - project.offsetHeight + 20
    }px`;
  });
  project.addEventListener("mouseleave", () => {
    // console.log(project.firstElementChild);
    project.firstElementChild.style.top = `2rem`;
  });
  // big
  project.addEventListener("click", () => {
    document.body.style.overflowY = "hidden";
    const bigImgWrapper = document.createElement("div");
    bigImgWrapper.className = "project-img-wrapper";
    container.appendChild(bigImgWrapper);

    const bigImg = document.createElement("img");
    bigImg.className = "project-img";
    const imgPath = project.firstElementChild.getAttribute("src");
    bigImg.setAttribute("src", imgPath);
    bigImgWrapper.appendChild(bigImg);

    progressBarFn(bigImgWrapper);
    bigImgWrapper.onscroll = () => {
      progressBarFn(bigImgWrapper);
    };

    mouseCircle.style.opacity = "0";

    projectHideBtn.classList.add("change");

    projectHideBtn.onclick = () => {
      // console.log("clicked");
      projectHideBtn.classList.remove("change");
      bigImgWrapper.remove();
      document.body.style.overflowY = "scroll";

      document.removeEventListener("scroll", scrollFn);
      document.addEventListener("scroll", scrollFn);
      progressBarFn();
    };
  });
  // ----------
  i >= 6 && (project.style.cssText = `display:none;opacity:0;`);
});
const projectsBtn = query(".projects-btn");
const projectsBtnText = query(".projects-btn span");
let showHideBool = true;
const section3 = query(".section-3");

const showProjects = (project, i) => {
  setTimeout(() => {
    project.style.display = "flex";
    section3.scrollIntoView({ block: "end" });
  }, 600);
  setTimeout(() => {
    project.style.opacity = "1";
  }, i * 200);
};
const hideProjects = (project, i) => {
  setTimeout(() => {
    project.style.display = "none";
    section3.scrollIntoView({ block: "end" });
  }, 1200);
  setTimeout(() => {
    project.style.opacity = "0";
  }, i * 100);
};

projectsBtn.addEventListener("click", (e) => {
  e.preventDefault();

  query(".main-btn-content", projectsBtn).classList.toggle("change");

  showHideBool
    ? (projectsBtnText.textContent = "Show less")
    : (projectsBtnText.textContent = "Show more");

  projects.forEach((project, i) => {
    i >= 6 &&
      (showHideBool ? showProjects(project, i) : hideProjects(project, i));
  });
  showHideBool = !showHideBool;
});

// section 4 -----------------------------------------
queryAll(".service-btn").forEach((service) => {
  service.addEventListener("click", (e) => {
    e.preventDefault();
    const serviceText = service.nextElementSibling;
    // console.log(serviceText);
    serviceText.classList.toggle("change");

    const rightPosition = serviceText.classList.contains("change")
      ? `calc(100% - ${getComputedStyle(service.firstElementChild).width})`
      : 0;
    service.firstElementChild.style.right = rightPosition;
    // service.firstElementChild.style.right = "auto";
  });
});

// form 5 ----------------------------------

const formHeading = query(".form-heading");
const formInputs = queryAll(".contact-form-input");

formInputs.forEach((input) => {
  input.addEventListener("focus", () => {
    formHeading.style.opacity = "0";
    setTimeout(() => {
      formHeading.textContent = `Your ${input.placeholder}`;
      formHeading.style.opacity = "1";
    }, 300);
  });
  input.addEventListener("blur", () => {
    formHeading.style.opacity = "0";
    setTimeout(() => {
      formHeading.textContent = `Let´s talk`;
      formHeading.style.opacity = "1";
    }, 300);
  });
});

//  slideshow ---------------------
const slideshow = query(".slideshow");

setInterval(() => {
  const firstIcon = slideshow.firstElementChild;
  firstIcon.classList.add("fade-out");
  const thirdIcon = slideshow.children[3];
  thirdIcon.classList.add("light");
  // const thirdIcon = slideshow.children[3];
  thirdIcon.previousElementSibling.classList.remove("light");
  setTimeout(() => {
    slideshow.removeChild(firstIcon);
    slideshow.appendChild(firstIcon);
    setTimeout(() => {
      firstIcon.classList.remove("fade-out");
    }, 500);
  }, 500);
}, 3000);

// navbar ----------------------------
const menuIcon = query(".menu-icon");
const navbar = query(".navbar");
const scrollFn = () => {
  menuIcon.classList.add("show-menu-icon");
  navbar.classList.add("hide-navbar");
  if (window.scrollY === 0) {
    menuIcon.classList.remove("show-menu-icon");
    navbar.classList.remove("hide-navbar");
  }

  progressBarFn();
};

document.addEventListener("scroll", scrollFn);

menuIcon.addEventListener("click", () => {
  menuIcon.classList.remove("show-menu-icon");
  navbar.classList.remove("hide-navbar");
});

// progress ------------------------------
const sections = queryAll("section");
const halfCircles = queryAll(".half-circle");
const progressBar = query(".progress-bar");
const halfCircleTop = query(".half-circle-top");
const progressBarCircle = query(".progress-bar-circle");

let scrolledPortion = 0;
let scrollBool = false;
let imageWrapper = false;

const progressBarFn = (bigImgWrapper) => {
  imageWrapper = bigImgWrapper;
  let pageHeight = 0;
  const pageViewPortheight = window.innerHeight;
  if (!imageWrapper) {
    pageHeight = document.documentElement.scrollHeight;
    scrolledPortion = window.pageYOffset;
  } else {
    pageHeight = imageWrapper.firstElementChild.scrollHeight;
    scrolledPortion = imageWrapper.scrollTop;
  }

  const scrolledPortionDegree =
    (scrolledPortion / (pageHeight - pageViewPortheight)) * 360;
  // console.log(scrolledPortionDegree);
  halfCircles.forEach((el) => {
    el.style.transform = `rotate(${scrolledPortionDegree}deg)`;
    if (scrolledPortionDegree >= 180) {
      halfCircles[0].style.transform = `rotate(180deg)`;
      halfCircleTop.style.opacity = "0";
    } else {
      halfCircleTop.style.opacity = "1";
    }
  });
  // click
  scrollBool = scrolledPortion + pageViewPortheight === pageHeight;

  if (scrollBool) {
    progressBarCircle.style.transform = "rotate(180deg)";
  } else {
    progressBarCircle.style.transform = "rotate(0)";
  }
};

progressBar.addEventListener("click", (e) => {
  e.preventDefault();
  if (!imageWrapper) {
    const sectionPositions = Array.from(sections).map(
      (section) => scrolledPortion + section.getBoundingClientRect().top
    );
    const position = sectionPositions.find((sectionPosition) => {
      return sectionPosition > scrolledPortion;
    });
    scrollBool ? window.scrollTo(0, 0) : window.scrollTo(0, position);
  } else {
    scrollBool
      ? imageWrapper.scrollTo(0, 0)
      : imageWrapper.scrollTo(0, imageWrapper.scrollHeight);
  }
});
progressBarFn();

// form validation ------------------------------------------------
const form = query(".contact-form");
const username = query("#name");
const email = query("#email");
const subject = query("#subject");
const message = query("#message");
const messages = queryAll(".message");

const error = (input, message) => {
  input.nextElementSibling.classList.add("error");
  input.nextElementSibling.textContent = message;
};
const success = (input) => {
  input.nextElementSibling.classList.remove("error");
};

const checkRequireFields = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      error(input, `${input.id} is required`);
    } else {
      success(input);
    }
  });
};

const checkLength = (input, min) => {
  if (input.value.trim().length < min) {
    error(input, `${input.id} must be at least ${min} characters`);
  } else {
    success(input);
  }
};

const checkEmail = (input) => {
  const regEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regEx.test(input.value.trim())) {
    success(input);
  } else {
    error(input, `Email is not valid`);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkLength(username, 2);
  checkLength(subject, 2);
  checkLength(message, 10);
  checkEmail(email);
  checkRequireFields([username, email, subject, message]);
});
