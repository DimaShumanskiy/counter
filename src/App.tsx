import React, {Dispatch, useEffect} from 'react';

import './App.css';
import Counter from "./Counter/Counter";
import Settings from "./Counter/Settings";
import {useDispatch, useSelector} from "react-redux";
import {
    ActionsType,
    InitialStateType,
    onChangeInputMaxValueAC, onChangeInputStartValueAC,
} from "./redux/counterReducer";
import {RootReducerType} from "./redux/state";


function App() {

//режим editMode - стейт, на основании которого нужно показывать или нет экран с подсказкой

 const dispatch = useDispatch<Dispatch<ActionsType>>()


    const counter = useSelector<RootReducerType, InitialStateType>(state => state.counter)

    useEffect(() => {
        let startValueString = localStorage.getItem('startValueKey')
        if (startValueString) {
            let newValue = JSON.parse(startValueString)
            dispatch(onChangeInputStartValueAC(newValue))
        }
        let maxValueString = localStorage.getItem('maxValueKey')
        if (maxValueString) {
            let newValue = JSON.parse(maxValueString)
            dispatch(onChangeInputMaxValueAC(newValue))
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
