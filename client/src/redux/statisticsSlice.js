import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchStatistics = createAsyncThunk(
  'statistics/fetchStatistics',
  async () => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const customers = JSON.parse(localStorage.getItem('users')) || [];

    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);

    return {
      revenue: {
        total: orders.reduce((sum, order) => sum + order.total, 0),
        lastMonth: orders
          .filter(order => new Date(order.date) >= lastMonth)
          .reduce((sum, order) => sum + order.total, 0)
      },
      orders: {
        total: orders.length,
        lastMonth: orders.filter(order => new Date(order.date) >= lastMonth).length,
        pending: orders.filter(order => order.status === 'pending').length
      },
      products: {
        total: products.length,
        lowStock: products.filter(p => p.stock <= 5).length
      },
      customers: {
        total: customers.length,
        new: customers.filter(c => new Date(c.createdAt) >= lastMonth).length
      }
    };
  }
);

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState: {
    data: null,
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStatistics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStatistics.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchStatistics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default statisticsSlice.reducer;