import React, {ChangeEvent} from 'react';
import Style from './Input.module.css'

type InputLabelPropsType = {
    htmlFor: string
    text: string
    id: string
    newValue: number
    setNewValue: (newValue: number) => void
    changeInputValue: () => void
    className: string
}

export const InputLabel = ({htmlFor, text, id, newValue, setNewValue, changeInputValue, className}: InputLabelPropsType) => {

    const changeInputValueHandler = (e: ChangeEvent<HTMLInputElement>)=> {
        setNewValue(Number(e.currentTarget.value))
        changeInputValue()
    }

    return (
        <div className={Style.inputLabelContainer}>
            <label className={Style.label} htmlFor={htmlFor}>{text}</label>
            <input
                className={`${Style.input} ${className}`}
                type={"number"}
                id={id}
                value={newValue}
                onChange={changeInputValueHandler}
            />
        </div>
    );
};

