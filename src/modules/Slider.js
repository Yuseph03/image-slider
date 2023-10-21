export default class Slider {
  constructor() {
    this.nIntervId = null;
  }

  static loadHomePage() {
    document.querySelector('.dot').classList.add('active');
    Slider.autoSlide();
    Slider.initArrows();
  }

  static returnImage(num) {
    const images = ['./images/0.jpeg', './images/1.jpeg', './images/2.jpeg', './images/3.jpeg'];
    if (num === '*') {
      return images;
    }
    return images[num];
  }

  static autoSlide() {
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
    const dots = Array.from(document.querySelectorAll('.dot'));
    img.setAttribute('src', Slider.returnImage(count));
    dots.forEach((dot) => {
      if (dot.dataset.pos == count) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
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
    Slider.autoSlide();
  }

  static initArrows() {
    const leftArrow = document.querySelector('.arrow-left');
    const rightArrow = document.querySelector('.arrow-right');

    leftArrow.addEventListener('click', () => Slider.slideManual('left'));
    rightArrow.addEventListener('click', () => Slider.slideManual('right'));
  }

  static returnSlide() {
    const currentSlide = document.querySelector('.dot.active');
    return +currentSlide.dataset.pos;
  }
}
