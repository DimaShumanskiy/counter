import React, {Dispatch, useEffect, useState} from 'react';

import './App.css';
import Counter from "./Counter/Counter";
import Settings from "./Counter/Settings";
import {useDispatch} from "react-redux";
import {ActionsType, onIncAC, resetCountAC} from "./redux/counterReducer";


function App() {

//режим editMode - стейт, на основании которого нужно показывать или нет экран с подсказкой

 const dispatch = useDispatch<Dispatch<ActionsType>>()


    // const [editMode, setEditMode] = useState<boolean>(true)
    // const [maxValue, setMaxValue] = useState<number>(5)
    // const [startValue, setStartValue] = useState<number>(0)
    // const [count, setCount] = useState<number>(startValue)
    // const [error, setError] = useState<boolean>(false)

    //
    // useEffect(() => {
    //     let startValueString = localStorage.getItem('startValueKey')
    //     if (startValueString) {
    //         let newValue = JSON.parse(startValueString)
    //         //setStartValue(newValue)
    //     }
    //     let maxValueString = localStorage.getItem('maxValueKey')
    //     if (maxValueString) {
    //         setMaxValue(JSON.parse(maxValueString))
    //     }
    // }, [])

    // const resetCount = () => {
        // let resCount = startValue;
        // setCount(resCount)
        // dispatch(resetCountAC())
    // }

    // const changeMaxValue = (value: number) => {
    //     setEditMode(false)
    //     setMaxValue(value)
    //     //dispatch AC
    // }

    // console.log(error)
    // console.log(startValue)
    // const changeStartValue = (value: number) => {
    //     if (value < 0 ) {
    //         setError(true)
    //         setEditMode(false)
    //         setStartValue(value)
    //     }else {
    //         setError(false)
    //         setEditMode(false)
    //         setStartValue(value)
    //     }
    // }

    // const changeMaxValue = (value: number) => {
    //     if (value <= 1
    //         // startValue
    //     ) {
    //         setError(true)
    //         setEditMode(false)
    //         setMaxValue(value)
    //     } else {
    //         setEditMode(false)
    //         setMaxValue(value)
    //         setError(false)
    //     }
    // }
    //
    // const changeStartValue = (value: number) => {
    //     if (value < 0 || value >= maxValue) {
    //         setError(true)
    //         setEditMode(false)
    //         // setStartValue(value)
    //     } else {
    //         setEditMode(false)
    //         // setStartValue(value)
    //         setError(false)
    //     }
    //
    // }
    //
    // const newSetEditMode = () => {
    //         setEditMode(true)
    //         resetCount()
    // }

    return (
        <div className="App">
            <Settings
                // error={error}
                // maxValue={maxValue}
                // startValue={startValue}
                // setCount={setCount}
                // changeMaxValue={changeMaxValue}
                // changeStartValue={changeStartValue}
                // newSetEditMode={newSetEditMode}
            />
            <Counter
                // error={error}
                // editMode={editMode}
                // maxCount={maxValue}
                // // startValue={startValue}
                // onInc={onInc}
                // // count={count}
                // resetCount={resetCount}
            />

        </div>
    );
}

export default App;
