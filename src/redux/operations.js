import { addContactAction, deleteContactAction } from "./slice";

export const addTask = (data) => async (dispatch) => {
  try {
    dispatch(addContactAction(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    dispatch(deleteContactAction(id));
  } catch (error) {
    console.log(error.message);
  }
};
