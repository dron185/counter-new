export type counterStateType = {
    count: number
    maxValue: number
    startValue: number
    btnDisabled: boolean
    leftBtnDisabled: boolean
}

export type incrementCountActionType = {
    type: typeof INCREMENT_COUNT
    count: number
}

export type setCountValueActionType = {
    type: typeof SET_COUNT_VALUE
    startValue: number
}

export type setStartValueACActionType = {
    type: typeof SET_START_VALUE
    value: number
}

export type setMaxValueActionType = {
    type: typeof SET_MAX_VALUE
    value: number
}

export type setBtnIsDisabledActionType = {
    type: typeof SET_BTN_IS_DISABLED
    btnDisabled: boolean
}

export type setLeftBtnIsDisabledActionType = {
    type: typeof SET_LEFT_BTN_IS_DISABLED
    leftBtnDisabled: boolean
}

export type ActionsType =
    | incrementCountActionType
    | setCountValueActionType
    | setStartValueACActionType
    | setMaxValueActionType
    | setBtnIsDisabledActionType
    | setLeftBtnIsDisabledActionType

const INCREMENT_COUNT = 'INCREMENT-COUNT';
const SET_COUNT_VALUE = 'SET-COUNT-VALUE';
const SET_START_VALUE = 'SET-START-VALUE';
const SET_MAX_VALUE = 'SET-MAX-VALUE';
const SET_BTN_IS_DISABLED = 'SET-BTN-IS-DISABLED';
const SET_LEFT_BTN_IS_DISABLED = 'SET-LEFT-BTN-IS-DISABLED';

export let initialState: counterStateType = {
    count: 0,
    maxValue: 5,
    startValue: 0,
    btnDisabled: false,
    leftBtnDisabled: true
}

// Reducer:
export const counterReducer = (state: counterStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {...state, count: action.count + 1}
        case SET_COUNT_VALUE:
            return {...state, count: action.startValue}
        case SET_START_VALUE:
            return {...state, startValue: action.value}
        case SET_MAX_VALUE:
            return {...state, maxValue: action.value}
        case SET_BTN_IS_DISABLED:
            return {...state, btnDisabled: action.btnDisabled}
        case SET_LEFT_BTN_IS_DISABLED:
            return {...state, leftBtnDisabled: action.leftBtnDisabled}
        default:
            return state
    }
}

// Action Creators:
export const incrementCountAC = (count: number): incrementCountActionType => {
    return {
        type: INCREMENT_COUNT,
        count
    }
};

export const setCountValueAC = (startValue: number): setCountValueActionType => {
    return {
        type: SET_COUNT_VALUE,
        startValue
    }
};

export const setStartValueAC = (value: number): setStartValueACActionType => {
    return {
        type: SET_START_VALUE,
        value
    }
};

export const setMaxValueAC = (value: number): setMaxValueActionType => {
    return {
        type: SET_MAX_VALUE,
        value
    }
};

export const setBtnIsDisabledAC = (btnDisabled: boolean): setBtnIsDisabledActionType => {
    return {
        type: SET_BTN_IS_DISABLED,
        btnDisabled
    }
};

export const setLeftBtnIsDisabledAC = (leftBtnDisabled: boolean): setLeftBtnIsDisabledActionType => {
    return {
        type: SET_LEFT_BTN_IS_DISABLED,
        leftBtnDisabled
    }
};



