"use strict";

// CARD FILTERING
document
  .querySelector("#filter-marketing")
  .addEventListener("change", filterMarketing);
document
  .querySelector("#filter-coding")
  .addEventListener("change", filterCoding);
document
  .querySelector("#filter-design")
  .addEventListener("change", filterDesign);

function filterMarketing() {
  hideAllCards();

  if (document.querySelector("#filter-marketing").checked) {
    let marketingCard = document.querySelectorAll(".marketing");
    marketingCard.forEach((marketingCard) => {
      marketingCard.style.display = "block";
    });

    document.querySelector("#filter-coding").checked = false;
    document.querySelector("#filter-design").checked = false;
  } else {
    showAllCards();
  }
}

function filterCoding() {
  hideAllCards();

  if (document.querySelector("#filter-coding").checked) {
    let codingCards = document.querySelectorAll(".coding");
    codingCards.forEach((codingCard) => {
      codingCard.style.display = "block";
    });

    document.querySelector("#filter-marketing").checked = false;
    document.querySelector("#filter-design").checked = false;
  } else {
    showAllCards();
  }
}

function filterDesign() {
  hideAllCards();

  if (document.querySelector("#filter-design").checked) {
    let designCards = document.querySelectorAll(".design");
    designCards.forEach((designCards) => {
      designCards.style.display = "block";
    });

    document.querySelector("#filter-marketing").checked = false;
    document.querySelector("#filter-coding").checked = false;
  } else {
    showAllCards();
  }
}

function hideAllCards() {
  let allCards = document.querySelectorAll(".card");

  allCards.forEach((card) => {
    card.style.display = "none";
  });
}

function showAllCards() {
  let allCards = document.querySelectorAll(".card");

  allCards.forEach((card) => {
    card.style.display = "block";
  });
}

const marketingFilter = document.querySelector("#filter-marketing");
const codingFilter = document.querySelector("#filter-coding");
const designFilter = document.querySelector("#filter-design");

marketingFilter.addEventListener("change", toggleBackground);
codingFilter.addEventListener("change", toggleBackground);
designFilter.addEventListener("change", toggleBackground);

function toggleBackground(event) {
  const filterId = event.target.id;
  const filterWrapper = document.querySelector(`#${filterId}-wrapper`);

  if (filterId === "filter-marketing") {
    codingFilter.parentNode.classList.remove("red-background");
    designFilter.parentNode.classList.remove("red-background");
  } else if (filterId === "filter-coding") {
    marketingFilter.parentNode.classList.remove("red-background");
    designFilter.parentNode.classList.remove("red-background");
  } else if (filterId === "filter-design") {
    marketingFilter.parentNode.classList.remove("red-background");
    codingFilter.parentNode.classList.remove("red-background");
  }

  if (filterWrapper.classList.contains("red-background")) {
    filterWrapper.classList.remove("red-background");
  } else {
    filterWrapper.classList.add("red-background");
  }
}

// CARD FILTERING FOR MOBILE AND TABLET DEVICES
const tabletQuery = window.matchMedia("(max-width: 768px)");
const mobileQuery = window.matchMedia("(max-width: 425px)");

function handleTabletChange(e) {
  if (e.matches) {
    document.querySelector("body").classList.add("tablet");
    document.querySelector("body").classList.remove("mobile");
    const filters = document.querySelectorAll(".filter");

    filters.forEach((filter) => {
      filter.addEventListener("click", () => {
        if (filter.parentNode.classList.contains("red-background")) {
          filter.parentNode.classList.remove("red-background");
        } else {
          filters.forEach((f) => {
            f.parentNode.classList.remove("red-background");
          });
          filter.parentNode.classList.add("red-background");
        }
      });
    });
  } else {
    const filters = document.querySelectorAll(".filter");

    filters.forEach((filter) => {
      filter.removeEventListener("click", null);
      filter.parentNode.classList.remove("red-background");
    });
    document.querySelector("body").classList.remove("tablet");
  }
}

function handleMobileChange(e) {
  if (e.matches) {
    document.querySelector("body").classList.add("mobile");
    document.querySelector("body").classList.remove("tablet");
    const filters = document.querySelectorAll(".filter");

    filters.forEach((filter) => {
      filter.addEventListener("click", () => {
        if (filter.parentNode.classList.contains("red-background")) {
          filter.parentNode.classList.remove("red-background");
        } else {
          filters.forEach((f) => {
            f.parentNode.classList.remove("red-background");
          });
          filter.parentNode.classList.add("red-background");
        }
      });
    });
  } else {
    const filters = document.querySelectorAll(".filter");

    filters.forEach((filter) => {
      filter.removeEventListener("click", null);
      filter.parentNode.classList.remove("red-background");
    });

    document.querySelector("body").classList.remove("mobile");
  }
}

tabletQuery.addEventListener("change", handleTabletChange);
mobileQuery.addEventListener("change", handleMobileChange);

handleTabletChange(tabletQuery);
handleMobileChange(mobileQuery);