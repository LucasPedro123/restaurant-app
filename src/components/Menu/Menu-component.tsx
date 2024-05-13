import menu1 from '../../assets/images/menu-1.png';
import menu2 from '../../assets/images/menu-2.png';
import menu3 from '../../assets/images/menu-3.png';
import menu4 from '../../assets/images/menu-4.png';
import menu5 from '../../assets/images/menu-5.png';
import menu6 from '../../assets/images/menu-6.png';
import shape5 from '../../assets/images/shape-5.png';
import shape6 from '../../assets/images/shape-6.png';
import './Menu-style.css'

const menuList = [
    { cardTitle: "Greek Salad", price: "$25.50", badge: "Seasonal", description: "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.", image: menu1 },
    { cardTitle: "Lasagne", price: "$40.00", badge: "", description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices", image: menu2 },
    { cardTitle: "Butternut Pumpkin", price: "$10.00", badge: "", description: "Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.", image: menu3 },
    { cardTitle: "Tokusen Wagyu", price: "$39.00", badge: "New", description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.", image: menu4 },
    { cardTitle: "Olivas Rellenas", price: "$25.00", badge: "", description: "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.", image: menu5 },
    { cardTitle: "Opu Fish", price: "$49.00", badge: "", description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices", image: menu6 },
]

function Menu() {
    return (
        <section className="section menu">
            <div className="container">
                <p className="section-subtitle text-center label-2">Special Selection</p>
                <h2 className="headline-1 section-title text-center">Delicious Menu</h2>

                <ul className="grid-list">
                    {menuList.map(e =>
                        <li>
                            <div className="menu-card hover:card">
                                <figure className="card-banner " >
                                    <img src={e.image} loading='lazy' alt="" className='menu-img' />
                                </figure>

                                <div>
                                    <div className="title-wrapper">
                                        <h3 className="title-3">
                                            <a href="#" className="card-title">{e.cardTitle}</a>
                                        </h3>

                                        <span className="badge label-1">{e.badge}</span>
                                        <span className='span title-2'>{e.price}</span>

                                        <p className="card-text label-1">
                                            {e.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>

                <p className="menu-text text-center">During winter daily from <span>7:00 pm</span> to <span>9:00 pm</span></p>
            </div>
            <div className="wrapper-btn">
                <a href="#" className=' btn-primary '>
                    <span className='text text-1'>View All Menu</span>
                    <span className='text text-2'>View All Menu</span>
                </a>
            </div>
            <div className='shape-content'>
                <img src={shape6} alt="" className=" shape-3 move-anim" />
                <img src={shape5} alt="" className=" shape-2 move-anim" />

            </div>


        </section>
    )
}

export default Menu
