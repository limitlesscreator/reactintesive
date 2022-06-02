export const ACTIONS = {
    NAMEUPDATE: 'nameupdate',
    SURNAMEUPDATE: 'surnameupdate',
    NAMEUPPERCASE: 'nameuppercase',
    SURNAMEUPPERCASE: 'surnameuppercase',
    DATEUPDATE: 'dateupdate',
    PHONEUPDATE: 'phoneupdate',
    NUMBERERROR: 'numbererror',
    WEB: 'web',
    WEBERROR: 'weberror',
    ABOUTUPDATE: 'aboutupdate',
    STACKUPDATE: 'stackupdate',
    SYMBOLSABOUT: 'symbolsabout',
    SYMBOLSTECH: 'symboltech',
    SYMBOLSPROJECT: 'symbolsproject',
    PROJECTUPDATE: 'projectupdate',
    WHICHEMPTY: 'whichempty',
    MODALUPDATE: 'modalupdate',
    FORMUPDATE: 'formupdate',
    CLEARALLDATA: 'clearalldata'
}

export function reducer(state, action) {
    console.log(action)
    switch (action.type) {
        case ACTIONS.NAMEUPDATE:
            return {...state, name: action.payload}

        case ACTIONS.SURNAMEUPDATE:
            return {...state, surName: action.payload}

        case ACTIONS.NAMEUPPERCASE:
            return {...state, checkUpperCaseName: action.payload}

        case ACTIONS.SURNAMEUPPERCASE:
            return {...state, checkUpperCaseSurName: action.payload}

        case ACTIONS.DATEUPDATE:
            return {...state, date: action.payload}

        case ACTIONS.PHONEUPDATE:
            return {...state, phone: action.payload}

        case ACTIONS.NUMBERERROR:
            return {...state, numberError: action.payload}

        case ACTIONS.WEB:
            return {...state, web: action.payload}

        case ACTIONS.WEBERROR:
            return {...state, webError: action.payload}

        case ACTIONS.ABOUTUPDATE:
            return {...state, about: action.payload}

        case ACTIONS.STACKUPDATE:
            return {...state, stackTech: action.payload}

        case ACTIONS.PROJECTUPDATE:
            return {...state, descriptionProject: action.payload}

        case ACTIONS.SYMBOLSABOUT:
            return {...state, countSymbolsAbout: action.payload}

        case ACTIONS.SYMBOLSTECH:
            return {...state, countSymbolsStackTech: action.payload}

        case ACTIONS.SYMBOLSPROJECT:
            return {...state, countSymbolsDescriptionProject: action.payload}

        case ACTIONS.WHICHEMPTY:
            return {...state, whichEmpty: action.payload}

        case ACTIONS.MODALUPDATE:
            return {...state, modal: action.payload}

        case ACTIONS.FORMUPDATE:
            return {...state, form: action.payload}

        case ACTIONS.CLEARALLDATA:
            return {
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
            }

        default:
            return state
    }
}
