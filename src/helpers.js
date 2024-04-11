export const getFieldErrors = (fieldsData, allEmails) => {
  const errors = {};

  Object.entries(fieldsData).forEach(([fieldName, value]) => {
    switch (fieldName) {
      case "addresses":
        errors[`${fieldName}Error`] = value.length <= 0 ? "Required field" : "";
        break;
      case "name":
        errors[`${fieldName}Error`] =
          value === ""
            ? "Please enter name"
            : !/^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$/.test(value)
            ? "Name is not valid"
            : "";
        break;
      case "phone":
        errors[`${fieldName}Error`] =
          value === ""
            ? "Please enter phone"
            : !/^\+?\(?([0-9]{3})\)?[-. ]?([0-9]{2,})[-. ]?([0-9]{4})$/.test(
                value,
              )
            ? "Phone is not valid"
            : "";
        break;
      case "email":
        errors[`${fieldName}Error`] =
          value === ""
            ? "Please enter email"
            : allEmails.includes(value)
            ? "Email is already in use"
            : !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                value,
              )
            ? "Email is not valid"
            : "";
        break;
      default:
        errors[`${fieldName}Error`] = "";
        break;
    }
  });

  return errors;
};
