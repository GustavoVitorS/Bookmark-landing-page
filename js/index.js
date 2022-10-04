const menuBtn = document.querySelector("button#btn");
const featerNav = document.querySelectorAll(".features .nav ul li");
const faqSection = document.querySelectorAll(".faq section .faq__que");
const emailInput = document.querySelector("input[type='text']");
const emailBtn = document.querySelector("input[type='submit']");

menuBtn.addEventListener("click", () => {
  const navBar = document.querySelector(".links");
  const overlay = document.querySelector(".overlay");

  menuBtn.classList.toggle("active");

  navBar.classList.toggle("active");

  overlay.classList.toggle("active");
});

featerNav.forEach((li) => {
  li.addEventListener("click", () => {
    const featerTab =
      li.parentElement.parentElement.parentElement.querySelectorAll(
        ".feature .feature__tab"
      );
    const lis = li.parentElement.querySelectorAll("li");
    const h3 = li.parentElement.querySelectorAll("li");

    lis.forEach((ele) => ele.classList.remove("active"));

    h3.forEach((ele) => ele.querySelector("h3").classList.remove("active"));

    featerTab.forEach((ele) => ele.classList.remove("active"));

    li.classList.add("active");
    li.querySelector("h3").classList.add("active");

    const liActive = li.parentElement.querySelector(".active");
    const index = [...li.parentElement.children].indexOf(liActive);
    featerTab.item(index).classList.add("active");
  });
});

faqSection.forEach((ele) => {
  ele.addEventListener("click", () => {
    ele.parentElement.querySelector(".faq__ans").classList.toggle("active");
    ele.classList.toggle("active");
    if (ele.classList.contains("active"))
      ele.querySelector("img").src = "../images/icon-arrow-active.svg";
    else ele.querySelector("img").src = "../images/icon-arrow.svg";
  });
});

emailBtn.onclick = (e) => {
  const regex = /\w+@(gmail|yahoo).(com|net|org)/gi;
  if (!regex.test(emailInput.value)) {
    e.preventDefault();
    if (!emailInput.parentElement.classList.contains("wrong")) {
      emailInput.parentElement.classList.add("wrong");
    }
  } else {
    if (emailInput.parentElement.classList.contains("wrong")) {
      emailInput.parentElement.classList.remove("wrong");
    }
  }
};