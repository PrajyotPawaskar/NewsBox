import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './slice/fetchDataSlice'; 

const store = configureStore({
    reducer: {
        news: newsReducer,
    },
});

export {store};
