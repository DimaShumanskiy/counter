import {Dispatch} from "react";

const initialState = {
    editMode: true,
    maxValue: 5,
    startValue: 1,
    count: 1,
    error: false,
}

export type InitialStateType = typeof initialState


export const counterReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'ON-INC':

            let newCount = state.count <= state.maxValue - 1 ? state.count + 1 : state.count;
            console.log(newCount)
            return {
                ...state,
                count: newCount,
            }
        case 'RESET-COUNT':
            return {
                ...state,
                count: state.startValue,
            }
        case 'CHANGE-INPUT-START-VALUE':
            if (action.startValue < 0 || action.startValue >= state.maxValue) {
                return {
                    ...state,
                    error: true,
                    editMode: false,
                    startValue: action.startValue,
                }
            } else {
                return {
                    ...state,
                    error: false,
                    editMode: false,
                    startValue: action.startValue,
                }
            }

        // return
        //     // ...state,
        //     // startValue: action.startValue
        // }
        case "CHANGE-INPUT-MAX-VALUE":
            if (action.maxValue <= state.startValue) {
                return {
                    ...state,
                    error: true,
                    editMode: false,
                    maxValue: action.maxValue,
                }
            } else  {
                    return {
                        ...state,
                        editMode: false,
                        error: false,
                        maxValue: action.maxValue,
                }
            }
        case "SET-COUNTER":
            return {
                ...state,
                count: state.startValue,
                editMode: true,
            }
        case "LOCAL-START-VALUE":
            return {
                ...state,
                startValue: action.startValue
            }
        default:
            return state
    }

}


export type ActionsType = ReturnType<typeof onIncAC>
    | ReturnType<typeof resetCountAC>
    | ReturnType<typeof onChangeInputStartValueAC>
    | ReturnType<typeof onChangeInputMaxValueAC>
    | ReturnType<typeof setCounterAC>
    | ReturnType<typeof localStartValueStringAC>

export const onIncAC = () => ({type: 'ON-INC'}) as const

export const resetCountAC = () => ({type: 'RESET-COUNT'}) as const

export const onChangeInputStartValueAC = (startValue: number) => ({
    type: 'CHANGE-INPUT-START-VALUE',
    startValue
}) as const
export const onChangeInputMaxValueAC = (maxValue: number) => ({type: 'CHANGE-INPUT-MAX-VALUE', maxValue}) as const

export const setCounterAC = () => ({type: 'SET-COUNTER'}) as const

export const localStartValueStringAC = (startValue: number) => ({type: 'LOCAL-START-VALUE' ,startValue}) as const

// export const inv = (startValue: number) => (dispatch: Dispatch) => {
//     localStorage.getItem('startValueKey', )
// }
