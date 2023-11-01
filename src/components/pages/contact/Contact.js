import React, { useContext, useState } from "react";
import "./contact.css";
import { MdDoneAll } from "react-icons/md";
import { overallContexts } from "../../../contexts/overallContext";
export default function Contact() {
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
            title={phoneNumberValue.name}
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
            title={emailValues.name}
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
            title={discordValues.name}
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
            title={linkedInValues.name}
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
