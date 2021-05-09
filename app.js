/* Effects for the banner page, the html will be coming in from
the left, but the spaceship will be coming in from the top right
I wanted to make it look like it was flying in from the
top right, so I set a delay until after the text popped up
*/
gsap.from('.effect1', {opacity: 0, duration: 2, x: -50, stagger: 1});
gsap.from('.effect2', {opacity: 0, duration: 1, x:50, y: -50, delay: 2});