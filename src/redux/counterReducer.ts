
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

            let newCount = state.count < state.maxValue ? state.count + 1 : state.count;
            console.log(newCount)
            return {
                ...state,
                count: newCount
            }
        case 'RESET-COUNT':
            return {
                ...state,
                count: state.startValue
            }
        case 'CHANGE-INPUT-START-VALUE':
            return {
                ...state,
                startValue: action.startValue
            }
        case "CHANGE-INPUT-MAX-VALUE":
            return {
                ...state,
                maxValue: action.maxValue
            }
        // case 'CHANGE-MAX-VALUE':
        //     return state
        default:
            return state
    }

}


export type ActionsType = ReturnType<typeof onIncAC>
    | ReturnType<typeof resetCountAC>
    | ReturnType<typeof onChangeInputStartValueAC>
    | ReturnType<typeof onChangeInputMaxValueAC>

export const onIncAC = () => ({type: 'ON-INC'}) as const

export const resetCountAC = () => ({type: 'RESET-COUNT'}) as const

export const onChangeInputStartValueAC = (startValue: number) => ({type: 'CHANGE-INPUT-START-VALUE' , startValue }) as const
export const onChangeInputMaxValueAC = (maxValue: number) =>({type: 'CHANGE-INPUT-MAX-VALUE' , maxValue }) as const



// export const changeMaxValueAc = (maxValue: string) => {
//     return {
//         type: 'CHANGE-MAX-VALUE',
//         payload: {maxValue}
//     }
// }