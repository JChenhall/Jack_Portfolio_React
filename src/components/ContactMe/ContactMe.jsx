import React from 'react'
import emailjs from 'emailjs-com';
import styles from './ContactMe.module.scss';

const contactMe = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_4uf4k9k', e.target, 'user_hg1FrI5iu4RnIz6VuVLTo')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

    return (
        <div className={styles.contactMe}>
        <div className="container">
        <form onSubmit={sendEmail} >
            <div id={styles.emailBox}>
                <div id={styles.emailBox__backdrop} className="row pt-5 mx-auto">
                    <div  className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Name" name="name"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                    </div>
                    <div className="col-8 pt-3 mx-auto">
                        <input type="submit" id={styles.contactButton} className="btn btn-primary" value="Send Message"></input>
                    </div>
                </div>
                </div>
            </form>
        </div>
    </div>
    )
}

export default contactMe
