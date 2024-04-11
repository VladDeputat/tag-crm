import React, { useReducer, useState } from "react";
import { useSelector } from "react-redux";
import { getFieldErrors } from "../../helpers";
import { allEmailsSelector } from "../../redux/selectors";
import s from "./index.module.scss";
import ErrorMessage from "../ErrorMessage";
import AddressSelect from "../AddressSelect";
import Btn from "../Button";

const FormComponent = ({ fields, legend, onSubmit, children }) => {
  const initialState = fields.reduce((acc, field) => {
    acc[field] = field === "addresses" ? [] : "";
    return acc;
  }, {});

  const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGE":
        return { ...state, [action.fieldName]: action.value };
      case "CLEAR":
        return { ...initialState };
      default:
        return state;
    }
  };

  const [state, dispatchReducer] = useReducer(reducer, initialState);
  const allEmails = useSelector(allEmailsSelector);

  const [errors, setErrors] = useState(
    fields.reduce((acc, field) => {
      acc[`${field}Error`] = "";
      return acc;
    }, {}),
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatchReducer({ type: "CHANGE", fieldName: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = getFieldErrors(state, allEmails);
    setErrors(errors);
    if (Object.values(errors).join("") === "") {
      onSubmit(state);
      handleClear();
    }
  };

  function handleClear() {
    dispatchReducer({ type: "CLEAR" });
    setErrors({});
  }

  return (
    <form onSubmit={handleSubmit} className={s.container}>
      <fieldset className={s.form}>
        <legend className={s.heading}>{legend}</legend>
        {fields.map((field) => (
          <div key={field} className={s.fieldWrapper}>
            <label htmlFor={field}>
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            {field === "addresses" ? (
              <AddressSelect
                state={state}
                dispatchReducer={dispatchReducer}
                className={s.select}
              />
            ) : (
              <input
                type={field === "email" ? "email" : "text"}
                id={field}
                name={field}
                placeholder={`Enter ${field}`}
                value={state[field]}
                onChange={handleChange}
                className={s.field}
                autoComplete="new-password"
              />
            )}
            <ErrorMessage message={errors[`${field}Error`]} />
          </div>
        ))}
        <div className={s.btnBox}>
          <Btn type="reset" onClick={handleClear}>
            Clear
          </Btn>
          {children}
        </div>
      </fieldset>
    </form>
  );
};

export default FormComponent;
