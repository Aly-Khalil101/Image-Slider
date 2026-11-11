const slides = document.querySelectorAll(".slider img");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const imgId = document.querySelector(".img-id");
const thumbsContainer = document.querySelector(".thumbnails-container");

let currentSlide = 0;

thumbsContainer.style.gridTemplateColumns = `repeat(${slides.length}, 1fr)`;

// ----------------------------------------
// Main Slider Logic
// ----------------------------------------

function goToSlide(n) {
  // Remove active class from the Current Slide:
  slides[currentSlide].classList.remove("active");

  // Change slide algorithm trick:
  currentSlide = (n + slides.length) % slides.length;

  // Re-add active class to current slide:
  slides[currentSlide].classList.add("active");

  // Update controls:
  updateSliderControls();
  updateThumbnailActiveStatus(currentSlide);
}

// ----------------------------------------
// Update Slider Controls
// ----------------------------------------

function updateSliderControls() {
  prevBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide === slides.length - 1;

  imgId.innerHTML = `Image ${currentSlide + 1} of ${slides.length}`;
}

function updateThumbnailActiveStatus(index) {
  thumbsContainer.querySelectorAll("img").forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
}

// ----------------------------------------
// Event Listeners
// ----------------------------------------

prevBtn.addEventListener("click", () => {
  goToSlide(currentSlide - 1);
});

nextBtn.addEventListener("click", () => {
  goToSlide(currentSlide + 1);
});

// ----------------------------------------
// Create Thumbnails
// ----------------------------------------

slides.forEach((img, index) => {
  const thumbnail = img.cloneNode();

  thumbnail.addEventListener("click", () => {
    goToSlide(index);
  });

  thumbsContainer.appendChild(thumbnail);
});

// ----------------------------------------
// Initial Slide
// ----------------------------------------

goToSlide(currentSlide);

// ----------------------------------------
// classList : To control on the classes on element you can do such:
// add-remove-sereach by contain
// addEventListener is property make me can to add methods on events as click or many events
// forEech take a function , and make it to all the elemetns on arr or type and don't return
// I need to know about NodeList and what is the diffrent between him and array
