import "./styles.css";
import { dropdown } from "./dropdownLogic";
import { populateGallery, ballMenuLogic } from "./gallery";

const dropdownOuterElArr = document.querySelectorAll(".drop-down-outer");

dropdownOuterElArr.forEach((el) => {
  el.addEventListener("mouseenter", (e) => dropdown(e));
  el.addEventListener("mouseleave", (e) => dropdown(e));
});

document.querySelectorAll('.ball').forEach((ball) => {
  ball.addEventListener('click', (e) => ballMenuLogic(e))
})

populateGallery();