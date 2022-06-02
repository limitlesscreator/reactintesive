import React from 'react'
import s from "./Modal.module.css";
import f from "./Buttons.module.css";

export const Modal = (props) => {
        const classButtonRed = f.glass + ' ' + f.button + ' ' + f.redA + ' ' + s.sizeWidth;

        if (!props.modal){
            return null
        }
        return <>
            <div className={s.modal}>
                <div className={s.modalContent}>
                    <div className={s.modalHeader}>
                        <h4 className={s.modalTitle}>Ваша Анкета</h4>
                    </div>
                    <div className={s.modalBody}>
                        <div>Имя: {props.data.name}</div>
                        <div>Фамилия: {props.data.surName}</div>
                        <div>Дата рождения: {props.data.date}</div>
                        <div>Ваш сайт: {props.data.web}</div>
                        <div>О себе: {props.data.about}</div>
                        <div>Стек технологий: {props.data.stackTech}</div>
                        <div>Описание последнего проекта: {props.data.descriptionProject}</div>
                    </div>
                </div>
                <div className={s.modalFooter}>
                    <button type="button" className={classButtonRed} onClick={() => props.closeModal()} >Close</button>
                </div>
            </div>
        </>
}