import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Socials from './Socials';
import ChangingThemes from './ChangingThemes';

function Body() {
    const [bodyText, setBodyText] = useState("Creativity Meet Technology");
    const [bodyBackgroundColor, setBodyBackgroundColor] = useState("#d3d3d3");
    const [introText, setIntroText] = useState("I bring value to web development projects by merging technical expertise with creativity and aesthetics.");

    useEffect(() => {
        gsap.to(document.body, {
            backgroundColor: bodyBackgroundColor,
            duration: 0.5,
        });

        const applyEpic3DTextAnimation = (selector) => {
            document.querySelectorAll(selector).forEach((element) => {
                element.innerHTML = element.textContent.replace(/([^\x00-\x80]|\w)/g, (match) => {
                    return `<span class='_text3'>${match}</span>`;
                });
            });

            const spans = document.querySelectorAll(`${selector} span`);

            gsap.set(spans, {
                opacity: 0,
                scale: 3,
                rotationX: () => Math.random() * 360 - 180,
                rotationY: () => Math.random() * 360 - 180,
                z: () => Math.random() * 1000 - 500,
            });

            gsap.to(spans, {
                opacity: 1,
                scale: 1,
                rotationX: 0,
                rotationY: 0,
                z: 0,
                duration: 1.3,
                ease: 'expo.inOut',
                stagger: {
                    amount: 2.5,
                    from: 'center',
                },
                delay: 1.5,
            });

            spans.forEach((span) => {
                span.addEventListener('mouseenter', () => {
                    gsap.to(span, {
                        scale: 1.8,
                        rotationZ: () => Math.random() * 360,
                        z: 100,
                        ease: 'elastic.out(1, 0.5)',
                        duration: 0.5,
                    });
                });

                span.addEventListener('mouseleave', () => {
                    gsap.to(span, {
                        scale: 1,
                        rotationZ: 0,
                        z: 0,
                        ease: 'power3.out',
                        duration: 0.5,
                    });
                });
            });
        };

        applyEpic3DTextAnimation('.name');
        applyEpic3DTextAnimation('.intro');

         const introText = document.querySelector('.intro-text');
         if (introText) {
             const introTextSpans = introText.textContent.split('').map((char) => {
                 return char === ' ' ? '&nbsp;' : `<span class='intro-char'>${char}</span>`;
             }).join('');
             introText.innerHTML = introTextSpans;
 
             const chars = introText.querySelectorAll('.intro-char');
 
             gsap.set(chars, { opacity: 0, y: 20 });
 
             gsap.to(chars, {
                 opacity: 1,
                 y: 0,
                 duration: 1,
                 ease: 'power2.out',
                 delay: 0.7,
             });
         }

    }, [bodyBackgroundColor]);

    return (
        <>
        <div className='body-contents'>
            <div className='text-center mt-[200px]'>
                <div className='name'>Vinolia Masango</div>
                <div className='flex justify-center'>
                <div className='intro hoverable mt-3'>
                    {bodyText}
                </div>
                </div>
                <div className='intro-effect overflow-hidden text-[20px] w-[29%] mt-[20px]'>
                    <span className='intro-text'>{introText}</span>
                </div>
            </div>
            <div className='absolute right-[8%] top-[40%]'>
                <Socials />
            </div>
        </div>
        <ChangingThemes setBodyText={setBodyText} setBodyBackgroundColor={setBodyBackgroundColor} setIntroText={setIntroText} />
        </>
    );
}

export default Body;
