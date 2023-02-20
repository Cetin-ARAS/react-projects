



export const cardReducer = (state = {cardItems : []}, action) => {
    switch (action.type) {
        case "ADD_CARDD":
            return{
            ...state,
            products: action.payload
            }

        default:
            return state

    }
}