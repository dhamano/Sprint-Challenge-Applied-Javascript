class Carousel {
    constructor(carouselEls) {
        this.carouselEls = carouselEls;
        this.carouselImgs = Array.from(document.querySelectorAll('.carousel img'));
        this.carouselImgsNum = this.carouselImgs.map( (img, i) => {
            img.setAttribute("data-id",i);
            return i;
        });
        this.currentImgId = document.querySelector('.carousel img[data-default]').dataset.id;
        this.numberOfImgs = this.carouselImgsNum.length;
        this.setupCarousel();
        this.interval = setInterval(this.nextImg.bind(this), 8000);
    }

    setCurrentImg(id) {
        this.currentImgId = id;
    }

    showImg(id, direction) {
        document.querySelector(`.carousel [data-id="${this.currentImgId}"]`).classList.remove('show-img');
        document.querySelector(`.carousel [data-id="${id}"]`).classList.add('show-img');
        this.setCurrentImg(id);
    }

    getCurrentImgID() {
        let currentID = document.querySelector('.carousel img.show-img').dataset.id;
        return currentID;
    }

    previousImg() {
        let previousID = this.getCurrentImgID() - 1;
        if(previousID < 0) { previousID = parseInt(this.numberOfImgs) - 1; }
        document.querySelector(`.carousel [data-id="${previousID}`).animate([
            { transform: 'translate3D(-100%, 0, 0)' }, 
            { transform: 'translate3D(0, 0, 0)' }
          ], {
            duration: 750,
            iterations: 1
          })
        this.showImg(previousID, "previous");
    }

    nextImg() {
        console.log('this',this);
        let nextID = parseInt(this.getCurrentImgID()) + 1;
        if(nextID === this.numberOfImgs) { nextID = 0; }
        document.querySelector(`.carousel [data-id="${nextID}`).animate([
            { transform: 'translate3D(100%, 0, 0)' }, 
            { transform: 'translate3D(0, 0, 0)' }
          ], {
            duration: 750,
            iterations: 1
          })
        this.showImg(nextID, "next");
    }

    setupCarousel() {
        let btnLeft = document.querySelector('.carousel .left-button');
        let btnRight = document.querySelector('.carousel .right-button');
        btnLeft.addEventListener('click', () => { this.previousImg(); });
        btnRight.addEventListener('click', () => { this.nextImg(); });
        this.showImg(this.currentImgId);
    }
}

let carousel = document.querySelector('.carousel');
const imageCarousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
