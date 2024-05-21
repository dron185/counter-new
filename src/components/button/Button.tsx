import React from 'react';
import S from './Button.module.css'

type ButtonPropsType = {
    onClickButtonHandler: () => void
    title: string
    disable?: boolean
}

export const Button = ({onClickButtonHandler, title, disable}: ButtonPropsType) => {
    return (
        <button
            disabled={disable}
            onClick={onClickButtonHandler}
            className={S.button}
        >{title}</button>
    );
};