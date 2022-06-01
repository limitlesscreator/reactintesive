import React from 'react';
import {Form} from "./Components/Form";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
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
        }
        this.updateName = this.updateName.bind(this)
        this.updateSurName = this.updateSurName.bind(this)
        this.updateDate = this.updateDate.bind(this)
        this.updatePhone = this.updatePhone.bind(this)
        this.updateWeb = this.updateWeb.bind(this)
        this.updateAbout = this.updateAbout.bind(this)
        this.updateStackTech = this.updateStackTech.bind(this)
        this.updateLastProject = this.updateLastProject.bind(this)
        this.saveAllData = this.saveAllData.bind(this)
        this.countSymbols = this.countSymbols.bind(this)
        this.clearAllData = this.clearAllData.bind(this)
        this.closeModal = this.closeModal.bind(this)

    }

    clearAllData(){
        // console.log(this.state.date)
        this.setState((state, props) => ({
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
            whichCountError: []
        }))
    }

    countSymbols(value,whichPlace){
        if(whichPlace === 'about'){
            this.setState((state, props) => ({
                countSymbolsAbout: 600 - value.length
            }))
        }
        else if (whichPlace === 'stackTech'){
            this.setState((state, props) => ({
                countSymbolsStackTech: 600 - value.length
            }))
        }
        else if (whichPlace === 'descriptionProject'){
            this.setState((state, props) => ({
                countSymbolsDescriptionProject: 600 - value.length
            }))
        }
    }

    closeModal(){
        this.setState((state, props) => ({
            modal: false
        }))
    }

    saveAllData(){
        let whichIsEmptyTemp = [] // this is which is 0 str

        for (let key in this.state){
            if (typeof this.state[key] === "string"){
                let temp = this.state[key].trim().length !== 0 // if str 0 then error
                if(temp){

                }
                else {
                    console.log(`here is an error ${key}`)
                    whichIsEmptyTemp.push(key)
                }
            }
        }
        console.log(whichIsEmptyTemp)
        this.setState((state, props) => ({
            whichEmpty: [...this.state.whichEmpty, ...whichIsEmptyTemp]
        }))
        this.setState((state, props) => ({
            modal: true
        }))


        console.log(this.state.whichEmpty)
    }

    updateName(newName) {
        this.setState((state, props) => ({
            name: newName
        }))

        if (!(newName[0] === newName[0]?.toUpperCase() && newName[0] !== ' ')){ // check UpperCase/ show error if no UpperCase
            this.setState((state, props) => ({
                checkUpperCaseName: false
            }))
        }
        else {
            this.setState((state, props) => ({
                checkUpperCaseName: true
            }))
        }
    }
    updateSurName(newSurName) {
        this.setState((state, props) => ({
            surName: newSurName
        }))

        if (!(newSurName[0] === newSurName[0]?.toUpperCase() && newSurName[0] !== ' ')){ // check UpperCase/ show error if no UpperCase
            this.setState((state, props) => ({
                checkUpperCaseSurName: false
            }))
        }
        else {
            this.setState((state, props) => ({
                checkUpperCaseSurName: true
            }))
        }
    }



    updateDate(newDate) {
        this.setState((state, props) => ({
            date: newDate
        }))
    }

    updatePhone(newPhone) {
        this.setState((state, props) => ({
            phone: newPhone
        }))
    }

    updateWeb(newWeb) {
        this.setState((state, props) => ({
            web: newWeb
        }))
    }

    updateAbout(newAbout) {
        this.setState((state, props) => ({
            about: newAbout
        }))
    }

    updateStackTech(newStackTech) {
        this.setState((state, props) => ({
            stackTech: newStackTech
        }))
    }
    updateLastProject(lastProject) {
        this.setState((state, props) => ({
            descriptionProject: lastProject
        }))
    }

    render() {
        return <>
            <Form
                clearAllData={this.clearAllData}
                countSymbols={this.countSymbols}
                updateName={this.updateName}
                updateSurName={this.updateSurName}
                updateDate={this.updateDate}
                updatePhone={this.updatePhone}
                updateWeb={this.updateWeb}
                updateAbout={this.updateAbout}
                updateStackTech={this.updateStackTech}
                updateLastProject={this.updateLastProject}
                saveAllData={this.saveAllData}
                closeModal={this.closeModal}
                data={this.state}
            />
        </>
    }
}

export default App;
