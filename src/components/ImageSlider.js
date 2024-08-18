import React, { useEffect } from 'react';
import gsap from 'gsap';
import image01 from '../Assets/IMG_0386.jpeg';
import image02 from '../Assets/IMG_0387.jpeg';
import image03 from '../Assets/IMG_3111.jpg';
import image04 from '../Assets/IMG_3112.jpeg';
import image05 from '../Assets/IMG_3113.jpg';
import image06 from '../Assets/IMG_3114.jpg';
import image07 from '../Assets/IMG_3115.jpg';
import image08 from '../Assets/IMG_3116.jpg';

const ImageSlider = () => {
  useEffect(() => {
    console.clear();

    const btn = document.querySelectorAll('[data-btn]');
    const container = document.querySelector('.slider');

    function panningNext() {
      const slides = document.querySelectorAll('.slide');
      slides.forEach(e => {
        e.dataset.type = '';
        e.style = '';
        e.classList.remove('to-left', 'to-right', 'from-before', 'to-before', 'from-after', 'to-after', 'fade-in', 'fade-out');
      });

      slides[0].dataset.type = 'before';
      slides[0].classList.add('fade-out');
      gsap.to('.fade-out', { duration: 1, scale: '0, 0' });

      slides[1].dataset.type = 'before';
      slides[1].classList.add('to-before');
      gsap.from('.to-before', { duration: 1, transform: 'translatex(0rem)', scale: '1, 1' });

      slides[2].dataset.type = 'active';
      slides[2].classList.add('to-left');
      gsap.from('.to-left', { duration: 1, transform: 'translatex(10.5rem)' });

      slides[3].dataset.type = 'active';
      slides[3].classList.add('to-left');
      gsap.from('.to-left', { duration: 1, transform: 'translatex(10.5rem)' });

      slides[4].dataset.type = 'active';
      slides[4].classList.add('from-after');
      gsap.from('.from-after', { duration: 1, transform: 'translatex(7rem)', scale: '0.8' });

      slides[5].dataset.type = 'after';
      slides[5].classList.add('fade-in');
      gsap.from('.fade-in', { duration: 1, scale: '0, 0' });

      setTimeout(() => {
        render(slides, container);
        slides[0].dataset.type = '';
        container.innerHTML += slides[0].outerHTML;
        container.firstElementChild.remove();
      }, 1000);
    }

    function panningPrev() {
      const slides = document.querySelectorAll('.slide');
      slides.forEach(e => {
        e.dataset.type = '';
        e.style = '';
        e.classList.remove('to-left', 'to-right', 'from-before', 'to-before', 'from-after', 'to-after', 'fade-in', 'fade-out');
      });

      render(slides, container);
      container.insertAdjacentHTML('afterbegin', `${slides[slides.length - 1].outerHTML}`);
      container.lastElementChild.remove();
      const emptySlides = document.querySelectorAll('.slide');
      emptySlides[0].dataset.type = 'before';
      emptySlides[0].classList.add('fade-in');
      gsap.from('.fade-in', { duration: 1, scale: '0, 0' });

      emptySlides[1].dataset.type = 'active';
      emptySlides[1].classList.add('from-before');
      gsap.from('.from-before', { duration: 1, transform: 'translatex(-7rem)', scale: '0.8' });

      emptySlides[2].dataset.type = 'active';
      emptySlides[3].dataset.type = 'active';
      emptySlides[2].classList.add('to-right');
      emptySlides[3].classList.add('to-right');
      gsap.from('.to-right', { duration: 1, transform: 'translatex(-10.5rem)' });

      emptySlides[4].dataset.type = 'after';
      emptySlides[4].classList.add('to-after');
      gsap.from('.to-after', { duration: 1, transform: 'translatex(0rem)', scale: '1, 1' });

      emptySlides[5].dataset.type = 'after';
      emptySlides[5].classList.add('fade-out');
      gsap.to('.fade-out', { duration: 1, scale: '0, 0' });
    }

    function render(slides, container) {
      container.innerHTML = '';
      for (let slide of slides) {
        container.innerHTML += slide.outerHTML;
      }
    }

    btn.forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.dataset.btn === 'next') {
          panningNext();
        } else {
          panningPrev();
        }
      });
    });
  }, []);

  return (
    <div className='container'>
      <h1 className='text-center mb-8 mt-20'>Shoots</h1>
      <div className="slider-wrapper">
        <button data-btn='prev'>Prev</button>
        <div className="slider">
          <div className="slide num1" data-type="before">
            <img src={image01} alt="Slide 1" />
          </div>
          <div className="slide num2" data-type="active">
            <img src={image02} alt="Slide 2" />
          </div>
          <div className="slide num3" data-type="active">
            <img src={image03} alt="Slide 3" />
          </div>
          <div className="slide num4" data-type="active">
            <img src={image04} alt="Slide 4" />
          </div>
          <div className="slide num5" data-type="after">
            <img src={image05} alt="Slide 5" />
          </div>
          <div className="slide num6">
           <img src={image06} alt="Slide 6" />
          </div>
          <div className="slide num7">
           <img src={image07} alt="Slide 7" />
          </div>
          <div className="slide num8">
           <img src={image08} alt="Slide 8" />
          </div>
        </div>
        <button data-btn='next'>Next</button>
      </div>
    </div>
  );
};

export default ImageSlider;
