import {useState,useReducer} from 'react'

function useCounter() {
const initialState = {
    count : 0
}

    const reducer = (state,action) => {
        switch(action.type){
            case 'INCREMENT':
                return {
                   ...state, count : state.count + 1 
                }

                case 'DECREMENT':
                return {
                    ...state, count : state.count - 1 
                }

                case 'RESET':
                    return{
                        ...state, count : 0
                    }
                case 'SET VALUE':
                    return {
                        ...state, count : action.payload
                    }
                default:
                    throw new Error()
        }
    }

    const [state,dispatch] = useReducer(reducer,initialState)

    const increment = ( )=> (
        dispatch({
            type : 'INCREMENT'
        })
    )

    const decrement = ( )=> (
        dispatch({
            type : 'DECREMENT'
        })
        )
const reset = () =>{
    dispatch({
        type : 'RESET'
    })
}
const setValue = (e) => {
    dispatch({
        type : 'SET VALUE',
        payload : e.target.value
    })
}

  return [state,increment,decrement,reset,setValue]
}

export default useCounter