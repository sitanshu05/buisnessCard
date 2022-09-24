import React from "react";
import { ReactDOM } from "react";
import { SocialIcon } from 'react-social-icons';

export default function Footer(){
    return(
        <footer>
            <SocialIcon url="https://twitter.com/sitanshu05" className="icon"/>
            <SocialIcon url="https://www.linkedin.com/in/sitanshu-sh-9804a120b/" className="icon" />
            <SocialIcon url="https://github.com/sitanshu05" className="icon" />
            <SocialIcon url="https://www.instagram.com/" className="icon" />
        </footer>
    )
}