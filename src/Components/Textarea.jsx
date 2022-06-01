import React from 'react'
import s from "./Textarea.module.css";

export class Textarea extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let countError = false
        return <>
                <span className={s.positionR2}>
                    <label className={s.label1} htmlFor={this.props.id}>{this.props.text}</label>
                    <textarea
                        onChange={(e) => {
                            if (e.currentTarget.value.length <= 600){
                                countError = false
                                this.props.operation(e.currentTarget.value)
                                this.props.countSymbols(e.currentTarget.value,this.props.id)
                            }
                            else {
                                countError = true
                                return;
                            }

                        }}
                        id={this.props.id}
                        placeholder={this.props.placeholder}
                        cols={this.props.cols}
                        rows={this.props.rows}
                        value={this.props.value}
                    >
                    </textarea>
                    {this.props.data.whichEmpty.includes(this.props.id) ? <div className={s.errorNoLetters}>Поле пустое. Заполните пожалуйста</div> : null}
                    <div className={s.maxSymbols}>{this.props.counter === 0 ? null : this.props.counter}</div>
                    <div className={s.countError}>{this.props.counter === 0 ? 'Превышен лимит символов в поле:)' : null}</div>
                </span>
        </>
    }
}