import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  history: [],
};

const bankSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    deposit: (state, action) => {
      state.balance += action.payload;
    },
    withdrawal: (state, action) => {
      state.balance -= action.payload;
    },
    transfer: (state, action) => {
      state.balance -= action.payload.amount;
      state.history.push({
        type: `transfer / ${action.payload.name}`,
        amount: action.payload.amount,
      });
    },
  },
});

export const { deposit, withdrawal, transfer } = bankSlice.actions;

export default bankSlice.reducer;
