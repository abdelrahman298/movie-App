//used in the result of search and categoreis pages

export class MovieCardAnimation {
  constructor(element) {
    this.element = element;
  }

  // ImgContainer = document.querySelector("#imgContainer");

  mouseEnter() {
    let imgLayout = this.element.querySelector("#imgLayout");
    let title = this.element.querySelector("#layoutTitle");
    // console.log("this is the selected element  " + this.element);
    console.log("this is the selected title  " + title);
    let desc = this.element.querySelector("#layoutDesc ");
    let date = this.element.querySelector("#layoutDate ");
    let star = this.element.querySelector("#rateStar ");
    let num = this.element.querySelector("#rateNum ");
    const cssStyle = `
    background-color: #000000b0;
    opacity: 1;
    transition: 0.5s;
    `;
    // // imgContainer.style.cssText = `background-color: #000000b0;opacity: 1;transition: 0.5s;`;

    imgLayout.style.cssText = cssStyle;

    title.classList.add("animate__fadeInDown");
    desc.classList.add("animate__flipInX");
    date.classList.add("animate__fadeInUp");
    star.classList.add("animate__fadeInUp");
    num.classList.add("animate__fadeInUp");
    // // ?==========> remove the invisibile calss <=============

    title.classList.remove("invisible");
    desc.classList.remove("invisible");
    date.classList.remove("invisible");
    star.classList.remove("invisible");
    num.classList.remove("invisible");
    // // ?==========> remove the animate__fadeOutLeft calss <=============

    title.classList.remove("animate__fadeOutLeft");
    desc.classList.remove("animate__fadeOutLeft");
    date.classList.remove("animate__fadeOutLeft");
    star.classList.remove("animate__fadeOutLeft");
    num.classList.remove("animate__fadeOutLeft");

    // console.log("Mouse Enter" + title);
  }

  mouseOut() {
    //   let imgContainer = this.element.querySelector("#imgContainer");
    let title = this.element.querySelector("#layoutTitle ");
    let desc = this.element.querySelector("#layoutDesc ");
    let date = this.element.querySelector("#layoutDate ");
    let star = this.element.querySelector("#rateStar ");
    let num = this.element.querySelector("#rateNum ");

    $(".img-layout").css({
      "background-color": "#000000b0",
      opacity: "0",
      transition: "0.5s",
    });

    title.classList.remove("animate__fadeInDown");
    desc.classList.remove("animate__flipInX");
    date.classList.remove("animate__fadeInUp");
    star.classList.remove("animate__fadeInUp");
    num.classList.remove("animate__fadeInUp");

    title.classList.add("animate__fadeOutLeft");
    desc.classList.add("animate__fadeOutLeft");
    date.classList.add("animate__fadeOutLeft");
    star.classList.add("animate__fadeOutLeft");
    num.classList.add("animate__fadeOutLeft");

    //   console.log("Mouse Leave" + title);
    //   // console.log(desc);
    //   // console.log(date);
    //   // console.log(star);
    //   // console.log(num);
  }
}
