import {createSlice} from '@reduxjs/toolkit';

const initialCard = {
  cardNumber: "XXXX XXXX XXXX XXXX ",
  cardHolderName: "",
  validDates: "XXXX XXXX",
  cvv: "InitialCVV",
  vendor: "InitialVendor"
};

const initialState={
  cards: [initialCard],
  activeCardNumber: ""
};
export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard(state, action) {
      state.cards.push(action.payload);
      console.log("Adding card:", action.payload);
console.log("Updated state:", state);
    },
    updateNewCard(state, action) {
      const { cardNumber, updatedData } = action.payload;
      const cardIndex = state.cards.findIndex(card => card.cardNumber === cardNumber);
      if (cardIndex !== -1) {
        state.cards[cardIndex] = { ...state.cards[cardIndex], ...updatedData };
        if (state.activeCardNumber === cardNumber) {
          state.activeCardNumber = "";}
      }},
    setActiveCard(state, action) {
      state.activeCardNumber = action.payload;
    },
  },
});

    export const { addCard, updateNewCard, setActiveCard } = cardsSlice.actions;

    export default cardsSlice.reducer;