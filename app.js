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

/* Features page,
here I am just adding in some effects where the cards will appear
staggered one after the other and the text and title in the ards 
will bounce in*/

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

/* ScrollTrigger for spaceship in parallax pictures,
I thought this would be cool to add along side parallax
pictures of planets, so it's almost like the spaceship
is travleing through the planets as you scroll */

gsap.to(".spaceshipmotion", {
  scrollTrigger: {
  trigger: ".spaceshipmotion",
  //markers: true,
  start: "top center",
  end: "top 100px",
  scrub: true
  },
  y: 1150,
  duration: 36
});


/* Parallax Section 
The Parallax section was made in compliment with the scrolltrigger
with the spaceship, I wanted the parallax to feel like the spaceship
was traveling through with the planets and text, and I thought it
was a cool effect to pair together instead of a solo parallax section,
I felt like it really gave it a lot of movement doing it the way I did

Extra note!!!! I also left the very last image on this parallax section 
the same because it kind of goes under the wave, and I thought that it
ended well together
*/

gsap.to(".pContent", {
    yPercent: -100,
    ease: "none",
    scrollTrigger: {
      trigger: ".parallax",
      scrub: true
    }, 
  });
  
  gsap.to(".pImage", {
    yPercent: 50,
    ease: "none",
    scrollTrigger: {
      trigger: ".parallax",
      scrub: true
    }, 
  });

  // Canvas with Animate

const canvas = document.getElementById('canvasplanets');
canvas.width = 400;
canvas.height = 400;

const ctx = canvas.getContext('2d');

function Circle (x, y, r, c) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.c = c;

// This .dx and this .dy are the velocity for the balls when they are going through the screen

  this.dx = (Math.random() * 4) + 1;
  this.dx *= Math.floor(Math.random * 2) == 1 ? 1 : -1;
  this.dy = (Math.random() * 4) + 1;
  this.dy *= Math.floor(Math.random * 2) == 1 ? 1 : -1;

  this.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.c;
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
  }

  this.animate = function () {
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

// Using math.random so that it doesn't generate balls outside of the intended area

const balls = [];
for (let i = 0; i < 10; i++){
  let r = Math.floor(Math.random() * 30) + 15;
  let x = Math.random() * (canvas.width - r * 2) + r;
  let y = Math.random() * (canvas.height - r * 2) + r;
  let c = '#f54538';
  balls.push(new Circle(x, y, r, c));
}

// looping through the balls array to draw multiple balls

function Update () {
  for (let i = 0; i < balls.length; i++) {
    balls[i].animate();
  }
}

requestAnimationFrame(Update);

Update();



















