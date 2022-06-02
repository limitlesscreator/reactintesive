import React from 'react';
import s from "../Components/Buttons.module.css";

export const Buttons = (props) => {
    const classButtonRed = s.glass + ' ' + s.button + ' ' + s.redA + ' ' + s.positionRedButton;
    const classButtonGreen = s.glass + ' ' + s.button + ' ' + s.greenA + ' ' + s.positionGreenButton;

    switch (props.color) {
        case 'red':
            return <button onClick={() => props.operation()} className={classButtonRed} type="button">{props.text}</button>
        case 'green':
            return <button onClick={() => props.operation()} className={classButtonGreen} type="button">{props.text}</button>
    }
};
