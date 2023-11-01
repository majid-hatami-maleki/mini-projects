import React, { useContext, useState } from "react";
import "./contact.css";
import { MdDoneAll } from "react-icons/md";
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
  const emailValues = contexts.contactUsObj.email
  const [resultContent , setResultContent] = useState('Click on icons')
  console.log(contexts);
  return (
    <div className="contact-container">
      <ul>
        <li>
          <button
            className="contact-btns"
            id="contact-phone-btn"
            onClick={()=>{
                setResultContent(phoneNumberValue.mergeInfos())
            }}
          >
            {phoneNumberValue.icon}
          </button>
        </li>
        <li>
          <button
            className="contact-btns"
            id="contact-email-btn"
            onClick={()=>{
                setResultContent(emailValues.mergeInfos())
            }}
          >
            <a href={emailValues.emailUrl} target="_blank">{emailValues.icon}</a>
          </button>
        </li>
        <li>
          <button
            className="contact-btns"
            id="contact-discord-btn"
            onClick={()=>{
                setResultContent(discordValues.mergeInfos())
            }}
          >
            <a href={discordValues.serverUrl} target="_blank">{discordValues.icon}</a>
          </button>
        </li>
        <li>
          <button
            className="contact-btns"
            id="contact-linkedin-btn"
            onClick={()=>{
                setResultContent(linkedInValues.mergeInfos())
            }}
          >
            <a href={linkedInValues.profileUrl} target="_blank">{linkedInValues.icon}</a>
          </button>
        </li>
      </ul>
      <div className="clipboard-display">
        <p>{resultContent}</p>
      </div>
    </div>
  );
}
