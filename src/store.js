import {createStore} from 'redux'
let initialState = {
    balance : 0 ,
    fullName : '',
    mobile : null,
    accountType: '',
    PAN : null
}

function accountReducer(state = initialState,action){ 
    switch(action.type){
        case('deposit'):
            return {...state,balance:state.balance + +action.payload}
        case('withdraw'):
            return {...state,balance:state.balance - +action.payload} 
        case('nameUpdate'):
            return {...state,fullName:action.payload} 
        case('mobileUpdate'):
            return {...state,mobile:action.payload} 
        case('accountTypeUpdate'):
            return {...state,accountType:action.payload} 
        case('PANUpdate'):
            return {...state,PAN:action.payload} 
        case('reset'):
            return initialState 
        default :
            return state
    }

}

let store  = createStore(accountReducer)

export default store