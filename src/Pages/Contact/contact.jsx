import './contact.css'
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import React from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import email from '../../Images/email-icon.png'
import github from '../../Images/github-icon.png'
import linkedin from '../../Images/linkedin-icon.png'
import phone from '../../Images/phone-icon.png'

const SERVICE_ID = "service_ps9uq7r"
const TEMPLATE_ID = "template_aioqwbe"
const USER_ID = "MigSQGdyr4shiEtZP"

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully',
          confirmButtonColor: '#FF9629'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
          confirmButtonColor: '#FF9629'
        })
      });
    e.target.reset()
  };

  return (
    <>    
    
    <div className='contact-container'>
      <div className='vertical-line'></div>
          <Form onSubmit={sendEmail}>
            <span>Email</span>
            <Form.Field
              id='form-input-control-email'
              control={Input}
              name='from_email'
              placeholder='Your Email…'
              required
            />
            <span>Name</span>
            <Form.Field
              id='form-input-control-last-name'
              control={Input}
              name='from_name'
              placeholder='Your Name…'
              required
            />
            <span>Message</span>
            <Form.Field
              id='form-textarea-control-opinion'
              control={TextArea}
              name='message'
              placeholder='Message…'
              required
            />
            <div className="button-div">
              <Button type='submit'>Submit</Button>
            </div>
          </Form>
          <div className='vertical-line'></div>
        </div>

      <div className='contact-text-container'>
        <span className='contact-text'>
          This contact form will send an email directly to my personal account (gaugerderek@gmail.com), feel free to message me at any time
          more of my contact information will be in the footer of this website and at the bottom if this page in those circular icons. Once again, thank you for visting the website. I put a lot of 
          work into this, so it would be great to hear some feedback!
        </span>
      </div>
      <div className='contact-info'>
        <figure>
          <a href="https://www.github.com/derekgauger"><img className="contact-link" title="github" alt="Github Link" src={github}/></a>
          <figcaption>github.com/derekgauger</figcaption>

        </figure>
        <figure>
          <a href="https://www.linkedin.com/in/derekgauger"><img className="contact-link" title="linkedin" alt="LinkedIn Link" src={linkedin}/></a>
          <figcaption>linkedin.com/in/derekgauger</figcaption>

        </figure>
        <figure>
          <img className="contact-link" title="Phone" alt="Phone Number" src={phone}/>
          <figcaption>262-581-7793</figcaption>

        </figure>
        <figure>
          <a href="/contact"><img className="contact-link" title="email" alt="Email Link" src={email}/></a>
          <figcaption>gaugerderek@gmail.com</figcaption>
        </figure>
      </div>
    </>
    )
}

export default Contact
