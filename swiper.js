document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    autoWidth: true,
    arrows: false,
    pagination: false,
    trimSpace: true,
    type: "slide",
    drag: "free",
    perMove: 1,
    gap: "0.5rem",
    speed: 400,
    easing: "cubic-bezier(0.16, 1, 0.3, 1)",
    focus: 0,
    breakpoints: {
      640: {
        trimSpace: false,
      },
    }
  });
  splide.mount();
});