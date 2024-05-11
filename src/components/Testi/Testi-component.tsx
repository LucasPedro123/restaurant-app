import './Testi-style.css'
import profile from "../../assets/images/testi-avatar.jpg"

function Testi() {
    return (
        <section className="section testi text-center has-bg-image">
            <div className="container">
                <div className="quote">”</div>

                <p className="headline-2 testi-text">
                    I wanted to thank you for inviting me down for that amazing dinner the other night. The food was extraordinary.
                </p>

                <div className='profile-content'>
                    <div className="wrapper">
                        <div className="separator"></div>
                        <div className="separator"></div>
                        <div className="separator"></div>
                    </div>

                    <div className="profile">
                        <img src={profile} className='profile-image' alt="" />
                        <p className="label-2 profile-name">Sam Jhonson</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testi



