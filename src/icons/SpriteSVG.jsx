"use client";
import { useState } from "react";

export const SpriteSVG = ({ name, className, height, width }) => {
    const [dForMail, _] = useState(width === 24 ? "M2 8L11.1056 12.5528C11.6686 12.8343 12.3314 12.8343 12.8944 12.5528L22 8" : 
    width === 20 ? "M1.6665 6.66663L9.10541 10.3861C9.66847 10.6676 10.3312 10.6676 10.8943 10.3861L18.3332 6.66663" : "") 

    switch (name) {
        case 'burger_menu':
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 18L20 18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M4 12L20 12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M4 6L20 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            );
        case 'expand_down':
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 9L12 15L6 9" stroke="#FFFFFF" strokeWidth="2"/>
                </svg>
            );
    }
}
