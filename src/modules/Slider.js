export default class Slider {
    static loadHomePage() {
        Slider.initImage();
        Slider.autoSlide();
    }

    static initImage() {
    const img = document.querySelector('.image');

    img.setAttribute('src', './images/kudoimg1.jpeg');
    }

    static autoSlide(){
        let nIntervId;
        let counter = 1;
        const images = ['./images/kudoimg1.jpeg', './images/kudoimg2.jpg', './images/kudoimg3.jpeg', './images/kudoimg4.jpeg'];
        if(!nIntervId){
            nIntervId = setInterval(function(){
                Slider.slideImage(images, counter);
                counter++;
                if(counter > 3){
                    counter = 0;
                }
            }, 5000);
        }
    }

    static slideImage(images, count){
        const img = document.querySelector('.image');
        const slideDots = document.querySelector('.slide-number p');
        img.setAttribute('src', images[count]);
        slideDots.textContent = `${count+1}`;
    }
    // clearInterval(nIntervId);
}