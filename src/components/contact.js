import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  return (
  
     <div className="container">
      <h4>Contact Form</h4>
      <form>
        <div className="mb-3">
          <label  className="form-label">Name</label>
          <input type="text" className="form-control" placeholder="What is your Name" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="What is your email address" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="5" placeholder="Send me a message!" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Contact;