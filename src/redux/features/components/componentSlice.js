import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    components: {
        processor: null,
        motherboard: null,
        ram: null,
        powerSupply: null,
        storageDevice: null,
        monitor: null,
    }
}

export const componentSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        processor: (state, action) => {
            state.components.processor = action.payload
        },
        motherboard: (state, action) => {
            state.components.motherboard = action.payload
        },
        ram: (state, action) => {
            state.components.ram = action.payload
        },
        powerSupplie: (state, action) => {
            state.components.powerSupply = action.payload
        },
        storageDevice: (state, action) => {
            state.components.storageDevice = action.payload
        },
        monitor: (state, action) => {
            state.components.monitor = action.payload
        },
    },
})

export const { processor, motherboard, ram, powerSupplie, storageDevice, monitor } = componentSlice.actions

export default componentSlice.reducer