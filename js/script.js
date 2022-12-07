// Navbar/Sidebar
const menuBtn = document.querySelectorAll('.menu-btn');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu li');

// Toggle sudebar open/close
menuBtn.forEach(btn => {
    console.log('in here');
    btn.addEventListener('click', sideNavToggle);
});

function sideNavToggle() {
    //Animation delay
    let delay = 100;
    //Toggle open class
    menu.classList.toggle('menu-open');

    //Sidenav link Slide Animation
    setTimeout(() => {
        //Reset animation after all of them end
        resetAnimation();
    }, delay * (links.length + 1));

    //add animation to links
    links.forEach(link => {
        //opacity
        link.style.opacity = "0";
        //animation
        link.style.animation = "slideIn 400ms ease-in-out forwards";
        //delay
        link.style.animationDelay = delay + "ms";
        
        //increase delay for each link
        delay += 100;
    });

    /* reset animation so they can be activated again */
    function resetAnimation(){
        // select all links
        links.forEach(link => {
            // remove animations
            link.style.animation = "none";
            // set opacity back to default
            link.style.opacity = "1";
        });
    }
}

// slider
const cntrl = document.querySelectorAll('.slider-cntrl');
const cntrlMob = document.querySelectorAll('.pagination-mobile > li');
const title = document.querySelector('.title');
const subtitle = document.querySelectorAll('.sub-title');
const img = document.querySelector('.thumbnail');
const count = document.querySelector('.slider-count');
const progress = document.querySelector('.progress div');

let id =0;
// data
// array with image path for the slider
const images = [
    './images/artworks/2.jpg',
    './images/artworks/3.jpg',
    './images/artworks/4.jpg',
];

//progress width for the slider
const progressWidth = [
    '33%',
    '66%',
    '100%',
];

//Text variations for the slider
const text = [
    'Work',
    'Active',
    'Travel',
];

// pagination controls
for(let i = 0; i < cntrl.length; i++){
    // add click event for all pagination
    cntrl[i].addEventListener('click', () => {
        // run the slider function
        slider(i);
        // set id to clicked pagination index
        id = i;
        // stop auto slider
        stopAutoSlide();
    });
    // add click events for all pagination on mobile
    cntrlMob[i].addEventListener('click', () => {
        // run the slider function
        slider(i);
        //set id to clicked pagination index
        id = i;
        // stop auto slide
        stopAutoSlide();
    });
}

function slider(i){
    // change thumbnail image
    img.src = images[i];
    //progress progression
    progress.style.width = progressWidth[i];
    // change title
    title.innerText = text[i] + " Collection";
    // change sub title
    subtitle.forEach(sub => {
        sub.innertext = text[i] + " Collection"
    });

    // chnage slide numnber
    count.innerText = "/0" + (i + 1);

    // remove active calss from all
    for(let i = 0; i < cntrl.length; i++){
        cntrl[1].classList.remove('active');
        cntrlMob[i].classList.remove('pag-active');
    }
    //reset active class to clicked element
    cntrl[i].classList.add('active');
    cntrlMob[i].classList.add('pag-active');

    //slider automation
    function nextSlide(){
        // increment img id
        id++;
        /*check if id is greater than the number of available slides*/
        if(id > cntrl.length - 1) {
            id = 0;
        }
        // run the slider function
        slider(id);
    }

    //automate slider
    let autoSlide = setInterval(nextSlide, 10000);

    //stop automatic slide
    function stopAutoSlide(){
        clearInterval(autoSlide);
        // restat auto slider
        autoSlide = setInterval(nextSlide, 10000);
    }
}