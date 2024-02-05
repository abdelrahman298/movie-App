import { NowPlayingPage } from "../classes/nowPlayingPage.js";
import { PopularPage } from "../classes/popularPage.js";
import { TopRatedPage } from "../classes/topRatedPage.js";
import { TrendingPage } from "../classes/trendingPage.js";
import { UpcomingPage } from "../classes/upcomingPage.js";
import { ContactUsPage } from "../classes/contactUsPage.js";

// !====================> NavBar Slider <==============================//

function SlideRight() {
  $("#nav-bar").animate({ width: "16rem", padding: "1rem" }, 500, function () {
    $(".navbar").slideDown(500);
    $(".social-contents").slideDown(500);
  });
  $(".navbar").removeClass("d-none");
  $(".social-contents").removeClass("d-none");

  $("#nav-toggle-icon").html('<i class="fas fa-x"></i>');
}

function SlideLeft() {
  $("#nav-bar").animate({ width: "0", padding: "0" }, 500);
  $(".navbar").slideUp(500);
  $(".social-contents").slideUp(500);
  // $("#nav-bar").addClass("d-none");
  $("#nav-toggle-icon").html('<i class="fas fa-bars"></i>');
}

$("#nav-toggle-icon").on("click", function () {
  if ($("#nav-toggle-icon").html().trim() == '<i class="fas fa-x"></i>') {
    SlideLeft();
  } else if (
    $("#nav-toggle-icon").html().trim() == '<i class="fas fa-bars"></i>'
  ) {
    SlideRight();
  }

  // TEst///////
  // if ($("#nav-toggle-icon").html().trim() == '<i class="fas fa-x"></i>') {
  //   console.log(true);
  //   //  SlideLeft();
  // } else {
  //   console.log(false);
  // }
});

// !===================> Nav Bar Function to display Movies of each class <==========//
const nowPlayingMovies = new NowPlayingPage();
const PopularMovies = new PopularPage();
const TopRatedMovies = new TopRatedPage();
const TrendingMovies = new TrendingPage();
const UpcomingMovies = new UpcomingPage();
const ContactUsMovies = new ContactUsPage();

let navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", async (e) => {
    var targetPage = e.target.getAttribute("targetPage");

    switch (targetPage) {
      case "nowPlayingPage":
        nowPlayingMovies.displayMovies();
        break;
      case "PopularPage":
        PopularMovies.displayMovies();
        break;
      case "topRatedPage":
        TopRatedMovies.displayMovies();
        break;
      case "terendingPage":
        TrendingMovies.displayMovies();
        break;
      case "upComingPage":
        UpcomingMovies.displayMovies();
        break;
      case "contactUsPage":
        ContactUsMovies.displayMovies();
    }
  });
});

// !=====================> call Now Playing Page in first page <===========================================//
let mainPage = document.getElementById("mainPage");
let mainRow = mainPage.querySelector(".row");
nowPlayingMovies.displayMovies();

// !=====================> Api Usage <===========================================//
export async function getApi(moviesType) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmRmMTM4NjVlNjQ3ZGU2NDgyMGVhNTU4YzU0OTI0NCIsInN1YiI6IjY1YmQ5M2U2NmM0NDljMDE2MzhiZmI2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8QxqknpnK3OTpQOJCSoGIiCG2dp2jejoXqf_F5POXsQ",
    },
  };
  let apiUrl = `https://api.themoviedb.org/3/movie/${moviesType}?language=en-US&page=1`;
  if (moviesType == "trending") {
    apiUrl = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  } else {
    apiUrl;
  }

  let api = await fetch(apiUrl, options);
  let response = await api.json();
  let results = response.results;
  return results;
}

// !================> get the input values <=====================================//

const userName = document.getElementById("userName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const userAge = document.getElementById("userAge");
const firstPassword = document.getElementById("firstPassword");
const secondPassword = document.getElementById("secondPassword");
const submitBtn = document.getElementById("submitButton");

submitBtn.addEventListener("click", () => {
  let userData = new ContactUsPage(
    userName.value,
    email.value,
    phoneNumber.value,
    userAge.value,
    firstPassword.value,
    secondPassword.value
  );
  userData.checkInputs();
});
