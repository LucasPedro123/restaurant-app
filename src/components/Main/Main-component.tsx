import './Main-style.css'
import slider1 from "../../assets/images/hero-slider-1.jpg";

import heroIcon from "../../assets/images/hero-icon.png";

function Main() {



    return (
        <main>
            <article>

                <section className='hero text-center'>
                    <ul className='hero-slider'>
                        <li className="slider-item active">
                            <div className='slider-bg'>
                                <img src={slider1} alt="" width="1880" height="950" className='img-cover' />
                            </div>

                            <div className='wrapper-text'>
                                <p className='label-2 section-subtitle slider-reveal'>Tradational & Hygine</p>
                                <h1 className='display-1 hero-title slider-reveal'>For the love of <br /> delicious food</h1>
                                <p className='body-2 hero-text slider-reveal'>Come with family & feel the joy of mouthwatering food</p>

                                <a href="" className='view-link btn-primary slider-reveal'>
                                    <span className='text text-1'>View Our Menu</span>
                                    <span className='text text-2'>View Our Menu</span>
                                </a>
                            </div>
                        </li>
                    </ul>

                    <button className='slider-btn prev'>
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>

                    <button className='slider-btn next'>
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>

                    <a href="#">
                        <img src={heroIcon} width="48" height="48" alt="" />

                        <span className='label-2 text-center span'>Book A Table</span>
                    </a>
                </section>
            </article>
        </main>

    )
}

export default Main;