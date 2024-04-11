import { createSelector } from "@reduxjs/toolkit";

export const allContactsSelector = (state) => state.data.contacts;

export const allEmailsSelector = createSelector(
  allContactsSelector,
  (contacts) => {
    return contacts.map((c) => c.email);
  },
);
