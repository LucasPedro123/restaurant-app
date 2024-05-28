import React from 'react'

//Style
import './Feature-style.css'

import featureIcon1 from '../../assets/images/features-icon-1.png'
import featureIcon2 from '../../assets/images/features-icon-2.png'
import featureIcon3 from '../../assets/images/features-icon-3.png'
import featureIcon4 from '../../assets/images/features-icon-4.png'

import shape1 from '../../assets/images/shape-1.png'
import shape2 from '../../assets/images/shape-2.png'



const features = [
    {
        id: 1,
        image: featureIcon1,
        title: 'Hygienic Food',
        description: 'Lorem Ipsum is simply dummy printing and typesetting.'

    },
    {
        id: 2,
        image: featureIcon2,
        title: 'Fresh Environment',
        description: 'Lorem Ipsum is simply dummy printing and typesetting.'

    },
    {
        id: 3,
        image: featureIcon3,
        title: 'Skilled Chefs',
        description: 'Lorem Ipsum is simply dummy printing and typesetting.'

    },
    {
        id: 4,
        image: featureIcon4,
        title: 'Event & Party',
        description: 'Lorem Ipsum is simply dummy printing and typesetting.'
    },

]

const Feature = () => {
    return (
        <section className='section features text-center'>
            <div className="container">
                <p className="section-subtitle label-2">
                    Why CHoose Us
                </p>

                <h2 className="headline-1 section-title">Our Strength</h2>

                <ul className="grid-list">
                    <li className="feature-item">
                        {features.map((e) => (
                            <div className="feature-card">
                                <div className="card-icon">
                                    <img src={e.image} alt="" />
                                </div>

                                <h3 className="title-2 card-title">
                                    {e.title}
                                </h3>

                                <p className="label-1 card-text">
                                    {e.description}
                                </p>
                            </div>
                        ))}
                    </li>
                </ul>

                <img src={shape1} alt="" className="shape shape-1" />
                <img src={shape2} alt="" className="shape shape-2" />


            </div>
        </section>
    )
}

export default Feature
