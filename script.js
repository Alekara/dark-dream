var leftArrow = document.querySelector(".btn-arrow--left");
var rightArrow = document.querySelector(".btn-arrow--right");

var current = 0;
var items = document.querySelectorAll(".gallery__photo");


rightArrow.addEventListener("click", clickRightArrow);
leftArrow.addEventListener("click", clickLeftArrow);


function clickRightArrow() {
  items[current].style.display = "none";
  if (current == items.length - 1) {
    current = 0;
  } else {
    ++current;
  }
  items[current].style.display = "block";
  return current;
};

function clickLeftArrow() {
  items[current].style.display = "none";
  if (current == 0) {
    current = items.length - 1;
  } else {
    --current;
  }
  items[current].style.display = "block";
  return current;
};