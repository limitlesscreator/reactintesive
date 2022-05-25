import React from 'react';
import s from './Form.module.css'
import shtrih from '../img/strih.png'
import stick from '../img/stick.png'
import {Shape} from "./Shape";
import {Input} from "./Input";

export class Form extends React.Component {
    render() {
        return <>
            <h1>Создание анкеты</h1>


            <form>
                <img className={s.stick1} src={stick} alt=""/>
                <img className={s.stick2} src={stick} alt=""/>
                <Shape side={'left'}/>
                <Shape side={'right'}/>
                <Input id={'name'} text={'И М Я'} placeholder={'Владимирович'} type={'text'}/>

                <span className={s.positionR}>
                                    <label htmlFor="Data">Д А Т А</label>
                                    <input id={'Data'} placeholder={'Дата'} className={s.classic} type="date"/>
                </span>
                <span className={s.positionR}>
                <label htmlFor={'phone'}>Т E Л Е Ф О Н</label>
                <input id={'phone'} placeholder={'+7'} className={s.classic} type="tel"
                       pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
                </span>
                <span className={s.positionR}>
                                    <label htmlFor={'web'}>С А Й Т</label>
                <input id="web" placeholder="https://www.example.com" pattern="https://.*" className={s.classic}
                       type="url"/>

                </span>

                <div className={s.wrap}>
                    <span className={s.positionR2}>
                    <label className={s.label1} htmlFor="aboutme">О СЕБЕ</label>
                    <textarea id={'aboutme'} placeholder={'Я увелкаюсь/люблю...'} maxLength={240} cols="30"
                              rows="7"></textarea>
                </span>

                    <span className={s.positionR2}>
                    <label className={s.label2} htmlFor="tech">СТЕК ТЕХНОЛОГИЙ</label>
                     <textarea placeholder={'React, Typescript, Redux...'} maxLength={280} name="" id="tech" cols="30"
                               rows="7"></textarea>
                </span>
                    <span className={s.positionR2}>
                    <label className={s.label3} htmlFor="tech">ОПИСАНИЕ ПОСЛЕДНЕГО ПРОЕКТА</label>
                <textarea placeholder={'Мой крайний проект был...'} maxLength={193} name="" id="" cols="30"
                          rows="7"></textarea>
                </span>
                </div>
                <img className={s.picture1} src={shtrih} alt=""/>
            </form>
        </>
    }
}

// пофиксить символы
// добавить кнопки Отменить Сохранить