import './Reservation-style.css'

const Reservation = () => {
    return (
        <section className="reservation">
            <div className="container">

                <div className="form reservation-form bg-black-10">

                    <form action="" className="form-left">

                        <h2 className="headline-1 text-center">Online Reservation</h2>

                        <p className="form-text text-center">
                            Booking request <a href="tel:+88123123456" className="link">+88-123-123456</a>
                            or fill out the order form
                        </p>

                        <div className="input-wrapper">
                            <input type="text" name="name" placeholder="Your Name" className="input-field" />

                            <input type="tel" name="phone" placeholder="Phone Number" className="input-field" />
                        </div>

                        <div className="input-wrapper">

                            <div className="icon-wrapper">
                                <i className="fa-solid fa-user"></i>
                                <select name="person" className="input-field">
                                    <option value="1-person">1 Person</option>
                                    <option value="2-person">2 Person</option>
                                    <option value="3-person">3 Person</option>
                                    <option value="4-person">4 Person</option>
                                    <option value="5-person">5 Person</option>
                                    <option value="6-person">6 Person</option>
                                    <option value="7-person">7 Person</option>
                                </select>
                                <i className="fa-solid fa-chevron-down"></i>

                            </div>

                            <div className="icon-wrapper">
                                <i className="fa-solid fa-calendar-days"></i>
                                <input type="date" name="reservation-date" className="input-field" />
                                <i className="fa-solid fa-chevron-down"></i>

                            </div>

                            <div className="icon-wrapper">
                                <i className="fa-solid fa-timer"></i>
                                <select name="person" className="input-field">
                                    <option value="08:00am">08 : 00 am</option>
                                    <option value="09:00am">09 : 00 am</option>
                                    <option value="010:00am">10 : 00 am</option>
                                    <option value="011:00am">11 : 00 am</option>
                                    <option value="012:00am">12 : 00 am</option>
                                    <option value="01:00pm">01 : 00 pm</option>
                                    <option value="02:00pm">02 : 00 pm</option>
                                    <option value="03:00pm">03 : 00 pm</option>
                                    <option value="04:00pm">04 : 00 pm</option>
                                    <option value="05:00pm">05 : 00 pm</option>
                                    <option value="06:00pm">06 : 00 pm</option>
                                    <option value="07:00pm">07 : 00 pm</option>
                                    <option value="08:00pm">08 : 00 pm</option>
                                    <option value="09:00pm">09 : 00 pm</option>
                                    <option value="10:00pm">10 : 00 pm</option>
                                </select>
                                <i className="fa-solid fa-chevron-down"></i>
                            </div>

                        </div>

                        <textarea name="message" placeholder="Message" className="input-field"></textarea>

                        <div className="wrapper-btn">
                    <a href="#" className=' btn-primary '>
                        <span className='text text-1'>Book A Table</span>
                        <span className='text text-2'>Book A Table</span>
                    </a>
                </div>

                    </form>

                    <div className="form-right text-center" style={{ backgroundImage: "url('./assets/images/form-pattern.png')" }}>

                        <h2 className="headline-1 text-center">Contact Us</h2>

                        <p className="contact-label">Booking Request</p>

                        <a href="tel:+88123123456" className="body-1 contact-number hover-underline">+88-123-123456</a>

                        <div className="separator"></div>

                        <p className="contact-label">Location</p>

                        <address className="body-4">
                            Restaurant St, Delicious City, <br />
                            London 9578, UK
                        </address>

                        <p className="contact-label">Lunch Time</p>

                        <p className="body-4">
                            Monday to Sunday <br />
                            11.00 am - 2.30pm
                        </p>

                        <p className="contact-label">Dinner Time</p>

                        <p className="body-4">
                            Monday to Sunday <br />
                            05.00 pm - 10.00pm
                        </p>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Reservation
