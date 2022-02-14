import {Dispatch} from "redux";
import {setErrorAC, setFetchingAC, setSuccessAC} from "./appReduser";


export type initialStateType = {
    phone: string,
    sum: string,
}


const initialState: initialStateType = {
    phone: '',
    sum: ''
}

export const paymentReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "ADD_PAYMENT": {
            console.log("form", state)
            return {
                ...state,
                phone: action.phone,
                sum: action.sum
            }
        }
        default:
            return state
    }
}

export const addPaymentAC = (phone: string, sum: string) => ({type: "ADD_PAYMENT", phone, sum} as const);


export const fetchPaymentThunk = (phone: string, sum: string) => (dispatch: Dispatch) => {
    dispatch(setFetchingAC(true))
    const changedPromise = {
        promise: null as null | Promise<any>,
        resolve: null as null | Function,
        reject: null as null | Function,
        onSuccess: phone,
        onError: 'Internal server error!'
    }
    changedPromise.promise = new Promise((res, rej) => {
        changedPromise.resolve = res;
        changedPromise.reject = rej
        dispatch(setSuccessAC(true))
    })
    changedPromise.promise.then(res => changedPromise.onSuccess).catch(er => changedPromise.onError)
    const num = Math.random()

    if (num < 0.3) {
        changedPromise.reject && changedPromise.reject()
        dispatch(setErrorAC(changedPromise.onError))
    } else {
        changedPromise.resolve && changedPromise.resolve()
        dispatch(setErrorAC(''))
    }
    setTimeout(() => {
        dispatch(setFetchingAC(false))
    }, 2000)

}

type ActionsType =
    | ReturnType<typeof addPaymentAC>


