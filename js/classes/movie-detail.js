//used in the result of Area and Ingredient pages
export class MovieDetail {
  constructor({ id, title, img, desc, releaseDate, voteAvrg, stars }) {
    this.id = id;
    this.title = title;
    this.img = img;
    this.desc = desc;
    this.releaseDate = releaseDate;
    this.voteAvrg = voteAvrg;
    this.stars = stars;
  }
}
