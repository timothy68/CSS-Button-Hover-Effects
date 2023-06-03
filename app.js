const container = document.querySelector('.container');
const slider = document.querySelector('.slider');
const sliderButton = document.querySelector('.slider-button');

let isDragging = false;

sliderButton.addEventListener('mousedown', () => {
  isDragging = true;
});

container.addEventListener('mousemove', (event) => {
  if (!isDragging) return;
  const xPos = event.clientX - container.offsetLeft;
  const sliderWidth = slider.offsetWidth;
  const containerWidth = container.offsetWidth;
  const maxSliderPosition = containerWidth - sliderWidth;

  if (xPos < 0) {
    slider.style.left = '0';
  } else if (xPos > maxSliderPosition) {
    slider.style.left = maxSliderPosition + 'px';
  } else {
    slider.style.left = xPos + 'px';
  }

  const sliderPosition = parseInt(slider.style.left);
  const percent = sliderPosition / maxSliderPosition * 100;

  container.style.setProperty('--before-width', percent + '%');
});

container.addEventListener('mouseup', () => {
  isDragging = false;
});

container.addEventListener('mouseleave', () => {
  isDragging = false;
});
