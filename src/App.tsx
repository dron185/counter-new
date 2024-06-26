import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/button/Button";
import S from './components/counter/Counter.module.css'
import Style from './components/input/Input.module.css'
import {InputLabel} from "./components/input/InputLabel";

function App() {
    const [count, setCount] = useState(() => {
        let startValueAsString = localStorage.getItem("startValue");
        return startValueAsString ? JSON.parse(startValueAsString) : 0;
    })
    const [maxValue, setMaxValue] = useState(5)
    const [startValue, setStartValue] = useState(0)
    const [btnDisabled, setBtnDisabled] = useState(false)
    const [leftBtnDisabled, setLeftBtnDisabled] = useState(true)

// local storage

    const setToLocalStorage = () => {
        localStorage.setItem("startValue", JSON.stringify(startValue))
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
    }

    useEffect(() => {
        let startValueAsString = localStorage.getItem("startValue")
        if (startValueAsString) {
            let newStartValue = JSON.parse(startValueAsString);
            setStartValue(newStartValue)
        }

        let maxValueAsString = localStorage.getItem("maxValue")
        if (maxValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString);
            setMaxValue(newMaxValue)
        }
    }, []);


    useEffect(() => {
        if (startValue < 0 || maxValue <= startValue) {
            setLeftBtnDisabled(true);
        }
    }, [startValue, maxValue])


    const incrementEvent = () => {
        setCount(count + 1)
    }

    const resetEvent = () => {
        setCount(startValue)
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
        setCount(startValue)
        setLeftBtnDisabled(true)
        setBtnDisabled(false)
        setToLocalStorage()
    }

    const changeInputValue = () => {
        setBtnDisabled(true)
        setLeftBtnDisabled(false);
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

export default App;



