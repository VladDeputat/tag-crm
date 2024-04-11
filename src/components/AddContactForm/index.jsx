import React from "react";
import Btn from "../Button";
import { addTask } from "../../redux/operations";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import FormComponent from "../FormComponent";

const AddContactForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    dispatch(addTask({ ...formData, id: nanoid() }));
  };

  return (
    <FormComponent
      fields={["addresses", "name", "phone", "email"]}
      legend={"Add Contact"}
      onSubmit={onSubmit}
    >
      <Btn type="submit" isPrimary>
        Create
      </Btn>
    </FormComponent>
  );
};

export default AddContactForm;
