import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/button/Button";
import S from './components/counter/Counter.module.css'
import {InputLabel} from "./components/input/InputLabel";

function App() {
    const [count, setCount] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [startValue, setStartValue] = useState(0)

    const incrementEvent = () => {
        setCount(count + 1)
    }

    const resetEvent = () => {
        setCount(startValue)
    }

    // useEffect(() => {
    //     if (count > maxValue) {
    //         setCount(maxValue)
    //     }
    // }, [count, maxValue])

    const setValue = () => {
        setCount(startValue)
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
                        />
                        <InputLabel
                            htmlFor={"start"}
                            text={"start value:"}
                            id={"start"}
                            newValue={startValue}
                            setNewValue={setStartValue}
                        />
                    </div>
                    <div className={S.buttonsContainer}>
                        <Button
                            onClickButtonHandler={setValue}
                            title={'set'}
                        />
                    </div>
                </div>

                <div className={S.counter}>
                    <h2 className={count === maxValue ? `${S.score} ${S.error}` : S.score}>{count}</h2>
                    <div className={S.buttonsContainer}>
                        <Button
                            onClickButtonHandler={incrementEvent}
                            title={'inc'}
                            disable={count === maxValue}
                        />
                        <Button
                            onClickButtonHandler={resetEvent}
                            title={'reset'}
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;
