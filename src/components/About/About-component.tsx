import shape3 from "../../assets/images/shape-3.png";
import badge2 from "../../assets/images/badge-2.png";
import aboutAbsImage from "../../assets/images/about-abs-image.jpg";
import aboutBanner from "../../assets/images/about-banner.jpg";
import './About-style.css';




function About() {
    return (
        <section className="section about text-center">
            <div className="container ">
                <div className="about-content">
                    <p className="label-2 section-subtitle">Our Story</p>


                    <h2 className="headline-1 section-title">
                        Every Fla vor Tells a Story
                    </h2>


                    <p className="section-text">
                        Lorem Ipsum is dummy text of the printng and typesetting industry lorem
                        Ipsum has been the industrys
                        standard dummy text ever.  Lorem Ipsum is dummy text of the printng and typesetting industry lorem
                        Ipsum has been the industrys
                        standard dummy text ever.
                    </p>


                    <div className="contact-label">Book Through Call</div>


                    <a href="#" className="body-1 contact-number hover-underline">+55 (11) 9384-9137</a>


                    <div className="wrapper-btn">
                        <a href="#" className=' btn-primary '>
                            <span className='text text-1'>View Our Menu</span>
                            <span className='text text-2'>View Our Menu</span>
                        </a>
                    </div>
                </div>
                <figure className="about-banner">
                    <img src={aboutBanner} alt=""  loading="lazy" width="570" height="570" className="w-100 banner-image" />

                    <div className="wrapper-image">
                        <div className="abs-img abs-img-1" >
                            <img src={aboutAbsImage} className="w-100" width="285" height="285" />
                        </div>

                        <img src={shape3} className="shape" width="197" height="194" loading="lazy" alt="" />

                        <div className="abs-img abs-img-2 has-before">
                            <img src={badge2} loading="lazy" width="133" alt="" />
                        </div>
                    </div>
                </figure>
            </div>


        </section>
    )
}




export default About;
