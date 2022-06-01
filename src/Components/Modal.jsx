import React from 'react'
import s from "./Modal.module.css";
import f from "./Buttons.module.css";

export class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const classButtonRed = f.glass + ' ' + f.button + ' ' + f.redA + ' ' + s.sizeWidth;

        if (!this.props.modal){
            return null
        }
        return <>
            <div className={s.modal}>
                <div className={s.modalContent}>
                    <div className={s.modalHeader}>
                        <h4 className={s.modalTitle}>Ваша Анкета</h4>
                    </div>
                    <div className={s.modalBody}>
                        <div>Имя: {this.props.data.name}</div>
                        <div>Фамилия: {this.props.data.surName}</div>
                        <div>Дата рождения: {this.props.data.date}</div>
                        <div>Ваш сайт: {this.props.data.web}</div>
                        <div>О себе: {this.props.data.about}</div>
                        <div>Стек технологий: {this.props.data.stackTech}</div>
                        <div>Описание последнего проекта: {this.props.data.descriptionProject}</div>
                    </div>
                </div>
                <div className={s.modalFooter}>
                    <button type="button" className={classButtonRed} onClick={() => this.props.closeModal()} >Close</button>
                </div>
            </div>
        </>
    }
}