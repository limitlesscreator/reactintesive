import React from 'react'
import s from "./Input.module.css";

export class Input extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const firstLetterIsUpperCase = (this.props.id === 'name' && !this.props.data.checkUpperCaseName) || (this.props.id === 'surName' && !this.props.data.checkUpperCaseSurName)

        return <>
                    <span className={s.positionR}>
                        <label htmlFor={this.props.id}>{this.props.text}</label>
                        <input onChange={(e) => {
                            this.props.operation(e.currentTarget.value)
                        }}
                               id={this.props.id}
                               value={this.props.value}
                               placeholder={this.props.placeholder}
                               className={s.classic}
                               type={this.props.type}
                        />
                        {this.props.data.whichEmpty.includes(this.props.id) ? <div className={s.errorNoLetters}>Поле пустое. Заполните пожалуйста</div> : null}
                        {firstLetterIsUpperCase ? <div className={s.errorNoUpperCase}>Первый символ  должен <br/> начинатся с заглавной :)</div> : null}
                    </span>
        </>
    }
}


// решить как сделать проверку на два слова которые начинаются с заглавной или каждое слово