import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/button/Button";
import S from './components/counter/Counter.module.css'

function App() {
    const [count, setCount] = useState(0)
    const [maxValue, setMaxValue] = useState(5)

    const incrementEvent = () => {
        setCount(count + 1)
    }

    const resetEvent = () => {
        setCount(0)
    }

    // useEffect(() => {
    //     if (count > maxValue) {
    //         setCount(maxValue)
    //     }
    // }, [count, maxValue])

    return (
        <div className="App">
            <h1>Counter App</h1>
            <div className={S.counterContainer}>
                <h2 className={S.score}>{count}</h2>
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
    );
}

export default App;
