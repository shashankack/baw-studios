import BackButton from "../../components/BackButton/BackButton";
import MainMenu from "../../components/MainMenu/MainMenu";
import "./Contact.scss";

const Contact = () => {
  return (
    <>
      <MainMenu color="black"/>
      <section className="contact-us-section">
        <h3>GET IN TOUCH</h3>
        <p>Call or WhatsApp us on +91 944 700 2615.</p>
        <p>Write to us at hello@thelightlab.art hellolightlab@gmail.com</p>
        <BackButton />
      </section>
    </>
  );
};

export default Contact;
