const imageList = document.querySelector(
  ".unforgettable-slider .unforgettable-slider-container .unforgettable-images"
);

const sliderScrollbar = document.querySelector(
  ".unforgettable-slider .slider-scrollbar"
);
const scrollbarThumb = document.querySelector(
  ".unforgettable-slider .slider-scrollbar .scrollbar-track .scrollbar-thumb"
);

// container.addEventListener("wheel", (e) => {
//   //   e.preventDefault();
//   //   container.style.scrollBehavior = "smooth";
//   //   container.scrollLeft += e.deltaY;
// });

const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

// Handle scrollbar thumb drag
scrollbarThumb.addEventListener("mousedown", (e) => {
  const startX = e.clientX;
  const thumbPosition = scrollbarThumb.offsetLeft;

  // Update thumb position on mouse move
  function handleMouseMove(e) {
    const deltaX = e.clientX - startX;
    const newThumbPosition = thumbPosition + deltaX;
    const maxThumbPosition =
      sliderScrollbar.getBoundingClientRect().width -
      scrollbarThumb.offsetWidth;

    const boundedPosition = Math.max(
      0,
      Math.min(maxThumbPosition, newThumbPosition)
    );
    const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

    scrollbarThumb.style.left = `${boundedPosition}px`;
    // scrollbarThumb.style.right = `${boundedPosition}px`;
    imageList.scrollLeft = scrollPosition;
    imageList.scrollBy({ behavior: "smooth" });
  }

  //   Remove event listeners on mouse up
  function handleMouseUp() {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  }

  //   Add event listeners for drag interaction
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUp);
});

// Testimonials Slider functionality
const slides = document.querySelectorAll(
  ".slider-container .testimonial-list .testi"
);

// Initialize SwiperJS
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 800,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  //   scrollbar: {
  //     el: ".swiper-scrollbar",
  //   },
});
