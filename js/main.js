// mobile menu
const openBtn = document.querySelector('header [data-open-menu]');
const closeBtn = document.querySelector('header [data-close-menu]');
const popUp = document.querySelector('header .pop_up');

openBtn.addEventListener('click', openPopUp);
closeBtn.addEventListener('click', closePopUp);
function openPopUp(){
    popUp.classList.add('show');
}
function closePopUp(){
    popUp.classList.remove('show');
}

//gallery


let init = false;
let swiper;
function swiperCard() {
    if (window.innerWidth >= 768) {
        if (!init) {
            init = true;
            swiper = new Swiper(".gallery", {
                slidesPerView: 1,
                spaceBetween: 20,
                pagination: {
                    el: ".gallery .swiper-pagination",
                    clickable: true,
                },
            });
        }
    } else if (init) {
        swiper.destroy();
        init = false;
    }
}
swiperCard();
window.addEventListener("resize", swiperCard);


$('.apartments .button').click(function (){
    const index = $(this).index() - 1;
    const totalBtnWidth =  100 / $('.apartments .button').length;
    const positionLeft = totalBtnWidth * index;
    $('.apartments .border-active').css('left' , positionLeft+'%');

    //show images
    $('.apartments .photos-apartments .wrap-images img').removeClass('active');
    $('.apartments .photos-apartments .wrap-images img').eq(index).addClass('active');
    $('.apartments .button').removeClass('active');
    $(this).addClass('active')

})


// the appearance of inscriptions
const appearanceTarget = document.querySelector('section.visualization');
const appearanceImage = document.querySelector('section.image-section');
const appearanceGalleryImages = document.querySelectorAll('.gallery-section .swiper-wrapper img');

const options = {
    threshold: 0.6,
};
const callback = function (entries, observer) {
    entries.forEach((entry) => {
        entry.isIntersecting ? entry.target.classList.add('in_view') : false;
    });
};
const observer = new IntersectionObserver(callback, options);
observer.observe(appearanceTarget);
observer.observe(appearanceImage);


appearanceGalleryImages.forEach(function (elem) {
    observer.observe(elem);
})



//show modal apartaments
$('.open-modal-image').click(function () {
    const image = $('.apartments img.active').clone();
    console.log(image);
    $('#modal-custom .image').empty().append(image);
    $('#modal-custom').fadeIn(333);
})

//close modal
$('#modal-custom .close-modal').click(function () {
    $('#modal-custom').fadeOut(333);
})