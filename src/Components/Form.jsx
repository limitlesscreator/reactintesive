import React from 'react';
import s from './Form.module.css'
import shtrih from '../img/strih.png'
import stick from '../img/stick.png'
import {Shape} from "./Shape";
import {Input} from "./Input";
import {Textarea} from "./Textarea";
import {Buttons} from "./Buttons";

export class Form extends React.Component {
    render() {
        return <>
            <h1>Создание анкеты</h1>

            <form>
                <Shape side={'left'}/>
                <Shape side={'right'}/>

                <img className={s.stick1} src={stick} alt="astone.dev"/>
                <img className={s.stick2} src={stick} alt="astone.dev"/>

                <Input id={'name'} text={'И М Я'} placeholder={'Владимирович'} type={'text'}/>
                <Input id={'data'} text={'Д А Т А'} placeholder={'Дата'} type={'date'}/>
                <Input id={'phone'} text={'Т E Л Е Ф О Н'} placeholder={'+7'} type={'tel'}/>
                <Input id={'web'} text={'С А Й Т'} placeholder={'https://www.example.com'} type={'url'}/>

                <div className={s.wrap}>
                    <Textarea id={'aboutme'} text={'О СЕБЕ'} placeholder={'Я увелкаюсь/люблю...'} maxLength={238} cols={30} rows={7}/>
                    <Textarea id={'tech'} text={'СТЕК ТЕХНОЛОГИЙ'} placeholder={'React, Typescript, Redux...'} maxLength={238} cols={30} rows={7}/>
                    <Textarea id={'lastproject'} text={'ОПИСАНИЕ ПОСЛЕДНЕГО ПРОЕКТА'} placeholder={'Мой крайний проект был...'} maxLength={238} cols={30} rows={7}/>
                </div>

                <Buttons color={'red'} text={'Отменить'}/>
                <Buttons color={'green'} text={'Сохранить'}/>

                <img className={s.picture1} src={shtrih} alt="astone.dev"/>
            </form>
        </>
    }
}

// пофиксить символы
// добавить кнопки Отменить Сохранить