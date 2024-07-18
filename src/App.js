import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { TweenMax } from 'gsap';
import './App.css';

// Assets
import instagram from './instagram.svg';
import twitter from './twitter.svg';
import linkedIn from './linked-in.svg';
import tiktock from './tiktock.svg';
import downArrow from './downArrow.svg';

function App() {

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

    // Text Animation
    
      const rows = document.querySelectorAll(".text-row");

      rows.forEach(function (e, i) {
        let row_width = e.getBoundingClientRect().width;
        let row_item_width = e.children[0].getBoundingClientRect().width;
        let initial_offset = ((2 * row_item_width) / row_width) * 100 * -1;
        let x_translation = initial_offset * -1;
        console.log(x_translation);
      
        gsap.set(e, {
          xPercent: `${initial_offset}`
        });
      
        let duration = 5 * (i + 1);
      
        var tl = gsap.timeline();
      
        tl.to(e, {
          ease: "none",
          duration: duration,
          xPercent: 0,
          repeat: -1
        });
      });
  })

  return (
    <div className="App">
      <div class="cursor">
        <div class="cursor__ball cursor__ball--big">
          <svg height="30" width="30">
            <circle cx="15" cy="15" r="12" stroke-width="0"></circle>
          </svg>
        </div>
      </div>

      <header className="App-header">
          <a href="http://localhost:3000/" className='logo'>WEB<br />ENGINEER</a>

          <div className='line'></div>

          <div className='app-navigation'>
           <a href='about.html' className='nav-contents'>BACKGROUND</a>
           <a href='portfolio.html' className='nav-contents'>PORTFOLIO</a>
           <a href='get-in-touch.html'>CONTACT</a>
          </div>
      </header>

      <div className='body-contents'>
        <div className='name-intro'>
         <div className='name'>Vinolia Masango</div>
         <div className='intro hoverable mt-3'>Creativity Meets<br />Technology</div>
        </div>

        <div className='socials-dot-border'>
         <div className='socials'>
          <img src={instagram} className="instagram" alt="instagram" />           
          <img src={twitter} className="twitter" alt="twitter" />
          <img src={linkedIn} className="linkedIn" alt="linked-in" />   
          <img src={tiktock} className="tiktock" alt="tiktock" />        
         </div>

         <div className='dot-border'>
          <div className='dot'></div>
          <div className='right-border mt-2'></div>
         </div>
        </div>

        <div className='button'><img src={downArrow} className="downArrow" alt="downArrow" /></div>

        <section className="text">
	<div className="text-content">
		<div className="text-items" role="marquee">
			<div className="text-row">
				<div className="text-item"><span>VINOLIA&nbsp;</span></div>
				<div className="text-item -stroke"><span>VINOLIA&nbsp;</span></div>
				<div className="text-item"><span>VINOLIA</span></div>
				<div className="text-item -stroke"><span>VINOLIA&nbsp;</span></div>
				<div className="text-item"><span>VINOLIA</span></div>
			</div>
		</div>
	</div>
</section>


        {/* <div className='cover'>
          <div className='background hoverable' ref={textRef}>VINOLIA VINOLIA VINOLIA VINOLIA VINOLIA</div>
        </div> */}
      </div>
      
    </div>
  );
}

export default App;


