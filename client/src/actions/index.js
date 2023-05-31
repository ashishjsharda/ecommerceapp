export const getProducts = () => async dispatch => {
    const response = await fetch("/api/products");
    const data = await response.json();

    dispatch({
        type: "GET_PRODUCTS",
        payload: data
    });
};
