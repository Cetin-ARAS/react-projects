


export const productsReducer = (state = {products : []}, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return{
            product: action.payload
            }

        default:
            return state

    }
}