import { createSlice,current } from "@reduxjs/toolkit";
const data = {
    data:{
        flag:false,
        alertMessage:""
    }
}
const alertSlice = createSlice({
    name: "Alert",
    initialState: data,
    reducers: {
        fireTrue: (state, action) => {
             state.data=action.payload
            // state.flag=true
            // state.alertMessage=action.payload.alertMessage
            // console.log(current(state))
            // return state;
            // return {
                // flag:true,
                // alertMessage:action.payload.alertMessage
            // }
        },
        fireFalse: (state, action) => {
 
            state.flag=false
            state.alertMessage=""
        }
    }
});
// export default loginSlice.reducer;
// export const { login, logout } = loginSlice.actions;


export const alertSliceActions = alertSlice.actions;
export default alertSlice;