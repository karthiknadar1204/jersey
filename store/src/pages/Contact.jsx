import React from "react";

const Contact = () => {
  return (
    <div className="contact_page">
      <h1 className="heading_contact">Contact Us</h1>
      <div className="contact_boxes">
        <div className="contact_text_box">
          <p className="contact_text">
            Get in Touch We're here to help! Whether you have questions
            about our jerseys, need assistance with an order, or want to share your
            feedback, feel free to reach out to us.
          </p>
        </div>
        <div className="contact_info_box">
          <p className="contact_info">
            <strong>Contact Information</strong><br />
            Email: support@yourdomain.com<br />
            Phone: +91-123-456-7890<br />
            Address: [Your Business Address]<br />
            <strong>Business Hours</strong><br />
            Monday - Friday: 9:00 AM - 6:00 PM IST<br />
            <strong>Follow Us</strong><br />
            Stay connected and follow us on social media:<br />
            Facebook: [Your Facebook Page]<br />
            Instagram: [Your Instagram Handle]<br />
            Twitter: [Your Twitter Handle]
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
