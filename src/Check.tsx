import React, {useState} from "react";
import "./App.css"



type CheckType = {
    onClickInc: () => void
    onClickRes: () => void
    check: number
}

function Check(props:CheckType) {


    return (
        <div className="wrapper">
            <p className={props.check < 5 ? "content" : "contentError"}> {props.check}</p>

            <div>
                <button className="btnInc" onClick={props.onClickInc} disabled={props.check === 5}>
                    inc
                </button>
                <button className="btnReset" onClick={props.onClickRes} disabled={!(props.check > 0 && props.check < 6)}>
                    reset
                </button>

            </div>

        </div>
    );
}

export default Check;