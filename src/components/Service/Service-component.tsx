import './Service-style.css';
import shape1 from "../../assets/images/shape-1.png";
import shape2 from "../../assets/images/shape-2.png";


import service1 from "../../assets/images/service-1.jpg";
import service2 from "../../assets/images/service-2.jpg";
import service3 from "../../assets/images/service-3.jpg";




function Service (){
    return (
        <>
            <section className="section service bg-black-10 text-center">
                <div className="section container">
                    <p className="section-subtitle label-2">Flavors For Royalty</p>
                    <h2 className="headline-1 section-title">We Offer Top Notch</h2>

                    <p className="service-text">
                        Lorem Ipsum is dummy text of the printng and typesetting industry lorem 
                        Ipsum has been the industrys
                        standard dummy text ever.
                    </p>
                    <ul className='grid-list'>
                        <li>
                            <div className="service-card">
                                <a href="" className="has-before hover:shipe">
                                    <figure className="card-banner img-holder" >
                                        <img src={service1} alt="" className="img-holder" loading='lazy'/>
                                    </figure>  
                                </a>
                            </div>
                            <div className="card-content">
                                <h3 className="title-4 card-title">
                                    <a href="">Breakfast</a>
                                </h3>
                                <a href="" className="btn-text hover-underline label-2">View Menu</a>
                                
                            </div>
                        </li>
                        <li>
                            <div className="service-card">
                                <a href="" className="has-before hover:shipe">
                                    <figure className="card-banner img-holder" >
                                        <img src={service2} alt="" className="img-holder" width="285" height="336" loading='lazy'/>
                                    </figure>  
                                </a>
                            </div>
                            <div className="card-content">
                                <h3 className="title-4 card-title">
                                    <a href="">Breakfast</a>
                                </h3>
                                <a href="" className="btn-text hover-underline label-2">View Menu</a>

                            </div>
                        </li>
                        <li>
                            <div className="service-card">
                                <a href="" className="has-before hover:shipe">
                                    <figure className="card-banner img-holder" >
                                        <img src={service3} alt="" className="img-holder" width="285" height="336" loading='lazy'/>
                                    </figure>  
                                </a>
                            </div>
                            <div className="card-content">
                                <h3 className="title-4 card-title">
                                    <a href="">Breakfast</a>
                                </h3>
                                <a href="" className="btn-text hover-underline label-2">View Menu</a>

                            </div>
                        </li>
                    </ul>
                    <img src={shape1} width="246" loading='lazy' height="412" alt="" className="shape shape-1 move-animation" />
                    <img src={shape2} width="246" loading='lazy' height="412" alt="" className="shape shape-2 move-animation" />
                    

                </div>
            </section>
        </>
    )
}

export default Service;