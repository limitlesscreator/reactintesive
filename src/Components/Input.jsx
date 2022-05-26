import React from 'react'
import s from "./Input.module.css";

export class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <>
                    <span className={s.positionR}>
                        <label htmlFor={this.props.id}>{this.props.text}</label>
                        <input id={this.props.id} placeholder={this.props.placeholder} className={s.classic} type={this.props.type}/>
                    </span>
        </>
    }
}