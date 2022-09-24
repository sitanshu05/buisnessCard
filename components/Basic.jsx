import React from "react";
import { ReactDOM } from "react";
import { SiGmail } from "react-icons/si";

export default function Basic(){
    return(
    <main className="header">
        <img src="https://github.com/sitanshu05/buisnessCard/blob/0707a2fc2ab90bc80acdd23170feee21557b37b7/components/Image/profile.jpg" alt="Profile Picture" className="Profile"/>
        <h1 className="name">Sitanshu Hallad</h1>
        <h1 className="job">Frontend Developer</h1>
        <a href="" className="website">sitanshu.web</a>
        <div className="email-button">
            <a href="" className="email">
                <SiGmail className="email-icon"/> <p className="email-txt">Email</p>
            </a>
        </div>
        
    </main>
    )
}