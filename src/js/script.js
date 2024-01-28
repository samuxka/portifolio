const header = document.querySelector(".navbar")

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 60)
});