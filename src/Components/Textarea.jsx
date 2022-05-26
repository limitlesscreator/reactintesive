import React from 'react'
import s from "./Textarea.module.css";

export class Textarea extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <>
                <span className={s.positionR2}>
                    <label className={s.label1} htmlFor={this.props.id}>{this.props.text}</label>
                    <textarea id={this.props.id} placeholder={this.props.placeholder} maxLength={this.props.maxLength} cols={this.props.cols} rows={this.props.rows}></textarea>
                </span>
        </>
    }
}