import React, {useState} from 'react';

import './App.css';
import Counter from "./Counter/Counter";
import Settings from "./Counter/settings";
import {log} from "util";


function App() {

//режим editMode - стейт, на основании которого нужно показывать или нет экран с подсказкой

    const [editMode, setEditMode] = useState<boolean>(true)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [count, setCount] = useState<number>(startValue)
    const [error, setError] = useState<boolean>(false)

    const onInc = () => {
        let newCount = count <= maxValue ? count + 1 : count;
        setCount(newCount)
    }

    const resetCount = () => {
        let resCount = startValue;
        setCount(resCount)
    }

    const changeMaxValue = (value: number) => {
        setEditMode(false)
        setMaxValue(value)
    }

    const changeStartValue = (value: number) => {
        if (value < 0 ) {
            setError(true)
            setEditMode(false)
            setStartValue(value)
        }else {
            setError(false)
            setEditMode(false)
            setStartValue(value)
        }
    }
    console.log(startValue)
    console.log(error)
    const newSetEditMode = () => {
            setEditMode(true)
            resetCount()
    }

    return (
        <div className="App">
            <Settings
                error={error}
                maxValue={maxValue}
                startValue={startValue}
                setCount={setCount}
                changeMaxValue={changeMaxValue}
                changeStartValue={changeStartValue}
                newSetEditMode={newSetEditMode}
            />
            <Counter

                editMode={editMode}
                maxCount={maxValue}
                onInc={onInc}
                count={count}
                resetCount={resetCount}
            />

        </div>
    );
}

export default App;
