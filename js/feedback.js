const popupOpen = document.querySelector(".button-write-us");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".close-popup");

popupOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-active");
});

popupClose.addEventListener("click", function (evt) {
  popup.classList.remove("popup-active");
});
