import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { allAPIs } from './../API/index';

export const getAllInfo = createAsyncThunk(
    'info/getAllInfo',
    async () => {
        const res = await allAPIs.getInfo()
        const data = res.data
        return data
    }
)

const infoSlice = createSlice({
    name: 'info',
    initialState: {
        info: {}
    },
    extraReducers: {
        [getAllInfo.fulfilled]: (state, action) => {
            state.info = action.payload
        }
    }
})


export default infoSlice.reducer