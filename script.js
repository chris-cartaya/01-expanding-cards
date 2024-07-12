const panels = document.querySelectorAll(".panel");
// querySelectorAll returns a static NodeList.

panels.forEach(panel => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  })
});

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove("active");
  })
}
