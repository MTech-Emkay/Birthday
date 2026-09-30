const hidden = document.querySelector(".hidden-image");
const hidden2 = document.querySelector(".hidden-image2");
const seeMore = document.querySelector(".btn");

seeMore.addEventListener("click", () => {
  if (seeMore.innerHTML == "See more") {
    seeMore.innerHTML = "See less";
    hidden.classList.add("show-image");
    hidden2.classList.add("show-image");
  } else {
    seeMore.innerHTML = "See more";
    hidden.classList.remove("show-image");
    hidden2.classList.remove("show-image");
  }
});

const message1 = document.querySelector(".message1");
const message2 = document.querySelector(".message2");
const emmaMessage = document.querySelector(".emma-message");
const estherMessage = document.querySelector(".esther-message");
const closeButton1 = document.querySelector(".close1");
const closeButton2 = document.querySelector(".close2");

message1.addEventListener("click", () => {
  emmaMessage.classList.add("show-message");
});

message2.addEventListener("click", () => {
  estherMessage.classList.add("show-message");
});

closeButton1.addEventListener("click", () => {
  emmaMessage.classList.remove("show-message");
});

closeButton2.addEventListener("click", () => {
  estherMessage.classList.remove("show-message");
});
