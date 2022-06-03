import React from 'react';
import s from './Form.module.css'
import shtrih from '../img/strih.png'
import stick from '../img/stick.png'
import {Shape} from "./Shape";
import {Input} from "./Input";
import {Textarea} from "./Textarea";
import {Buttons} from "./Buttons";
import {Modal} from "./Modal";

export class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }



    render() {
        if (!this.props.form){
            return null
        }
        return <>
            <h1>Создание анкеты</h1>

            <form>
                <Shape side={'left'}/>
                <Shape side={'right'}/>

                <img className={s.stick1} src={stick} alt="astone.dev"/>
                <img className={s.stick2} src={stick} alt="astone.dev"/>

                <Input deleteWhichEmpty={this.props.deleteWhichEmpty} data={this.props.data} value={this.props.data.name} operation={this.props.updateName} id={'name'} text={'И М Я'} placeholder={'Владислав'} type={'text'}/>
                <Input deleteWhichEmpty={this.props.deleteWhichEmpty} data={this.props.data} value={this.props.data.surName} operation={this.props.updateSurName} id={'surName'} text={'Ф А М И Л И Я'} placeholder={'Владимирович'} type={'text'}/>
                <Input deleteWhichEmpty={this.props.deleteWhichEmpty} data={this.props.data} value={this.props.data.date} operation={this.props.updateDate}  id={'date'} text={'Д А Т А'} placeholder={'Дата'} type={'date'}/>
                <Input deleteWhichEmpty={this.props.deleteWhichEmpty} data={this.props.data} value={this.props.data.phone} operation={this.props.updatePhone} id={'phone'} text={'Т E Л Е Ф О Н'} placeholder={'+7-000-000-00-00'} type={'tel'}/>
                <Input webValidation={this.props.webValidation} deleteWhichEmpty={this.props.deleteWhichEmpty} data={this.props.data} value={this.props.data.web} operation={this.props.updateWeb}  id={'web'} text={'С А Й Т'} placeholder={'https://'} type={'url'}/>

                <div className={s.wrap}>
                    <Textarea deleteWhichEmpty={this.props.deleteWhichEmpty} countSymbols={this.props.countSymbols}  counter={this.props.data.countSymbolsAbout} data={this.props.data} value={this.props.data.about} operation={this.props.updateAbout} id={'about'} text={'О СЕБЕ'} placeholder={'Я увелкаюсь/люблю...'}  cols={30} rows={7}/>
                    <Textarea deleteWhichEmpty={this.props.deleteWhichEmpty} countSymbols={this.props.countSymbols}  counter={this.props.data.countSymbolsStackTech} data={this.props.data} value={this.props.data.stackTech} operation={this.props.updateStackTech} id={'stackTech'} text={'СТЕК ТЕХНОЛОГИЙ'} placeholder={'React, Typescript, Redux...'}  cols={30} rows={7}/>
                    <Textarea deleteWhichEmpty={this.props.deleteWhichEmpty} countSymbols={this.props.countSymbols}  counter={this.props.data.countSymbolsDescriptionProject} data={this.props.data} value={this.props.data.descriptionProject} operation={this.props.updateLastProject} id={'descriptionProject'} text={'ОПИСАНИЕ ПОСЛЕДНЕГО ПРОЕКТА'} placeholder={'Мой крайний проект был...'} cols={30} rows={7}/>
                </div>

                <Buttons operation={this.props.clearAllData} color={'red'} text={'Отменить'}/>
                <Buttons operation={this.props.saveAllData} color={'green'} text={'Сохранить'}/>

                <img className={s.picture1} src={shtrih} alt="astone.dev"/>
            </form>
        </>
    }
}
