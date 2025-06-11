// client/src/store/orderSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [
    {
      id: "A001",
      customer: "Maria Schulz",
      totalPrice: 89.99,
      date: "2025-06-08",
      status: "Bezahlt",
    },
    {
      id: "A002",
      customer: "Max Meier",
      totalPrice: 129.5,
      date: "2025-06-07",
      status: "Ausstehend",
    },
    {
      id: "A003",
      customer: "Laura Klein",
      totalPrice: 54.0,
      date: "2025-06-06",
      status: "Bezahlt",
    },
  ],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
});

export default orderSlice.reducer;
