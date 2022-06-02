import React from 'react';
import s from "../Components/Input.module.css";
import {ACTIONS} from "./reducer";

export const Input = (props) => {
    const firstLetterIsUpperCase = (props.id === 'name' && !props.data.checkUpperCaseName) || (props.id === 'surName' && !props.data.checkUpperCaseSurName)
    return <>
                    <span className={s.positionR}>

                        <label htmlFor={props.id}>{props.text}</label>
                        <input onChange={(event) => {
                            props.operation(event.currentTarget.value,props.id)
                            props.deleteWhichEmpty(props.id, event.currentTarget.value)
                        }}
                               id={props.id}
                               value={props.value}
                               placeholder={props.placeholder}
                               className={s.classic}
                               type={props.type}
                        />
                        {props.data.whichEmpty.includes(props.id) ? <div className={s.errorNoLetters}>Поле пустое. Заполните пожалуйста</div> : null}
                        {firstLetterIsUpperCase ? <div className={s.errorNoUpperCase}>Первый символ должен <br/> начинатся с заглавной :) </div> : null}
                        {(props.data.webError && props.id === 'web') || (props.data.numberError && props.id === 'phone') ? <div className={s.webError}>Некорректный ввод)</div> : ''}
                    </span>
    </>
};
