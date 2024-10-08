import { TweenMax } from 'gsap';
import { gsap } from 'gsap';


const $bigBall = document.querySelector('.cursor__ball--big');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, .4, {
    x: e.pageX - 15,
    y: e.pageY - 15 });

}

// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, .5, {
    scale: 8 });

}
function onMouseHoverOut() {
  TweenMax.to($bigBall, .5, {
    scale: 1 });

}