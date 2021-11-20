import React, {Dispatch} from "react";
import './counter.css'
import {Button} from "./Button/Button";
import Window from "./Window";
import {ActionsType, InitialStateType, onIncAC, resetCountAC} from "../redux/counterReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../redux/state";


type CounterType = {

}


function Counter(props: CounterType) {

    const counter = useSelector<RootReducerType, InitialStateType>(state => state.counter)
    const disabledInc = counter.count === counter.maxValue
    const disabledRes = counter.count === counter.startValue

    const dispatch = useDispatch<Dispatch<ActionsType>>()

    const onInc = () => {
        dispatch(onIncAC())
    }
    const resetCount = () => {
        dispatch(resetCountAC())
    }

    return (
        <div className='container'>
            <Window
                error={counter.error}
                maxValue={counter.maxValue}
                count={counter.count}
                editMode={counter.editMode}
            />
            <div className='button-container'>
                <Button name={'inc'}
                        callBack={onInc}
                    disabled={disabledInc}
                />
                <Button name={'reset'}
                        callBack={resetCount}
                    disabled={disabledRes}
                />
            </div>
        </div>
    )
}

export default Counter