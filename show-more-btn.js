"use strict";

// SHOW MORE CARDS FOR MOBILE SCREENS
const showMoreBtn = document.getElementById("show-more-btn");
const cardsContainer = document.getElementById("card-container");
const cards = document.querySelectorAll("#card-container .card");
const initialCardsToShow = 6;
const mobileScreenMaxWidth = 425;

let cardsToShow = initialCardsToShow;
let isMobileScreen = window.innerWidth <= mobileScreenMaxWidth;

function hideExtraCards() {
  for (let i = initialCardsToShow; i < cards.length; i++) {
    cards[i].style.display = isMobileScreen ? "none" : "block";
  }
}

function showMoreCards() {
  cardsToShow += initialCardsToShow;
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = i < cardsToShow ? "block" : "none";
  }

  if (cardsToShow >= cards.length) {
    showMoreBtn.style.display = "none";
  }
}

function handleWindowResize() {
  const newIsMobileScreen = window.innerWidth <= mobileScreenMaxWidth;
  if (newIsMobileScreen !== isMobileScreen) {
    isMobileScreen = newIsMobileScreen;
    if (isMobileScreen) {
      showMoreBtn.style.display = "block";
      hideExtraCards();
    } else {
      showMoreBtn.style.display = "none";
      for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "block";
      }
    }
    cardsToShow = initialCardsToShow;
  }
}

function handleCardContainerChange(mutations) {
  const isCardsOverflowing =
    cardsContainer.scrollHeight > cardsContainer.clientHeight;
  showMoreBtn.style.display =
    isMobileScreen && isCardsOverflowing ? "block" : "none";
}

hideExtraCards();

showMoreBtn.style.display = isMobileScreen ? "block" : "none";
showMoreBtn.addEventListener("click", showMoreCards);
window.addEventListener("resize", handleWindowResize);

const observer = new MutationObserver(handleCardContainerChange);
observer.observe(cardsContainer, { childList: true });