import { getApi } from "../scripts/script.js";
import { MovieCardAnimation } from "./movie-animation.js";
import { MovieDetail } from "./movie-detail.js";

export class TopRatedPage {
  async getTopRatedrApi() {
    const response = await getApi("top_rated");
    return response;
  }
  // ! Dont to forget to add THIS to any called methods of Properties
  async displayMovies() {
    const response = await this.getTopRatedrApi();
    let mainPage = document.getElementById("mainPage");
    let mainPageRow = mainPage.querySelector(".row");
    let container = "";

    for (let i = 0; i < response.length; i++) {
      let Movie = new MovieDetail({
        id: response[i].id,
        title: response[i].title,
        img: response[i].poster_path,
        desc: response[i].overview,
        releaseDate: response[i].release_date,
        voteAvrg: response[i].vote_average.toFixed(1),
      });

      let element = `

        <div class="col-sm-12 col-md-6 col-lg-4">
        <div  id="imgContainer" class="img-container h-100 w-100" idValue=${
          Movie.id
        }>
          <img class="h-100 w-100 rounded-2" src="${
            "https://image.tmdb.org/t/p/original" + Movie.img
          }" alt="" />
          <div
            id="imgLayout"
            class="img-layout d-flex flex-column justify-content-start align-items-start rounded-2"
          >
            <p
              id="layoutTitle"
              class="layout-title text-center invisible animate__animated"
            >
             ${Movie.title}
            </p>
            <p
              id="layoutDesc"
              class="layout-desc invisible animate__animated"
            >
            ${Movie.desc}
            </p>
            <p
              id="layoutDate"
              class="layout-date invisible animate__animated"
            >
              Release Date :   ${Movie.releaseDate}
            </p>
            <p
              id="rateStar"
              class="rate-satr invisible animate__animated"
            >
              <i class="fa-solid fa-star text-warning fs-6"></i
              ><i class="fa-solid fa-star text-warning fs-6"></i
              ><i class="fa-solid fa-star text-warning fs-6"></i>
            </p>
            <p
              id="rateNum"
              class="rate-num invisible vote animate__animated"
            >
            ${Movie.voteAvrg}
            </p>
          </div>
        </div>
      </div>
          `;
      container += element;
    }

    mainPageRow.innerHTML = container;
    let imgContainers = document.querySelectorAll(".img-container");
    imgContainers.forEach((element) => {
      let selectedMovie = new MovieCardAnimation(element);
      element.addEventListener("mouseenter", function () {
        selectedMovie.mouseEnter();
      });

      element.addEventListener("mouseleave", function () {
        selectedMovie.mouseOut();
      });
    });
  }
}
