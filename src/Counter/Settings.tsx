import React, {ChangeEvent, Dispatch} from 'react';
import {Button} from "./Button/Button";
import Input from "./Input";
import './counter.css'
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../redux/state";
import {
    ActionsType, onChangeInputMaxValueAC,
    onChangeInputStartValueAC, setCounterAC,
} from "../redux/counterReducer";

type PropsType = {

}

const Settings = (props: PropsType) => {

    const startValue = useSelector<RootReducerType, number>(state => state.counter.startValue)
    const maxValue = useSelector<RootReducerType, number>(state => state.counter.maxValue)
    const error = useSelector<RootReducerType, boolean>(state => state.counter.error)

    const dispatch = useDispatch<Dispatch<ActionsType>>()


    const onChangeInputStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue = e.currentTarget.value
        dispatch(onChangeInputStartValueAC(+newValue))
    }
    const onChangeInputMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const maxValue = e.currentTarget.value
        dispatch(onChangeInputMaxValueAC(+maxValue))
    }

    const setCounter = () => {
        dispatch(setCounterAC())
        localStorage.setItem('maxValueKey',JSON.stringify( maxValue))
        localStorage.setItem('startValueKey', JSON.stringify(startValue))
    }

    return (
        <div className='container'>
            <div className='settings-window'>
                <div className='input-container'>
                    <p> max value:</p>
                    <Input
                        callBack={onChangeInputMaxValue}
                        value={maxValue}
                        error={error}
                    />
                </div>
                <div className='input-container'>
                    <p> start value:</p>
                    <Input
                        error={error}
                        callBack={onChangeInputStartValue}
                        value={startValue}
                    />
                </div>

            </div>
            <div className='button-container'>
                <Button
                    disabled={error}
                    name={'set'}
                    callBack={setCounter}
                />
            </div>
        </div>
    );
};

export default Settings;