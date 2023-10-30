import React from "react";
import "./contact.css";
import {
  BiSolidPhoneCall,
  BiLogoDiscordAlt,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { MdEmail } from "react-icons/md";
export default function Contact() {
  /*
    1- add contents for copy to btns
    2- copy the contents on click
    3-responsive page
    */
  return (
    <div className="contact-container">
      <h3>For contact us just choose an option and click on it</h3>
      <ul>
        <li>
          <button className="contact-btns" id="contact-phone-btn">
            <BiSolidPhoneCall />
          </button>
        </li>
        <li>
          <button className="contact-btns" id="contact-email-btn">
            <MdEmail />
          </button>
        </li>
        <li>
          <button className="contact-btns" id="contact-discord-btn">
            <BiLogoDiscordAlt />
          </button>
        </li>
        <li>
          <button className="contact-btns" id="contact-linkedin-btn">
            <BiLogoLinkedinSquare />
          </button>
        </li>
      </ul>
    </div>
  );
}
