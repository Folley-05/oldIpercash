import { SET_AMOUNT } from './constantes'

const initialState={amount:100}

const amountReducer=(state=initialState, action)=>{
    switch (action.type) {
        case SET_AMOUNT:
            return {amount: action.amount}
            break;
        default:
            return state
            break;
    }
}

export default amountReducer
