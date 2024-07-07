export type CounterStateType = {
    count: number
    maxValue: number
    startValue: number
    btnDisabled: boolean
    leftBtnDisabled: boolean
}

export type ActionsType =
    | ReturnType<typeof incrementCountAC>
    | ReturnType<typeof setCountValueAC>
    | ReturnType<typeof setStartValueAC>
    | ReturnType<typeof setMaxValueAC>
    | ReturnType<typeof setBtnIsDisabledAC>
    | ReturnType<typeof setLeftBtnIsDisabledAC>
//  | ReturnType<typeof setValueFromLocalStorageAC>

const INCREMENT_COUNT = 'INCREMENT-COUNT';
const SET_COUNT_VALUE = 'SET-COUNT-VALUE';
const SET_START_VALUE = 'SET-START-VALUE';
const SET_MAX_VALUE = 'SET-MAX-VALUE';
const SET_BTN_IS_DISABLED = 'SET-BTN-IS-DISABLED';
const SET_LEFT_BTN_IS_DISABLED = 'SET-LEFT-BTN-IS-DISABLED';
//const SET_VALUE_FROM_LOCAL_STORAGE = 'SET-VALUE-FROM-LOCAL-STORAGE';

export let initialState: CounterStateType = {
    count: 0,
    maxValue: 5,
    startValue: 0,
    btnDisabled: false,
    leftBtnDisabled: true
}

// Reducer:
export const counterReducer = (state: CounterStateType = initialState, action: ActionsType): CounterStateType => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {...state, count: state.count + 1}
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
        // case SET_VALUE_FROM_LOCAL_STORAGE:
        //     return {...state, count: action.count}
        default:
            return state
    }
}

// Action Creators:
export const incrementCountAC = () => ({type: INCREMENT_COUNT} as const)
export const setCountValueAC = (startValue: number) => ({type: SET_COUNT_VALUE, startValue} as const)
export const setStartValueAC = (value: number) => ({type: SET_START_VALUE, value} as const)
export const setMaxValueAC = (value: number) => ({type: SET_MAX_VALUE, value} as const)
export const setBtnIsDisabledAC = (btnDisabled: boolean) => ({type: SET_BTN_IS_DISABLED, btnDisabled} as const)
export const setLeftBtnIsDisabledAC = (leftBtnDisabled: boolean) =>
    ({type: SET_LEFT_BTN_IS_DISABLED, leftBtnDisabled} as const)

// export const setValueFromLocalStorageAC = (count: number) => ({type: SET_VALUE_FROM_LOCAL_STORAGE, count} as const)

