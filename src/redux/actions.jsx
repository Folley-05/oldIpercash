import { SET_AMOUNT } from './constantes'

const setAmount=(montant=100)=>({
    type: SET_AMOUNT,
    amount: montant
})

export { setAmount }