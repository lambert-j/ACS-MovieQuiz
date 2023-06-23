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

//Variable de l'API
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Nzk2MjE4YTQ4MGUwNzViMGVjZDc5OTI1ZmU3YmM1ZCIsInN1YiI6IjY0OGMyM2YyNDJiZjAxMDBlNDlkODAzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qma1oLvBkJg2f0tN36KqR-n0p8NcJamuzRfYhHf8_rA",
  },
};

// base_url + "/search/movie?api_key=" + api_key + "&query=" + api_query;

//https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}
// variable des swiper
let swiper1, swiper2, swiper3, swiper4;

// Variable global
let annBtn = document.querySelector(".btn-annonce");
let titreRecherche;
let imageModalTargetId;
let parent;
let target;
const modal = new bootstrap.Modal(document.querySelector("#exampleModal"));
const modalDetail = new bootstrap.Modal(
  document.querySelector("#modaldetails")
);
const modalHowTo = new bootstrap.Modal(document.querySelector("#modalHowTo"));
const hero = document.querySelector(".hero");
const mainTitle = document.querySelector(".main-title");
const detailBtn = document.querySelector(".btn-info");
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

// NavBar

const navAcc = document.querySelector("#navAccueilBtn");
const navFilm = document.querySelector("#navFilmBtn");
const navSerie = document.querySelector("#navSerieBtn");
const navFilmEtSerie = document.querySelector("#navFilmEtSerieBtn");
const navCommentJouer = document.querySelector("#navCommentJouerBtn");
const filmListe = document.querySelectorAll(".film-liste-container");
const serieListe = document.querySelectorAll(".serie-liste-container");

navAcc.addEventListener("click", accueilBtn);
navFilm.addEventListener("click", filmsBtn);
navSerie.addEventListener("click", serieBtn);
navFilmEtSerie.addEventListener("click", filmEtSerieBtn);
navCommentJouer.addEventListener("click", commentJouerBtn);

function accueilBtn() {
  // resetFilms();
  // resetSerie();
  // toggleNavBar();
  location.reload();
}
function filmsBtn() {
  resetFilms();
  serieListe.forEach((element) => {
    element.classList.add("display-none");
  });
  toggleNavBar();
}
function serieBtn() {
  resetSerie();
  filmListe.forEach((element) => {
    element.classList.add("display-none");
  });
  toggleNavBar();
}

function filmEtSerieBtn() {
  resetFilms();
  resetSerie();
  toggleNavBar();
}
function commentJouerBtn() {
  toggleNavBar();
  modalHowTo.show();
}

function resetFilms() {
  filmListe.forEach((element) => {
    element.classList.remove("display-none");
  });
}
function resetSerie() {
  serieListe.forEach((element) => {
    element.classList.remove("display-none");
  });
}

function toggleNavBar() {
  offcanvas.toggle();
}

const offcanvasNavbar = document.getElementById("offcanvasNavbar");
const offcanvas = new bootstrap.Offcanvas(offcanvasNavbar);

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

    // SERIES PAS TROUVEES
    const slides2 = document.querySelector(".liste-serie-notfound");
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

      slides2.appendChild(element);
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

    annBtn.addEventListener("click", (e) => {
      let urlYoutube;
      for (let i = 0; i < data.medias.movie.length; i++) {
        if (data.medias.movie[i].title === mainTitle.innerHTML) {
          urlYoutube = data.medias.movie[i].video;
          break;
        } else if (data.medias.serie[i].title === mainTitle.innerHTML) {
          urlYoutube = data.medias.serie[i].video;
          break;
        }
      }
      window.open(urlYoutube, "_blank");
    });

    let api_query = "";
    const api_key = "8796218a480e075b0ecd79925fe7bc5d";
    const base_url = "http://api.themoviedb.org/3/";
    const url_img = "http://image.tmdb.org/t/p/";
    const lang = "&language=fr-FR";
    let api_url =
      base_url + "movie/" + api_query + "?api_key=" + api_key + lang;
    let api_urlS = base_url + "tv/" + api_query + "?api_key=" + api_key + lang;

    detailBtn.addEventListener("click", (e) => {
      const modalimgdetail = document.querySelector(".modal-body-image-detail");
      modalimgdetail.style.backgroundImage =
        getComputedStyle(hero).backgroundImage;
      document.querySelector("#detailModalLabel").innerHTML =
        mainTitle.innerHTML;
      for (let i = 0; i < data.medias.movie.length; i++) {
        if (data.medias.movie[i].title === mainTitle.innerHTML) {
          api_query = data.medias.movie[i].id;
          api_url =
            base_url + "movie/" + api_query + "?api_key=" + api_key + lang;
          fetch(api_url)
            .then((res) => res.json())
            .then((datapi) => {
              document.querySelector(".movie-overview").innerHTML =
                datapi.overview;
              document.querySelector(".movie-date").innerHTML =
                "Date de sortie: " + datapi.release_date;
              document.querySelector(".movie-note").innerHTML =
                "Note: " + datapi.vote_average + "/10";
              document.querySelector(".movie-budget").innerHTML =
                "Budget: " + datapi.budget;
              document.querySelector(".movie-saison").innerHTML = "";
            });
          break;
        } else if (data.medias.serie[i].title === mainTitle.innerHTML) {
          api_query = data.medias.serie[i].id;
          api_urlS =
            base_url + "tv/" + api_query + "?api_key=" + api_key + lang;
          fetch(api_urlS)
            .then((res) => res.json())
            .then((datapi) => {
              document.querySelector(".movie-overview").innerHTML =
                datapi.overview;
              document.querySelector(".movie-date").innerHTML =
                "Date de sortie: " + datapi.last_air_date;
              document.querySelector(".movie-note").innerHTML =
                "Note: " + datapi.vote_average + "/10";
              document.querySelector(".movie-budget").innerHTML =
                "Nombre d'épisodes: " + datapi.number_of_episodes;
              document.querySelector(".movie-saison").innerHTML =
                "Nombre de Saisons: " + datapi.number_of_seasons;
            });
          break;
        }
      }

      modalDetail.show();
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
    imagecible.style.color = "#adff2f";
    inputResp.style.backgroundColor = "#adff2f";
    inputResp.style.outline = "1px solid green";
    document.querySelector("body").style.pointerEvents = "none";
    setTimeout(() => {
      modal.hide();
      hero.style.backgroundImage = getComputedStyle(target).backgroundImage;
      imageModalTargetId = imageModalTargetId.replace(/-/g, " ");
      mainTitle.innerHTML = imageModalTargetId;
      titreRecherche = imageModalTargetId;
      target.classList.remove("swiper-grey");
      target.innerHTML = target.id.replace(/-/g, " ");
      imagecible.innerHTML = "";
      inputResp.value = "";
      inputResp.style.backgroundColor = "";
      inputResp.style.outline = "none";
      document.querySelector("body").style.pointerEvents = "";
      target.onclick = function (e) {
        let targeto = e.target;
        hero.style.backgroundImage = getComputedStyle(targeto).backgroundImage;
        let mainId = targeto.id.replace(/-/g, " ");
        mainTitle.innerHTML = mainId;
      };
      parent.swiper.appendSlide(target);
    }, 3000);
  } else {
    inputResp.style.outline = "1px solid #e50914";
    inputResp.style.backgroundColor = "#ff5a6281";
    inputResp.value = "";
    document.querySelector("body").style.pointerEvents = "none";
    setTimeout(() => {
      inputResp.style.backgroundColor = "";
      document.querySelector("body").style.pointerEvents = "";
      inputResp.style.outline = "none";
    }, 1000);
  }
}

createSwiper1();
createSwiper2();

//test api

// function getapi(url, options) {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       detailBtn.onclick = function () {
//         const modalimgdetail = document.querySelector(
//           ".modal-body-image-detail"
//         );
//         modalimgdetail.style.backgroundImage =
//           getComputedStyle(hero).backgroundImage;

//         document.querySelector("#detailModalLabel").innerHTML =
//           mainTitle.innerHTML;
//         document.querySelector(".movie-overview").innerHTML = data.overview;
//         modalDetail.show();
//       };
//       console.log(data.overview);
//     });
// }

// async function getapi(api_url, options) {
//   let obj;
//   const res = await fetch(api_url);
//   obj = await res.json();
//   const modalimgdetail = document.querySelector(".modal-body-image-detail");
//   modalimgdetail.style.backgroundImage = getComputedStyle(hero).backgroundImage;
//   document.querySelector("#detailModalLabel").innerHTML = mainTitle.innerHTML;
//   document.querySelector(".movie-overview").innerHTML = obj.overview;

//   modalDetail.show();
// }
