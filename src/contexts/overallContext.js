import React, { createContext, useState } from "react";
import {
  BiLogoLinkedinSquare,
  BiLogoDiscordAlt,
  BiSolidPhoneCall,
} from "react-icons/bi";
import { MdEmail, MdDoneAll } from "react-icons/md";
const overallContexts = createContext();

const contactUsObj = {
  linkedin: {
    name: "My linkedin",
    icon: <BiLogoLinkedinSquare />,
    profileUrl: "https://www.linkedin.com/in/majid-hatami-maleki-790257276/",
    mergeInfos: function () {
      return `${this.name} __ ${this.profileUrl}`;
    },
  },
  discord: {
    name: "Discord",
    icon: <BiLogoDiscordAlt />,
    serverUrl: "https://discord.gg/2zykGncH8r",
    mergeInfos: function () {
      return `${this.name} __ ${this.serverUrl}`;
    },
  },
  phNumber: {
    name: "phone number",
    number: "(+98)-921 806 3950",
    icon: <BiSolidPhoneCall />,
    mergeInfos: function () {
      return `${this.name} __ ${this.number}`;
    },
  },
  email: {
    name: "outlook E-mail",
    emailAddress: "majidhatamimaleki@outlook.com",
    emailUrl: `mailto:${"majidhatamimaleki@outlook.com"}?subject=${encodeURIComponent(
      "contact from github project"
    )}`,
    icon: <MdEmail />,
    mergeInfos: function () {
      return `${this.name} __ ${this.emailAddress}`;
    },
  },
};

const resultDisplayHandler = function (elementName, elementContent, icon) {
  let elemName = elementName;
  let elemContent = elementContent;
  return `${elemName}__${elemContent} - copied to your clipboard`;
};
export default function OverallContextProvider({ children }) {
  return (
    <overallContexts.Provider value={{ contactUsObj, resultDisplayHandler }}>
      {children}
    </overallContexts.Provider>
  );
}
export { overallContexts };
