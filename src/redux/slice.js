import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
};

export const slice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addContactAction: (state, { payload }) => {
      state.contacts = [
        ...state.contacts,
        { ...payload, addresses: payload.addresses.map((addr) => addr.value) },
      ];
    },
    deleteContactAction: (state, { payload }) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== payload,
      );
    },
  },
});

export const { addContactAction, deleteContactAction } = slice.actions;

export default slice.reducer;
