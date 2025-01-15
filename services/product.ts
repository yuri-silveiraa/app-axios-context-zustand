import { data } from '../data'

export const getAllProducts = () => {
    return data.products
}

export const getProductById = (id: number) => {
    return data.products.find(p => p.id === id)
}

export const getProductByCategory = (idCategory: number) => {
    return data.products.filter(p => p.idCategory === idCategory)
}