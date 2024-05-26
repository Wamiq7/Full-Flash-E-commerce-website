import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:k200123@nu.edu.pk">
        <Button>Contact: mymailfor : k200123@nu.edu.pk</Button>
      </a>
    </div>
  );
};

export default Contact;