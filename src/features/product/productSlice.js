import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllproducts,fetchproductsByFilters,fetchBrands,fetchCategories, fetchProductById} from './productAPI';

const initialState = {
  products: [],
  brands: [],
  categories: [],
  status: 'idle',
  selectedProduct:null
  // totalItems:0
};
export const fetchAllproductsAsync = createAsyncThunk(
  'product/fetchAllproducts',
  async () => {
    const response = await fetchAllproducts();
    return response.data;
  }
);
export const fetchProductByIdAsync = createAsyncThunk(
  'product/fetchProductById',
  async (id) => {
    const response = await fetchProductById(id);
    return response.data;
  }
);
export const fetchBrandsAsync = createAsyncThunk(
  'product/fetchBrands',
  async () => {
    const response = await fetchBrands();
    return response.data;
  }
);
export const fetchCategoriesAsync = createAsyncThunk(
  'product/fetchCategories',
  async () => {
    const response = await fetchCategories();
    return response.data;
  }
);
export const fetchproductsByFiltersAsync = createAsyncThunk(
  'product/fetchproductsByFilters',
  async ({filter,sort,pagination}) => {
    // console.log("first filter",filter)
    const response = await fetchproductsByFilters(filter,sort,pagination);
    // console.log(response.data);
    return response.data;
  }
);

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllproductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllproductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
      .addCase(fetchproductsByFiltersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchproductsByFiltersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
      .addCase(fetchBrandsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBrandsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.brands = action.payload;
      })
      .addCase(fetchCategoriesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.categories = action.payload;
      })
      .addCase(fetchProductByIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.selectedProduct = action.payload;
      });
  },
});
export const { increment, decrement, incrementByAmount } = ProductSlice.actions;
export const selectAllProducts = (state) => state.product.products;
export const selectBrands = (state) => state.product.brands;
export const selectCategories = (state) => state.product.categories;
export const selectedProductById = (state) => state.product.selectedProduct;
// export const selectTotalItems = (state) => state.product.totalItems;




export default ProductSlice.reducer;
