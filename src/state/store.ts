import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../utils/localStorage-utils";

const rootReducer = combineReducers({
    data: counterReducer,
})

export const store = legacy_createStore(rootReducer, loadState())
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>


store.subscribe(()=>{
    saveState({
        data: store.getState().data
    });
    //localStorage.setItem('app-state', JSON.stringify(store.getState()))
})


type AppStoreType = typeof store; // пример типизации store

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store
console.log(store.getState().data)