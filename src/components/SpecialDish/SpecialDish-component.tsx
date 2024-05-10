import specialDishImg from '../../assets/images/special-dish-banner.jpg';
import badge1 from '../../assets/images/badge-1.png';
import shape1 from '../../assets/images/shape-1.png';
import shape9 from '../../assets/images/shape-9.png';

import './SpecialDish-style.css'

function SpecialDish() {
    return (
        <section className="section SpecialDish text-center">
            <div className="special-dish-banner">
                <img src={specialDishImg} loading='lazy' alt="" className="img-cover" />
            </div>


            <div className="special-dish-content bg-black-10">
                <img src={badge1} alt="" className="abs-img" />

                <p className="section-subtitle label-2">Special Dish</p>

                <h2 className='headline-1 section-title'>Lobster Tortellini</h2>

                <p>
                    Lorem Ipsum is dummy text of the printng and typesetting industry lorem
                    Ipsum has been the industrys
                    standard dummy text ever.  Lorem Ipsum is dummy text of the printng and typesetting industry lorem
                    Ipsum has been the industrys
                    standard dummy text ever.
                </p>

                <div className="wrapper ">
                    <del className='del body-3'>$40,00</del>

                    <span className="span body-1">$20,00</span>


                </div>

                <div className="wrapper-btn">
                    <a href="#" className=' btn-primary '>
                        <span className='text text-1'>View All Menu</span>
                        <span className='text text-2'>View All Menu</span>
                    </a>
                </div>
            </div>
            <img src={shape1} alt="" loading='lazy' className="shape shape-1" />
            <img src={shape9} alt="" loading='lazy' className="shape shape-9" />
        </section>
    )
}

export default SpecialDish
