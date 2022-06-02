import React, {useReducer} from 'react';
import {ACTIONS, reducer} from "./FcComponents/reducer";
import {Form} from "./FcComponents/Form";
import {Modal} from "./Components/Modal";

export const FnApp = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        surName: '',
        date: '',
        phone: '',
        web: '',
        about: '',
        stackTech: '',
        descriptionProject: '',
        whichEmpty: [],
        checkUpperCaseName: true,
        checkUpperCaseSurName: true,
        countSymbolsAbout: 600,
        countSymbolsStackTech: 600,
        countSymbolsDescriptionProject: 600,
        whichCountError: [],
        modal: false,
        form: true,
        webError: false,
        numberError: false,
    })

    function updateFullName(value,kind){
        kind === 'name' ? dispatch({type: ACTIONS.NAMEUPDATE, payload: value}) :  dispatch({type: ACTIONS.SURNAMEUPDATE, payload: value})
        if (!(value[0] === value[0]?.toUpperCase() && value[0] !== ' ')){ // check UpperCase/ show error if no UpperCase first Letter
            kind === 'name' ? dispatch({type: ACTIONS.NAMEUPPERCASE, payload: false}) : dispatch({type: ACTIONS.SURNAMEUPPERCASE, payload: false})
        }
        else {
            kind === 'name' ? dispatch({type: ACTIONS.NAMEUPPERCASE, payload: true}) : dispatch({type: ACTIONS.SURNAMEUPPERCASE, payload: true})
        }
    }

    function updateDate(date){
        dispatch({type: ACTIONS.DATEUPDATE, payload: date})
    }

    function updatePhone(phone){
        dispatch({type: ACTIONS.PHONEUPDATE, payload: phone})

        let str = phone.replace(/-/g, '')
        let reg =  /^([^\s]{2})([^\s]{3})([^\s]{3})([^\s]{2})([^\s]{2})$/g;

        if(!isNaN(+phone[phone.length - 1]) || phone[phone.length - 1] === '-' && phone.length === 1){
            dispatch({type: ACTIONS.PHONEUPDATE, payload: phone})
            dispatch({type: ACTIONS.NUMBERERROR, payload: false})
        }

        let match = reg.exec(str)

        if (match){
            if (!isNaN(match[0])){
                match.shift()
                str = match.join('-')

                dispatch({type: ACTIONS.PHONEUPDATE, payload: str})
                dispatch({type: ACTIONS.NUMBERERROR, payload: false})
            }
        }
        else {
            dispatch({type: ACTIONS.NUMBERERROR, payload: true})
        }
    }

    function updateWeb(value) {
        dispatch({type: ACTIONS.WEB, payload: value})

        let reg = /https:\/\//
        if (!reg.test(value)){
            dispatch({type: ACTIONS.WEBERROR, payload: true})
        }
        else {
            dispatch({type: ACTIONS.WEBERROR, payload: false})

        }
    }

    function updateAbout(newAbout) {
        dispatch({type: ACTIONS.ABOUTUPDATE, payload: newAbout})
    }

    function updateStackTech(newStackTech) {
        dispatch({type: ACTIONS.STACKUPDATE, payload: newStackTech})

    }

    function updateLastProject(lastpropject) {
        dispatch({type: ACTIONS.PROJECTUPDATE, payload: lastpropject})

    }

    function countSymbols(value,whichPlace){
        if(whichPlace === 'about'){
            dispatch({type: ACTIONS.SYMBOLSABOUT, payload: 600 - value.length})
        }
        else if (whichPlace === 'stackTech'){
            dispatch({type: ACTIONS.SYMBOLSTECH, payload: 600 - value.length})
        }
        else if (whichPlace === 'descriptionProject'){
            dispatch({type: ACTIONS.SYMBOLSPROJECT, payload: 600 - value.length})
        }
    }

    function saveAllData(){
        let whichIsEmptyTemp = [] // this is which is 0 str

        for (let key in state){
            if (typeof state[key] === "string"){
                let temp = state[key].trim().length !== 0 // if str 0 then error
                if(temp){

                }
                else {
                    console.log(`here is an error ${key}`)
                    whichIsEmptyTemp.push(key)
                }
            }
        }
        dispatch({type: ACTIONS.WHICHEMPTY, payload: [...state.whichEmpty, ...whichIsEmptyTemp]})

        if (whichIsEmptyTemp.length === 0 && state.checkUpperCaseName && state.checkUpperCaseSurName && !state.webError){ // if error - don't open modal

            dispatch({type: ACTIONS.MODALUPDATE, payload: true})
            dispatch({type: ACTIONS.FORMUPDATE, payload: false})
        }
    }

    function closeModal() {
        dispatch({type: ACTIONS.MODALUPDATE, payload: false})
        dispatch({type: ACTIONS.FORMUPDATE, payload: true})
    }

    function deleteWhichEmpty(valueWhereWeTypingId,lengthOfValue){
        console.log('boom')
        let tempFiltered = state.whichEmpty.filter(el => el !== valueWhereWeTypingId)
        if (lengthOfValue.length > 0){
            dispatch({type: ACTIONS.WHICHEMPTY, payload: tempFiltered})
        }
    }   // delete part whichEmpty if we typing there

    function clearAllData() {
        dispatch({type: ACTIONS.CLEARALLDATA})
    }

    return (
        <>
            <Modal data={state} closeModal={closeModal} modal={state.modal}/>

            <Form form={state.form}
                  updateFullName={updateFullName}
                  clearAllData={clearAllData}
                  countSymbols={countSymbols}
                  updateDate={updateDate}
                  updatePhone={updatePhone}
                  updateWeb={updateWeb}
                  updateAbout={updateAbout}
                  updateStackTech={updateStackTech}
                  updateLastProject={updateLastProject}
                  saveAllData={saveAllData}
                  closeModal={closeModal}
                  deleteWhichEmpty={deleteWhichEmpty}
                  data={state}
                  dispatch={dispatch}
            />
        </>
    );
};
