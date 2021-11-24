import React, {Dispatch, useEffect, useState} from 'react';

import './App.css';
import Counter from "./Counter/Counter";
import Settings from "./Counter/Settings";
import {useDispatch, useSelector} from "react-redux";
import {ActionsType, InitialStateType, localStartValueStringAC, onIncAC, resetCountAC} from "./redux/counterReducer";
import {RootReducerType} from "./redux/state";


function App() {

//режим editMode - стейт, на основании которого нужно показывать или нет экран с подсказкой

 const dispatch = useDispatch<Dispatch<ActionsType>>()


    // const [editMode, setEditMode] = useState<boolean>(true)
    // const [maxValue, setMaxValue] = useState<number>(5)
    // const [startValue, setStartValue] = useState<number>(0)
    // const [count, setCount] = useState<number>(startValue)
    // const [error, setError] = useState<boolean>(false)

    const counter = useSelector<RootReducerType, InitialStateType>(state => state.counter)

    useEffect(() => {
        let startValueString = localStorage.getItem('startValueKey')
        //console.log('startValueString: ', startValueString)
        if (startValueString) {
            let newValue = JSON.parse(startValueString)
            //console.log('newValue: ', newValue)
            //setStartValue(newValue)
            dispatch(localStartValueStringAC(newValue))
        }
        let maxValueString = localStorage.getItem('maxValueKey')
        if (maxValueString) {
            console.log('maxValueString: ', maxValueString)
            // setMaxValue(JSON.parse(maxValueString))
            // counter.maxValue(JSON.parse(maxValueString))
        }
    }, [])


    return (
        <div className="App">
            <Settings/>
            <Counter/>
        </div>
    );
}

export default App;
