import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNews = createAsyncThunk("fetchNews", async (category) => {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=00fd90c03681492c988e4a7f60f8e4a7`);
    return { category, data: response.data }; 
});

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        isLoading: {},
        data: {},
        error: {},
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state, action) => {
                state.isLoading[action.meta.arg] = true; 
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.isLoading[action.payload.category] = false; 
                state.data[action.payload.category] = action.payload.data; 
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.isLoading[action.meta.arg] = false; 
                state.error[action.meta.arg] = true; 
            });
    },
});

const { reducer: newsReducer } = newsSlice;
export default newsReducer;