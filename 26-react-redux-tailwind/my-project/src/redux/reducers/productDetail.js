

export const productsReducer = (state = {products : []}, action) => {
    switch (action.type) {
        case "GET_DETAILS":
            return(
                products: action.payload
            )

        default:
            return state

    }

}