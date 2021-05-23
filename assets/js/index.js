document.addEventListener("DOMContentLoaded", function () {
  let elems = document.querySelectorAll(".carousel");
  let instances = M.Carousel.init(elems, {
    fullWidth: true,
    indicators: true,
    dist: 0,
    duration: 500,
  });
  // custom function for autoplaying
  let indicatorItems = document.querySelectorAll(".carousel .indicator-item");
  let slideTime = 4000;
  let activeClass = "active";

  setInterval(() => {
    indicatorItems.forEach((el) => {
      if (el.classList.contains(activeClass)) {
        sib = el.nextElementSibling;
        if (sib == null) {
          indicatorItems[0].click();
        } else {
          sib.click();
        }
      }
    });
  }, slideTime);
});
