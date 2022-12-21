import { categorias, productos } from "../../data/data"
import { setCategories, setProducts } from "./shopSlice"


export const startLoadingProducts = () => {
    return async(dispatch,getState) => {

        const resp = await productos
        dispatch(setProducts(resp))

    }
}

export const startLoadingCategories = () => {
    return async(dispatch,getState) => {

        const resp = await categorias
        dispatch(setCategories(resp))

    }
}