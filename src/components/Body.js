import React, { useEffect } from 'react';
import downArrow from '../Assets/down-arrow.svg';
import { gsap } from 'gsap';

function Body() {

    useEffect(() => {
        const applyTextAnimation = (selector) => {
            document.querySelectorAll(selector).forEach(function(element) {
                element.innerHTML = element.textContent.replace(/([^\x00-\x80]|\w)/g, function(match) {
                    return "<span class='_text3'>" + match + "</span>";
                });
            });
            
            const spans = document.querySelectorAll(`${selector} span`);
            gsap.from(spans, { opacity: 0, x: 40, ease: "power1.out", stagger: 0.1, delay: 4.5 });
        };

        applyTextAnimation('.name');
        applyTextAnimation('.mini-intro');
        applyTextAnimation('.intro');

        gsap.set('.body-contents span', { opacity: 0 });

    }, []);

    return (
        <div className='body-contents'>
            <div className='text-center mt-10'>
                <div className='name'>Vinolia Masango</div>
                <div className='intro hoverable mt-3 mx-auto w-[48%]'>Creativity Meets<br />Technology</div>
                <p className='mini-intro hoverable text-[30px] mt-5 mx-auto w-[54%]'>
                  Vinolia Masango an innovative FrontEnd Developer and a photographer and videographer based in South Africa
                </p>
            </div>
            <div className='absolute right-[5%] top-[40%]'>
                <div className='absolute left-[-2px] bg-black w-[5px] h-[40px]'></div>
                <div className='absolute w-[1px] h-[220px] bg-black mt-2'></div>
                <div className='count absolute top-[230px] right-[-15px]'>01</div>
            </div>
            <div className='button relative flex justify-center mx-auto min-h-[80px] max-w-[65px] mt-[10%]'>
                <img src={downArrow} className="downArrow" alt="downArrow" />
            </div>
        </div>
    );
}

export default Body;
