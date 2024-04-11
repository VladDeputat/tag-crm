import React from "react";
import Select from "react-select";
import { addressOptions } from "../../constants";

const AddressSelect = ({ state, dispatchReducer, className }) => {
  return (
    <Select
      closeMenuOnSelect={false}
      placeholder="Choose address"
      isMulti
      options={addressOptions}
      value={state.addresses}
      onChange={(selectedOptions) =>
        dispatchReducer({
          type: "CHANGE",
          fieldName: "addresses",
          value: selectedOptions,
        })
      }
      className={className}
    />
  );
};

export default AddressSelect;
