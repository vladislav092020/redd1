// Modal function
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal__close');
const header = document.querySelector('header');
const main = document.querySelector('main');
const section = document.querySelectorAll('section');
const footer = document.querySelector('footer');
const body = document.querySelector('body');

function modalOpen() {
   header.classList.add('non-active');
   main.classList.add('non-active');
   section.forEach(sectionNonActive);
   function sectionNonActive(item) {
      item.classList.add('non-active');
   };
   footer.classList.add('non-active');
   body.classList.add('non-active');
};

modalOpen();

const modalClose = function () {
   modal.classList.add('non-active');
   header.classList.remove('non-active');
   main.classList.remove('non-active');
   section.forEach(sectionNonActive);
   function sectionNonActive(item) {
      item.classList.remove('non-active');
   };
   footer.classList.remove('non-active');
   body.classList.remove('non-active');
};

closeBtn.addEventListener('click', () => {
   // modal.classList.add('non-active');
   modalClose ();
});

document.addEventListener('click', (e) => {
   const target = e.target;
   const itsModal = target == modal || modal.contains(target);
   const itsBtn = target == closeBtn;
   const modalActive = modal.classList.contains('non-active');

   if (!itsModal && !itsBtn && !modalActive) {
      // modal.classList.add('non-active');
      modalClose();
   }
});

// burger menu
var toggle = document.querySelector('.nav-toggle');
var nav = document.querySelector('.nav');
var burger = document.querySelector('.burger');

toggle.addEventListener('click', function (e) {
   this.classList.toggle('opened');
   burger.classList.toggle('active');
   nav.classList.toggle('active');
});


// wave animation
var myWave = wavify( document.querySelector('#wave'), {
   height: 10,
   bones: 2,
   amplitude: 100,
   color: '#FBF8E7',
   speed: .6
 })


//  reviews slider
var reviewsSlider = new Swiper(".reviews__slider", {
   spaceBetween: 66,
   navigation: {
     nextEl: ".reviews__button-next",
     prevEl: ".reviews__button-prev",
   },
   mousewheel: true,
   keyboard: true,
   slidesPerView: 1,
   breakpoints: {
      1250: {
         slidesPerView: 2,
      },
      1680: {
         slidesPerView: 3,
      }
   }
 });

//  instagram slider
 var reviewsSlider = new Swiper(".instagram__slider", {
   spaceBetween: 0,
   navigation: {
     nextEl: ".instagram__button-next",
     prevEl: ".instagram__button-prev",
   },
   mousewheel: true,
   keyboard: true,
   slidesPerView: 1,
   breakpoints: {
      690: {
         slidesPerView: 2,
         spaceBetween: 30
      },
      1080: {
         slidesPerView: 3,
         spaceBetween: 30,
      },
      1820: {
         slidesPerView: 3,
         spaceBetween: 100,
      }
   }
 });

// form submit plug
const formBtn = document.querySelector('.form__button');

formBtn.addEventListener('click', (evt) => {
   event.preventDefault();
   alert('Ready');
});

const SubBtn = document.querySelector('.subscribe__button');

SubBtn.addEventListener('click', (evt) => {
   event.preventDefault();
   alert('Ready');
});

const MdlBtn = document.querySelector('.modal__button');

MdlBtn.addEventListener('click', (evt) => {
   event.preventDefault();
   alert('Ready');
});