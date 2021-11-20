import React, {ChangeEvent} from 'react';
import './counter.css'
import {useSelector} from "react-redux";
import {RootReducerType} from "../redux/state";

type InputType = {
    value?: number
    callBack?: (count: any) => void
    error: boolean
}
const Input = (props: InputType) => {



    return (
        <input className={
            props.error
                ? 'red'
                : 'input-number'}
               value={props.value}
               onChange={props.callBack}
               type={"number"}
               min="-1"
        />

    );
};

export default Input;