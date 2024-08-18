import React, { useEffect } from 'react';
import { TweenMax } from 'gsap';

function Cursor() {
    useEffect (() => {
        const $bigBall = document.querySelector('.cursor__ball--big');
        const $hoverables = document.querySelectorAll('.hoverable');
    
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
          TweenMax.to($bigBall, .3, {
            scale: 8 });
        
        }
        function onMouseHoverOut() {
          TweenMax.to($bigBall, .3, {
            scale: 1 });
        
        }
      })

    return (
      <div class="cursor">
        <div class="cursor__ball cursor__ball--big">
          <svg height="30" width="30">
            <circle cx="15" cy="15" r="12" stroke-width="0"></circle>
          </svg>
        </div>
      </div>
    );
}

export default Cursor;

