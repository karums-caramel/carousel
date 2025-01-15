const imgs = ["woods.jpg", "resto.jpg", "background.png"];
const galleryInner = document.querySelector("#gallery-inner");
let currentImg = 1;

const updateBalls = function updateBalls() {
  // this updates the ball menu on the bottom of the gallery
  document.querySelectorAll(".ball").forEach((ball) => {
    ball.style.backgroundColor = "";
  });
  document.querySelector(`.ball${currentImg}`).style.backgroundColor = "white";
};

updateBalls();

const switchImg = function switchImg() {
  const newImg = document.querySelector(`.slide${currentImg}`);
  newImg.scrollIntoView({ behavior: "auto" });
  updateBalls();
};

function populateGallery() {
  // this is the logic for the side arrow buttons on the gallery, currentImg contains the number of the currently displayed slide and
  // these update that number and then switch to the slide with that new number. :3
  document.querySelector("#snap-left").addEventListener("click", () => {
    currentImg !== 1 ? currentImg-- : (currentImg = 3);
    switchImg();
  });

  document.querySelector("#snap-right").addEventListener("click", () => {
    currentImg !== 3 ? currentImg++ : (currentImg = 1);
    switchImg();
  });
}

const ballMenuLogic = function ballLogic(e) {
  currentImg = +e.target.classList[1][4];
  switchImg();
};

window.setInterval(() => {
  currentImg !== 3 ? currentImg++ : (currentImg = 1);
  switchImg();
}, 5000);

export { populateGallery, ballMenuLogic };