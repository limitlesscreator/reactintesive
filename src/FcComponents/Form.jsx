import React from 'react';
import s from "../Components/Form.module.css";
import stick from "../img/stick.png";
import shtrih from "../img/strih.png";
import {Shape} from "../FcComponents/Shape";
import {Input} from "../FcComponents/Input";
import {Textarea} from "../FcComponents/Textarea";
import {Buttons} from "../FcComponents/Buttons";

export const Form = (props) => {
    if (!props.form){
        return null
    }
    return (
        <>
            <h1>Создание анкеты</h1>

            <form>
                <Shape side={'left'}/>
                <Shape side={'right'}/>

                <img className={s.stick1} src={stick} alt="astone.dev"/>
                <img className={s.stick2} src={stick} alt="astone.dev"/>

                <Input deleteWhichEmpty={props.deleteWhichEmpty} operation={props.updateFullName}   data={props.data} value={props.data.name}  id={'name'} text={'И М Я'} placeholder={'Владислав'} type={'text'}/>
                <Input deleteWhichEmpty={props.deleteWhichEmpty} operation={props.updateFullName}  data={props.data} value={props.data.surName} id={'surName'} text={'Ф А М И Л И Я'} placeholder={'Владимирович'} type={'text'}/>
                <Input deleteWhichEmpty={props.deleteWhichEmpty} operation={props.updateDate}  data={props.data} value={props.data.date}  id={'date'} text={'Д А Т А'} placeholder={'Дата'} type={'date'}/>
                <Input deleteWhichEmpty={props.deleteWhichEmpty} operation={props.updatePhone}  data={props.data} value={props.data.phone} id={'phone'} text={'Т E Л Е Ф О Н'} placeholder={'+7-000-000-00-00'} type={'tel'}/>
                <Input deleteWhichEmpty={props.deleteWhichEmpty} operation={props.updateWeb}  data={props.data} value={props.data.web}  id={'web'} text={'С А Й Т'} placeholder={'https://'} type={'url'}/>

                <div className={s.wrap}>
                    <Textarea deleteWhichEmpty={props.deleteWhichEmpty} operation={props.updateAbout} countSymbols={props.countSymbols} counter={props.data.countSymbolsAbout} data={props.data} value={props.data.about} id={'about'} text={'О СЕБЕ'} placeholder={'Я увелкаюсь/люблю...'}  cols={30} rows={7}/>
                    <Textarea deleteWhichEmpty={props.deleteWhichEmpty} operation={props.updateStackTech} countSymbols={props.countSymbols} counter={props.data.countSymbolsStackTech} data={props.data} value={props.data.stackTech} id={'stackTech'} text={'СТЕК ТЕХНОЛОГИЙ'} placeholder={'React, Typescript, Redux...'}  cols={30} rows={7}/>
                    <Textarea deleteWhichEmpty={props.deleteWhichEmpty} operation={props.updateLastProject} countSymbols={props.countSymbols} counter={props.data.countSymbolsDescriptionProject} data={props.data} value={props.data.descriptionProject} id={'descriptionProject'} text={'ОПИСАНИЕ ПОСЛЕДНЕГО ПРОЕКТА'} placeholder={'Мой крайний проект был...'} cols={30} rows={7}/>
                </div>

                <Buttons operation={props.clearAllData} color={'red'} text={'Отменить'}/>
                <Buttons operation={props.saveAllData} color={'green'} text={'Сохранить'}/>

                <img className={s.picture1} src={shtrih} alt="astone.dev"/>
            </form>
        </>
    )
}
