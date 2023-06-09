import Send from '../assets/send.svg';
import GitHub from '../assets/TechLogos/github.svg';
import Twitter from '../assets/TechLogos/twitter.png';
import LinkedIn from '../assets/TechLogos/linkedin.svg';
import Mail from '../assets/mail.svg';
import '../styles/ContactPage.css';

export default function ContactPage() {
  return (
    <div className="contactPage page">
      <form action="" className="contactForm">
        <legend className="formHeader">
          <h1>Contact me</h1>
          <div className="separator"></div>
        </legend>
        <input type="text" name="name" id="name" placeholder="Name" />
        <input type="email" name="email" id="email" placeholder="Email" />
        <textarea
          name="message"
          id="message"
          placeholder="Your message..."
        ></textarea>
        <div className="buttonContainer">
          <div className="background"></div>
          <button type="submit">Send Message</button>
          <img src={Send} alt="" />
        </div>
      </form>

      <div className="personalLinks">
        <div className="linksHeaderContainer">
          <h1>My Links</h1>
          <div className="separator"></div>
        </div>

        <a
          href="https://github.com/jdh58"
          target="_blank"
          className="linkContainer"
        >
          <img src={GitHub} alt="" className="linkIcon" />
          <p className="linkName">github.com/jdh58</p>
        </a>
        <a href="" target="_blank" className="linkContainer">
          <img src={LinkedIn} alt="" className="linkIcon" />
          <p className="linkName">linkedin.com/in/jonath-hawes-4</p>
        </a>
        <a
          href="https://twitter.com/jdh58"
          target="_blank"
          className="linkContainer"
        >
          <img src={Twitter} alt="" className="linkIcon" />
          <p className="linkName">twitter.com/jdh58</p>
        </a>
        <a href="mailto: jonathan@jonathanhawes.dev" className="linkContainer">
          <img src={Mail} alt="" className="linkIcon" />
          <p className="linkName">jonathan@jonathanhawes.dev</p>
        </a>
      </div>
    </div>
  );
}
