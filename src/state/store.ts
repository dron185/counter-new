import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counter-reducer";

const rootReducer = combineReducers({
    data: counterReducer,
})


let preloadedState;
const persistedStateString = localStorage.getItem("app-state");
if (persistedStateString) {
    preloadedState = JSON.parse(persistedStateString);
}

export const store = legacy_createStore(rootReducer, preloadedState)
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>


store.subscribe(()=>{
    localStorage.setItem('app-state', JSON.stringify(store.getState()))
   // localStorage.setItem('value', JSON.stringify(store.getState().data.count))
})


type AppStoreType = typeof store; // пример типизации store

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store
console.log(store.getState().data)