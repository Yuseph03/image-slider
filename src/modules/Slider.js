export default class Slider {
  static loadHomePage() {
    Slider.initImage();
    Slider.autoSlide();
  }

  static initImage() {
    const img = document.querySelector('.image');
    img.setAttribute('src', './images/kudoimg1.jpeg');
    document.querySelector('[data-pos="1"]').style['background-color'] = 'black';
  }

  static autoSlide() {
    let nIntervId;
    let counter = 1;
    const images = ['./images/kudoimg1.jpeg', './images/kudoimg2.jpg', './images/kudoimg3.jpeg', './images/kudoimg4.jpeg'];
    if (!nIntervId) {
      nIntervId = setInterval(() => {
        Slider.slideImage(images, counter);
        counter += 1;
        if (counter > 3) {
          counter = 0;
        }
      }, 5000);
    }
  }

  static slideImage(images, count) {
    const img = document.querySelector('.image');
    const dots = Array.from(document.querySelectorAll('.dot'));
    img.setAttribute('src', images[count]);
    dots.forEach((dot) => {
      if (dot.dataset.pos === count + 1) {
        dot.style['background-color'] = 'black';
      } else {
        dot.style['background-color'] = 'gray';
      }
    });
  }
}
