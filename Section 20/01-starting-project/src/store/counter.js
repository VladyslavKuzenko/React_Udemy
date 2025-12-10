import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showContainer: true }

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) { state.counter-- },
        increase(state, action) { state.counter += action.payload },
        toggle(state) { state.showContainer = !state.showContainer },
    }
});

export const counterActions = counterSlice.actions
export const counterReducer = counterSlice.reducer