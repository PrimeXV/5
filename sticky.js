const navbarE1 = document.querySelector(".navbar");

const paragraphsE1 = document.querySelector(".paragraphs");

console.log(navbarE1.offsetHeight);

console.log(paragraphsE1.offsetTop);

window.addEventListener("scroll", () => {
  if (window.scrollY > paragraphsE1.offsetTop - navbarE1.offsetHeight - 50) {
      navbarE1.classList.add("active");
  } else {
    navbarE1.classList.remove("active");
  }
})