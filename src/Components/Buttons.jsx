import React from 'react'
import s from "./Buttons.module.css";

export class Buttons extends React.Component{

    constructor(props) {
        super(props);
    }
   render() {
       const classButtonRed = s.glass + ' ' + s.button + ' ' + s.redA + ' ' + s.positionRedButton;
       const classButtonGreen = s.glass + ' ' + s.button + ' ' + s.greenA + ' ' + s.positionGreenButton;

       switch (this.props.color) {
           case 'red':
               return <button className={classButtonRed} type="button">{this.props.text}</button>
           case 'green':
               return <button className={classButtonGreen} type="button">{this.props.text}</button>
       }
   }
}