/* Effects for the banner page, the html will be coming in from
the left, but the spaceship will be coming in from the top right
I wanted to make it look like it was flying in from the
top right, so I set a delay until after the text popped up. 
Incorporating gsap timeline to make sure that they come one after the other
*/

let tl = gsap.timeline({defaults:{duration: 1}})

tl.from(".naveffect", {
    y: -50,
    opacity: 0,
    ease: "power2.out",
    duration: 1
    })
    .from(".effect1", {
    x: -50, 
    stagger: 1, 
    opacity: 0, 
    duration: 2
    })
    .from(".effect2", {
    opacity: 0, 
    x: 50, 
    y: -50, 
    duration: 2
    },  
    "-=1.2");

/* Scroll Trigger section 
I wanted to create a little scroll as the user
is moving onto the features section that the spaceship
will shoot off the screen
*/


gsap.registerPlugin(ScrollTrigger);

gsap.to(".spaceshipscroll", {
    scrollTrigger: {
    trigger: ".spaceshipscroll",
    //markers: true,
    start: "top center",
    end: "top 100px",
    scrub: true
    },
    x: 1700,
    duration: 36
});

/* Features page */

tl.from(".feature-effect1",{
    x: -25,
    opacity: 0,
    duration: 0.5
});

tl.from(".card", {
    y: -10, 
    stagger: 1, 
    opacity: 0, 
    duration: 1
    })
    .from(".feature-effect2", {
    y: -100, 
    opacity: 0, 
    stagger: 1, 
    ease: 'bounce', 
    duration: 1
});

