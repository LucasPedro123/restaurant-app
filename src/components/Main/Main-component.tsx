import './Main-style.css';
import slider1 from "../../assets/images/hero-slider-1.jpg";
import slider2 from "../../assets/images/hero-slider-2.jpg";
import slider3 from "../../assets/images/hero-slider-3.jpg";

import heroIcon from "../../assets/images/hero-icon.png";
import { useState, useEffect } from 'react';

const Main: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0); // Estado para o slide atual
    const totalSlides = 3; // Total de slides no carrossel

    const slideInterval = 5000; // 5 segundos para o slider automático

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % totalSlides); // Ciclo de slides
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
    };

    // Re-inicia a animação ao mudar de slide
    useEffect(() => {
        const interval = setInterval(nextSlide, slideInterval);

        return () => clearInterval(interval);
    }, [currentSlide]); // Atualiza sempre que o slide muda

    return (
        <main>
            <article>
                <section className='hero text-center'>
                    <ul
                        className='hero-slider'

                    >
                        {/* Use chave para reiniciar a animação */}
                        <li
                            className={`slider-item ${currentSlide === 0 ? 'active' : ''}`}
                            key={`slide-${currentSlide}-0`}
                        >
                            <div className='slider-bg'>
                                <img src={slider1} alt="Slide 1" className='img-cover' />
                            </div>
                            <div className='wrapper-text'>
                                <p className='label-2 section-subtitle slider-reveal'>Traditional & Hygienic</p>
                                <h1 className='display-1 hero-title slider-reveal'>For the Love of Delicious Food</h1>
                                <p className='body-2 hero-text slider-reveal'>Come with family & feel the joy of mouthwatering food</p>
                                <a href="#" className='view-link btn-primary slider-reveal'>
                                    <span className='text text-1'>View Our Menu</span>
                                    <span className='text text-2'>View Our Menu</span>
                                </a>
                            </div>
                        </li>

                        <li
                            className={`slider-item ${currentSlide === 1 ? 'active' : ''}`}
                            key={`slide-${currentSlide}-1`}
                        >
                            <div className='slider-bg'>
                                <img src={slider2} alt="Slide 2" className='img-cover' />
                            </div>
                            <div className='wrapper-text'>
                                <p className='label-2 section-subtitle slider-reveal'>Traditional & Hygienic</p>
                                <h1 className='display-1 hero-title slider-reveal'>For the Love of Delicious Food</h1>
                                <p className='body-2 hero-text slider-reveal'>Come with family & feel the joy of mouthwatering food</p>
                                <a href="#" className='view-link btn-primary slider-reveal'>
                                    <span className='text text-1'>View Our Menu</span>
                                    <span className='text text-2'>View Our Menu</span>
                                </a>
                            </div>
                        </li>

                        <li
                            className={`slider-item ${currentSlide === 2 ? 'active' : ''}`}
                            key={`slide-${currentSlide}-2`}
                        >
                            <div className='slider-bg'>
                                <img src={slider3} alt="Slide 3" className='img-cover' />
                            </div>
                            <div className='wrapper-text'>
                                <p className='label-2 section-subtitle slider-reveal'>Traditional & Hygienic</p>
                                <h1 className='display-1 hero-title slider-reveal'>For the Love of Delicious Food</h1>
                                <p className='body-2 hero-text slider-reveal'>Come with family & feel the joy of mouthwatering food</p>
                                <a href="#" className='view-link btn-primary slider-reveal'>
                                    <span className='text text-1'>View Our Menu</span>
                                    <span className='text text-2'>View Our Menu</span>
                                </a>
                            </div>
                        </li>
                    </ul>

                    <button
                        className='slider-btn prev'
                        onClick={prevSlide}
                    >
                        &lt;
                    </button>

                    <button
                        className='slider-btn next'
                        onClick={nextSlide}
                    >
                        &gt;
                    </button>
                </section>

                <a href="#" className='hero-btn has-before has-after'>
                    <img src={heroIcon} width="48" height="48" alt="" />
                    <span className='label-2 text-center'>Book A Table</span>
                </a>
            </article>
        </main>
    );
};

export default Main;
