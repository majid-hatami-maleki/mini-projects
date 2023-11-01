import React, { createContext } from 'react'
import { BiLogoLinkedinSquare,BiLogoDiscordAlt,BiSolidPhoneCall } from 'react-icons/bi'
import {MdEmail} from 'react-icons/md'
const overallContexts = createContext()
const contactUsObj = {
    linkedin : {
        name : 'linkedin',
        icon : <BiLogoLinkedinSquare />,
        profileUrl : 'https://www.linkedin.com/in/majid-hatami-maleki-790257276/',
        onClick : function (e) {
            navigator.clipboard.writeText(
               this.profileUrl
              );
        }
    },
    discord : {
        name : 'Discord',
        icon : <BiLogoDiscordAlt />,
        serverUrl : 'https://discord.gg/2zykGncH8r',
        onClick : function (e) {
            navigator.clipboard.writeText(this.serverUrl)
        }
    },
    phNumber : {
        name :'phone number',
        number :'(+98)-921 806 3950',
        icon : <BiSolidPhoneCall />,
        onClick : function (e) {
            navigator.clipboard.writeText(this.number);
        }
    },
    email : {
        name : 'outlook email',
        emailAddress : 'majidhatamimaleki@outlook.com',
        emailUrl : `mailto:${"majidhatamimaleki@outlook.com"}?subject=${encodeURIComponent("contact from github project")}`,
        icon : <MdEmail />,
        onClick : function (e) {
            navigator.clipboard.writeText(this.emailUrl);
        }
    }
}
export default function OverallContextProvider({children}) {
  return (
    <overallContexts.Provider value={{contactUsObj}}>
        {children}
    </overallContexts.Provider>
  )
}
export {overallContexts}