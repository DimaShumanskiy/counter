import React from 'react';
import './counter.css'
import {useSelector} from "react-redux";
import {RootReducerType} from "../redux/state";

type PropsType = {
    count?: number
    editMode: boolean
    error: boolean
    maxValue: number

}

const Window = (props: PropsType) => {

    return (
        props.editMode ?
            <div className={
                props.count === props.maxValue
                    ? 'red-tablo'
                    : 'tablo'}>
                {props.count}
            </div>
            :
    <div className='settings-window'>{props.error
        ?<p className='error'>Incorrect value</p>
        : 'enter values and press set '}</div>
    );
};

export default Window;