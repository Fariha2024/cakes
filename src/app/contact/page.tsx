

const Contact = () => {
    return(
       <div>
            <section className='contact-form'>
                <h2 className='fadeIn'>Contact Me</h2>
                <form>
                    <input type="text" placeholder='Full Name' required />
                    <input type="email" placeholder='E-mail-Address'/>
                    <input type="text" placeholder='Phone No' required />
                    <input type="date" placeholder='Date' required/>
                    <textarea placeholder='your Any Order' rows={5} required></textarea>
                    <button type='submit'>Order Now</button>
                </form>
            </section>
       </div>
    )
}

export default Contact
