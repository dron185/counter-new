export type counterStateType = {
    count: number
    maxValue: number
    startValue: number
    btnDisabled: boolean
    leftBtnDisabled: boolean
}


export type incrementCountActionType = {
    type: 'INCREMENT-COUNT'
    count: number
}

export type setCountValueActionType = {
    type: 'SET-COUNT-VALUE'
    startValue: number
}

export type setStartValueACActionType = {
    type: 'SET-START-VALUE'
    startValue: number
}

export type setMaxValueActionType = {
    type: 'SET-MAX-VALUE'
    maxValue: number
}

export type setBtnIsDisabledActionType = {
    type: 'SET-BTN-IS-DISABLED'
    btnDisabled: boolean
}

export type setLeftBtnIsDisabledActionType = {
    type: 'SET-LEFT-BTN-IS-DISABLED'
    leftBtnDisabled: boolean
}

export type ActionsType =
    | incrementCountActionType
    | setCountValueActionType
    | setStartValueACActionType
    | setMaxValueActionType
    | setBtnIsDisabledActionType
    | setLeftBtnIsDisabledActionType

export let initialState: counterStateType = {
    count: 0,
    maxValue: 5,
    startValue: 0,
    btnDisabled: false,
    leftBtnDisabled: true
}

export const counterReducer = (state: counterStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'INCREMENT-COUNT':
            return {...state, count: action.count + 1}
        case 'SET-COUNT-VALUE':
            return {...state, count: action.startValue}
        case 'SET-START-VALUE':
            return {...state, startValue: action.startValue}
        case 'SET-MAX-VALUE':
            return {...state, maxValue: action.maxValue}
        case 'SET-BTN-IS-DISABLED':
            return {...state, btnDisabled: action.btnDisabled}
        case 'SET-LEFT-BTN-IS-DISABLED':
            return {...state, leftBtnDisabled: action.leftBtnDisabled}
        default:
            return state
    }
}

// Action Creators:
export const incrementCountAC = (count: number): incrementCountActionType => {
    return {
        type: 'INCREMENT-COUNT',
        count
    }
};

export const setCountValueAC = (startValue: number): setCountValueActionType => {
    return {
        type: 'SET-COUNT-VALUE',
        startValue
    }
};

export const setStartValueAC = (startValue: number): setStartValueACActionType => {
    return {
        type: 'SET-START-VALUE',
        startValue
    }
};

export const setMaxValueAC = (maxValue: number): setMaxValueActionType => {
    return {
        type: 'SET-MAX-VALUE',
        maxValue: maxValue
    }
};

export const setBtnIsDisabledAC = (btnDisabled: boolean): setBtnIsDisabledActionType => {
    return {
        type: 'SET-BTN-IS-DISABLED',
        btnDisabled
    }
};

export const setLeftBtnIsDisabledAC = (leftBtnDisabled: boolean): setLeftBtnIsDisabledActionType => {
    return {
        type: 'SET-LEFT-BTN-IS-DISABLED',
        leftBtnDisabled
    }
};



