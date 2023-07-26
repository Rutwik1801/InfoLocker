// import { configureStore } from '@reduxjs/toolkit';
// import reducer from './loginSlice';
// const store = configureStore({ reducer: reducer });

// export default store;


import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './loginSlice';

const store = configureStore({
    reducer: {
        loginData: loginSlice.reducer
    }
})

export default store;