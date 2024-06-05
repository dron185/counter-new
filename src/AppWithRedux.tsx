import React, {useEffect} from 'react';
import './App.css';
import {Button} from "./components/button/Button";
import S from './components/counter/Counter.module.css'
import Style from './components/input/Input.module.css'
import {InputLabel} from "./components/input/InputLabel";
import {useDispatch, useSelector} from "react-redux";
import {
    incrementCountAC,
    setBtnIsDisabledAC,
    setCountValueAC,
    setLeftBtnIsDisabledAC,
    setMaxValueAC,
    setStartValueAC
} from "./state/counter-reducer";
import {AppRootStateType} from "./state/store";

function AppWithRedux() {

    const count = useSelector<AppRootStateType, number>(state => state.data.count)
    const maxValue = useSelector<AppRootStateType, number>(state => state.data.maxValue)
    const startValue = useSelector<AppRootStateType, number>(state => state.data.startValue)
    const btnDisabled = useSelector<AppRootStateType, boolean>(state => state.data.btnDisabled)
    const leftBtnDisabled = useSelector<AppRootStateType, boolean>(state => state.data.leftBtnDisabled)
    // btnDisabled, leftBtnDisabled - сделать через useState.


    const dispatch = useDispatch();

    useEffect(() => {
        if (startValue < 0 || maxValue <= startValue) {
            dispatch(setLeftBtnIsDisabledAC(true))
        }
    }, [startValue, maxValue, dispatch])


    const incrementEvent = () => {
        dispatch(incrementCountAC(count))
    }

    const resetEvent = () => {
        dispatch(setCountValueAC(startValue))
    }

    let display;
    if (!btnDisabled) {
        display = count.toString()
    } else {
        (startValue < 0 || maxValue <= startValue)
            ? display = "Incorrect value!"
            : display = "enter values and press 'set'"
    }

    const setValue = () => {
        dispatch(setCountValueAC(startValue))
        dispatch(setLeftBtnIsDisabledAC(true))
        dispatch(setBtnIsDisabledAC(false))
    }

    const changeInputValue = () => {
        dispatch(setBtnIsDisabledAC(true))
        dispatch(setLeftBtnIsDisabledAC(false))
    }

    const setMaxValue = (value: number) => {
        dispatch(setMaxValueAC(value))
    }
    const setStartValue = (value: number) => {
        dispatch(setStartValueAC(value))
    }

    return (
        <div className="App">
            <h1 className={S.title}>Counter App</h1>

            <div className={S.counterContainer}>
                <div className={S.counter}>
                    <div className={S.inputsContainer}>
                        <InputLabel
                            htmlFor={"max"}
                            text={"max value:"}
                            id={"max"}
                            newValue={maxValue}
                            setNewValue={setMaxValue}
                            changeInputValue={changeInputValue}
                            className={ (maxValue <= startValue) ? `${Style.error}` : ''}
                        />
                        <InputLabel
                            htmlFor={"start"}
                            text={"start value:"}
                            id={"start"}
                            newValue={startValue}
                            setNewValue={setStartValue}
                            changeInputValue={changeInputValue}
                            className={ (startValue < 0 || maxValue <= startValue) ? `${Style.error}` : ''}
                        />
                    </div>
                    <div className={S.buttonsContainer}>
                        <Button
                            onClickButtonHandler={setValue}
                            title={'set'}
                            isDisabled={leftBtnDisabled}
                        />
                    </div>
                </div>

                <div className={S.counter}>
                    <h2 className={((count === maxValue) || (startValue < 0 || maxValue <= startValue)) ? `${S.score} ${S.error}` : S.score}>
                        {display}
                    </h2>
                    <div className={S.buttonsContainer}>
                        <Button
                            onClickButtonHandler={incrementEvent}
                            title={'inc'}
                            isDisabled={count === maxValue ? true : btnDisabled}
                        />
                        <Button
                            onClickButtonHandler={resetEvent}
                            title={'reset'}
                            isDisabled={btnDisabled}
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AppWithRedux;



