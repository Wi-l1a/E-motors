import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { allAPIs } from './../API/index';

export const getAllCategories = createAsyncThunk(
    'motors/getAllCategories',
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const res = await allAPIs.getCategories()
            if (res.status !== 200) {
                throw new Error('Server Error, can\'t resolve categories')
            }
            dispatch(setCategoryName(res.data[0].name))
            return res.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)


export const getProductsAuto = createAsyncThunk(
    'motors/getProductsAuto',
    async (obj, { rejectWithValue, getState }) => {
        const id = getState()?.motors?.categoryId || ''
        try {
            const res = await allAPIs.getProducts(obj.stock, id)
            if (res.status !== 200) {
                throw new Error('Error server, can\'t get product auto')
            }
            return res.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const getDetailProductAuto = createAsyncThunk(
    'motors/getDetailProductAuto',
    async (id, { rejectWithValue }) => {
        try {
            const res = await allAPIs.detailProductAuto(id)
            if (res.status !== 200) {
                throw new Error('Error server, can\'t get product auto')
            }
            return res.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
export const getAllCategoriesParts = createAsyncThunk(
    'motors/getAllCategoriesParts',
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const res = await allAPIs.getCategoriesParts()
            if (res.status !== 200) {
                throw new Error('Server Error, can\'t resolve categories')
            }
            dispatch(setPartsName(res.data[0].name))
            return res.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
export const getProductsParts = createAsyncThunk(
    'motors/getProductsParts',
    async (obj, { rejectWithValue, getState }) => {

        const id = getState()?.motors?.partsCategoriesId || ''
        try {
            const res = await allAPIs.getProductsParts(obj.partsStock, id)
            if (res.status !== 200) {
                throw new Error('Error server, can\'t get product auto')
            }
            return res.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const getDetailProductParts = createAsyncThunk(
    'motors/getDetailProductParts',
    async (id, { rejectWithValue }) => {
        try {
            const res = await allAPIs.detailProductsParts(id)
            if (res.status !== 200) {
                throw new Error('Error server, can\'t get product auto')
            }
            return res.data

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const getAutoByName = createAsyncThunk(
    'motors/getAutoByName',
    async (name, { rejectWithValue }) => {
        try {
            const res = await allAPIs.getProductAutoByName(name)
            if (res.status !== 200) {
                throw new Error('Server Error, this `Name` not found')
            }
            return res.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const getPartsByName = createAsyncThunk(
    'motors/getPartsByName',
    async (name, { rejectWithValue }) => {
        try {
            const res = await allAPIs.getPartsByName(name)
            if (res.status !== 200) {
                throw new Error('Server Error, this `Name` not found')
            }
            return res.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)



const motorsSlice = createSlice({
    name: 'motors',
    initialState: {
        isLoading: false,
        error: null,
        categoryName: null,
        liName: 'all',
        partsName: null,
        partsCategories: [],
        partsCategoriesId: undefined,
        partsLiName: 'all',
        categories: [],
        categoryId: undefined,
        productAuto: [],
        productParts: [],
        stock: '',
        partsStock: '',
        detailAuto: {},
        detailParts: {},
    },
    reducers: {
        setCategoryName(state, action) {
            state.categoryName = action.payload
        },
        setLiName(state, action) {
            state.liName = action.payload
        },
        setPartsLiName(state, action) {
            state.partsLiName = action.payload
        },
        setCategoryId(state, action) {
            state.categoryId = action.payload.id
        },
        setStock(state, action) {
            state.stock = action.payload.inStock
        },
        setPartsName(state, action) {
            state.partsName = action.payload
        },
        setPartsCategoriesId(state, action) {
            state.partsCategoriesId = action.payload.id
        },
        setPartsStock(state, action) {
            state.partsStock = action.payload.inStock
        }
    },
    extraReducers: {
        [getAllCategories.pending]: (state) => {
            state.isLoading = true
            state.error = null
        },
        [getAllCategories.fulfilled]: (state, action) => {
            state.isLoading = false
            state.categories = action.payload
            state.categoryId = action.payload[0].id
        },
        [getAllCategories.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        [getProductsAuto.pending]: (state) => {
            state.isLoading = true
            state.error = null
        },
        [getProductsAuto.fulfilled]: (state, action) => {
            state.isLoading = false
            state.productAuto = action.payload
        },
        [getProductsAuto.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        [getDetailProductAuto.pending]: (state) => {
            state.isLoading = true
            state.error = null
        },
        [getDetailProductAuto.fulfilled]: (state, action) => {
            state.isLoading = false
            state.detailAuto = action.payload
        },
        [getDetailProductAuto.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        [getAllCategoriesParts.pending]: (state) => {
            state.isLoading = true
            state.error = null
        },
        [getAllCategoriesParts.fulfilled]: (state, action) => {
            state.isLoading = false
            state.partsCategories = action.payload
            state.partsCategoriesId = action.payload[0].id

        },
        [getAllCategoriesParts.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        [getProductsParts.pending]: (state) => {
            state.isLoading = true
            state.error = null
        },
        [getProductsParts.fulfilled]: (state, action) => {
            state.isLoading = false
            state.productParts = action.payload

        },
        [getProductsParts.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        [getDetailProductParts.pending]: (state) => {
            state.isLoading = true
            state.error = null
        },
        [getDetailProductParts.fulfilled]: (state, action) => {
            state.isLoading = false
            state.detailParts = action.payload
        },
        [getDetailProductParts.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        [getAutoByName.pending]: (state) => {
            state.isLoading = true
            state.error = null
        },
        [getAutoByName.fulfilled]: (state, action) => {
            state.isLoading = false
            state.productAuto = action.payload
        },
        [getAutoByName.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        [getPartsByName.pending]: (state) => {
            state.isLoading = true
            state.error = null
        },
        [getPartsByName.fulfilled]: (state, action) => {
            state.isLoading = false
            state.productParts = action.payload
        },
        [getPartsByName.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
})


export const { setCategoryName, setLiName, setPartsName, setPartsLiName, setCategoryId, setStock, setPartsCategoriesId, setPartsStock } = motorsSlice.actions

export default motorsSlice.reducer;