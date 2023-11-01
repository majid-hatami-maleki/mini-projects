import React, { useContext } from "react";
import "./contact.css";
import { BiSolidPhoneCall, BiLogoDiscordAlt } from "react-icons/bi";
import { MdEmail, MdDoneAll } from "react-icons/md";
import { overallContexts } from "../../../contexts/overallContext";
export default function Contact() {
  /*
        1- add contents for copy to btns
        2- copy the contents on click
        3-responsive page
 */
  const contexts = useContext(overallContexts);
  const linkedInValues = contexts.contactUsObj.linkedin;
  const discordValues = contexts.contactUsObj.discord;
  const phoneNumberValue = contexts.contactUsObj.phNumber;
  const emailAddress = contexts.contactUsObj.email
  console.log(contexts);
  return (
    <div className="contact-container">
      ~
      <div className="clipboard-display">
        <MdDoneAll />
      </div>
      <p>For contact us just choose an option and click on it</p>
      <ul>
        <li>
          <button
            className="contact-btns"
            id="contact-phone-btn"
            onClick={phoneNumberValue.onClick()}
          >
            {phoneNumberValue.icon}
          </button>
        </li>
        <li>
          <button
            className="contact-btns"
            id="contact-email-btn"
            onClick={emailAddress.onClick()}
          >
            <a href={emailAddress.emailUrl}>{emailAddress.icon}</a>
          </button>
        </li>
        <li>
          <button
            className="contact-btns"
            id="contact-discord-btn"
            onClick={discordValues.onClick()}
          >
            <a href={discordValues.serverUrl}>{discordValues.icon}</a>
          </button>
        </li>
        <li>
          <button
            className="contact-btns"
            id="contact-linkedin-btn"
            onClick={linkedInValues.onClick()}
          >
            <a href={linkedInValues.profileUrl}>{linkedInValues.icon}</a>
          </button>
        </li>
      </ul>
    </div>
  );
}
