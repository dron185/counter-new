import React from 'react';
import S from './Button.module.css'

type ButtonPropsType = {
    onClickButtonHandler: () => void
    title: string
    isDisabled: boolean
}

export const Button = ({onClickButtonHandler, title, isDisabled}: ButtonPropsType) => {
    return (
        <button
            disabled={isDisabled}
            onClick={onClickButtonHandler}
            className={isDisabled ? `${S.button} ${S.buttonDisabled}` : S.button}
        >{title}</button>
    );
};