gsap.registerPlugin(Flip);
// Variables du Loading Screen
const endboxNumber = 1;
const container = document.querySelector(".gigaboxend");
const gigabox = document.querySelector(".gigabox");
const boxAll = document.querySelectorAll(".boxAll");
const endboxAll = document.querySelectorAll("endboxAll");
const loading = document.querySelector(".loading-screen");
const endbox1 = document.querySelector(".endbox1");
const endbox2 = document.querySelector(".endbox2");
const endbox3 = document.querySelector(".endbox3");
const endbox4 = document.querySelector(".endbox4");
const endbox5 = document.querySelector(".endbox5");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
// variable des swiper
let swiper1, swiper2, swiper3, swiper4;

// Variable global
// const modalimg = document.querySelector(".modal-body-image");
let imageModalTargetId;
let parent;
let target;
const modal = new bootstrap.Modal(document.querySelector("#exampleModal"));
const hero = document.querySelector(".hero");
const mainTitle = document.querySelector(".main-title");
// Event Listeners
const verif = document
  .querySelector("#verification")
  .addEventListener("click", verification);

// Animation Loading Screen
glop();
function glop() {
  let state1 = Flip.getState(".box1");
  endbox1.appendChild(box1);
  Flip.from(state1, {
    duration: 0.8,
    ease: "power1.out",
    backgroundColor: "#E50914",
    boxShadow: "0px 0px 20px red",
  });
  let state2 = Flip.getState(".box2");
  endbox2.appendChild(box2);
  Flip.from(state2, {
    duration: 0.8,
    ease: "power1.out",
    delay: 0.4,
    backgroundColor: "#E50914",
    boxShadow: "0px 0px 20px red",
  });
  let state3 = Flip.getState(".box3");
  endbox3.appendChild(box3);
  Flip.from(state3, {
    duration: 0.8,
    ease: "power1.out",
    delay: 0.8,
    backgroundColor: "#E50914",
    boxShadow: "0px 0px 20px red",
  });
  let state4 = Flip.getState(".box4");
  endbox4.appendChild(box4);
  Flip.from(state4, {
    duration: 0.8,
    ease: "power1.out",
    delay: 1.2,
    backgroundColor: "#E50914",
    boxShadow: "0px 0px 20px red",
  });
  let state5 = Flip.getState(".box5");
  endbox5.appendChild(box5);
  Flip.from(state5, {
    duration: 0.8,
    ease: "power1.out",
    delay: 1.6,
    backgroundColor: "#E50914",
    boxShadow: "0px 0px 20px red",
  });
  setTimeout(() => {
    container.style.boxShadow = "0px 0px 2000px red";
    container.style.border = "none";
  }, 2350);
  setTimeout(() => {
    gsap.to(loading, { duration: 0.6, scale: 0, opacity: 0 });
  }, 3500);
  setTimeout(() => {
    loading.classList.add("display-none");
  }, 4100);
}
// FIN DU LOADING SCREEN

// variable JSON
fetch("movie.json")
  .then((res) => res.json())
  .then((data) => {
    maFonctionquifaittout(data);
  });
function maFonctionquifaittout(data) {}

// FILMS TROUVES
function createSwiper1() {
  const slides = document.querySelector(".liste-film-found");

  const swiper = new Swiper(".swiper1", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 3,
    spaceBetween: 3,
    breakpoints: {
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 6,
      },
      1200: {
        slidesPerView: 8,
      },
    },
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

// SERIES TROUVEES
function createSwiper2() {
  const slides = document.querySelector(".liste-serie-found");

  const swiper = new Swiper(".swiper2", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 3,
    spaceBetween: 3,
    breakpoints: {
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 6,
      },
      1200: {
        slidesPerView: 8,
      },
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

// FILMS PAS TROUVES
fetch("movie.json")
  .then((res) => res.json())
  .then((data) => {
    const slides = document.querySelector(".liste-film-notfound");
    data.medias.movie.forEach((movie, index) => {
      const element = document.createElement("div");
      element.classList.add("swiper-slide", "liste-film", "swiper-grey");
      element.id = movie.title.replace(/\s/g, "-");
      element.style.backgroundImage = `url(${movie.picture})`;
      element.onclick = function (e) {
        const modalimg = document.querySelector(".modal-body-image");
        modal.show();
        target = e.target;
        imageModalTargetId = target.id;
        parent = document.querySelector(".swiper1");
        let targetstyle = getComputedStyle(target).backgroundImage;
        modalimg.id = target.id.replace(/-/g, " ").toLowerCase();
        modalimg.style.backgroundImage = targetstyle;
      };
      slides.appendChild(element);
    });
    const swiper = new Swiper(".swiper3", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      slidesPerView: 3,
      spaceBetween: 3,
      breakpoints: {
        768: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 6,
        },
        1200: {
          slidesPerView: 8,
        },
      },
      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });

// SERIES PAS TROUVEES
fetch("movie.json")
  .then((res) => res.json())
  .then((data) => {
    const slides = document.querySelector(".liste-serie-notfound");
    data.medias.serie.forEach((movie, index) => {
      const element = document.createElement("div");
      element.classList.add("swiper-slide", "liste-serie", "swiper-grey");
      element.id = movie.title.replace(/\s/g, "-");
      element.style.backgroundImage = `url(${movie.picture})`;
      element.onclick = function (e) {
        const modalimg = document.querySelector(".modal-body-image");
        modal.show();
        target = e.target;
        imageModalTargetId = target.id;
        parent = document.querySelector(".swiper2");
        let targetstyle = getComputedStyle(target).backgroundImage;
        modalimg.id = target.id.replace(/-/g, " ").toLowerCase();
        modalimg.style.backgroundImage = targetstyle;
      };

      slides.appendChild(element);
    });
    swiper4 = new Swiper(".swiper4", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      slidesPerView: 3,
      spaceBetween: 3,
      breakpoints: {
        768: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 6,
        },
        1200: {
          slidesPerView: 8,
        },
      },
      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });

function verification() {
  const inputResp = document.querySelector("#reponse");
  let imagecible = document.querySelector(".modal-body-image");
  let targetid = imagecible.id.replace(/-/g, " ");
  targetid = targetid.toLowerCase();
  let response = document.querySelector("#reponse").value;
  response = response.toLowerCase();
  if (response == targetid) {
    imagecible.innerHTML = "Bravo !";
    inputResp.style.backgroundColor = "#adff2f";
    inputResp.style.outline = "1px solid green";
    document.querySelector("body").style.pointerEvents = "none";
    setTimeout(() => {
      modal.hide();
      hero.style.backgroundImage = getComputedStyle(target).backgroundImage;
      mainTitle.innerHTML = imageModalTargetId;
      target.classList.remove("swiper-grey");
      target.innerHTML = target.id.replace(/-/g, " ");
      target.onclick = "";
      parent.swiper.appendSlide(target);
      imagecible.innerHTML = "";
      inputResp.value = "";
      inputResp.style.backgroundColor = "";
      inputResp.style.outline = "none";
      document.querySelector("body").style.pointerEvents = "";
    }, 3000);
  } else {
    inputResp.style.outline = "1px solid #e50914";
    inputResp.style.backgroundColor = "#ff5a6281";
    inputResp.value = "";
    document.querySelector("body").style.pointerEvents = "none";
    console.log("non");
    setTimeout(() => {
      inputResp.style.backgroundColor = "";
      document.querySelector("body").style.pointerEvents = "";
      inputResp.style.outline = "none";
    }, 1000);
  }
  console.log(targetid, "targetid");
}

createSwiper1();
createSwiper2();
