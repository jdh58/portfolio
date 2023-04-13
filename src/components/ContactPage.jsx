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
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
