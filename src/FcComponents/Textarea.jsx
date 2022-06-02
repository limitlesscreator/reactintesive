import React from 'react';
import s from "../Components/Textarea.module.css";

export const Textarea = (props) => {
    let countError = false
    return (
        <>
                <span className={s.positionR2}>
                    <label className={s.label1} htmlFor={props.id}>{props.text}</label>
                    <textarea
                        onChange={(e) => {
                            if (e.currentTarget.value.length <= 600){
                                countError = false
                                props.operation(e.currentTarget.value)
                                props.countSymbols(e.currentTarget.value,props.id)
                                props.deleteWhichEmpty(props.id, e.currentTarget.value)
                            }
                            else {
                                countError = true
                                return;
                            }
                        }}
                        id={props.id}
                        placeholder={props.placeholder}
                        cols={props.cols}
                        rows={props.rows}
                        value={props.value}
                    >
                    </textarea>
                    {props.data.whichEmpty.includes(props.id) ? <div className={s.errorNoLetters}>Поле пустое. Заполните пожалуйста</div> : null}
                    <div className={s.maxSymbols}>{props.counter === 0 ? null : props.counter}</div>
                    <div className={s.countError}>{props.counter === 0 ? 'Превышен лимит символов в поле:)' : null}</div>
                </span>
        </>
    );
};
