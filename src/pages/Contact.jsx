import React from 'react'

const Contact = () => {
  
  return (
    <section className='contact'>
      <div class="contact-main">
        <div class="email">
          <h3>Email:</h3>
          <h4>christophegauthiersokpoly@gmail.com</h4>
        </div>
        <div class="num">
          <h3>Appel:</h3>
          <h4>61161498 / 41265684</h4>
        </div>     
      </div>
      <div className='contact-col'>
      <form>
          <label>Your name</label>
          <input type='text' name='name' placeholder='Enter your name' required />
          <label>Your Number</label>
          <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
          <label>Write your messages here</label>
          <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit now </button>
        </form>
      </div>
    </section>
  )
}

export default Contact