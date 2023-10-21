export default class Slider {
  constructor() {
    this.nIntervId = null;
  }

  static loadHomePage() {
    document.querySelector('.dot').classList.add('active');
    Slider.startAutoSlide();
    Slider.initArrows();
    Slider.initDots();
  }

  static returnImage(num) {
    const images = ['./images/0.jpeg', './images/1.jpeg', './images/2.jpeg', './images/3.jpeg'];
    if (num === '*') {
      return images;
    }
    return images[num];
  }

  static startAutoSlide() {
    let counter = Slider.returnSlide();
    if (!Slider.nIntervId) {
      Slider.nIntervId = setInterval(() => {
        if (counter === 3) {
          counter = 0;
          Slider.slideImage(counter);
        } else {
          Slider.slideImage(counter + 1);
        }
        counter += 1;
      }, 4000);
    }
  }

  static stopAutoSlide() {
    clearInterval(Slider.nIntervId);
    Slider.nIntervId = null;
  }

  static slideImage(count) {
    const img = document.querySelector('.image');
    img.setAttribute('src', Slider.returnImage(count));
    Slider.updateDotColor(count);
  }

  static slideManual(direction) {
    Slider.stopAutoSlide();
    const currentSlideNum = Slider.returnSlide();
    if (direction === 'right') {
      if (currentSlideNum === 3) {
        Slider.slideImage(0);
      } else {
        Slider.slideImage(currentSlideNum + 1);
      }
    } else if (direction === 'left') {
      if (currentSlideNum === 0) {
        Slider.slideImage(3);
      } else {
        Slider.slideImage(currentSlideNum - 1);
      }
    }
    Slider.startAutoSlide();
  }

  static dotClick(dot) {
    Slider.stopAutoSlide();
    const img = document.querySelector('.image');
    const chosenDot = dot.dataset.pos;
    img.setAttribute('src', Slider.returnImage(chosenDot));
    Slider.updateDotColor(chosenDot);
    Slider.startAutoSlide();
  }

  static updateDotColor(chosenDot) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((element) => {
      if (element.dataset.pos == chosenDot) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
  }

  static initArrows() {
    const leftArrow = document.querySelector('.arrow-left');
    const rightArrow = document.querySelector('.arrow-right');

    leftArrow.addEventListener('click', () => Slider.slideManual('left'));
    rightArrow.addEventListener('click', () => Slider.slideManual('right'));
  }

  static initDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot) => dot.addEventListener('click', () => Slider.dotClick(dot)));
  }

  static returnSlide() {
    const currentSlide = document.querySelector('.dot.active');
    return +currentSlide.dataset.pos;
  }
}
