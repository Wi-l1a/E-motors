import axios from "axios";

const instanse = axios.create({
    baseURL: 'http://176.126.166.199:8000/api/',
    headers: {
        'Content-Type': 'application/json',
    },
})

export const allAPIs = {
    getProducts(stock = '', id = '') {
        return instanse.get(`categories/product_auto/?in_stock=${stock}&category=${id}`)
    },
    getCategories() {
        return instanse.get('categories/category_auto/')
    },
    getInfo() {
        return instanse.get('company_info/company_info/')
    },
    detailProductAuto(id) {
        return instanse.get(`categories/product_auto/${id}/`)
    },
    getCategoriesParts() {
        return instanse.get(`categories/category/`)
    },
    getProductsParts(stock, id) {
        return instanse.get(`categories/products/?in_stock=${stock}&category=${id}`)
    },
    detailProductsParts(id) {
        return instanse.get(`categories/products/${id}`)
    },
    getProductAutoByName(name = '') {
        return instanse.get(`categories/product_auto/?search=${name}`)
    },
    getPartsByName(name = '') {
        return instanse.get(`categories/products/?search=${name}`)
    }
}