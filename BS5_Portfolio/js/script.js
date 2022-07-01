var app = document.querySelector('.typewritter');

var typewritter = new Typewriter(app, {
    loop: true
})

typewritter.typeString('Web Developer')
    .pauseFor(2000)
    .deleteAll()
    .typeString('UI/UX Designer')
    .deleteAll()
    .typeString('App Developer')
    .pauseFor(2000)
    .start();

var TabList = document.querySelectorAll('.nav-tabs .nav-item a');

TabList.forEach(function(e){
    var Tabtrigger = new bootstrap.Tab(e);
    e.addEventListener('click', function(e){
        e.preventDefault();
        Tabtrigger.show();
    })

})


// isotope js

var grid = document.querySelector('.grid');
var iso;

imagesLoaded(grid, function() {
    iso = new Isotope(grid, {
        itemSelector: '.grid-item',
        layoutMode: 'masonry',
    })

    var filterElement = document.querySelector('.portfolio-filter');

    filterElement.addEventListener('click', function(event) {
        if (!matchesSelector(event.target, 'button')) {
            return;
        }
        
        var filterValue = event.target.getAttribute('data-filter');
        console.log(filterValue);

        iso.arrange({
            filter: filterValue
        })
    })
}) ;

var btnElement = document.querySelectorAll('.fil-btn');

btnElement.forEach(function(el, key) {
    el.addEventListener('click', function() {
        el.classList.add('clicked');

        btnElement.forEach(function(ell, keys) {
            if (key != keys) {
                ell.classList.remove('clicked');
            }
            console.log(el, keys);
        })
    })
})

// Testimonial Slider

var slider = tns({
    container: '.my-slider',
    items: 1,
    slideBy: 1,
    controls: false,
    navPosition: 'bottom',
    gutter: 30,
    autoplay: true,
    autoplayButtonOutput: false,
    mouseDrag: true,
    responsive: {
        960: {
            items: 2
        }
    }
});


window.addEventListener('scroll', function() {

    var scrolled = window.pageYOffset;

    var topBtn = document.querySelector('.scroll-to-top');

    if (scrolled > 800) {
        topBtn.classList.add('d-inline-block');
    }

    if (scrolled < 1000) {
        topBtn.classList.remove('d-inline-block');
    }

    console.log(scrolled);
});