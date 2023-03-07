document.addEventListener("DOMContentLoaded", () => {
  //make even slides blue
  const slideWrappersObj = document.querySelectorAll(".slide-wrapper");
  const slideWrappers = [];

  slideWrappersObj.forEach((slideWrapper) => {
    slideWrappers.push(slideWrapper);
  });

  for (let i = 0; i < slideWrappers.length; i += 2) {
    slideWrappers[i].classList.add("is-blue");
  }
});
