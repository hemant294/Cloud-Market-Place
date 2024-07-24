import "./Contact.css";

const Contect = () => {
    return <>
    <div className='contact'>
        {/* <Container> */}
            <h1>Contect Us</h1>
            <div className="contact-head">
                <div className='map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d719.8179693021134!2d75.89593854044178!3d22.75008920323127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396303068a20af6d%3A0x1cd71a54acefab5e!2sH%26M%20Store%2C%20Apollo%20Premier%2C%20Vijaynagar!5e0!3m2!1sen!2sin!4v1696668624330!5m2!1sen!2sin" width="0" height="0" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='contact-form'> 
                    <form method="POST" action="https://formspree.io/f/xzblkwnq">
                        <div>
                            <label>Username</label>
                            <input type="text" placeholder="username" name="username" />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" placeholder="enter email" name="email" />
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea type="text" placeholder="Enter your message at hear you can contect with me" name="message" />
                        </div>
                        <div className='submit-btn'>

                        <input type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        {/* </Container> */}
        </div>
    </>

}
export default Contect;