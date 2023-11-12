import {combineReducers, createStore} from 'redux'
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
        // case('nameUpdate'):
        //     return {...state,fullName:action.payload} 
        // case('mobileUpdate'):
        //     return {...state,mobile:action.payload} 
        // case('accountTypeUpdate'):
        //     return {...state,accountType:action.payload} 
        // case('PANUpdate'):
        //     return {...state,PAN:action.payload} 
        case('reset'):
            return initialState 
        default :
            return state 
    }

}

function updateReducer(state=[],action){ 
    switch(action.type){
        case('nameUpdate'):
            return {...state,fullName:action.payload} 
        case('mobileUpdate'):
            return {...state,mobile:action.payload} 
        case('accountTypeUpdate'):
            return {...state,accountType:action.payload} 
        case('PANUpdate'):
            return {...state,PAN:action.payload}
        default:
            return state
    }

}

function transactionReducer(state=[],action){
    switch(action.type){
        case("add"):
            return [...state,{
                id:action.payload.id,
                amount:action.payload.amount,
                type:action.payload.type,
                date:action.payload.date,
                status:action.payload.status,
                description:action.payload.description
            }] 
        default:
            return state
    }
}

let rootReducer = combineReducers({
    account:accountReducer,
    update:updateReducer,
    transactions:transactionReducer
})

let store  = createStore(rootReducer)

export default store