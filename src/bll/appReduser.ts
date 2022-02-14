export type initialStateType = {
    isFetching: boolean,
    error: null | string,
    success: boolean
}

const initialState: initialStateType = {
    isFetching: false,
    error: '',
    success: false
}

export const appReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {

        case "SET-ERROR":
            return {
                ...state,
                error: action.error,
            };
        case "SET-SUCCESS":
            return {
                ...state,
                success: action.success,
            };
        case "SET-FETCHING":
            return {
                ...state,
                isFetching: action.isFetching,
            };
        default:
            return state;
    }
};

export const setErrorAC = (error: null | string) => ({type: "SET-ERROR", error} as const);
export const setSuccessAC = (success: boolean) => ({type: "SET-SUCCESS", success} as const);
export const setFetchingAC = (isFetching: boolean) => ({type: "SET-FETCHING", isFetching,} as const);

type ActionsType =
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof setSuccessAC>
    | ReturnType<typeof setFetchingAC>