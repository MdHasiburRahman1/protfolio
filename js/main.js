var typing=new Typed(".text", {
    strings: ["Developer.","Content","Design","Solution"],
    typeSpeed: 100,
    backSpeed: 40,
    loop: true,
});


// owl carosol / patners section start 
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,


    items:5,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


// owl carosol / patners section end

  AOS.init();


