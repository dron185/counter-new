import React, {ChangeEvent} from 'react';
import S from './Input.module.css'

type InputLabelPropsType = {
    htmlFor: string
    text: string
    id: string
    newValue: number
    setNewValue: (newValue: number) => void
    changeInputValue: () => void
}

export const InputLabel = ({htmlFor, text, id, newValue, setNewValue, changeInputValue}: InputLabelPropsType) => {

    const changeInputValueHandler = (e: ChangeEvent<HTMLInputElement>)=> {
        setNewValue(Number(e.currentTarget.value))
        changeInputValue()
    }

    return (
        <div className={S.inputLabelContainer}>
            <label className={S.label} htmlFor={htmlFor}>{text}</label>
            <input
                className={S.input}
                type={"number"}
                id={id}
                value={newValue}
                onChange={changeInputValueHandler}
            />
        </div>
    );
};

