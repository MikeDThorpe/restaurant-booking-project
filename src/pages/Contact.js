import { ContactForm } from "../components";

const Contact = () => {
  const submitForm = (contactForm) => {
    // Add submit function when backend is added
  };

  return (
    <div className="container">
      <br />
      <ContactForm submitForm={submitForm} />
    </div>
  );
};

export default Contact;
