import {createSlice} from '@reduxjs/toolkit';

const initialState= {
    cardNumber:'', cardHolderName:'', validDates:'', cvv:'', vendor:''
};
const cardsSlice= createSlice({
    name:'cards',
    initialState,
    reducers: {
        updateCardDetails(state,action){
            console.log("State the Previous", state);
            console.log("action the Payload", action.payload);
            const { cardNumber, cardHolderName, validDates , cvv, vendor}= action.payload;
            return {
                ...state,
                cardNumber,
                cardHolderName,
                validDates,
                cvv,
                vendor,
        };
        },
    },
});
export const {updateCardDetails}= cardsSlice.actions;
export default cardsSlice.reducer;