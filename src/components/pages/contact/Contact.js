import React, { useContext } from "react";
import "./contact.css";
import {
  BiSolidPhoneCall,
  BiLogoDiscordAlt,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { overallContexts } from "../../../contexts/overallContext";
export default function Contact() {
  /*
        1- add contents for copy to btns
        2- copy the contents on click
        3-responsive page
 */
  const contexts = useContext(overallContexts);
  return (
    <div className="contact-container">
      <p>For contact us just choose an option and click on it</p>
      <ul>
        <li>
          <button
            className="contact-btns"
            id="contact-phone-btn"
            onClick={(e) => {
              navigator.clipboard.writeText("+989218063950");
            }}
          >
            <BiSolidPhoneCall />
          </button>
        </li>
        <li>
          <button
            className="contact-btns"
            id="contact-email-btn"
            onClick={(e) => {
              navigator.clipboard.writeText("majidhatamimaleki@outlook.com");
            }}
          >
            <a
              href={`mailto:${"majidhatamimaleki@outlook.com"}?subject=${encodeURIComponent(
                "contact"
              )}`}
            >
              <MdEmail />
            </a>
          </button>
        </li>
        <li>
          <button
            className="contact-btns"
            id="contact-discord-btn"
            onClick={(e) => {
              navigator.clipboard.writeText("https://discord.gg/2zykGncH8r");
            }}
          >
            <a href="https://discord.gg/2zykGncH8r">
              <BiLogoDiscordAlt />
            </a>
          </button>
        </li>
        <li>
          <button
            className="contact-btns"
            id="contact-linkedin-btn"
            onClick={(e) => {
              navigator.clipboard.writeText(
                "https://www.linkedin.com/in/majid-hatami-maleki-790257276/"
              );
            }}
          >
            <a href="https://www.linkedin.com/in/majid-hatami-maleki-790257276/">
              <BiLogoLinkedinSquare />
            </a>
          </button>
        </li>
      </ul>
    </div>
  );
}
