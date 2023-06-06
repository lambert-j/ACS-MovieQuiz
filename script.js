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
// SWIPPER
const swiper = new Swiper(".swiper", {
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
