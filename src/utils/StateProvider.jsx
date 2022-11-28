import {useContext, createContext, useReducer} from 'react'
import { inititalState } from './reduces'

export const StateContext = createContext()

export const StateProvider = ({children, initialState, reducer}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateProvider = () => useContext(StateContext)