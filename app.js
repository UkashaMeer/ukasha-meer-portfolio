// Loading Animation

window.addEventListener('load' , () => {
    const loading = document.getElementById('loading');
    setTimeout(() => {
        loading.style.opacity = 0;
        setTimeout( () => { loading.style.display = 'none' }, 500 )
    }, 500)
   
})

// For Nav Mobile Menu
const menu = document.getElementsByClassName('menu')[0];

const ToggleMenu = () => {
    menu.classList.toggle('active')
}

// For button Hover
const soundHover = document.getElementById('soundHover');

const playMeme = () => {
    soundHover.currentTime = .5;
    soundHover.play();
}

const stopMeme = () => {
    soundHover.pause();
    soundHover.currentTime = .5;
}

// for hero slider

let currentSlide  = 0;
isTransitioning = false;

const showSlide = (index) => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const slider = document.querySelector('.slider');
    const totalSlides = slides.length;

    if(isTransitioning) return;
    isTransitioning = true;

    currentSlide = index;

    const offset = -currentSlide * 100;
    slider.style.transition = 'transform .5s ease-in-out';
    slider.style.transform = `translateX(${offset}%)`;

    if(currentSlide >= totalSlides){
        setTimeout(() => {
        slider.style.transition = 'none';
        slider.style.transform = 'translateX(0)';
        currentSlide = 0;
        dots.forEach(dot => dot.classList.add('active'));
        dots[currentSlide].classList.remove('active');
        isTransitioning = false;
        }, 500)
    }else{
        dots.forEach(dot => dot.classList.add('active'));
        dots[currentSlide].classList.remove('active');

        setTimeout( () => isTransitioning = false, 500 );
    }
}

function nextSlide () {
    showSlide(currentSlide + 1);
}

setInterval(nextSlide, 5000)


document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index)
    })
})

showSlide(currentSlide)
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".section-heading").forEach((heading) => {
    gsap.fromTo(heading, 
        {
            opacity: 0,
            y: 100,
        },
        {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: heading,
                start: "top 80%",
            }
        }
    );
})

window.addEventListener('load', () => {
    gsap.timeline()
     .fromTo('.nav' , 
            { opacity: 0, y : -100 },
            { opacity: 1, y: 0, duration: 2, ease: "power3.out" },
        )
        .fromTo(".hero-left-side-content-box", 
            { opacity: 0, x: -100 }, 
            { opacity: 1, x: 0, duration: 2, ease: "power3.out" },
            "-=1.5"
        )
         .fromTo(".download", 
            { opacity: 0, x: -100 }, 
            { opacity: 1, x: 0, duration: 2, ease: "power3.out" },
             "-=1.5"
        )
        .fromTo(".hero-right-side", 
            { opacity: 0, x: 100 }, 
            { opacity: 1, x: 0, duration: 2, ease: "power3.out" }, 
            "-=1.5"
        )
});


gsap.utils.toArray(".project-item").forEach((projectItem) => {
    gsap.fromTo(projectItem, 
        {
            opacity: 0,
            y: 100
        },
        {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: projectItem,
                start: "top 50%",
            }
        }
    );
})


gsap.fromTo('.img-box' , 
            { opacity: 0, x : -100 },
            { 
                opacity: 1, x: 0, duration: 2, ease: "power3.out",
                scrollTrigger: {
                trigger: '.img-box',
                start: "top 80%",
            }
            }
        )
gsap.fromTo(".about-content", 
            { opacity: 0, x: 100 }, 
            { 
                opacity: 1, x: 0, duration: 2, ease: "power3.out",
                scrollTrigger: {
                trigger: '.about-content',
                start: "top 80%",
            }
            },
)


gsap.utils.toArray(".video").forEach((video) => {
    gsap.fromTo(video, 
        {
            opacity: 0,
            scale: 0,
            width: 0,
        },
        {
            opacity: 1,
            scale: 1,
            width: 12 + 'rem',
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: video,
                start: "top 80%",
            }
        }
    );
})

function sendMail () {
    let parms = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    }

    emailjs.send('service_7jl8ec6', 'template_5vuxnhn', parms).then(alert('email has sent'))

}