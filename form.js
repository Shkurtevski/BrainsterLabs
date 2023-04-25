"use strict";

// FORM VALIDATION
const form = document.getElementById("form");
const username = document.getElementById("username");
const company = document.getElementById("company");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const students = document.getElementById("students");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("sucess");
};

const setSucess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("sucess");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidTel = (tel) => {
  const re = /^\+?\d{9,14}$/;
  return re.test(tel);
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const companyValue = company.value.trim();
  const emailValue = email.value.trim();
  const telValue = tel.value.trim();
  const studentsValue = students.value.trim();

  if (usernameValue === "") {
    setError(username, "Ве молиме внесете го вашето име и презиме");
  } else {
    setSucess(username);
  }

  if (companyValue === "") {
    setError(company, "Ве молиме внесете го името на вашата компанија");
  } else {
    setSucess(company);
  }

  if (emailValue === "") {
    setError(email, "Имејл полето е задолжително");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Ве молиме внесете точна имејл адреса");
  } else {
    setSucess(email);
  }

  if (telValue === "") {
    setError(tel, "Телефонскиот број е задолжителен");
  } else if (!isValidTel(telValue)) {
    setError(tel, "Ве молиме внесете точен телефонски број");
  } else {
    setSucess(tel);
  }

  if (studentsValue === "") {
    setError(students, "Ве молиме изберете тип на студент");
  } else {
    setSucess(students);
  }
  if (
    usernameValue !== "" &&
    companyValue !== "" &&
    emailValue !== "" &&
    isValidEmail(emailValue) &&
    telValue !== "" &&
    isValidTel(telValue) &&
    studentsValue !== ""
  ) {
    form.style.display = "none";
    const successMessage = document.getElementById("success-message");
    successMessage.style.display = "block";
  }
};

const hideSuccessMessage = () => {
  form.style.display = "block";
  const successMessage = document.getElementById("success-message");
  successMessage.style.display = "none";
  form.reset();
};