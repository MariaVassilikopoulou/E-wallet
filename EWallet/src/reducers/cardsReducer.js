import {createSlice} from '@reduxjs/toolkit';

const initialState= {
    cardNumber:'', cardHolderName:'', validDates:'', cvv:'', vendor:''
};
const cardsSlice= createSlice({
    name:'cards',
    initialState,
    reducers: {
        updateCardDetails(state,action){

            const { cardNumber, cardHolderName, validdates , cvv, vendor}= action.payload;
           state.cardNumber= cardNumber;
           state.cardHolderName= cardHolderName;
           state.validDates= validdates;
           state.cvv= cvv;
           state.vendor= vendor;
        
        }
        }
});
export const {updateCardDetails}= cardsSlice.actions;
export default cardsSlice.reducer;