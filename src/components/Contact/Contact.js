import React from "react";
import "./Contact.scss";
import { OutlinedInput, TextareaInput } from "../Shared/Input";
import { GreenButton } from "../Shared/Button";

const Contact = () => {
  return (
    <div>
      <div className="cont-whole-cont">
        <div className="sec1-cu-cont">
          <h1 className="ds-h1">Contact us</h1>
          <p className="ds-p">Our friendly team would love to hear from you!</p>
          <form action="">
            <div className="fc1">
              <OutlinedInput
                label="First Name"
                type="text"
                mb2="mb-2"
                mb="mb-1"
              />
              <div className="space"></div>
              <OutlinedInput
                label="Last Name"
                type="text"
                mb2="mb-2"
                mb="mb-1"
              />
            </div>
            <OutlinedInput
              label="Email Address"
              type="email"
              mb2="mb-2"
              mb="mb-1"
            />
            <OutlinedInput
              label="Phone Number"
              type="number"
              mb2="mb-2"
              mb="mb-1"
            />

            <TextareaInput label="Message" mb2="mb-2" mb="mb-1" />

            <GreenButton value="Send Message" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
