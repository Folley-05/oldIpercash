import { createStore } from 'redux'

import { combineReducers } from 'redux'
import amountReducer from './amountReducer'

const RootReducer=combineReducers({
    amountReducer
})

const store=createStore(RootReducer)

export default store